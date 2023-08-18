'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import Brand from './brand';
import { Icons } from './icons';
import Motion from './motion';
import { ThemeToggle } from './theme-toggle';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  return (
    <section
      className={cn('', {
        'sticky top-0 inset-x-0 bg-background z-40': path === '/',
      })}
    >
      <nav className="container flex items-center justify-between px-5 py-9">
        <div className="flex items-center gap-4">
          <Brand />
          <ThemeToggle />
        </div>
        <NavContent />
        {!isMenuOpen ? (
          <Icons.menu
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className="text-foreground cursor-pointer lg:hidden"
          />
        ) : (
          <Icons.x
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className="text-foreground cursor-pointer lg:hidden"
          />
        )}
      </nav>
      <AnimatePresence>
        {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
    </section>
  );
}

const NavContent = () => {
  const path = usePathname();
  return (
    <>
      <ul className="ml-20 flex items-center gap-12 max-lg:hidden ">
        {siteConfig.nav.map((_) => (
          <li
            key={_.title}
            className={cn('', {
              '': _.href === '/' ? path === '/' : path.includes(_.href),
            })}
          >
            <h3 className="capitalize">
              <Link href={_.href}>{_.title}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <Motion
      key={'header'}
      as={'ul'}
      initial="up"
      animate="visible"
      exit={'left'}
      className="bg-card absolute inset-x-0 mx-2 flex flex-col items-start gap-4 rounded-xl p-5 shadow-xl lg:hidden"
    >
      {siteConfig.nav.map((_) => (
        <li onClick={() => setIsMenuOpen(false)} key={_.title}>
          <h3 className="hover:text-primary/50 capitalize">
            <Link href={_.href}>{_.title}</Link>
          </h3>
        </li>
      ))}
    </Motion>
  );
};
