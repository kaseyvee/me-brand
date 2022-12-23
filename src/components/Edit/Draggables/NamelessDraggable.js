import Draggable from "react-draggable";

export default function NamelessDraggable(props) {

  return (
    <Draggable
      defaultPosition={{x: 20, y: 90}}
      bounds="parent"
    >
      <div className="drag-me">
        <h1 style={{fontSize: `${26 + Number(props.fontAdjust)}px`}}>{props.title}</h1>
        <h2 style={{fontSize: `${19 + Number(props.fontAdjust)}px`}}>{props.subtitle}</h2>
      </div>
    </Draggable>
  );
}