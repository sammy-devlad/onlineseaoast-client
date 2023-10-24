import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useAppDispatch } from "@/hooks/useStore";
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { SignInContext } from "../../pages/SignIn";
import { SecuritySchema } from "../../utils";
import { toast } from "react-toastify";
import { logUser } from "../../slicer";

const StepTwo = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { setloading, laoding, storeDate } = useContext(SignInContext)!;
  let [searchParams] = useSearchParams();
  const nexTpage = searchParams.get("next")
    ? `${searchParams.get("next")}`
    : null;

  const ridirectUrl = nexTpage || "/dashboard";

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        security_code: "",
      },
      validationSchema: SecuritySchema,
      onSubmit(values) {
        subMitData(values);
      },
    });

  const subMitData = (val: typeof values) => {
    setloading(true);
    const user = storeDate!.user;
    if (val.security_code != user.security_pin) {
      toast.error("Security pin is invalid");
      setloading(false);
      return false;
    }
    const FORMdata = storeDate!;
    dispatch(logUser(FORMdata));
    if (FORMdata.user.is_superuser) {
      navigate("/admin/", { replace: false });
    } else {
      navigate(ridirectUrl, { replace: false });
    }
  };
  useEffect(() => {
    setloading(false);

    return () => {};
  }, []);

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
                placeholder="****"
                name="security_code"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Security code"
                error={errors.security_code}
                touched={touched.security_code}
                type={"text"}
                value={values.security_code}
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
                <Link to="/sign-in">Reset</Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
