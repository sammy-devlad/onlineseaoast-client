import { axiosPublic } from "@/utils/helper";
import axios, { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CreateAcctContext } from "../../pages/CreateAcct";

const StepFour = () => {
  const navigate = useNavigate();
  const { formData, verifyData } = useContext(CreateAcctContext)!;

  const _verifyData = verifyData!;
  const finalData = { ...formData, ..._verifyData };

  useEffect(() => {
    const timeout = setTimeout(() => {
      axiosPublic
        .post("/create-new-account/", finalData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          if (data.msg) {
            toast.info("Account Created check your mail box for your details");
            navigate("/sign-in");
          }
        })
        .catch((e) => {
          let err = e as AxiosError;
          if (err.response?.data) {
            let em = err.response.data as any;
            toast.error(em.error);
          }
          console.log(e);
        });
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="auth-card">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Form
            <span> Submit</span>
          </h2>
        </div>
        <div className="authCardBody">
          <form>
            <div className="text-center">
              <h3>
                <i className="fa fa-spinner fa-spin fa-2x"></i>
              </h3>
              <h1>Please wait ..</h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StepFour;
