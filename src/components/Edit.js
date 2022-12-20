import { useState } from "react";
import { toPng } from 'html-to-image';
import download from "downloadjs";

// import { useParams } from "react-router-dom";
import classNames from "classnames";
import "./Edit.scss";
import Button from "./Button";
import Input from "./Input";
import Draggable from "react-draggable";

function Edit() {
  // const { id } = useParams();
  const [ previewToggle, setPreviewToggle ] = useState("banner");
  const [ title, setTitle ] = useState("matthew hu");
  const [ subtitle, setSubtitle ] = useState("software developer");
  const [ fontSize, setFontSize ] = useState();
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
  };

  const handleDownload = (event) => {
    event.preventDefault();
    toPng(document.getElementById('download-me'))
      .then(function (dataUrl) {
        download(dataUrl, 'i-got-branded.png');
      }
    );
  }

  return (
    <div className="Edit">
      <form>
        <Input 
          name="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Input 
          name="subtitle"
          type="text"
          onChange={(e) => setSubtitle(e.target.value)}
          value={subtitle}
        />
        <div>
          <Input 
            name="font size"
            type="number"
            step={1}
            onChange={(e) => setFontSize(e.target.value)}
            value={fontSize}
          />
          <Button
            text="download"
            onClick={handleDownload}
          />
        </div>
      </form>
      <div className="preview">
        <div className={toggleClass} id="download-me">
          <Draggable
            defaultPosition={{x: 20, y: 90}}
            bounds="parent"
          >
            <div className="image-text">
              <h1 style={{fontSize: `${26 + Number(fontSize)}px`}}>{title}</h1>
              <h2 style={{fontSize: `${19 + Number(fontSize)}px`}}>{subtitle}</h2>
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
