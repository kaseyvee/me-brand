import Draggable from "react-draggable";

export default function SoobwayCircleItem(props) {
  return (
    <Draggable
      defaultPosition={{x: 6, y: 19}}
      bounds="parent"
    >
      <div
        className="circle-preview"
        style={{backgroundColor: `${props.circleColour}`}}
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