#!/bin/sh
# Runs every time the container starts: applies the environment variables to the prebuilt pages, always from the untouched
# copies, so changing a variable and recreating or restarting the container is enough.
set -eu

html_dir=/usr/share/nginx/html
templates_dir=/usr/share/nginx/html-templates
placeholder_url=https://nohello.invalid

. /usr/share/nginx/preview-texts.sh

read_var() { printenv "$1" 2>/dev/null | tr -d '\r\n' | awk '{ $1 = $1; print }'; }
html_escape() { printf '%s' "$1" | sed -e 's/&/\&amp;/g' -e 's/"/\&quot;/g' -e "s/'/\&#39;/g" -e 's/</\&lt;/g' -e 's/>/\&gt;/g'; }
js_escape() { printf '%s' "$1" | sed -e 's/\\/\\\\/g' -e 's/"/\\"/g' -e 's/</\\u003c/g'; }
sed_escape() { printf '%s' "$1" | sed -e 's/[\\&|]/\\&/g'; }

# Same rule as findLocale in src/i18n/match-locale.ts: exact, then the base language itself, then any with the same base
resolve_locale() {
    wanted=$(printf '%s' "$1" | tr '[:upper:]' '[:lower:]')
    [ -n "$wanted" ] || return 0
    for locale in $LOCALES; do
        [ "$(printf '%s' "$locale" | tr '[:upper:]' '[:lower:]')" = "$wanted" ] && { printf '%s' "$locale"; return 0; }
    done
    for locale in $LOCALES; do
        [ "$(printf '%s' "$locale" | tr '[:upper:]' '[:lower:]')" = "${wanted%%-*}" ] && { printf '%s' "$locale"; return 0; }
    done
    for locale in $LOCALES; do
        [ "$(printf '%s' "${locale%%-*}" | tr '[:upper:]' '[:lower:]')" = "${wanted%%-*}" ] && { printf '%s' "$locale"; return 0; }
    done
    return 0
}

language=$(read_var NEXT_PUBLIC_LANGUAGE)
owner=$(read_var NEXT_PUBLIC_OWNER_NAME)
photo=$(read_var NEXT_PUBLIC_OWNER_PHOTO)
gif_1=$(read_var NEXT_PUBLIC_GIF_1_URL)
gif_2=$(read_var NEXT_PUBLIC_GIF_2_URL)
site_url=$(read_var NEXT_PUBLIC_SITE_URL)
site_url=${site_url%/}
site_url=${site_url:-http://localhost:8080}

# Link previews run no JavaScript, so their texts go straight into the HTML: English when the language comes from the browser
locale=$(resolve_locale "$language")
load_preview "${locale:-en}"
preview_owner=${owner:-$FALLBACK_NAME}
# The name people are called by: the first word, or the last in languages like Vietnamese (see givenNameLast)
if [ "$GIVEN_NAME_LAST" = 1 ]; then first_name=${preview_owner##* }; else first_name=${preview_owner%% *}; fi
first_name_for_sed=$(sed_escape "$first_name")
description=$(printf '%s' "$DESCRIPTION" | sed "s|@@FIRST_NAME@@|$first_name_for_sed|g")

meta_title=$(sed_escape "$(html_escape "$TITLE")")
meta_description=$(sed_escape "$(html_escape "$description")")
meta_owner=$(sed_escape "$(html_escape "$preview_owner")")
meta_url=$(sed_escape "$(html_escape "$site_url")")

config="window.__NOHELLO_CONFIG__={NEXT_PUBLIC_LANGUAGE:\"$(js_escape "$language")\",NEXT_PUBLIC_OWNER_NAME:\"$(js_escape "$owner")\",NEXT_PUBLIC_OWNER_PHOTO:\"$(js_escape "$photo")\",NEXT_PUBLIC_GIF_1_URL:\"$(js_escape "$gif_1")\",NEXT_PUBLIC_GIF_2_URL:\"$(js_escape "$gif_2")\"};document.documentElement.dataset.localePending=\"\";"
script=$(sed_escape "<script>$config</script>")

# <html lang> stays as built: the prerendered text is in English until the page's JavaScript applies the language and name
for template in "$templates_dir"/*.html; do
    sed \
        -e "s|<head>|<head>$script|" \
        -e "s|<title>[^<]*</title>|<title>$meta_title</title>|" \
        -e "s|<meta name=\"description\" content=\"[^\"]*\"|<meta name=\"description\" content=\"$meta_description\"|" \
        -e "s|<meta name=\"author\" content=\"[^\"]*\"|<meta name=\"author\" content=\"$meta_owner\"|" \
        -e "s|<meta property=\"og:title\" content=\"[^\"]*\"|<meta property=\"og:title\" content=\"$meta_title\"|" \
        -e "s|<meta property=\"og:description\" content=\"[^\"]*\"|<meta property=\"og:description\" content=\"$meta_description\"|" \
        -e "s|<meta property=\"og:locale\" content=\"[^\"]*\"|<meta property=\"og:locale\" content=\"$OG_LOCALE\"|" \
        -e "s|<meta name=\"twitter:title\" content=\"[^\"]*\"|<meta name=\"twitter:title\" content=\"$meta_title\"|" \
        -e "s|<meta name=\"twitter:description\" content=\"[^\"]*\"|<meta name=\"twitter:description\" content=\"$meta_description\"|" \
        -e "s|$placeholder_url|$meta_url|g" \
        "$template" > "$html_dir/$(basename "$template")"
done
