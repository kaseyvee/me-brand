import NamelessDraggable from "./Draggables/NamelessDraggable";
import ChockyDraggable from "./Draggables/ChockyDraggable";
import SoobwayDraggable from "./Draggables/SoobwayDraggable";
import Button from "../Button";

export default function Preview(props) {

  function reset() {
    props.setState(prev => ({ ...prev, fontAdjust: "", curveAdjust: "", xPosition: "", yPosition: ""}));
  }

  return (
    <div className="Preview">
      <div className={props.toggleClass} id="download-me">
        {props.id === "nameless" &&
          <NamelessDraggable
            fontAdjust={props.state.fontAdjust}
            title={props.state.title}
            subtitle={props.state.subtitle}
          />
        }
        {props.id === "chocky" &&
          <ChockyDraggable
            title={props.state.title}
            subtitle={props.state.subtitle}
            fontAdjust={props.state.fontAdjust}
            curveAdjust={props.state.curveAdjust}
            xPosition={props.state.xPosition}
            yPosition={props.state.yPosition}
          />
        }
        {props.id === "soobway" &&
          <SoobwayDraggable
            fontAdjust={props.state.fontAdjust}
            title={props.state.title}
            subtitle={props.state.subtitle}
          />
        }
      </div>
      <Button
        text="reset"
        onClick={reset}
      />
    </div>
  );
}