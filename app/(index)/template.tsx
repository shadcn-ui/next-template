import { Motion } from '@/components/motion';

interface RootTemplateProps {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: RootTemplateProps) {
  return (
    <>
      <Motion
        initial="top-full"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {children}
      </Motion>
    </>
  );
}
