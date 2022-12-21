import ReactCurvedText from "react-curved-text";

export default function ChockyTitle(props) {
  return (
      <ReactCurvedText
        width={200}
        height={55}
        cx={105 + Number(props.xPosition)}
        cy={135}
        rx={100}
        ry={100}
        startOffset={110 + Number(props.curveAdjust)}
        reversed={true}
        text={props.title}
        textProps={{ style: { fontSize: 40 + Number(props.fontAdjust) } }}
        textPathProps={{"fill": "white"}}
      />
  );
}