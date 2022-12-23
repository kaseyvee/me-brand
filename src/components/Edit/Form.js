import { useState } from "react";
import { CirclePicker } from "react-color";
import { toPng } from 'html-to-image';
import download from "downloadjs";

import Button from "../Button";

export default function Form(props) {
  const [ customizeIcon, setCustomizeIcon ] = useState("new icon");
  const [ circleColour, setCircleColour ] = useState("#FCB818");
  const [ circleIcon, setCircleIcon ] = useState(null);
  const [ iconInvert, setIconInvert ] = useState(1);
  
  function handleToggleCustomizeIcon(e) {
    e.preventDefault();
    customizeIcon === "new icon" ? setCustomizeIcon("back") : setCustomizeIcon("new icon");
  }

  function handleInvertIcon(e) {
    e.preventDefault();
    if (iconInvert === 1) {
      setIconInvert(0);
    } else {
      setIconInvert(1);
    }
  }

  function handlePreviewToggle(e) {
    e.preventDefault();
    if (props.previewToggle === "square") {
      props.setPreviewToggle("banner");
    } else {
      props.setPreviewToggle("square");
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

  return (
    <form>
        {customizeIcon === "new icon" && 
        <>
          <input 
            type="text"
            onChange={e => props.setTitle(e.target.value)}
            value={props.title}
            placeholder="title"
            autoComplete="off"
          />
          <input 
            type="text"
            onChange={e => props.setSubtitle(e.target.value)}
            value={props.subtitle}
            placeholder="subtitle"
            autoComplete="off"
          />
          <input 
            type="number"
            onChange={e => props.setFontAdjust(e.target.value)}
            value={props.fontAdjust}
            placeholder="font size"
            autoComplete="off"
          />
        </>
        }
        {props.id === "chocky" &&
          <>
            <div>
              <input 
                type="number"
                onChange={e => props.setXPosition(e.target.value)}
                value={props.xPosition}
                placeholder="title x-position"
                autoComplete="off"
              />
              <input 
                type="number"
                onChange={e => props.setYPosition(e.target.value)}
                value={props.yPosition}
                placeholder="title y-position"
                autoComplete="off"
              />
            </div>
            <input 
              type="number"
              onChange={e => props.setCurveAdjust(e.target.value)}
              value={props.curveAdjust}
              placeholder="curve offset"
              autoComplete="off"
            />
          </>
        }
        {(props.id === "soobway" && customizeIcon === "back") &&
          <>
            <Button text="invert icon colour" onClick={handleInvertIcon}/>
            <div className="circle-upload">
              <div
                className="circle-preview"
                style={{backgroundColor: `${circleColour}`}}
              >
                <img
                  src={circleIcon}
                  alt=""
                  style={{filter: `invert(${iconInvert})`}}
                />
              </div>
              <label>
                <input
                  className="upload-icon"
                  type="file"
                  onChange={(e) => {
                    if (e.target.files.length !== 0) {
                      e.preventDefault();
                      setCircleIcon(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                />
                upload icon
              </label>
            </div>
            <CirclePicker
              colors={["#EF3B46", "#A77D35", "#F78427", "#FCB818", "#9FC438", "#1BB359", "#1379C1", "#04ADDA", "#D75BA1", "#9C9D9F", "#3E3F41", "#FFFFFF"]}
              onChange={colour => setCircleColour(colour.hex)}
            />
          </>
        }
        <div>
          {customizeIcon === "new icon" && <div>
            <Button
              text={`toggle to ${props.previewToggle}`}
              onClick={handlePreviewToggle}
            />
            <Button
              text="download"
              onClick={handleDownload}
            />
          </div>}
          <div>
            {props.id === "soobway" &&
              <Button 
                text={customizeIcon}
                onClick={handleToggleCustomizeIcon}
              />
            }
            {(props.id === "soobway" && customizeIcon === "back") &&
              <Button 
                text="add icon"
              />
            }
          </div>

        </div>
      </form>
  );
}