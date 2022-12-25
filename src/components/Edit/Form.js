import { useState } from "react";
import { toPng } from 'html-to-image';
import download from "downloadjs";

import Button from "../Button";
import SoobwayIconForm from "./SoobwayIconForm";
import MainForm from "./MainForm";

export default function Form(props) {
  const [ newIcon, setNewIcon ] = useState("new icon");
  const [ circleColour, setCircleColour ] = useState("#FCB818");
  const [ circleIcon, setCircleIcon ] = useState(null);
  const [ iconInvert, setIconInvert ] = useState(1);
  const [ iconSize, setIconSize ] = useState("big");

  function handleInvertIcon(e) {
    e.preventDefault();
    if (iconInvert === 1) {
      setIconInvert(0);
    } else {
      setIconInvert(1);
    }
  }

  function handleResizeIcon(e) {
    e.preventDefault();
    if (iconSize === "big") {
      setIconSize("small");
    } else {
      setIconSize("big");
    }
  }

  function handlePreviewToggle(e) {
    e.preventDefault();
    if (props.state.previewToggle === "square") {
      props.setState(prev => ({ ...prev, previewToggle: "banner"}))
    } else {
      props.setState(prev => ({ ...prev, previewToggle: "square"}))
    }
  }

  function handleDownload(e) {
    e.preventDefault();
    toPng(document.getElementById('download-me'))
      .then(function (dataUrl) {
        download(dataUrl, 'i-got-branded.png');
      }
    );
  }

  function handleToggleCustomizeIcon(e) {
    e.preventDefault();
    newIcon === "new icon" ? setNewIcon("back") : setNewIcon("new icon");
  }

  function handleAddIcon(e) {
    e.preventDefault();
    const oldSoobwayCircles = props.state.soobwayCircles;
    props.setState(prev => ({ ...prev, soobwayCircles: [...oldSoobwayCircles, {
      iconInvert, iconSize, circleColour, circleIcon
    }] }));
  }

  return (
    <form>
        {newIcon === "new icon" &&
          <MainForm
            id={props.id}
            newIcon={newIcon}
            state={props.state}
            setState={props.setState}
          />
        }
        {(props.id === "soobway" && newIcon === "back") &&
          <SoobwayIconForm
            handleInvertIcon={handleInvertIcon}
            handleResizeIcon={handleResizeIcon}
            iconInvert={iconInvert}
            iconSize={iconSize}
            circleColour={circleColour}
            setCircleColour={setCircleColour}
            circleIcon={circleIcon}
            setCircleIcon={setCircleIcon}
            defaultFontSize={props.defaultFontSize}
          />
        }
        <div>
          {newIcon === "new icon" &&
            <div>
              <Button
                text={`toggle to ${props.state.previewToggle}`}
                onClick={handlePreviewToggle}
              />
              <Button
                text="download"
                onClick={handleDownload}
              />
            </div>
          }
          <div>
            {props.id === "soobway" &&
              <Button 
                text={`${newIcon}`}
                onClick={handleToggleCustomizeIcon}
              />
            }
            {(props.id === "soobway" && newIcon === "back") &&
              <Button 
                text="add icon"
                onClick={handleAddIcon}
              />
            }
          </div>
        </div>
      </form>
  );
}