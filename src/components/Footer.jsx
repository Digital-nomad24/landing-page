import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer({ minimal = false }) {
  const year = new Date().getFullYear();

  if (minimal) {
    return (
      <footer className="footer">
        <div className="footer__base">
          <div className="footer__base-in">
            <div>
              © {year} Riding Verse Pvt. Ltd. · Move as one
            </div>
            <nav>
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__lock">
            <Logo size={24} gradientId="footer-pin" />
            <span className="wordmark">
              CONV<i>Y</i>O
            </span>
          </div>
          <p>Live convoy riding for motorcycle groups. Move as one.</p>
          <div className="footer__legal-entity">
            <div className="label">Riding Verse Private Limited</div>
            <address>
              Gali Sangam Wali, Bhagat Singh Colony,
              <br />
              Sirsa, Haryana 125055, India
            </address>
          </div>
        </div>

        <div className="footer__col">
          <div className="label">Product</div>
          <nav>
            <a href="/#stations">Features</a>
            <a href="/#ranks">Ranks &amp; badges</a>
            <a href="/#roster">Community</a>
            <a href="/#roll">Download</a>
          </nav>
        </div>

        <div className="footer__col">
          <div className="label">Support</div>
          <nav>
            <Link to="/contact">Contact us</Link>
            <a href="mailto:support@convyo.app">support@convyo.app</a>
            <a href="/contact#safety">Safety &amp; SOS</a>
            <a href="/contact#report">Report a problem</a>
          </nav>
        </div>

        <div className="footer__col">
          <div className="label">Legal</div>
          <nav>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <a href="/terms#s5">Intellectual property</a>
            <a href="/terms#s8a">Paid rides</a>
          </nav>
        </div>

        <div className="footer__col">
          <div className="label">Your data</div>
          <nav>
            <a href="/privacy#p7">Delete your account</a>
            <a href="/privacy#p6">Your rights</a>
            <a href="/privacy#p8">Data safety</a>
            <a href="mailto:privacy@convyo.app">privacy@convyo.app</a>
          </nav>
        </div>
      </div>

      <div className="footer__base">
        <div className="footer__base-in">
          <div>© {year} Riding Verse Pvt. Ltd. · Move as one</div>
          <nav>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
