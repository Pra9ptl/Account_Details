const Checkbox = props => {
  return (
    <input
      type="checkbox"
      id={props.id}
      name={props.name}
      checked={props.checked}
      value={props.value}
      onChange={() => {}}
    />
  );
};

export default Checkbox;
