#!/bin/sh
# Starts the image with settings and checks that they reach the page: sh test/docker-smoke.sh IMAGE
set -eu

image=${1:?usage: docker-smoke.sh IMAGE}
name=nohello-smoke-$$

trap 'docker rm -f "$name" >/dev/null 2>&1 || true' EXIT

docker run -d --name "$name" \
    -e NEXT_PUBLIC_LANGUAGE=pt-BR \
    -e "NEXT_PUBLIC_OWNER_NAME=Ana D'Ávila" \
    -e NEXT_PUBLIC_SITE_URL=https://example.test \
    "$image" >/dev/null

attempts=0
until docker exec "$name" wget -q --spider http://127.0.0.1:8080/ 2>/dev/null; do
    attempts=$((attempts + 1))
    if [ "$attempts" -ge 20 ]; then
        docker logs "$name"
        echo "The site didn't start" >&2
        exit 1
    fi
    sleep 1
done

html=$(docker exec "$name" wget -q -O - http://127.0.0.1:8080/)

expect() {
    case "$html" in
        *"$1"*) ;;
        *)
            echo "Missing from the page: $1" >&2
            exit 1
            ;;
    esac
}

expect '<html lang="en"'
expect '<meta property="og:locale" content="pt_BR"'
expect '<meta property="og:url" content="https://example.test"'
expect '<meta name="robots" content="noindex, nofollow"'
expect '<meta name="description" content="Ana aqui!'
expect '<meta name="author" content="Ana D&#39;Ávila"'
expect 'NEXT_PUBLIC_OWNER_NAME:"Ana D'"'"'Ávila"'

case "$html" in
    *nohello.invalid*)
        echo "The placeholder address wasn't replaced" >&2
        exit 1
        ;;
esac

if docker exec "$name" wget -q --spider http://127.0.0.1:8080/does-not-exist 2>/dev/null; then
    echo "A missing page should answer 404" >&2
    exit 1
fi

[ "$(docker exec "$name" id -u)" = 101 ] || {
    echo "The container should not run as root" >&2
    exit 1
}

echo "Docker image OK"
