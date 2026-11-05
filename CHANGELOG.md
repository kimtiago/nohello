# Changelog

All notable changes to nohello. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow
[Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-11-05

First public version.

### Added

- A personal “no hello” page, made to be sent on WhatsApp and opened on a phone. The page is itself a chat conversation: it
  shows the same question asked the wrong way and the right way, and ends with a formula for the next message.
- Six languages: English, Brazilian Portuguese, Spanish, French, German and Italian, fixed by `NEXT_PUBLIC_LANGUAGE` or
  following each visitor's browser.
- Name, photo and GIFs configurable through environment variables, with generic fallbacks.
- A link preview that sparks curiosity without giving away the subject, and a request for search engines not to index the page.
- Publishing on Vercel, with a “Deploy with Vercel” button, in Docker, with the `kimtiago/nohello` image for `amd64` and `arm64`,
  or on any static host.
- Accessibility: support for reduced motion and screen readers, and a conversation that still shows if JavaScript is off,
  fails or is slow.
- Vercel Web Analytics and Speed Insights, only in Vercel builds.

[1.0.0]: https://github.com/kimtiago/nohello/releases/tag/v1.0.0
