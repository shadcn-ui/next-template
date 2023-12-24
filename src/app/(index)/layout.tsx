import { GoToTop } from '@/components/goto-top';
import { Navbar } from '@/components/navbar';

interface IndexLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <GoToTop />
    </>
  );
}
