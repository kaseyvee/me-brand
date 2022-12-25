import Button from "../Button";
import { CirclePicker } from "react-color";

export default function SoobwayIconForm(props) {
  return (
    <>
      <Button text="invert icon colour" onClick={props.handleInvertIcon}/>
      <Button text={`${props.iconSize} icon`} onClick={props.handleResizeIcon}/>
      <div className="circle-upload">
        <div
          className="circle-preview"
          style={{backgroundColor: `${props.circleColour}`, width: `${props.defaultFontSize(props.iconSize, 56, 36)}px`, height: `${props.defaultFontSize(props.iconSize, 56, 36)}px`}}
        >
          <img
            src={props.circleIcon}
            alt=""
            style={{filter: `invert(${props.iconInvert})`}}
          />
        </div>
        <label>
          <input
            className="upload-icon"
            type="file"
            onChange={(e) => {
              if (e.target.files.length !== 0) {
                e.preventDefault();
                props.setCircleIcon(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          upload icon
        </label>
      </div>
      <CirclePicker
        colors={["#EF3B46", "#A77D35", "#F78427", "#FCB818", "#9FC438", "#1BB359", "#1379C1", "#04ADDA", "#D75BA1", "#9C9D9F", "#3E3F41", "#FFFFFF"]}
        onChange={colour => props.setCircleColour(colour.hex)}
      />
    </>
  );
}