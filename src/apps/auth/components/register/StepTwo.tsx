import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import { countryList } from "@/utils";
import { useFormik } from "formik";
import { useContext } from "react";
import { CreateAcctContext } from "../../pages/CreateAcct";
import { CreateAccTwoSchema } from "../../utils";

const StepTwo = () => {
  const {
    formData,
    loading,

    nextPage,
    prevPage,
  } = useContext(CreateAcctContext)!;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        zipcode: formData.zipcode,
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number,
        date_of_birth: formData.date_of_birth,
        gender: formData.gender,
        next_of_kin: formData.next_of_kin,

        security_pin: formData.security_pin,
        account_type: formData.account_type,
      },
      validationSchema: CreateAccTwoSchema,

      onSubmit(values, formikHelpers) {
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
                    placeholder="Street name"
                    name="address"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Street Name"
                    error={errors.address}
                    touched={touched.address}
                    type={"text"}
                    value={values.address}
                    id={""}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="City"
                    name="city"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="City"
                    error={errors.city}
                    touched={touched.city}
                    type={"text"}
                    value={values.city}
                    id={""}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="state"
                    name="state"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="State"
                    error={errors.state}
                    touched={touched.state}
                    type={"text"}
                    value={values.state}
                    id={""}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomSelect
                    handleSelectChange={handleChange}
                    label="Country"
                    error={errors.country}
                    value={values.country}
                    name="country"
                    id={""}
                  >
                    {countryList.map((el, index) => (
                      <option value={el} key={index}>
                        {el}
                      </option>
                    ))}
                  </CustomSelect>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="Zipcode"
                    name="zipcode"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Zipcode"
                    error={errors.zipcode}
                    touched={touched.zipcode}
                    type={"text"}
                    value={values.zipcode}
                    id={""}
                  />
                </div>
              </div>
            </div>

            <div className="smButton setup">
              <CustomButton
                color="outline-primary"
                text="Previous"
                loading={loading}
                type="button"
                handleClick={(e) => {
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

export default StepTwo;
