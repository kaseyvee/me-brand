import "./Input.scss"

function Input(props) {

  return (
    <input
      id={props.name}
      name={props.name}
      type={props.type}
      placeholder={props.name}
      defaultValue=""
      autoComplete="off"
    />
  );
}

export default Input;
