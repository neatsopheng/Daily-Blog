import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="part-1">
        <h3>New Letter Sign Up</h3>
        <form>
          <label htmlFor="">
            Send me the latest news on Science, culture and tech!
          </label>
          <div className="input-group">
            <input type="text" placeholder="example@gmail.com" />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
      <div className="part-2">
        <div className="div1">
          <h2>CustomBLog</h2>
          <p>Learn How Everything work!</p>
          <ul>
            <li>FB</li>
            <li>YT</li>
            <li>IG</li>
          </ul>
        </div>
        <div className="div2">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="div3">
          <h4>Information</h4>
          <ul>
            <li>Terms</li>
            <li>Reprints</li>
            <li>Privacy Policy</li>
            <li>Cookie Settings</li>
          </ul>
        </div>
        <div className="div4">
          <h4>Explore</h4>
          <ul>
            <li>Quizzes</li>
            <li>Coupon</li>
            <li>Video</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright @2024 CustomBLog, a System1 Property</p>
      </div>
    </footer>
  );
};

export default Footer;
