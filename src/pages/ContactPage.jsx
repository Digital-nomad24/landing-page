import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHeadTopo from '../components/PageHeadTopo';
import { usePageMeta } from '../hooks/useSiteEffects';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact — Convyo',
    description:
      'Get in touch with the Convyo / Riding Verse team — support, safety, partnerships and press. Riding Verse Private Limited, Sirsa, Haryana, India.',
    canonical: 'https://convyo.app/contact',
  });

  return (
    <Layout ctaLabel="Get the app" ctaTo="/#roll">
      <main id="main">
        <header className="pagehead">
          <PageHeadTopo />
          <div className="pagehead__in">
            <div className="eyebrow eyebrow--rule">Comms channel</div>
            <h1>
              Talk to
              <br />
              the crew
            </h1>
            <p>Support questions, safety reports, club partnerships or press — pick the channel that fits and we will come back to you.</p>
            <div className="pagehead__meta">
              <span>
                Company · <b>Riding Verse Pvt. Ltd.</b>
              </span>
              <span>
                Base · <b>Sirsa, Haryana</b>
              </span>
              <span>
                Typical reply · <b>1–2 working days</b>
              </span>
            </div>
          </div>
        </header>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="label" style={{ color: '#00D1B2' }}>
              General inquiries
            </div>
            <h3>Head office</h3>
            <address>
              <strong style={{ color: '#E8EBEF' }}>Riding Verse Private Limited</strong>
              <br />
              Gali Sangam Wali, Bhagat Singh Colony,
              <br />
              Sirsa (Haryana), India 125055
            </address>
            <p>
              <a href="mailto:support@convyo.app">support@convyo.app</a>
            </p>
            <div className="btnrow">
              <a className="btn btn--solid" href="mailto:support@convyo.app">
                Contact us on mail
              </a>
            </div>
          </div>

          <div className="contact-card" id="safety">
            <div className="label" style={{ color: '#00D1B2' }}>
              Safety &amp; SOS
            </div>
            <h3>Rider safety</h3>
            <p>
              If you or another rider is in immediate danger, call your local emergency number first. Then tell us what happened so we can review the ride record and the SOS trail.
            </p>
            <p>
              Every participant rides at their own risk and is responsible for their own licence, insurance and gear — see{' '}
              <a href="/terms#s10">Assumption of Risk</a> in the Terms.
            </p>
            <div className="btnrow">
              <a className="btn btn--ghost" href="mailto:safety@convyo.app?subject=Safety%20report">
                Report a safety issue
              </a>
            </div>
          </div>

          <div className="contact-card" id="report">
            <div className="label" style={{ color: '#00D1B2' }}>
              Trust &amp; abuse
            </div>
            <h3>Report a problem</h3>
            <p>
              Abusive messages, impersonation, infringing content, or a ride payment that looks fraudulent — send us the community name, the ride, and anything you can screenshot.
            </p>
            <p>
              Note that ride payments are collected directly by Ride Creators, not by us. See <a href="/terms#s8a">Section 8A</a> before raising a payment dispute.
            </p>
            <div className="btnrow">
              <a className="btn btn--ghost" href="mailto:report@convyo.app?subject=Report%20a%20problem">
                Report content or a user
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="label" style={{ color: '#00D1B2' }}>
              Your data
            </div>
            <h3>Privacy requests</h3>
            <p>
              Access, correct or delete the data we hold about you. Most of it you can do yourself in the App under Settings; anything else, write to the privacy team.
            </p>
            <div className="btnrow">
              <a className="btn btn--ghost" href="mailto:privacy@convyo.app">
                privacy@convyo.app
              </a>
            </div>
          </div>
        </div>

        <section className="band">
          <div className="split-grid shell">
            <div className="split-grid__rail">
              <div className="eyebrow">Send a message</div>
            </div>
            <div className="split-grid__body">
              <h2 className="display" style={{ fontSize: 'clamp(32px,4vw,46px)', lineHeight: 1, margin: '0 0 12px' }}>
                Drop us a line
              </h2>
              <p style={{ color: '#8A939E', maxWidth: 520, margin: '0 0 30px', lineHeight: 1.65 }}>
                Handled by Netlify Forms — submissions land in your Netlify dashboard under{' '}
                <b style={{ color: '#E8EBEF' }}>Forms → contact</b>, with no server to run.
              </p>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thanks"
                style={{ maxWidth: 620 }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="field--hp">
                  <label>
                    Leave this field empty if you are human: <input name="bot-field" />
                  </label>
                </p>

                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" />
                </div>

                <div className="field">
                  <label htmlFor="topic">Topic</label>
                  <select id="topic" name="topic" defaultValue="Support">
                    <option>Support</option>
                    <option>Safety report</option>
                    <option>Report content or a user</option>
                    <option>Privacy / data request</option>
                    <option>Club or event partnership</option>
                    <option>Press</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required />
                </div>

                <div className="btnrow" style={{ marginTop: 8 }}>
                  <button className="btn btn--solid" type="submit">
                    Send message
                  </button>
                </div>

                <p style={{ fontSize: 13, color: '#5E6773', marginTop: 18, lineHeight: 1.6 }}>
                  By sending this form you agree to our <Link to="/privacy">Privacy Policy</Link>. We use what you send only to answer you.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
