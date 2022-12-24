import { useState } from "react";
import { CirclePicker } from "react-color";
import { toPng } from 'html-to-image';
import download from "downloadjs";

import Button from "../Button";

export default function Form(props) {
  const [ newIcon, setNewIcon ] = useState("new icon");
  const [ circleColour, setCircleColour ] = useState("#FCB818");
  const [ circleIcon, setCircleIcon ] = useState(null);
  const [ iconInvert, setIconInvert ] = useState(1);

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
      iconInvert, circleColour, circleIcon
    }] }));
  }

  return (
    <form>
        {newIcon === "new icon" && 
        <>
          <input 
            type="text"
            onChange={e => props.setState(prev => ({ ...prev, title: e.target.value}))}
            value={props.state.title}
            placeholder="title"
            autoComplete="off"
          />
          <input 
            type="text"
            onChange={e => props.setState(prev => ({ ...prev, subtitle: e.target.value}))}
            value={props.state.subtitle}
            placeholder="subtitle"
            autoComplete="off"
          />
          {props.id === "soobway" &&
            <input 
              type="text"
              onChange={e => props.setState(prev => ({ ...prev, blurb: e.target.value}))}
              value={props.state.blurb}
              placeholder="blurb"
              autoComplete="off"
            />
          }
          <input 
            type="number"
            onChange={e => props.setState(prev => ({ ...prev, fontAdjust: e.target.value}))}
            value={props.state.fontAdjust}
            placeholder="font size"
            autoComplete="off"
          />
        </>
        }
        {props.id === "chocky" &&
          <input 
            type="number"
            onChange={e => props.setState(prev => ({ ...prev, curveAdjust: e.target.value}))}
            value={props.state.curveAdjust}
            placeholder="curve offset"
            autoComplete="off"
          />
        }
        {(props.id === "soobway" && newIcon === "back") &&
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
          {newIcon === "new icon" && <div>
            <Button
              text={`toggle to ${props.state.previewToggle}`}
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
                text={newIcon}
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