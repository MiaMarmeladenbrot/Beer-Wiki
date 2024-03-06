import { Link } from "react-router-dom";
import "./HomePreview.css";

// props: img, h2, text, link
const HomePreview = (props) => {
  return (
    <>
      <div className="home-preview">
        <Link to={props.link}>
          <img src={props.img} alt={props.h2} />
        </Link>
        <h2>{props.h2}</h2>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default HomePreview;
