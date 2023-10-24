import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { axiosPublic } from "@/utils/helper";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterSchema } from "../utils";
import { ISignUpFormdata, ISignUpResponse } from "@/types";
import { toast } from "react-toastify";
import useUtils from "@/hooks/useUtils";

const SignUp = () => {
  useUtils("Create a new acount");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const submitFormData = (formData: ISignUpFormdata) => {
    setloading(true);
    axiosPublic
      .post<ISignUpResponse>("/sign-up/", {
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirm_password,
      })
      .then(({ data }) => {
        // console.log(data);
        if (data.msg) {
          navigate("/confirm-mail");
        } else if (data.password) {
          if (Array.isArray(data.password)) {
            data.password.forEach((msg) => {
              toast.error(msg);
            });
          } else {
            toast.error(data.password);
          }
        } else if (data.email) {
          if (Array.isArray(data.email)) {
            data.email.forEach((msg) => {
              toast.error(msg);
            });
          } else {
            toast.error(data.email);
          }
        }

        setloading(false);
      })
      .catch((e) => {
        console.log(e);
        setloading(false);
        toast.error("An Error Occurred");
      });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: RegisterSchema,
      onSubmit(values, formikHelpers) {
        submitFormData(values);
      },
    });

  return (
    <>
      <div className="auth-card">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Create new
            <br />
            <span>account</span> with us
          </h2>
          <h4>
            Already have an account? <Link to="/sign-in">click here</Link>
          </h4>
        </div>
        <div className="authCardBody">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <CustomInput
                name="email"
                label="Email"
                type="email"
                placeholder="name@example.com"
                id="input_email"
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.email}
                error={errors.email}
                touched={touched.email}
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
                id={"input_password"}
              />
            </div>
            <div className="mb-3">
              <CustomInput
                placeholder="****"
                name="confirm_password"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Confirm Password"
                error={errors.confirm_password}
                touched={touched.confirm_password}
                type={"password"}
                value={values.confirm_password}
                id={"c_password_id"}
              />
            </div>

            <div className="smButton reg">
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

export default SignUp;
