import TransitionProvider from '@/context/transition-provider';

import { GoToTop } from '@/components/goto-top';
import { Navbar } from '@/components/navbar';

interface IndexLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return (
    <>
      <Navbar />
      <TransitionProvider as={'main'} className="flex-1" initial="hidden">
        {children}
      </TransitionProvider>
      <GoToTop />
    </>
  );
}
