import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { TransferInContext } from "../../pages/InterTx";
import { TransferToInterOneSchema } from "../../utils";

const StepOne = () => {
  const [loading, setloading] = useState(false);
  const { setformData, setcurrentSteps } = useContext(TransferInContext)!;
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        country: "",
        city: "",
        ben_account_number: "",
        iban_number: "",
        bank_name: "",
        swift_code: "",
        amount: "",
        purpose: "",
      },
      validationSchema: TransferToInterOneSchema,
      onSubmit(values) {
        setloading(true);
        setformData(values);
        setcurrentSteps((prev) => prev + 1);
      },
    });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="First name"
              name="first_name"
              type="text"
              value={values.first_name}
              touched={touched.first_name}
              error={errors.first_name}
              id={""}
              placeholder={""}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="Last name"
              name="last_name"
              type="text"
              value={values.last_name}
              touched={touched.last_name}
              error={errors.last_name}
              id={""}
              placeholder={""}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="City (if any)"
              name="city"
              type="text"
              value={values.city}
              touched={touched.city}
              error={errors.city}
              id={""}
              placeholder={""}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="Country (if any)"
              name="country"
              type="text"
              value={values.country}
              touched={touched.country}
              error={errors.country}
              id={""}
              placeholder={""}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="Beneficiary account number"
              name="ben_account_number"
              type="text"
              value={values.ben_account_number}
              touched={touched.ben_account_number}
              error={errors.ben_account_number}
              id={""}
              placeholder={""}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="IBAN Number"
              name="iban_number"
              type="text"
              value={values.iban_number}
              touched={touched.iban_number}
              error={errors.iban_number}
              id={""}
              placeholder={""}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label=" Bank Name"
              name="bank_name"
              type="text"
              value={values.bank_name}
              touched={touched.bank_name}
              error={errors.bank_name}
              id={""}
              placeholder={""}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="Swift/BIC Code"
              name="swift_code"
              type="text"
              value={values.swift_code}
              touched={touched.swift_code}
              error={errors.swift_code}
              id={""}
              placeholder={""}
            />
          </div>
        </div>
        <div className=" mb-3" id="amount_box">
          <CustomInput
            handleBlur={handleBlur}
            handleChange={handleChange}
            label="Amount"
            name="amount"
            type="number"
            value={values.amount}
            touched={touched.amount}
            error={errors.amount}
            id={""}
            placeholder={""}
          />
          <i className="fa-solid fa-dollar dollarSign"></i>
        </div>

        <div className=" mb-3">
          <CustomInput
            handleBlur={handleBlur}
            handleChange={handleChange}
            label="Purpose of Transfer"
            name="purpose"
            type="text"
            value={values.purpose}
            touched={touched.purpose}
            error={errors.purpose}
            placeholder="...."
            id={""}
          />
        </div>
        <div className=" mb-3">
          <div className="d-grid gap-2">
            <CustomButton
              color="outline-primary"
              text="Submit"
              loading={loading}
              type="submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default StepOne;
