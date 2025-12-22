import { useToggle } from '@/hooks/use-toggle';
import { LandingPageMenu } from '@/public-site/components/navigation/MobileMenu';
import { Footer } from '@/shared/components/brand/Footer';
import { Header } from '@/public-site/components/navigation/Header';
import { Hero } from '@/public-site/components/Hero';
import { WhyItMatters } from '@/public-site/components/WhyItMatters';
import { HowItWorks } from '@/public-site/components/HowItWorks';

export const LandingPage = () => {
  const { value: openMenu, toggle: toggleOpenMenu } = useToggle();

  return (
    <div className="relative h-screen">
      {/* header */}
      <Header toggleOpenMenu={toggleOpenMenu} />
      {/* main */}
      <main className="relative min-h-screen">
        <Hero />
        <WhyItMatters />
        {/* divide */}
        <div className="w-full h-1 bg-background dark:bg-black"></div>
        <HowItWorks />
      </main>

      {/* Menu content - mobile */}
      <LandingPageMenu open={openMenu} toggleOpen={toggleOpenMenu} />

      {/* Footer */}
      <footer className="px-3 py-6 bg-sidebar">
        <Footer />
      </footer>
    </div>
  );
};
