import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHeadTopo from '../components/PageHeadTopo';
import { usePageMeta } from '../hooks/useSiteEffects';
import privacyBody from '../content/privacy-body.html?raw';

function fixLegalLinks(html) {
  return html
    .replaceAll('/privacy.html', '/privacy')
    .replaceAll('/terms.html', '/terms')
    .replaceAll('/contact.html', '/contact');
}

export default function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Policy — Convyo',
    description:
      'How Riding Verse Private Limited collects, uses, shares and protects personal data in the Riding Verse (RV) / Convyo mobile application.',
    canonical: 'https://convyo.app/privacy',
  });

  return (
    <Layout>
      <main id="main">
        <header className="pagehead">
          <PageHeadTopo />
          <div className="pagehead__in">
            <div className="eyebrow eyebrow--rule">Legal</div>
            <h1>
              Privacy
              <br />
              Policy
            </h1>
            <p>What we collect when you ride with us, why we collect it, who it is shared with, and the control you keep over it.</p>
            <div className="pagehead__meta">
              <span>
                Last updated · <b>27 May 2026</b>
              </span>
              <span>
                Controller · <b>Riding Verse Pvt. Ltd.</b>
              </span>
              <span>
                Framework · <b>DPDP Act · IT Act 2000</b>
              </span>
            </div>
          </div>
        </header>

        <div dangerouslySetInnerHTML={{ __html: fixLegalLinks(privacyBody) }} />

        <div className="docfoot">
          <div className="docfoot__in">
            <p>Want a copy of your data, or your account removed? Start in the App under Settings, or write to us.</p>
            <div className="btnrow">
              <a className="btn btn--solid" href="mailto:privacy@convyo.app">
                Email privacy team
              </a>
              <Link className="btn btn--ghost" to="/terms">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
