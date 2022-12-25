import Draggable from "react-draggable";

export default function SoobwayBlurbDraggable(props) {
  return (
    <Draggable
      defaultPosition={{x: 100, y: 35}}
      grid={[2, 2]}
      bounds="parent"
    >
      <div className="drag-me">
        <h2 style={{fontSize: `${10 + Number(props.fontAdjust)}px`}}>{props.blurb}</h2>
      </div>
    </Draggable>
  );
}