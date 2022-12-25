import Draggable from "react-draggable";

export default function SoobwayCircleDraggable
(props) {
  return (
    <Draggable
      defaultPosition={{x: 6, y: 62}}
      grid={[2, 2]}
      bounds="parent"
    >
      <div
        className="circle-preview circle-item drag-me"
        style={{backgroundColor: `${props.circleColour}`, width: `${25 + Number(props.fontAdjust)}px`, height: `${25 + Number(props.fontAdjust)}px`, margin: `${1}px` }}
        >
          <img
            src={props.circleIcon}
            alt=""
            style={{filter: `invert(${props.iconInvert})`}}
          />
      </div>
    </Draggable>
  );
}