import Draggable from "react-draggable";
import ChockyTitle from "./ChockyTitle";
import Button from "../Button";

export default function Preview(props) {

  return (
    <div className="Preview">
      <div className={props.toggleClass} id="download-me">
        {props.id === "nameless" &&
          <Draggable
            defaultPosition={{x: 20, y: 90}}
            bounds="parent"
          >
            <div className="drag-me">
              <h1 style={{fontSize: `${26 + Number(props.fontAdjust)}px`}}>{props.title}</h1>
              <h2 style={{fontSize: `${19 + Number(props.fontAdjust)}px`}}>{props.subtitle}</h2>
            </div>
          </Draggable>
        }
        {props.id === "chocky" &&
          <Draggable
            defaultPosition={{x: 12, y: 10}}
            bounds="parent"
          >
            <div className="drag-me chocky-text">
              <ChockyTitle
                title={props.title}
                fontAdjust={props.fontAdjust}
                curveAdjust={props.curveAdjust}
                xPosition={props.xPosition}
                yPosition={props.yPosition}
                />
              <Draggable
                defaultPosition={{x: 0, y: -25}}
                bounds="parent" 
                axis="y"
              >
                <h2 style={{fontSize: `${10 + Number(props.fontAdjust)}px`}}>{props.subtitle}</h2>
              </Draggable>
            </div>
          </Draggable>
        }
        {props.id === "soobway" &&
          <Draggable
            defaultPosition={{x: 6, y: 19}}
            bounds="parent"
          >
            <div className="drag-me">
              <h1 className="title" style={{fontSize: `${20 + Number(props.fontAdjust)}px`}}>{props.title}</h1>
              <h1 style={{fontSize: `${20 + Number(props.fontAdjust)}px`}}>{props.subtitle}</h1>
            </div>
          </Draggable>
        }
      </div>
      <Button
        text="reset"
        onClick={props.reset}
      />
    </div>
  );
}