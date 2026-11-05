# The page is a static site: Node only builds it, and the final image is just nginx serving the files.
# The files are the same on every platform, so they're built once, on the machine running the build.
FROM --platform=$BUILDPLATFORM node:24-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
# --ignore-scripts: the only install script is Husky's, for Git hooks
RUN npm ci --ignore-scripts

COPY . .

# Built without any personal settings: docker/apply-config.sh applies them when the container starts.
# The URL is a placeholder it replaces, since link previews need absolute addresses.
ENV NEXT_PUBLIC_SITE_URL=https://nohello.invalid
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build
RUN node docker/preview-texts.mjs > preview-texts.sh

# Runs as a non-root user and listens on 8080
FROM nginxinc/nginx-unprivileged:stable-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=101:101 --from=build /app/out /usr/share/nginx/html
COPY --from=build /app/preview-texts.sh /usr/share/nginx/preview-texts.sh
COPY docker/apply-config.sh /docker-entrypoint.d/40-apply-config.sh

USER root
RUN chmod 755 /docker-entrypoint.d/40-apply-config.sh \
    && mkdir /usr/share/nginx/html-templates \
    && cp /usr/share/nginx/html/*.html /usr/share/nginx/html-templates/ \
    && chown -R 101:101 /usr/share/nginx/html
USER 101

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s CMD wget -q --spider http://127.0.0.1:8080/ || exit 1
