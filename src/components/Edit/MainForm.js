export default function MainForm(props) {

  return (
    <>
      <input 
        type="text"
        onChange={e => props.setState(prev => ({ ...prev, title: e.target.value}))}
        value={props.state.title}
        placeholder="title"
        autoComplete="off"
      />
      <input 
        type="text"
        onChange={e => props.setState(prev => ({ ...prev, subtitle: e.target.value}))}
        value={props.state.subtitle}
        placeholder="subtitle"
        autoComplete="off"
      />
      {props.id === "soobway" &&
        <input 
          type="text"
          onChange={e => props.setState(prev => ({ ...prev, blurb: e.target.value}))}
          value={props.state.blurb}
          placeholder="blurb"
          autoComplete="off"
        />
      }
      <input 
        type="number"
        onChange={e => props.setState(prev => ({ ...prev, fontAdjust: e.target.value}))}
        value={props.state.fontAdjust}
        placeholder="font size"
        autoComplete="off"
      />
      {props.id === "chocky" &&
        <input 
          type="number"
          onChange={e => props.setState(prev => ({ ...prev, curveAdjust: e.target.value}))}
          value={props.state.curveAdjust}
          placeholder="curve offset"
          autoComplete="off"
        />
      }
    </>
  );
}