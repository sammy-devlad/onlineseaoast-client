import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import { useFormik } from "formik";
import { useContext } from "react";
import { CreateAcctContext } from "../../pages/CreateAcct";
import { CreateAccThreeSchema } from "../../utils";

const StepThree = () => {
  const {
    formData,
    loading,

    nextPage,
    prevPage,
  } = useContext(CreateAcctContext)!;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number,
        date_of_birth: formData.date_of_birth,
        gender: formData.gender,
        next_of_kin: formData.next_of_kin,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        zipcode: formData.zipcode,

        security_pin: formData.security_pin,
        account_type: formData.account_type,
      },
      validationSchema: CreateAccThreeSchema,

      onSubmit(values) {
        nextPage(values);
      },
    });

  return (
    <>
      <div className="auth-card setup">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Personal
            <span> information</span>
          </h2>
        </div>
        <div className="authCardBody">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3">
                  <CustomInput
                    placeholder="Security Pin"
                    name="security_pin"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Security Pin"
                    error={errors.security_pin}
                    touched={touched.security_pin}
                    type={"number"}
                    value={values.security_pin}
                    id={""}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <CustomSelect
                    handleSelectChange={handleChange}
                    label="Accout type"
                    error={errors.account_type}
                    value={values.account_type}
                    name="account_type"
                    id={""}
                  >
                    <option value="Savings account">Savings account</option>
                    <option value="Checking Account">Checking Account</option>
                    <option value="Fixed Account">Fixed Account</option>
                  </CustomSelect>
                </div>
              </div>
            </div>

            <div className="smButton setup">
              <CustomButton
                color="outline-primary"
                text="Previous"
                loading={loading}
                type="button"
                handleClick={() => {
                  prevPage(values);
                }}
              />
              <CustomButton
                color="primary"
                text="Next"
                loading={loading}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StepThree;
