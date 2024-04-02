import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const textHeader =
  ' Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of';

function Header() {
  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-4 OpenAi
        </h1>
        <p>{textHeader}</p>
        <div className="gpt4__header-content__input">
          <input type="email" placeholder="Your Email Adress" />
          <button typeof="button">Get Started</button>
        </div>
        <div className="gpt4__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt4__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
