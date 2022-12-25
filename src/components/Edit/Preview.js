import NamelessDraggable from "./Draggables/NamelessDraggable";
import ChockyDraggable from "./Draggables/ChockyDraggable";
import SoobwayDraggable from "./Draggables/SoobwayDraggable";
import Button from "../Button";
import SoobwayCircleDraggable from "./Draggables/SoobwayCircleDraggable";
import SoobwayBlurbDraggable from "./Draggables/SoobwayBlurbDraggable";

export default function Preview(props) {

  const circles = props.state.soobwayCircles.map(soobwayCircle => {
    return (
      <SoobwayCircleDraggable
        key={props.state.soobwayCircles.indexOf(soobwayCircle)}
        circleColour={soobwayCircle.circleColour}
        circleIcon={soobwayCircle.circleIcon}
        iconInvert={soobwayCircle.iconInvert}
        iconSize={soobwayCircle.iconSize}
        fontAdjust={props.state.fontAdjust}
        defaultFontSize={props.defaultFontSize}
      />
    )
  })

  function reset() {
    window.location.reload();
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
          />
        }
        {props.id === "soobway" &&
        <>
          <div className="circles">
            {circles}
          </div>
          <SoobwayDraggable
            fontAdjust={props.state.fontAdjust}
            title={props.state.title}
            subtitle={props.state.subtitle}
          />
          <SoobwayBlurbDraggable
            blurb={props.state.blurb}
            fontAdjust={props.state.fontAdjust}
          />
        </>
        }
      </div>
      <Button
        text="reset"
        onClick={reset}
      />
    </div>
  );
}