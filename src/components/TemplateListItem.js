import { Link } from "react-router-dom";

function TemplateListItem(props) {

  return (
    <Link to={`/${props.name}`}>
      <div className="template-item">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
    </Link>
  );
}

export default TemplateListItem;
