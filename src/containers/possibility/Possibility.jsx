import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const testPossibility =
  'Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.';

function Possibility() {
  return (
    <div className="gpt4__possibility section__padding" id="possibility">
      <div className="gpt4__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt4__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilitues are beyond your imagination
        </h1>
        <p>{testPossibility}</p>
        <h4>Request Early Acces to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;
