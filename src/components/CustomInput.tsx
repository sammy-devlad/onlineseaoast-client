import { ICustomInput } from "@/types";

const CustomInput = ({
  label,
  type,
  id,
  placeholder,
  name,
  handleBlur,
  handleChange,
  error,
  value,
  touched,
}: ICustomInput) => {
  return (
    <>
      <label htmlFor={`id_${name}`} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={
          "form-control " + "" + " " + (error && touched ? "is-invalid" : null)
        }
        id={`id_${name}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && touched ? <p className="invalid-feedback">{error}</p> : null}
    </>
  );
};

export default CustomInput;
