import { useState } from "react";
// import { useParams } from "react-router-dom";
import classNames from "classnames";
import "./Edit.scss";
import Button from "./Button";
import Input from "./Input";
import Draggable from "react-draggable";

function Edit() {
  // const { id } = useParams();
  const [ previewToggle, setPreviewToggle ] = useState("banner")
  const toggleClass = classNames("image",{
    "toggle-square": previewToggle === "square",
    "toggle-banner": previewToggle === "banner"
  });

  const handlePreviewToggle = () => {
    if (previewToggle === "square") {
      setPreviewToggle("banner");
    } else {
      setPreviewToggle("square");
    }
  }

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
        <div>
          <Input 
            name="font size"
            type="number"
          />
          <Button
            text="create"
          />
        </div>
      </form>
      <div className="preview">
        <div className={toggleClass}>
          <Draggable
            defaultPosition={{x: 50, y: 80}}
          >
            <div className="image-text">
              <h1>matthew hu</h1>
              <h2>software developer</h2>
            </div>
          </Draggable>
        </div>
        <Button
          text={`toggle ${previewToggle}`}
          onClick={handlePreviewToggle}
        />
      </div>
    </div>
  );
}

export default Edit;
