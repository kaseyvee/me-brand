import { useState } from "react";
import { useParams } from "react-router-dom";
import { toPng } from 'html-to-image';
import download from "downloadjs";
import classNames from "classnames";

import "./Edit.scss";

import Form from "./Form";
import Preview from "./Preview";

import { getTemplate, getTemplateAttr } from "../../helpers/selectors";
import templates from "../../database";

export default function Edit() {
  const { id } = useParams();
  const currentTemplate = getTemplate(templates, id);

  const [ previewToggle, setPreviewToggle ] = useState("square");
  const [ title, setTitle ] = useState(getTemplateAttr(currentTemplate, "title"));
  const [ subtitle, setSubtitle ] = useState(getTemplateAttr(currentTemplate, "subtitle"));
  const [ fontAdjust, setFontAdjust ] = useState("");
  const [ curveAdjust, setCurveAdjust ] = useState("");
  const [ xPosition, setXPosition ] = useState("");
  const [ yPosition, setYPosition ] = useState("");
  
  const toggleClass = classNames("image", `${id}`, {
    "toggle-square": previewToggle === "banner",
    "toggle-banner": previewToggle === "square"
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
    setFontAdjust("");
    setCurveAdjust("");
    setXPosition("");
    setYPosition("");
  }

  return (
    <div className="Edit">
      <Form {...{
        id,
        title, setTitle,
        subtitle, setSubtitle,
        fontAdjust, setFontAdjust,
        curveAdjust, setCurveAdjust,
        xPosition, setXPosition,
        yPosition, setYPosition,
        previewToggle, handlePreviewToggle,
        handleDownload
      }}/>
      <Preview {...{
        id,
        toggleClass,
        title,
        subtitle,
        fontAdjust,
        curveAdjust,
        xPosition,
        yPosition,
        reset
      }}/>
    </div>
  );
}