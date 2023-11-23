# next-template

A Next.js 14 app built with Tailwind CSS.

## Usage (run locally)

Go to the `root` folder where `package.json` exists.

```bash
npm install
```

```bash
npm run dev
```

> required `nodejs` installed

## Bootstrap (new app)

```bash
npx sohanemon next my-app-name
```

```bash
npx sohanemon next my-app-name --yarn
```

```bash
npx sohanemon next my-app-name --pnpm
```

## Next.js project convention

We use App Router in this project. So, we have to follow the convention of Next.js.

### Project organization strategy

Split project files by feature or route.

[Project organization](https://nextjs.org/docs/app/building-your-application/routing/colocation#split-project-files-by-feature-or-route)

and use private folders for page sub components and lib.

[Private folder](https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders)

Example:

Suppose there is a post page now. This page consists of Sections 1 to 3.

```
.
├── actions
│   └── write-file.ts
├── app
│   ├── api
│   │   └── route.ts
│   ├── (index)
│   │   ├── [catch]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── _lib
│   │   ├── _components
│   ├── layout.tsx
│   └── loading.tsx
├── components
│   ├── brand.tsx
│   ├── goto-top.tsx
│   ├── icons.tsx
│   ├── image.tsx
│   ├── motion.tsx
│   ├── navbar.tsx
│   └── ui
│       └── text.tsx
├── components.json
├── config
│   ├── colors.ts
│   ├── site.ts
│   └── variants
│       ├── motion.variant.ts
│       └── typography.ts
├── context
│   └── transition-provider.tsx
├── CONVENTION.md
├── hooks
│   └── nav-toggle.tsx
├── lib
│   ├── fonts.ts
│   └── utils.ts
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── postcss.config.js
├── prettier.config.js
├── public
│   └── data.json
├── README.md
├── styles
│   ├── custom.css
│   ├── globals.css
│   └── plugins
│       ├── base.ts
│       ├── preset.ts
│       ├── theme.ts
│       └── utilities.ts
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.tsbuildinfo
└── types
    ├── image.types.ts
    ├── index.types.ts
    └── text.types.ts
...
```

- **\_components:** is a private folder that contains components that are only used in the post page.
- **\_lib:** is a private folder that contains libraries that are only used in the post page.
- **/components:** is a public folder that contains components that are used in multiple pages.
- **/lib:** is a public folder that contains libraries that are used in multiple pages.

## Conventions

- Use `yarn`/`pnpm` as package manager
- Do not use **personal dependencies** or libraries that are infrequently used and not maintained by anyone

### Components

- Use Pascal Case as react component naming convention. e.g: UserProfile.tsx
- When directory name is multiple words, use dash(-) as separator. e.g: user-profile
- Each component file should only contains one exported component.

### State management

- Use Zustand/Jotai for state management.
- If using Redux Toolkit, slice should be used as feature level. e.g: userSlice.ts

### Styles

- Use Tailwind CSS for styling.
- JoyUI (Optional)

### Icons

Currently, `Remix Icon` is recommended as icon library.

<https://remixicon.com/>

The package size of `react-icons`` is too large. So, we should not use it.

# Reference

<https://i18nexus.com/tutorials/nextjs/react-i18next>

## License

Licensed under the [MIT license](https://github.com/sohanemon/ui-init/blob/main/LICENSE).
