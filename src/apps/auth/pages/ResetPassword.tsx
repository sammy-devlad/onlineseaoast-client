import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import useUtils from "@/hooks/useUtils";
import { IResetUserGetRes } from "@/types";
import { axiosPublic } from "@/utils/helper";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ResetPasswordSchema } from "../utils";

const ResetPassword = () => {
  useUtils("Reset password");
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState<IResetUserGetRes>();
  const [searchParams] = useSearchParams();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        newpassword: "",
        confirmnewpassword: "",
      },
      validationSchema: ResetPasswordSchema,
      onSubmit(values, formikHelpers) {
        resetPassword(values);
      },
    });

  const resetPassword = async (val: typeof values) => {
    setloading(true);
    try {
      const userValues = user!;
      const { data } = await axiosPublic.post("/reset-password/", {
        ...val,
        ...userValues,
      });
      if (data.error) {
        toast.error(data.msg);
        setloading(false);
        return false;
      } else {
        toast.info("Password Reset You can now login");
        navigate("/sign-in");
      }
    } catch (error) {
      let err = error as AxiosError;
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    const token = searchParams.get("token");
    const uid = searchParams.get("uid");
    const timeout = setTimeout(() => {
      setloading(true);
      axiosPublic
        .get(`/reset-password/?uid=${uid}&token=${token}`)
        .then(({ data }) => {
          if (data.error) {
            toast.error("Link is invalid");
            navigate("/forgot-password");
          }
          setloading(false);
          setUser(data.user);
        })
        .catch((err) => {
          console.log(err);
          toast.error("UNKNOWN ERROR OCCURRED");
          navigate("/forgot-password");
        });
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="auth-card">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Reset
            <br />
            your
            <span> Password</span>
          </h2>
          <h4>
            Don`t have an account? <Link to="/sign-up">click here</Link>
          </h4>
        </div>
        <div className="authCardBody">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <CustomInput
                placeholder="*****"
                name="newpassword"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="New Password"
                error={errors.newpassword}
                touched={touched.newpassword}
                type={"password"}
                value={values.newpassword}
                id={""}
              />
            </div>

            <div className="mb-3">
              <CustomInput
                placeholder="*****"
                name="confirmnewpassword"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Confirm New Password"
                error={errors.confirmnewpassword}
                touched={touched.confirmnewpassword}
                type={"password"}
                value={values.confirmnewpassword}
                id={""}
              />
            </div>

            <div className="smButton reg">
              <CustomButton
                color="outline-primary"
                text="Submit"
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

export default ResetPassword;
