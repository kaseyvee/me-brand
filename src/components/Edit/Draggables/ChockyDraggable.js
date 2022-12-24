import Draggable from "react-draggable";
import ChockyTitle from "../ChockyTitle";

export default function ChockyDraggable(props) {

  return (
    <Draggable
      defaultPosition={{x: 12, y: 10}}
      bounds="parent"
    >
      <div className="drag-me chocky-text">
        <ChockyTitle
          title={props.title}
          fontAdjust={props.fontAdjust}
          curveAdjust={props.curveAdjust}
          />
        <Draggable
          defaultPosition={{x: 0, y: -17}}
          bounds="parent" 
          axis="y"
        >
          <h2 style={{fontSize: `${10 + Number(props.fontAdjust)}px`}}>{props.subtitle}</h2>
        </Draggable>
      </div>
    </Draggable>
  );
}