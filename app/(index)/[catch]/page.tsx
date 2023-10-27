import { siteConfig } from '@/config/site';

export async function generateStaticParams() {
  return [...siteConfig.nav, ...siteConfig.underConstruction].map((el) => ({
    catch: el.title,
  }));
}
export default function CatchPage() {
  return (
    <section className="grid min-h-[400px] place-content-center">
      Page in Construction
    </section>
  );
}
