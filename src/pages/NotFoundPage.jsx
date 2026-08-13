import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHeadTopo from '../components/PageHeadTopo';
import { usePageMeta } from '../hooks/useSiteEffects';

export default function NotFoundPage() {
  usePageMeta({
    title: 'Off route (404) — Convyo',
    robots: 'noindex',
  });

  return (
    <Layout footerMinimal>
      <main>
        <header className="pagehead">
          <PageHeadTopo />
          <div className="pagehead__in">
            <div className="eyebrow eyebrow--rule">404 · Off route</div>
            <h1>
              You missed
              <br />
              the exit
            </h1>
            <p>This page is not on the manifest. Head back to the start and we will regroup.</p>
            <div className="btnrow" style={{ marginTop: 34 }}>
              <Link className="btn btn--solid" to="/">
                Back to home
              </Link>
              <Link className="btn btn--ghost" to="/contact">
                Report a broken link
              </Link>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
