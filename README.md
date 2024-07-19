# nextjs-stephen

Next JS: The Complete Developer's Guide by Stephen Grider

## Folder structures

- 01-corp
  - Section 1: Get Started Here!
- 02-snippets
  - Section 2: Changing Data with Mutations
  - Section 3: Streaming Content with React Server Components

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

### 19. Adding a Create Page

#### Creating Records

1. Create a prisma client to access our database
2. Create a form in SnippetCreatePage
3. Define a Server Action. This is a function that will be called when the form is submitted
4. In the Server Action, validate the users input than create a new snippet
5. Redirect the user to the Home Page, which lists all the snippets

## Section 3: Streaming Content with React Server Components

### 24. Server Components vs Client Components

#### Server Components

- Default component in next js is basically server componente
- Can not use any kind of hook
- Can not assign any event handlers

#### Client Components

- Created by adding 'use client' at the very top of the file
- Have all the usual rules of components
- Can use hooks, event handlers, etc
- Can not directly show a Server Component (there is one exception)

### 25. Fetching Data with Server Components

Fethcing Data

1. Create a server component - a component that doesn't have 'use client' at the top
2. Mark the component as 'async'
3. Make an HTTP requests or directly access a database to get your data
4. Render your data directly, or pass it to a child component

</details>
