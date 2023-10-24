import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { ISigningResponse } from "@/types";
import { axiosPublic } from "@/utils/helper";
import { AxiosError } from "axios";
import { FormikValues, useFormik } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { SignInContext } from "../../pages/SignIn";
import { Loginschema } from "../../utils";

const StepOne = () => {
  const { laoding, setloading, setstoreDate, setCurrentPage } =
    useContext(SignInContext)!;

  const sendUserlogin = async (val: FormikValues) => {
    setloading(true);
    axiosPublic
      .post<ISigningResponse>("/sign-in/", val)
      .then(({ data }) => {
        // console.log(data);
        if (data.error) {
          if (Array.isArray(data.error)) {
            data.error.forEach((err) => {
              toast.error(err);
            });
          } else {
            toast.error(data.error);
          }
          setloading(false);
          return false;
        }
        setloading(false);
        setstoreDate(data);
        setCurrentPage((prev) => prev + 1);
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Loginschema,
      onSubmit(values, formikHelpers) {
        // console.log(values);
        sendUserlogin(values);
      },
    });
  return (
    <>
      <div className="auth-card">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Login into
            <br />
            your
            <span> account</span>
          </h2>
          <h4>
            Don`t have an account? <Link to="/sign-up">click here</Link>
          </h4>
        </div>
        <div className="authCardBody">
          <form className="loginFormOnne" onSubmit={handleSubmit}>
            <div className="mb-3">
              <CustomInput
                placeholder="Account number"
                name="username"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Account Number"
                error={errors.username}
                touched={touched.username}
                type={"text"}
                value={values.username}
                id={""}
              />
            </div>
            <div className="mb-3">
              <CustomInput
                placeholder="*****"
                name="password"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Password"
                error={errors.password}
                touched={touched.password}
                type={"password"}
                value={values.password}
                id={""}
              />
            </div>
            <div className="smButton">
              <CustomButton
                color="outline-primary"
                text="Submit"
                loading={laoding}
                type="submit"
              />
              <h2>
                <Link to="/forgot-password">Forgot password?</Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StepOne;
