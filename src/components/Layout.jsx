import { useSiteEffects } from '../hooks/useSiteEffects';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({
  children,
  navVariant = 'legal',
  ctaLabel,
  ctaTo,
  footerMinimal = false,
}) {
  useSiteEffects();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav variant={navVariant} ctaLabel={ctaLabel} ctaTo={ctaTo} />
      {children}
      <Footer minimal={footerMinimal} />
    </>
  );
}
