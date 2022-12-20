import "./Input.scss"

export default function Input(props) {

  return (
    <input
      id={props.name}
      name={props.name}
      type={props.type}
      placeholder={props.name}
      onChange={props.onChange}
      value={props.value}
      autoComplete="off"
      step={props.step}
    />
  );
}