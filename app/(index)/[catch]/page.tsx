import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { Brand } from '@/components/brand';

export async function generateStaticParams() {
  return [...siteConfig.nav, ...siteConfig.underConstruction].map((el) => ({
    catch: el.href.split('/').slice(-1)[0],
  }));
}

export default function CatchPage({ params }: { params: { catch: string } }) {
  return (
    <section className="fixed inset-0 flex min-h-full flex-col items-center justify-center">
      <Brand />
      <br />
      <p>
        <strong className="capitalize">
          {params.catch.replaceAll('-', ' ')}
        </strong>{' '}
        under Construction
      </p>
      <Link className="fixed bottom-8 mt-3 text-xs hover:text-primary" href="/">
        Back to home
      </Link>
    </section>
  );
}
