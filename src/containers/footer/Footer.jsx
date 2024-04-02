import './footer.css';
import gpt4Logo from '../../assets/logo.png';
import Links from './Links';
import Company from './Company';
import GetInTouch from './GetInTouch';

function Footer() {
  return (
    <div className="gpt4__footer section__padding">
      <div className="gpt4__footer-heading">
        <h1 className="gradient__text">
          Do yo want to step into future before others
        </h1>
      </div>
      <div className="gpt4__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt4__footer-links">
        <div className="gpt4__footer-links_logo">
          <img src={gpt4Logo} alt="logo" />
        </div>
        <div className="gpt4__footer-links_div">
          <Links />
        </div>
        <div className="gpt4__footer-links_div">
          <Company />
        </div>
        <div className="gpt4__footer-links_div">
          <GetInTouch />
        </div>
      </div>
      <div className="gpt4__footer-copyright">
        <p>2023 GPT. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
