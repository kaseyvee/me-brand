import Draggable from "react-draggable";

export default function SoobwayCircleDraggable(props) {

  return (
    <Draggable
      defaultPosition={{x: 6, y: 62}}
      grid={[2, 2]}
      bounds="parent"
    >
      <div
        className="circle-preview circle-item drag-me"
        style={{backgroundColor: `${props.circleColour}`, width: `${props.defaultFontSize(props.iconSize, 25, 16) + Number(props.fontAdjust)}px`, height: `${props.defaultFontSize(props.iconSize, 25, 16) + Number(props.fontAdjust)}px`, margin: `${1}px` }}
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