# DEPLOYMENT.md

# Arsip Dapur 26 - Deployment Guide

## Overview

Dokumen ini berisi seluruh prosedur deployment Frontend Arsip Dapur 26 menggunakan Vercel.

Deployment dilakukan secara otomatis melalui GitHub.

```
Developer
    │
    ▼
Git Commit
    │
    ▼
Git Push
    │
    ▼
GitHub
    │
    ▼
Vercel Build
    │
    ▼
Production
```

---

# Deployment Stack

| Service                       | Purpose                |
| ----------------------------- | ---------------------- |
| GitHub                        | Source Code Repository |
| Vercel                        | Frontend Hosting       |
| Cloudflare                    | DNS Management         |
| Railway _(future)_            | Backend API            |
| Railway PostgreSQL _(future)_ | Database               |

---

# Repository Structure

```

Arsip Dapur 26/
│
├── backend/
├── docs/
└── frontend/

```

Vercel hanya melakukan deployment terhadap folder:

```

frontend/

```

---

# Branch Strategy

| Branch     | Purpose               |
| ---------- | --------------------- |
| main       | Production            |
| develop    | Integration / Testing |
| feature/\* | Feature Development   |

Workflow:

```

feature/*
↓
develop
↓
Testing
↓
main
↓
Production

```

---

# Pre-Deployment Checklist

Sebelum melakukan deployment, pastikan seluruh checklist berikut telah terpenuhi.

## 1. Code Quality

```bash
npm run lint
```

Target:

```
0 Error
0 Warning
```

Catatan:

Warning pada `<img>` untuk Logo SVG merupakan pengecualian yang disengaja.

---

## 2. Production Build

```bash
npm run build
```

Pastikan muncul:

```
Compiled successfully
Finished TypeScript
Generating static pages
```

---

## 3. Git Status

```bash
git status
```

Pastikan:

```
working tree clean
```

---

## 4. Commit

Gunakan Conventional Commit.

Contoh:

```
feat(frontend): add QR redirect feature

fix(ui): improve button component

docs: update deployment guide

refactor(branding): simplify logo component
```

---

## 5. Push

```
git push origin develop
```

atau

```
git push origin main
```

sesuai workflow.

---

# First Deployment

## Login

Login menggunakan GitHub.

https://vercel.com

---

## Import Repository

Pilih repository:

```
Arsip Dapur 26
```

---

## Framework

Framework seharusnya otomatis:

```
Next.js
```

---

## Root Directory

Karena repository menggunakan monorepo sederhana, ubah menjadi:

```
frontend
```

---

## Build Command

Default:

```
next build
```

---

## Install Command

Default:

```
npm install
```

---

## Output

Biarkan default.

---

# Custom Domain

Tambahkan domain:

```
arsipdapur26.com
```

Setelah domain aktif, seluruh QR akan menggunakan:

```
https://arsipdapur26.com/qr/<slug>
```

Contoh:

```
https://arsipdapur26.com/qr/ayam-suwir-woku
```

---

# Deployment Verification

Pastikan seluruh halaman berikut bekerja.

## Home

```
/
```

Harus tampil tanpa error.

---

## QR

```
/qr/ayam-suwir-woku
```

Harus melakukan redirect.

---

## Invalid QR

```
/qr/testing
```

Harus menampilkan halaman 404.

---

## HTTPS

Pastikan browser menggunakan:

```
https://
```

---

# Rollback

Jika deployment bermasalah:

1. Buka Dashboard Vercel.
2. Pilih Project.
3. Deployment.
4. Pilih deployment sebelumnya.
5. Klik **Promote / Rollback** (nama tombol dapat berubah sesuai pembaruan Vercel).

Tidak perlu melakukan deploy ulang.

---

# Release Checklist

Sebelum membuat release:

- [ ] npm run lint
- [ ] npm run build
- [ ] Commit seluruh perubahan
- [ ] Push ke GitHub
- [ ] Deployment berhasil
- [ ] Test Home
- [ ] Test QR
- [ ] Test 404
- [ ] Test Mobile
- [ ] Test HTTPS

---

# Versioning

Menggunakan Semantic Versioning.

```
v1.0.0
```

QR Redirect MVP

```
v1.1.0
```

Landing Page

```
v1.2.0
```

Product Page

```
v1.3.0
```

Recipe Page

```
v2.0.0
```

Dashboard

---

# Future Infrastructure

```
                GitHub
                   │
        ┌──────────┴──────────┐
        │                     │
    Frontend              Backend
      Vercel              Railway
        │                     │
        └──────────┬──────────┘
                   │
              Cloudflare DNS
                   │
                   ▼
          arsipdapur26.com
```

---

# Maintenance

Setiap deployment wajib melalui:

```
npm run lint
```

↓

```
npm run build
```

↓

```
git push
```

↓

```
Vercel Deployment
```

↓

```
Production Verification
```

---

**Last Updated**

```
2026-07-23
```
