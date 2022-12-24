import ReactCurvedText from "react-curved-text";
import Draggable from "react-draggable";

export default function ChockyTitle(props) {
  return (
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
  );
}