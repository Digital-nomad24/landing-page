import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { usePageMeta } from '../hooks/useSiteEffects';

export default function ThanksPage() {
  usePageMeta({
    title: 'Message received — Convyo',
    robots: 'noindex',
  });

  return (
    <Layout footerMinimal>
      <main>
        <header className="pagehead">
          <div className="pagehead__in">
            <div className="eyebrow eyebrow--rule">Roll call</div>
            <h1>
              Message
              <br />
              received
            </h1>
            <p>Thanks — you are on the manifest. We reply to most messages within one to two working days.</p>
            <div className="btnrow" style={{ marginTop: 34 }}>
              <Link className="btn btn--solid" to="/">
                Back to home
              </Link>
              <Link className="btn btn--ghost" to="/contact">
                Send another
              </Link>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
