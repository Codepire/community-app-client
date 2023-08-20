import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="Footer__div">
        <div className="footer-grid">
          <div className="footer-logo">
            <img src="logo.png" alt="Logo"></img>
          </div>
          <div className="footer-resources">
            <h4 className="footer-headings">Resources</h4>
            <ul className="footer-list">
              <li>
                <a className="footer-link" href="#">
                  Docs
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Learn
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Showcase
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Analytics
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Previews
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-more">
            <h4 className="footer-headings">More</h4>
            <ul className="footer-list">
              <li>
                <a className="footer-link" href="#">
                  Commerce
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Contact Sales
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  GitHub
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Releases
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Telemetry
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-about">
            <h4 className="footer-headings">About</h4>
            <ul className="footer-list">
              <li>
                <a className="footer-link" href="#">
                  App Name
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Open Source Software
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  GitHub
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-legal">
            <h4 className="footer-headings">Legal</h4>
            <ul className="footer-list">
              <li>
                <a className="footer-link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Cookie Preferences
                </a>
              </li>
            </ul>
            <div className="newsletter">
              <p className="newsletter-text">Subscribe to our newsletter:</p>
              <input
                type="email"
                class="newsletter-input"
                placeholder="Your email"
              ></input>
            </div>
          </div>
        </div>
        <hr className="footer-line"></hr>
        <div className="footer-bottom">
          <p>&copy; 2023 Company Name</p>
          <div className="social-icons">
            <a href="www.xyz.com">
              <img src="twitter.png" alt="Twitter"></img>
            </a>
            <a href="www.xyz.com">
              <img src="github.png" alt="GitHub"></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
