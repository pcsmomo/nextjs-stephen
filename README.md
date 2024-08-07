# nextjs-stephen

Next JS: The Complete Developer's Guide by Stephen Grider

## Folder structures

- 01-corp
  - Section 1: Get Started Here!
- 02-snippets
  - Section 2: Changing Data with Mutations
  - Section 3: Streaming Content with React Server Components
  - Section 4: Server Actions in Great Detail
  - Section 5: Server Forms with the UseFormState Hook
  - Section 6: Understanding Next's Caching System
- 03-auth
  - Section 7: Authentication with Next-Auth
  - Section 8: Using Data - Database Queries
  - Section 9: Caching with Request Memoization
  - Section 10: Implementing Search Functionality

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
- [Can not directly show a Server Component (there is one exception)](#36-server-actions-in-client-components)

### 25. Fetching Data with Server Components

Fethcing Data

1. Create a server component - a component that doesn't have 'use client' at the top
2. Mark the component as 'async'
3. Make an HTTP requests or directly access a database to get your data
4. Render your data directly, or pass it to a child component

### 28. Custom Not Found Pages

[Next js: File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions)

Special File Names in the 'app' Folder

| Name          | Purpose                                                                            |
| ------------- | ---------------------------------------------------------------------------------- |
| page.tsx      | Displays the primary content for the page                                          |
| layout.tsx    | Wraps up the currently displayed page. Use to show content common aross many pages |
| not-found.tsx | Displayed when we call the 'notFound' function                                     |
| loading.tsx   | Displayed when a server component is fetching some data                            |
| error.tsx     | Displayed when an error occurs in a server component (must be client component)    |
| route.tsx     | Defineds API endpoints                                                             |

### 34. Adding the Monaco Editor

```sh
02-snippets % npm install @monaco-editor/react
```

## Section 4: Server Actions in Great Detail

### 36. Server Actions in Client Components

- Option #1. Define the Server Action in a **Server Component** and pass it as props to the Client Component
- ✅ Option #2. Define the Server Action in a **separate file** and import it into the Client Component

### 38. Options for Calling Server Actions from Client Components

- Option #1. Use <form> action with `bind` function to customize the arguments

  ```js
  'use client';
  const editSnippetAction = actions.editSnippet.bind(null, code);
  return <form action={editSnippetAction}></form>;
  ```

  ```js
  'use server';
  export async function editSnippet(code: string, formData: FormData) {}
  ```

  - Form will work even if the user isn't running Javascript in their browser. (pointless in this case since our form requires JS for the monaco editor)
  - We will go with this Option #1 because many Next Js documents guide this approach

- Option #2. Not tied to a `form`
  ```js
  const handleClick = () => {
    React.startTransition(async () => {
      await actions.editSnippet(code);
    });
  };
  return <button onClick={handleClick}>Submit</button>;
  ```
  ```js
  'use server';
  export async function editSnippet(code: string) {}
  ```
  - No messing around with `bind` function
  - Closer to classic React behavior
  - (Stephen seems to prefer this approach though)

## Section 5: Server Forms with the UseFormState Hook

### 41. Understanding the UseFormState Hook

Error Handling with Server Actions

- Remember, a big point of forms is taht they can work without JS in the browser
- Right now, forms in our pages are sending info to a server action
- We need to somehow communicate info from a server action back to a page
- `React-dom` (not react) contains a hook called `useFormState` specifically for this

#### useFormState can be used in only Client Component

### 44. Gotchas Around Error Handling

`error.tsx` must be a client component

## Section 6: Understanding Next's Caching System

### 45. Super Unexpected Behavior

```sh
02-snippets % npm run build
02-snippets % npm run start
```

Add a new snippet but after refreshing the new data doesn't appeal

### 46. The Full Route Cache System

#### Caching

Next implements caching in several locations. Can lead to unexpected behavior

- Data Cache: Responses from requests made with `fetch` are stored and used across requests.
- Router Cache: `Soft` navigation between routes are cached in the browser and reused when a user revisits a page.
- Request Memoization: Make two or more `GET` requests with `fetch` during a user's request to your server? Only one `GET` is actually executed.
- Full Route Cache: **At build time**, Next decides if your route is **static** or **dynamic**. If it is static, the page is rendered and the result is stored. In production, users are given this pre-rendered result.

### 47. What Makes a Static or Dynamic Route

```sh
02-snippets % npm run build
Route (app)                              Size     First Load JS
┌ ○ /                                    175 B            94 kB
├ ○ /_not-found                          875 B            88 kB
├ ƒ /snippets/[id]                       175 B            94 kB
├ ƒ /snippets/[id]/edit                  4.69 kB        91.8 kB
└ ○ /snippets/new                        774 B          87.9 kB
+ First Load JS shared by all            87.1 kB
  ├ chunks/23-a783f3e56983d4ae.js        31.5 kB
  ├ chunks/fd9d1056-be48aeae6e94b8d1.js  53.7 kB
  └ other shared chunks (total)          1.88 kB
```

Not just a pretty bullet list.

These indicate what Next thinks about your different routes.

- `○`: Next thinks this route contains only static data. Next will render the page **NOW, ONE TIME** and give that version to everyone who visits your app
- `ƒ`: Next thinks this route contains dynamic data. Next will render the page **whenever someone visits it**

#### What makes a page "dynamic"?

- Calling a `dynamic function` or referencing a `dynamic variable` when your route renders
  - `cookies.set()`
  - `cookies.delete()`
  - `useSearchParams()`
  - `searchParams prop`
- Assigning specific `route segment config` options
  - `export const dynamic = 'force-dynamic`
  - `export const revalidate = 0`
- Calling `fetch` and opting out of caching of the response
  - `fetch('...', { next: { revalidate: 0 }})`
- Using a dynamic route
  - `/snippets/[id]/page.tsx`
  - `/snippets/[id]/edit/page.tsx`

### 48. When to Use Each Cache Control

There are several ways to control caching

- Time-Based: Every X seconds, ignore the cached response and fetch new data
  - `export const revalidate = 3; // every 3 seconds`
  - e.g: Front page of social media site
  - e.g: Data is changing all the time - only get the top posts every 10-30 seconds
- On-Demand: Forcibly purge a cached response
  - ```js
    import { revalidatePath } from 'next/cache';
    revalidatePath(`/snippets`);
    ```
  - e.g: we know when data changes and the user expects to see up-to-date data
- Disable Caching: Don't do any caching at all
  - `export const revalidate = 0`
  - `export const dynamic = 'force-dynamic`
  - e.g: we don't know when data changes or when we expect the data to be different with every request
  - And the user still expects to see up to date data

### 50. Enabling Caching with GenerateStaticParams

Even if `/snippets/[id]` is a dynamic page, we want to generate all detail pages on build time

### 51. Caching Dynamic Routes

after adding `GenerateStaticParams` we won't get affected by `await new Promise((resolve) => setTimeout(resolve, 1000));`

so the cached page will get displayed immediately.

However, if we change the code, we won't see the changed code as it only shows the static(=cached) page.

It will work fine after adding `` revalidatePath(`/snippets/${id}`); ``

> `npm run dev` doesn't use cache but it will be a little troublesome on the production with `npm run build` \
> because of complicated caching
> I should get used to Next js caching

## Section 7: Authentication with Next-Auth

### 53. Project Overview

`% npx create-next-app@latest`
✔ What is your project named? … 03-discuss

### 54. Critical Libraries in Our Project

- nextui
- next-auth / authjs
- Github OAuth
- Prisma -> SQLite

#### [Dependency versions](./03-discuss/README.md#dependencies)

### 55. NextUI Installation and Setup

```sh
# In order to avoid errors we need to install a specific version of nextui-org/react
# npm install --save-exact @nextui-org/react@2.2.9 framer-motion

# I'd use the latest one to see what error comes up
npm install @nextui-org/react framer-motion
```

### 56. Prisma Schema File

```sh
03-discuss % npm install prisma
03-discuss % npx prisma init --datasource-provider sqlite
```

copy prisma schema to ./prisma/schema.prisma

```sh
03-discuss % npx prisma migrate dev
# Environment variables loaded from .env
# Prisma schema loaded from prisma/schema.prisma
# Datasource "db": SQLite database "dev.db" at "file:./dev.db"

# SQLite database dev.db created at file:./dev.db

# ✔ Enter a name for the new migration: … init
# Applying migration `20240719192904_init`

# The following migration(s) have been created and applied from new schema changes:

# migrations/
#   └─ 20240719192904_init/
#     └─ migration.sql

# Your database is now in sync with your schema.

# Running generate... (Use --skip-generate to skip the generators)

# ✔ Generated Prisma Client (v5.17.0) to ./node_modules/@prisma/client in 71ms
```

### 58. OAuth Setup

Auth Setup

1. Create an OAuth app and generate a client_id and client_secret
   - github.com/settings/applications/new
2. add AUTH_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET to a `.env.local` file
3. install these packages
   - @auth/core@0.18.1 (latest is 0.34.1)
   - @auth/prisma-adapter@1.0.6 (latest is 2.4.1)
   - next-auth@5.0.0-beta.3 (latest is 5.0.0-beta.19)
4. Make a `auth.ts` file in the `src` folder. Set up NextAuth and the PrismaAdapter in there
5. Set up the `app/api/auth/[...nextauth]/route.ts` file to handle the requests between Githubs servers and ours
6. Make server actions to signin/signout the user (Optional, but highly recommended)

#### 1. Create an OAuth app in github

[Github -> Settings -> Developer Settings -> OAuth Apps](https://github.com/settings/applications/new)

- Application name: DEV Discuss
- Homepage URL: http://localhost:3000
- Authorization callback URL: http://localhost:3000/api/auth/callback/github

- Generate a new client secret

#### 2. Set the environment variables

- Create `.env.local` file and add GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET
- AUTH_SECRET is just arbitrary strings

#### 3. install dependencies

```sh
npm install --save-exact @auth/core@0.18.1 @auth/prisma-adapter@1.0.6 next-auth@5.0.0-beta.3
```

### 59. Next-Auth Setup

#### 4. `./src/auth.ts`

### 60. The Theory Behind OAuth

#### 5. Set up the `app/api/auth/[...nextauth]/route.ts`

![Auth workflow](./resources/auth.png)

### 61. Wrapping Auth in Server Actions

#### 6. Make server actions to signin/signout the user

### 62. Sign In, Sign out, and Checking Auth Status

SessionProvider is based on React Context, so we could use session in any component

```sh
import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react';
```

### 63. Upfront Design Process

Recommended Initial Design

1. Identify all the different routes you want your app to have + the data that each shows
2. Make `path helper` functions
3. Create your routing folder + page.tsx files based on step #1
4. Identify the places where data changes in your app
5. Make empty server actions for each of those
6. Add in comments on what paths you'll need to revalidate for each server action

#### 1. Identify all the different routes

| Page Name     | Path                         | Data shown                       |
| ------------- | ---------------------------- | -------------------------------- |
| Home page     | /                            | Many posts, many topics          |
| Topic Show    | /topic/[slug]                | A single and many posts          |
| Create a post | /topic/[slug]/posts/new      | A single topic and many posts    |
| Show a post   | /topic/[slug]/posts/[postId] | A single post and many ccomments |

### 64. Why Path Helpers?

for when path or folder name changes, we want to avoid visiting all the page to change the changed string

### 65. Path Helper Implementation

#### 2. Make `path helper` functions

### 72. More Caching Issues

```sh
03-discuss % npm run build
Route (app)                              Size     First Load JS
┌ ƒ /                                    147 B          87.4 kB
├ ƒ /_not-found                          879 B          88.2 kB
├ ƒ /api/auth/[...nextauth]              0 B                0 B
├ ƒ /topics/[slug]                       147 B          87.4 kB
├ ƒ /topics/[slug]/posts/[postId]        147 B          87.4 kB
└ ƒ /topics/[slug]/posts/new             147 B          87.4 kB
+ First Load JS shared by all            87.3 kB
  ├ chunks/23-61c3d3b8d2d8eee4.js        31.7 kB
  ├ chunks/fd9d1056-f518bdc60ef95b2d.js  53.7 kB
  └ other shared chunks (total)          1.93 kB


ƒ  (Dynamic)  server-rendered on demand
```

Even the root home page is dynamic, in spite of it is pure simple page expected to be static

Because of the header in layout is using cookies in `session`

### 78. Adding Form Validation with Zod

```sh
npm install zod
```

### 80. Fixing UseFormState Type Errors

```ts
// create-topic.ts
export async function createTopic(formData: FormData) {}

// topic-create-form.tsx
<form action={actions.ccreateTopic}>
```

⬇️

```ts
// create-topic.ts
export async function createTopic(formState:number, formData: FormData) {}

// topic-create-form.tsx
const [formState, action] = useFormState<number, FormData>(actions.createTopic, 5);
<form action={acction}>
```

## Section 8: Using Data - Database Queries

### 91. Passing Additional Args to a Server Action

```js
const action = actions.createPost.bind(null, slug);
```

But we use `useFormState` so

```js
const [formState, action] = useFormState(actions.createPost.bind(null, slug), {
  errors: {},
});
```

### 95. Considerations Around Where to Fetch Data

- Option #1. Page component gets data, passes it to child

  - Typing can be complicated

    ```ts
    {
      posts: Post &
        {
          topic: { slug: string },
          _count: { comments: number },
        };
    }
    ```

- Option #2. Child component fetches its own data
  - not reusable
- Option #1.5

## Section 9: Caching with Request Memoization

### 105. Introducing Duplicate Queries

Node server is fetching duplicated queries at this point

```sh
Making a query
Making a query
Making a query
Making a query
Making a query
```

### 106. Request Memoization

1. The cache memoization system is cleared out between incoming requests
2. Automatically used with the built-in `fetch` function
3. Can be used with other functions (like db queries) by using the `cache` function

### 107. Deduplicating Requests with Cache

[React Cache](https://react.dev/reference/react/cache)

After applying `cache`

```sh
Making a query
```

### 113. Notes on QueryStrings in Next

- Page components receive the query string data through the `searchParams` prop
  - Pages that reference `searchParams` will be marked as `dynamic` for purposes of build time caching
- Client components can get query string data with `useSearchParams`
  - ⚠️ Client component with `useSearchParams` need to be wrapped with `Suspense` or you'll get a strange warning at build time

### 118. The De-Opt to Client Side Rendering Warning

Wihtout `Suspense` wrapping up, we get the warning messages

```sh
03-discuss % npm run build

# > 03-discuss@0.1.0 build
# > next build

#   ▲ Next.js 14.2.5
#   - Environments: .env.local, .env

#    Creating an optimized production build ...
#  ✓ Compiled successfully
#  ✓ Linting and checking validity of types
#  ✓ Collecting page data
#    Generating static pages (0/6)  [    ] ⨯ useSearchParams() should be wrapped in a suspense boundary at page "/search". Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
#     at i (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/.next/server/chunks/814.js:1:13512)
#     at d (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/.next/server/chunks/814.js:1:24509)
#     at d (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/.next/server/chunks/145.js:1:4868)
#     at nj (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46251)
#     at nM (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47571)
#     at nM (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61546)
#     at nN (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
#     at nB (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
#     at nM (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58560)
#     at nN (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)

# Error occurred prerendering page "/search". Read more: https://nextjs.org/docs/messages/prerender-error

#  ⨯ useSearchParams() should be wrapped in a suspense boundary at page "/404". Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
#     at i (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/.next/server/chunks/814.js:1:13512)
#     at d (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/.next/server/chunks/814.js:1:24509)
#     at d (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/.next/server/chunks/145.js:1:4868)
#     at nj (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46251)
#     at nM (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47571)
#     at nM (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61546)
#     at nN (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
#     at nB (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
#     at nM (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58560)
#     at nN (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)

# Error occurred prerendering page "/_not-found". Read more: https://nextjs.org/docs/messages/prerender-error

#  ⨯ useSearchParams() should be wrapped in a suspense boundary at page "/". Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
#     at i (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/.next/server/chunks/814.js:1:13512)
#     at d (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/.next/server/chunks/814.js:1:24509)
#     at d (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/.next/server/chunks/145.js:1:4868)
#     at nj (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46251)
#     at nM (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47571)
#     at nM (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61546)
#     at nN (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
#     at nB (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
#     at nM (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58560)
#     at nN (/Users/noah/Documents/study/study_codes/udemy/nextjs-stephen/nextjs-stephen-git/03-discuss/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)

# Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error

#  ✓ Generating static pages (6/6)

# > Export encountered errors on following paths:
# 	/_not-found/page: /_not-found
# 	/page: /
# 	/search/page: /search
```

</details>
