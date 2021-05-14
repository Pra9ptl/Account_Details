import "./InputField.css";

const InputFields = ({ placeholder, fieldValue, onChange, width }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="inputField"
      value={fieldValue}
      onChange={e => onChange(e.target.value)}
      style={{width: width}}
    />
  );
};

export default InputFields;