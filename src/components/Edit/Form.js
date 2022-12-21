import { CirclePicker } from "react-color";
import Input from "./Input";
import Button from "../Button";
import { useState } from "react";

export default function Form(props) {
  const [ customizeIcon, setCustomizeIcon ] = useState("new icon");

  function HandleToggleCustomizeIcon(e) {
    e.preventDefault()
    customizeIcon === "new icon" ? setCustomizeIcon("back") : setCustomizeIcon("new icon");
  }

  return (
    <form>
        {customizeIcon === "new icon" && 
        <>
          <Input 
            name="title"
            type="text"
            onChange={e => props.setTitle(e.target.value)}
            value={props.title}
          />
          <Input 
            name="subtitle"
            type="text"
            onChange={e => props.setSubtitle(e.target.value)}
            value={props.subtitle}
          />
          <Input 
            name="font size"
            type="number"
            onChange={e => props.setFontAdjust(e.target.value)}
            value={props.fontAdjust}
          />
        </>
        }
        {props.id === "chocky" &&
          <>
            <div>
              <Input 
                name="title x-position"
                type="number"
                onChange={e => props.setXPosition(e.target.value)}
                value={props.xPosition}
              />
              <Input 
                name="title y-position"
                type="number"
                onChange={e => props.setYPosition(e.target.value)}
                value={props.yPosition}
              />
            </div>
            <Input 
              name="curve offset"
              type="number"
              onChange={e => props.setCurveAdjust(e.target.value)}
              value={props.curveAdjust}
            />
          </>
        }
        {(props.id === "soobway" && customizeIcon === "back") &&
          <CirclePicker
            colors={["#EF3B46", "#874E17", "#A77D35", "#F78427", "#FCB818", "#1BB359", "#1379C1", "#04ADDA", "#D75BA1", "#3E3F41", "#9C9D9F", "#000000"]}
          />
        }
        <div>
          {customizeIcon === "new icon" && <div>
            <Button
              text={`toggle to ${props.previewToggle}`}
              onClick={props.handlePreviewToggle}
            />
            <Button
              text="download"
              onClick={props.handleDownload}
            />
          </div>}
          <div>
            {props.id === "soobway" &&
              <Button 
                text={customizeIcon}
                onClick={HandleToggleCustomizeIcon}
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