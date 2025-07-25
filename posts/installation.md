---
title: 'Installation'
date: '2022-04-10'
image: {
  link: 'https://placehold.co/500x500.png',
  width: 500,
  height: 500
}
tags: ["React", "Nextjs"]
---

## System requirements

Before you begin, make sure your system meets the following requirements:

- [Node.js 18.18](https://nodejs.org/) or later.
- macOS, Windows (including WSL), or Linux.

## Automatic installation

The quickest way to create a new Next.js app is using `create-next-app`, which sets up everything automatically for you. To create a project, run:

```bash filename="Terminal"
npx create-next-app@latest
```

On installation, you'll see the following prompts:

```txt filename="Terminal"
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*
```

After the prompts, `create-next-app` will create a folder with your project name and install the required dependencies.

## Manual installation

To manually create a new Next.js app, install the required packages:

```bash package="pnpm"
pnpm i next@latest react@latest react-dom@latest
```

```bash package="npm"
npm i next@latest react@latest react-dom@latest
```

```bash package="yarn"
yarn add next@latest react@latest react-dom@latest
```

```bash package="bun"
bun add next@latest react@latest react-dom@latest
```

Then, add the following scripts to your `package.json` file:

```json filename="package.json"
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

These scripts refer to the different stages of developing an application:

- `next dev`: Starts the development server.
- `next build`: Builds the application for production.
- `next start`: Starts the production server.
- `next lint`: Runs ESLint.

<AppOnly>

### Create the `app` directory

Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.

Create an `app` folder. Then, inside `app`, create a `layout.tsx` file. This file is the root layout. It's required and must contain the `<html>` and `<body>` tags.

```tsx filename="app/layout.tsx" switcher
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

```jsx filename="app/layout.js" switcher
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

Create a home page `app/page.tsx` with some initial content:

```tsx filename="app/page.tsx" switcher
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

```jsx filename="app/page.js" switcher
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

Both `layout.tsx` and `page.tsx` will be rendered when the user visits the root of your application (`/`).

<Image
  alt="App Folder Structure"
  srcLight="/docs/light/app-getting-started.png"
  srcDark="/docs/dark/app-getting-started.png"
  width="1600"
  height="363"
/>

> **Good to know**:
>
> - If you forget to create the root layout, Next.js will automatically create this file when running the development server with `next dev`.
> - You can optionally use a `src` folder in the root of your project to separate your application's code from configuration files.

</AppOnly>

<PagesOnly>

### Create the `pages` directory

Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.

Create a `pages` directory at the root of your project. Then, add an `index.tsx` file inside your `pages` folder. This will be your home page (`/`):

```tsx filename="pages/index.tsx" switcher
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

```jsx filename="pages/index.js" switcher
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

Next, add an `_app.tsx` file inside `pages/` to define the global layout. Learn more about the custom App file.

```tsx filename="pages/_app.tsx" switcher
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

```jsx filename="pages/_app.js" switcher
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

Finally, add a `_document.tsx` file inside `pages/` to control the initial response from the server. Learn more about the custom Document file.

```tsx filename="pages/_document.tsx" switcher
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

```jsx filename="pages/_document.js" switcher
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

</PagesOnly>

### Create the `public` folder (optional)

Create a `public` folder at the root of your project to store static assets such as images, fonts, etc. Files inside `public` can then be referenced by your code starting from the base URL (`/`).

You can then reference these assets using the root path (`/`). For example, `public/profile.png` can be referenced as `/profile.png`:

```tsx filename="app/page.tsx" highlight={4} switcher
import Image from 'next/image'

export default function Page() {
  return <Image src="/profile.png" alt="Profile" width={100} height={100} />
}
```

```jsx filename="app/page.js" highlight={4} switcher
import Image from 'next/image'

export default function Page() {
  return <Image src="/profile.png" alt="Profile" width={100} height={100} />
}
```

## Run the development server

1. Run `npm run dev` to start the development server.
2. Visit `http://localhost:3000` to view your application.
3. Edit the <AppOnly>`app/page.tsx`</AppOnly><PagesOnly>`pages/index.tsx`</PagesOnly> file and save it to see the updated result in your browser.

## Set up TypeScript

> Minimum TypeScript version: `v4.5.2`

Next.js comes with built-in TypeScript support. To add TypeScript to your project, rename a file to `.ts` / `.tsx` and run `next dev`. Next.js will automatically install the necessary dependencies and add a `tsconfig.json` file with the recommended config options.

<AppOnly>

### IDE Plugin

Next.js includes a custom TypeScript plugin and type checker, which VSCode and other code editors can use for advanced type-checking and auto-completion.

You can enable the plugin in VS Code by:

1. Opening the command palette (`Ctrl/⌘` + `Shift` + `P`)
2. Searching for "TypeScript: Select TypeScript Version"
3. Selecting "Use Workspace Version"

<Image
  alt="TypeScript Command Palette"
  srcLight="/docs/light/typescript-command-palette.png"
  srcDark="/docs/dark/typescript-command-palette.png"
  width="1600"
  height="637"
/>

</AppOnly>

See the TypeScript reference page for more information.

## Set up ESLint

Next.js comes with built-in ESLint. It automatically installs the necessary packages and configures the proper settings when you create a new project with `create-next-app`.

To manually add ESLint to an existing project, add `next lint` as a script to `package.json`:

```json filename="package.json"
{
  "scripts": {
    "lint": "next lint"
  }
}
```

Then, run `npm run lint` and you will be guided through the installation and configuration process.

```bash filename="Terminal"
npm run lint
```

You'll see a prompt like this:

> ? How would you like to configure ESLint?
>
> ❯ Strict (recommended)
> Base
> Cancel

- **Strict**: Includes Next.js' base ESLint configuration along with a stricter Core Web Vitals rule-set. This is the recommended configuration for developers setting up ESLint for the first time.
- **Base**: Includes Next.js' base ESLint configuration.
- **Cancel**: Skip configuration. Select this option if you plan on setting up your own custom ESLint configuration.

If `Strict` or `Base` are selected, Next.js will automatically install `eslint` and `eslint-config-next` as dependencies in your application and create a configuration file in the root of your project.

The ESLint config generated by `next lint` uses the older `.eslintrc.json` format. ESLint supports both [the legacy `.eslintrc.json` and the newer `eslint.config.mjs` format](https://eslint.org/docs/latest/use/configure/configuration-files#configuring-eslint).

You can manually replace `.eslintrc.json` with an `eslint.config.mjs` file using the setup recommended in our ESLint API reference, and installing the [`@eslint/eslintrc`](https://www.npmjs.com/package/@eslint/eslintrc) package. This more closely matches the ESLint setup used by `create-next-app`.

You can now run `next lint` every time you want to run ESLint to catch errors. Once ESLint has been set up, it will also automatically run during every build (`next build`). Errors will fail the build, while warnings will not.

See the ESLint Plugin page for more information.

## Set up Absolute Imports and Module Path Aliases

Next.js has in-built support for the `"paths"` and `"baseUrl"` options of `tsconfig.json` and `jsconfig.json` files.

These options allow you to alias project directories to absolute paths, making it easier and cleaner to import modules. For example:

```jsx
// Before
import { Button } from '../../../components/button'

// After
import { Button } from '@/components/button'
```

To configure absolute imports, add the `baseUrl` configuration option to your `tsconfig.json` or `jsconfig.json` file. For example:

```json filename="tsconfig.json or jsconfig.json"
{
  "compilerOptions": {
    "baseUrl": "src/"
  }
}
```

In addition to configuring the `baseUrl` path, you can use the `"paths"` option to `"alias"` module paths.

For example, the following configuration maps `@/components/*` to `components/*`:

```json filename="tsconfig.json or jsconfig.json"
{
  "compilerOptions": {
    "baseUrl": "src/",
    "paths": {
      "@/styles/*": ["styles/*"],
      "@/components/*": ["components/*"]
    }
  }
}
```

Each of the `"paths"` are relative to the `baseUrl` location.