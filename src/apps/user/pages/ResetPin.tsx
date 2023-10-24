import { updateUser } from "@/apps/auth/slicer";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import useUtils from "@/hooks/useUtils";
import { IUser } from "@/types";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";

import BreadcrumNav from "../components/BreadcrumNav";
import { resetPinSchema } from "../utils";

interface IErrorMsg {
  oldpin: Array<string>;
  newpin: Array<string>;
}

interface Response {
  user?: IUser;
  msg?: string;
  error?: string;
  error_msg?: IErrorMsg;
}

const ResetPin = () => {
  useUtils("Reset security pin");
  const [loading, setloading] = useState(false);
  const user = useAppSelector((state) => state.user.user)!;
  const dispatch = useAppDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        oldpin: "",
        newpin: "",
      },
      validationSchema: resetPinSchema(user.security_pin),
      onSubmit(values, formikHelpers) {
        setloading(true);
        axiosPrivate
          .post<Response>("/reset-support-pin/", values)
          .then(({ data }) => {
            console.log(data);
            if (data.msg && data.user) {
              dispatch(updateUser(data.user));
              toast.info("Support pin change");
              formikHelpers.resetForm();
            } else if (data.error) {
              toast.error("Something went wrong");
            }
          })
          .catch((e) => {
            toast.error("Error");

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
          <BreadcrumNav pagenavTitle="Reset pin" currentPage="pin" />
          {/* breadcrum */}
          <div className="mt-4"></div>
          <div className="col-lg-6">
            <div className=" resetCard">
              <div className="card-body">
                <h3>Reset pin</h3>
                <form onSubmit={handleSubmit} autoComplete="false">
                  <div className=" mb-3">
                    <CustomInput
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Old support pin"
                      name="oldpin"
                      type="text"
                      value={values.oldpin}
                      touched={touched.oldpin}
                      error={errors.oldpin}
                      placeholder={"Old support pin"}
                      id={""}
                    />
                  </div>
                  <div className=" mb-3">
                    <CustomInput
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="New support pin"
                      name="newpin"
                      type="text"
                      value={values.newpin}
                      touched={touched.newpin}
                      error={errors.newpin}
                      placeholder={"New support pin"}
                      id={""}
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

export default ResetPin;
