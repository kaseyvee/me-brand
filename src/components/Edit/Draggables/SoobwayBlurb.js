import Draggable from "react-draggable";

export default function SoobwayBlurb(props) {
  return (
    <Draggable
      defaultPosition={{x: -190, y: 60}}
      grid={[2, 2]}
      bounds="parent"
    >
      <div className="drag-me">
        <h2 style={{fontSize: `${10 + Number(props.fontAdjust)}px`}}>{props.blurb}</h2>
      </div>
    </Draggable>
  );
}