import { Article } from '../../components';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const dateProps = 'Sep 26, 2023';
const textProps = 'GPT-3 and Open  AI is the future. Let us exlore how it is?';

const Blog = () => (
  <div className="gpt4__blog section__padding" id="blog">
    <div className="gpt4__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt4__blog-container">
      <div className="gpt4__blog-container_groupA">
        <Article imgUrl={blog01} date={dateProps} text={textProps} />
      </div>
      <div className="gpt4__blog-container_groupB">
        <Article imgUrl={blog02} date={dateProps} text={textProps} />
        <Article imgUrl={blog03} date={dateProps} text={textProps} />
        <Article imgUrl={blog04} date={dateProps} text={textProps} />
        <Article imgUrl={blog05} date={dateProps} text={textProps} />
      </div>
    </div>
  </div>
);

export default Blog;
