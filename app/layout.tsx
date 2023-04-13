import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"

import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
   subsets: ['latin'],
   variable: "--font-inter",
   display: 'swap',
 })

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <head />
         <body
            className={cn(
               "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50",
               inter.variable
            )}
         >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
               <SiteHeader />
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}