// FormData.jsx

import "./auth.css"; // Import CSS

// Reusable controlled input field
const FormData = ({
  label,        // Input label
  name,         // Input name
  type = "text",// Input type (text/password/email)
  value,        // Controlled value
  onChange,     // Change handler
  placeholder,
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>

      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormData;