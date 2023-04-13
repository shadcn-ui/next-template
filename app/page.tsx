import { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
   title: 'Next.js',
   description: 'Next.js template for building apps with Radix UI and Tailwind CSS',
   keywords: ['Next.js', 'React', 'Tailwind CSS', 'Radix UI'],
   authors: [{ name: 'shadcn', url: 'https://shadcn.com/' }],
   themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
   ],
   openGraph: {
      title: 'Next.js',
      description: 'Next.js template for building apps with Radix UI and Tailwind CSS',
      url: 'https://template.shadcn.com/',
      siteName: 'Next.js',
      locale: 'en_US',
      type: 'website',
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Next.js template',
      description: 'Next.js template for building apps with Radix UI and Tailwind CSS',
      creator: '@shadcn',
   },
}

export default function Page() {
   return (
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
      </section>
   )
 }