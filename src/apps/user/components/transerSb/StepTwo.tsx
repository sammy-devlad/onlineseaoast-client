import { updateUser } from "@/apps/auth/slicer";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useAppSelector } from "@/hooks/useStore";
import { ITxtSameFormData, ITxtSameTwoResponse } from "@/types";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TxtSameContext } from "../../pages/TranferSB";
import { TransferToSameSchemaTwo } from "../../utils";

const StepTwo = () => {
  const user = useAppSelector((state) => state.user.user!);
  const { formData } = useContext(TxtSameContext)!;
  const dispatch = useDispatch();
  let form_data = formData!;
  const [loading, setLoading] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues: {
        security_code: "",
      },
      validationSchema: TransferToSameSchemaTwo,
      onSubmit: (values) => {
        sendRequest(form_data, values);
      },
    });

  const sendRequest = async (val: ITxtSameFormData, sec: typeof values) => {
    if (user.security_pin === sec.security_code) {
      setLoading(true);
      try {
        const { data } = await axiosPrivate.post<ITxtSameTwoResponse>(
          "/transfer-same/",
          val
        );

        if (data.error) {
          toast.error(data.msg);
        } else {
          dispatch(updateUser(data.tx.sender));
          toast.info("Transaction created");
        }
        navigate("/transactions-log", { replace: true });
      } catch (error) {}
      return true;
    } else {
      toast.error("Invalid security pin");
      return false;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" mb-3" id="amount_box">
          <CustomInput
            handleBlur={handleBlur}
            handleChange={handleChange}
            label="Security Pin"
            name="security_code"
            type="text"
            value={values.security_code}
            touched={touched.security_code}
            error={errors.security_code}
            id={""}
            placeholder={""}
          />
          <i className="fa-solid fa-lock dollarSign"></i>
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

export default StepTwo;
