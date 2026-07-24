# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [v1.0.0] - 2026-07-24

### Overview

Initial public production release.

This release establishes the technical foundation of the Arsip Dapur 26 platform, including the project architecture, QR redirect system, deployment pipeline, and production environment.

### Added

#### Project Foundation

- Initialized Next.js 16 project.
- Configured TypeScript.
- Configured Tailwind CSS v4.
- Configured ESLint.
- Configured Prettier.
- Implemented App Router.
- Established scalable project structure.

#### UI & Branding

- Added Logo component.
- Added Brand Icon component.
- Added reusable Button component.
- Added favicon.
- Added Apple Touch Icon.
- Added Web Manifest.

#### Routing

- Added Root Layout.
- Added custom 404 page.

#### QR Redirect System

- Added dynamic QR route (`/qr/[slug]`).
- Added redirect service.
- Added redirect data source.
- Added QR type definitions.
- Added automatic redirect handling.
- Added inactive product handling.
- Added Not Found handling.

#### Infrastructure

- Connected GitHub repository.
- Configured Git workflow.
- Connected Vercel deployment.
- Enabled automatic deployment.
- Connected Cloudflare DNS.
- Configured custom domain.
- Enabled HTTPS with SSL certificate.

### Quality

Verified:

- `npm install`
- `npm run lint`
- `npm run build`

Production deployment completed successfully.

### Environment

| Component  | Technology       |
| ---------- | ---------------- |
| Framework  | Next.js 16       |
| Language   | TypeScript       |
| Styling    | Tailwind CSS v4  |
| Repository | GitHub           |
| Hosting    | Vercel           |
| DNS        | Cloudflare       |
| Domain     | arsipdapur26.com |

### Milestone

- First production deployment completed.
- Public website is available at **https://arsipdapur26.com**.
- QR redirect infrastructure is ready for future product integration.
