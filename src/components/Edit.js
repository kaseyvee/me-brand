import { useParams } from "react-router-dom";
import Button from "./Button";

function Edit() {
  const { id } = useParams();


  return (
    <div className="Edit">
      <form>
        <Button
          text="create"
        />
      </form>
      <div>

      </div>
    </div>
  );
}

export default Edit;
