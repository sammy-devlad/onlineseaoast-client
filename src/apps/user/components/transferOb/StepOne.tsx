import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { TransferObContext } from "../../pages/TransferOB";
import { TransferOBOneSchema } from "../../utils";

const StepOne = () => {
  const [loading, setloading] = useState(false);
  const { setformData, setcurrentSteps } = useContext(TransferObContext)!;
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",

        email: "",
        ben_account_number: "",

        bank_name: "",
        route_num: "",
        amount: "",
        purpose: "",
      },
      validationSchema: TransferOBOneSchema,
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
              label="Email (if any)"
              name="email"
              type="email"
              value={values.email}
              touched={touched.email}
              error={errors.email}
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
              label="ABA Routing Number"
              name="route_num"
              type="text"
              value={values.route_num}
              touched={touched.route_num}
              error={errors.route_num}
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
