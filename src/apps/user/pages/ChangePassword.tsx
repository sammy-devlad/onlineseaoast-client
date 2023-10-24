import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useUtils from "@/hooks/useUtils";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";

import BreadcrumNav from "../components/BreadcrumNav";
import { changePasswordSchema } from "../utils";

const ChangePassword = () => {
  useUtils("Change password");
  const [loading, setloading] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        oldpassword: "",
        newpassword: "",
        confirmnewpassword: "",
      },
      validationSchema: changePasswordSchema,
      onSubmit(values, formikHelpers) {
        setloading(true);
        axiosPrivate
          .post("/change-password/", values)
          .then(({ data }) => {
            if (data.msg) {
              toast.info("Password change");
              formikHelpers.resetForm();
            } else if (data.errors) {
              let errs = data.errors as Array<string>;
              errs.forEach((e) => {
                toast.error(e);
              });
            }
          })
          .catch((e) => {
            let err = e as AxiosError;
            if (err.response?.status === 400) {
              toast.error("Old Password don't match");
            }
            console.log(e);
          });
        setloading(false);
      },
    });
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav pagenavTitle="Change password" currentPage="password" />
          {/* breadcrum */}
          <div className="mt-4"></div>
          <div className="col-lg-6">
            <div className=" resetCard">
              <div className="card-body">
                <h3>Change password</h3>
                <form onSubmit={handleSubmit} autoComplete="false">
                  <div className=" mb-3">
                    <CustomInput
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Old password"
                      name="oldpassword"
                      type="password"
                      value={values.oldpassword}
                      touched={touched.oldpassword}
                      error={errors.oldpassword}
                      id={""}
                      placeholder={""}
                    />
                  </div>

                  <div className=" mb-3">
                    <CustomInput
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="New password"
                      name="newpassword"
                      type="password"
                      value={values.newpassword}
                      touched={touched.newpassword}
                      error={errors.newpassword}
                      id={""}
                      placeholder={""}
                    />
                  </div>

                  <div className=" mb-3">
                    <CustomInput
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Confirm New password"
                      name="confirmnewpassword"
                      type="password"
                      value={values.confirmnewpassword}
                      touched={touched.confirmnewpassword}
                      error={errors.confirmnewpassword}
                      id={""}
                      placeholder={""}
                    />
                  </div>

                  <div className="d-grid gap-2">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
