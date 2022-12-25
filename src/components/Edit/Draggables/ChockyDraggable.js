import Draggable from "react-draggable";
import ReactCurvedText from "react-curved-text";

export default function ChockyDraggable(props) {

  return (
    <Draggable
      defaultPosition={{x: 12, y: 10}}
      bounds="parent"
    >
      <div className="drag-me chocky-text">
        <Draggable>
          <div>
            <ReactCurvedText
              width={200}
              height={80}
              cx={105}
              cy={150}
              rx={100}
              ry={100}
              startOffset={110 + Number(props.curveAdjust)}
              reversed={true}
              text={props.title}
              textProps={{ style: { fontSize: 40 + Number(props.fontAdjust) } }}
              textPathProps={{"fill": "white"}}
            />
          </div>
        </Draggable>
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