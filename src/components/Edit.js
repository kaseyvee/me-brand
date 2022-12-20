import { useParams } from "react-router-dom";
import "./Edit.scss";
import Button from "./Button";
import Input from "./Input";

function Edit() {
  const { id } = useParams();

  return (
    <div className="Edit">
      <form>
        <Input 
          name="title"
          type="text"
        />
        <Input 
          name="subtitle"
          type="text"
        />
        <Input 
          name="font size"
          type="number"
        />
        <Button
          text="create"
        />
      </form>
      <div className="preview">
        <div className="image">

        </div>
        <Button text="toggle banner" />
      </div>
    </div>
  );
}

export default Edit;
