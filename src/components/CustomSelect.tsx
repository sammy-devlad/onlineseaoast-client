import { ICustomSelect } from "@/types";

const CustomSelect = ({
  label,
  name,
  children,
  value,
  touched,
  error,
  handleSelectChange,
}: ICustomSelect) => {
  return (
    <>
      <label htmlFor={`id_${name}`} className="form-label">
        {label}
      </label>

      <select
        className={"form-select " + (error && touched ? "is-invalid" : null)}
        aria-label="Default select example"
        onChange={handleSelectChange}
        name={name}
        defaultValue={value}
      >
        <option value={""} disabled={true} hidden={true}>
          Select
        </option>

        {children}
      </select>
      {error && touched ? <p className="invalid-feedback">{error}</p> : null}
    </>
  );
};

export default CustomSelect;
