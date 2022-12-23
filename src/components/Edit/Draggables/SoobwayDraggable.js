import Draggable from "react-draggable";

export default function SoobwayDraggable(props) {

  return (
    <Draggable
      defaultPosition={{x: 6, y: 19}}
      bounds="parent"
    >
      <div className="drag-me">
        <h1 className="title" style={{fontSize: `${20 + Number(props.fontAdjust)}px`}}>{props.title}</h1>
        <h1 style={{fontSize: `${20 + Number(props.fontAdjust)}px`}}>{props.subtitle}</h1>
      </div>
    </Draggable>
  );
}