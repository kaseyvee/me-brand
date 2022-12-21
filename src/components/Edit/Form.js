import Input from "./Input";
import Button from "../Button";

export default function Form(props) {

  return (
    <form>
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
        <div className="edit-buttons">
          <Button
            text={`toggle to ${props.previewToggle}`}
            onClick={props.handlePreviewToggle}
          />
          <Button
            text="download"
            onClick={props.handleDownload}
          />
        </div>
      </form>
  );
}