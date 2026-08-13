import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHeadTopo from '../components/PageHeadTopo';
import { usePageMeta } from '../hooks/useSiteEffects';
import termsBody from '../content/terms-body.html?raw';

function fixLegalLinks(html) {
  return html
    .replaceAll('/privacy.html', '/privacy')
    .replaceAll('/terms.html', '/terms')
    .replaceAll('/contact.html', '/contact');
}

export default function TermsPage() {
  usePageMeta({
    title: 'Terms & Conditions — Convyo',
    description:
      'Terms and Conditions for the Riding Verse (RV) / Convyo mobile application, operated by Riding Verse Private Limited and Explorations and Innovations Technologies Private Limited.',
    canonical: 'https://convyo.app/terms',
  });

  return (
    <Layout>
      <main id="main">
        <header className="pagehead">
          <PageHeadTopo />
          <div className="pagehead__in">
            <div className="eyebrow eyebrow--rule">Legal</div>
            <h1>
              Terms &amp;
              <br />
              Conditions
            </h1>
            <p>
              These Terms govern your use of the Riding Verse (RV) mobile application and the Convyo platform, operated by Riding Verse Private Limited and Explorations and Innovations Technologies Private Limited.
            </p>
            <div className="pagehead__meta">
              <span>
                Last updated · <b>27 May 2026</b>
              </span>
              <span>
                Governing law · <b>India</b>
              </span>
              <span>
                Jurisdiction · <b>Haryana</b>
              </span>
              <span>
                Arbitration seat · <b>Sirsa</b>
              </span>
            </div>
          </div>
        </header>

        <div dangerouslySetInnerHTML={{ __html: fixLegalLinks(termsBody) }} />

        <div className="docfoot">
          <div className="docfoot__in">
            <p>Questions about these Terms? Write to us and we will get back to you.</p>
            <div className="btnrow">
              <a className="btn btn--solid" href="mailto:legal@convyo.app">
                Contact legal
              </a>
              <Link className="btn btn--ghost" to="/privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
