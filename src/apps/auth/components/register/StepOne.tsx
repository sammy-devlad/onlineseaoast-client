import CustomInput from "@/components/CustomInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useEffect, useState } from "react";
import { E164Number } from "libphonenumber-js/types";
import DatePicker from "react-datepicker";
import CustomSelect from "@/components/CustomSelect";
import CustomButton from "@/components/CustomButton";
import { CreateAcctContext } from "../../pages/CreateAcct";
import { useFormik } from "formik";
import { CreateAccOneSchema } from "../../utils";

const StepOne = () => {
  const [startDate, setStartDate] = useState(new Date(99, 11, 24));

  const {
    formData,
    loading,

    nextPage,
  } = useContext(CreateAcctContext)!;
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
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
    validationSchema: CreateAccOneSchema,

    onSubmit(values) {
      nextPage(values);
    },
  });

  const handlePhoneChange = (num: E164Number | undefined) => {
    setFieldValue("phone_number", num);
  };

  useEffect(() => {
    setFieldValue(
      "date_of_birth",
      `${startDate.getDate()}-${startDate.getMonth()}-${startDate.getFullYear()}`
    );

    return () => {};
  }, []);

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
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="first name"
                    name="first_name"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="First Name"
                    error={errors.first_name}
                    touched={touched.first_name}
                    type={"text"}
                    value={values.first_name}
                    id={""}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="Last name"
                    name="last_name"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Last Name"
                    error={errors.last_name}
                    touched={touched.last_name}
                    type={"text"}
                    value={values.last_name}
                    id={""}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <PhoneInput
                    defaultCountry={"US"}
                    required={true}
                    placeholder="Enter phone number"
                    value={values.phone_number}
                    onChange={(num) => {
                      handlePhoneChange(num);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Date of Birth(M/D/Y)
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => {
                      setFieldValue(
                        "date_of_birth",
                        `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
                      );
                      setStartDate(date);
                    }}
                    className="form-control"
                    required={true}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomSelect
                    handleSelectChange={handleChange}
                    label="Gender"
                    error={errors.gender}
                    value={values.gender}
                    name="gender"
                    id={""}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </CustomSelect>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="Next of Kin"
                    name="next_of_kin"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Next of Kin"
                    error={errors.next_of_kin}
                    touched={touched.next_of_kin}
                    type={"text"}
                    value={values.next_of_kin}
                    id={""}
                  />
                </div>
              </div>
            </div>

            <div className="smButton reg">
              {/* <CustomSubmitBtn
                color="outline-primary"
                text="Previous"
                loading={true}
                type="button"
              /> */}

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

export default StepOne;
