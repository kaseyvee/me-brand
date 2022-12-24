import { useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import "./Edit.scss";

import Form from "./Form";
import Preview from "./Preview";

import { getTemplate, getTemplateAttr } from "../../helpers/selectors";
import templates from "../../database";

export default function Edit() {
  const { id } = useParams();
  const currentTemplate = getTemplate(templates, id);

  const [ state, setState ] = useState({
    previewToggle: "square",
    title: getTemplateAttr(currentTemplate, "title"),
    subtitle: getTemplateAttr(currentTemplate, "subtitle"),
    blurb: getTemplateAttr(currentTemplate, "blurb"),
    fontAdjust: "",
    curveAdjust: "",
    soobwayCircles: [{iconInvert: 1, circleColour: "#F78427", circleIcon: "https://i.imgur.com/I1day1B.png"}, {iconInvert: 1, circleColour: "#1BB359", circleIcon: "https://i.imgur.com/7P1zUza.png"}]
  })
  
  const toggleClass = classNames("image", `${id}`, {
    "toggle-square": state.previewToggle === "banner",
    "toggle-banner": state.previewToggle === "square"
  });

  return (
    <div className="Edit">
      <Form {...{
        id,
        state, setState
      }}/>
      <Preview {...{
        id,
        toggleClass,
        state, setState
      }}/>
    </div>
  );
}