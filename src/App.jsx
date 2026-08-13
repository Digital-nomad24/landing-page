import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ThanksPage from './pages/ThanksPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact.html" element={<ContactPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/terms.html" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/privacy.html" element={<PrivacyPage />} />
      <Route path="/thanks" element={<ThanksPage />} />
      <Route path="/thanks.html" element={<ThanksPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  );
}
