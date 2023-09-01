import "./Input.css";

export default function Input(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}
