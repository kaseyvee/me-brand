import { useState } from "react";
import { useParams } from "react-router-dom";
import { toPng } from 'html-to-image';

import download from "downloadjs";

import classNames from "classnames";
import "./Edit.scss";
import Button from "./Button";
import Input from "./Input";
import Draggable from "react-draggable";
import ChockyTitle from "./ChockyTitle";

import { getTemplate, getTemplateAttr } from "../helpers/selectors";
import templates from "../database";

export default function Edit() {
  const { id } = useParams();
  const currentTemplate = getTemplate(templates, id);

  const [ previewToggle, setPreviewToggle ] = useState("banner");
  const [ title, setTitle ] = useState(getTemplateAttr(currentTemplate, "title"));
  const [ subtitle, setSubtitle ] = useState(getTemplateAttr(currentTemplate, "subtitle"));
  const [ fontAdjust, setFontAdjust ] = useState(null);
  const [ curveAdjust, setCurveAdjust ] = useState(null);
  const [ xPosition, setXPosition ] = useState(null);
  const [ yPosition, setYPosition ] = useState(null);
  
  const toggleClass = classNames("image",{
    "toggle-square": previewToggle === "square",
    "toggle-banner": previewToggle === "banner",
    "nameless": id === "nameless",
    "chocky": id === "chocky",
    "soobway": id === "soobway"
  });

  function handlePreviewToggle(e) {
    e.preventDefault();
    if (previewToggle === "square") {
      setPreviewToggle("banner");
    } else {
      setPreviewToggle("square");
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

  function reset() {

  }

  return (
    <div className="Edit">
      <form>
        <Input 
          name="title"
          type="text"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
        <Input 
          name="subtitle"
          type="text"
          onChange={e => setSubtitle(e.target.value)}
          value={subtitle}
        />
        <Input 
          name="font size"
          type="number"
          onChange={e => setFontAdjust(e.target.value)}
          value={fontAdjust}
        />
        {id === "chocky" &&
          <>
            <div>
              <Input 
                name="title x-position"
                type="number"
                onChange={e => setXPosition(e.target.value)}
                value={xPosition}
              />
              <Input 
                name="title y-position"
                type="number"
                onChange={e => setYPosition(e.target.value)}
                value={yPosition}
              />
            </div>
            <Input 
              name="curve offset"
              type="number"
              onChange={e => setCurveAdjust(e.target.value)}
              value={curveAdjust}
            />
          </>
        }
        <div className="edit-buttons">
          <Button
            text={`toggle ${previewToggle}`}
            onClick={handlePreviewToggle}
          />
          <Button
            text="download"
            onClick={handleDownload}
          />
        </div>
      </form>
      <div className="preview">
        <div className={toggleClass} id="download-me">
          {id === "nameless" &&
            <Draggable
              defaultPosition={{x: 20, y: 90}}
              bounds="parent"
            >
              <div className="drag-me">
                <h1 style={{fontSize: `${26 + Number(fontAdjust)}px`}}>{title}</h1>
                <h2 style={{fontSize: `${19 + Number(fontAdjust)}px`}}>{subtitle}</h2>
              </div>
            </Draggable>
          }
          {id === "chocky" &&
            <Draggable
              defaultPosition={{x: 0, y: 10}}
              bounds="parent"
            >
              <div className="drag-me chocky-text">
                <ChockyTitle
                  title={title}
                  fontAdjust={fontAdjust}
                  curveAdjust={curveAdjust}
                />
                <Draggable
                  defaultPosition={{x: 0, y: -25}}
                  bounds="parent" 
                  axis="y"
                >
                  <h2 style={{fontSize: `${10 + Number(fontAdjust)}px`}}>{subtitle}</h2>
                </Draggable>
              </div>
            </Draggable>

          }
          {id === "soobway" &&
            <Draggable
              defaultPosition={{x: 20, y: 90}}
              bounds="parent"
            >
              <div className="drag-me">
                <h1 style={{fontSize: `${26 + Number(fontAdjust)}px`}}>{title}</h1>
                <h2 style={{fontSize: `${19 + Number(fontAdjust)}px`}}>{subtitle}</h2>
              </div>
            </Draggable>
          }
        </div>
      </div>
    </div>
  );
}