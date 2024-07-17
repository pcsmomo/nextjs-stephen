# nextjs-stephen

Next JS: The Complete Developer's Guide by Stephen Grider

## Folder structures

- 01-corp
  - section 1

# Details

<details open> 
  <summary>Click to Contract/Expend</summary>

## Section 1: Get Started Here!

### 2. Project Overview

```sh
npx create-next-app@latest
# ✔ What is your project named? … 01-corp
# ✔ Would you like to use TypeScript? … Yes
# ✔ Would you like to use ESLint? … Yes
# ✔ Would you like to use Tailwind CSS? … Yes
# ✔ Would you like to use `src/` directory? … Yes
# ✔ Would you like to use App Router? (recommended) … Yes
# ✔ Would you like to customize the default import alias (@/*)? › No

# Initializing project with template: app-tw


# Installing dependencies:
# - react
# - react-dom
# - next

# Installing devDependencies:
# - typescript
# - @types/node
# - @types/react
# - @types/react-dom
# - autoprefixer
# - postcss
# - tailwindcss
# - eslint
# - eslint-config-next
```

```sh
cd 01-corp
```

### 3. File-Based Routing

```sh
# 01-corp
npm run dev
```

`page.tsx` is in controls the route

- src
  - app
    - performance
      - page.tsx
    - page.tsx

### 14. Production Deployment with Vercel

```sh
# under 01-copr folder
./01-corp % npx vercel
Vercel CLI 34.3.1
? Set up and deploy “~/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/01-corp”? yes
? Which scope do you want to deploy to? Noah's projects
? Link to existing project? no
? What’s your project’s name? 01-corp
? In which directory is your code located? ./
Local settings detected in vercel.json:
Auto-detected Project Settings (Next.js):
- Build Command: next build
- Development Command: next dev --port $PORT
- Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
- Output Directory: Next.js default
? Want to modify these settings? no
🔗  Linked to noahs-projects-b7634d53/01-corp (created .vercel)
🔍  Inspect: https://vercel.com/noahs-projects-b7634d53/01-corp/AyWzz27pbAscWKdswG3ZU5Rfo6Qp [2s]
✅  Production: https://01-corp-jcvuqj6ll-noahs-projects-b7634d53.vercel.app [2s]
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
💡  To change the domain or build command, go to https://vercel.com/noahs-projects-b7634d53/01-corp/settings
```

## Section 2: Changing Data with Mutations

### 17. App Overview

```sh
% npx create-next-app@latest
Need to install the following packages:
create-next-app@14.2.5
Ok to proceed? (y)

✔ What is your project named? … 02-snippets
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
```

### 18. Project Setup

```sh
./02-snippets % npm install prisma
./02-snippets % npx prisma init --datasource-provider sqlite
```

#### migrate prisma (after adding model to `schema.prisma`)

```sh
./02-snippets % npx prisma migrate dev

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": SQLite database "dev.db" at "file:./dev.db"

SQLite database dev.db created at file:./dev.db

✔ Enter a name for the new migration: … add snippets
Applying migration `20240712234646_add_snippets`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20240712234646_add_snippets/
    └─ migration.sql

Your database is now in sync with your schema.

Running generate... (Use --skip-generate to skip the generators)

added 1 package, and audited 370 packages in 6s

137 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

✔ Generated Prisma Client (v5.16.2) to ./node_modules/@prisma/client in 34ms
```

</details>
