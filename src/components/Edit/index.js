import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import "./Edit.scss";

import Form from "./Form";
import Preview from "./Preview";

import templates from "../../database";

export default function Edit() {
  function getTemplate(templates, match) {
    return templates.find(template => template.name === match)
  }
  function getTemplateAttr(template, attr) {
    return template[attr];
  }

  const { id } = useParams();
  const currentTemplate = getTemplate(templates, id);

  const [ state, setState ] = useState({
    previewToggle: "square",
    title: "",
    subtitle: "",
    blurb: "",
    fontAdjust: "",
    curveAdjust: "",
    soobwayCircles: []
  })

  useEffect(() => {
    setState(prev => ({
      ...prev,
      title: getTemplateAttr(currentTemplate, "title"),
      subtitle: getTemplateAttr(currentTemplate, "subtitle"),
      blurb: getTemplateAttr(currentTemplate, "blurb")
    }))
  }, [])
  
  const toggleClass = classNames("image", `${id}`, {
    "toggle-square": state.previewToggle === "banner",
    "toggle-banner": state.previewToggle === "square"
  });

  function defaultFontSize(iconSize, big, small) {
    if (iconSize === "big") {
      return big;
    } else {
      return small;
    }
  }

  return (
    <div className="Edit">
      <Form {...{
        id,
        state, setState,
        defaultFontSize
      }}/>
      <Preview {...{
        id,
        toggleClass,
        state, setState,
        defaultFontSize
      }}/>
    </div>
  );
}