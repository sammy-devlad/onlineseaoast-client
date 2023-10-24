import useUtils from "@/hooks/useUtils";
import {
  ICreateAcctContext,
  ICreateAcctFormData,
  IFormData,
  IVerifyData,
} from "@/types";
import { axiosPublic } from "@/utils/helper";
import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Steps from "../components/register/Steps";

export const CreateAcctContext = createContext<ICreateAcctContext | undefined>(
  undefined
);

const CreateAcct = () => {
  useUtils("Create Account");
  const [currentPage, setcurrentPage] = useState(0);
  const [loading, setloading] = useState(false);
  const [verifyData, setverifyData] = useState<IVerifyData>();
  const [formData, setformData] = useState<ICreateAcctFormData>({
    first_name: "",
    last_name: "",
    phone_number: "",
    date_of_birth: "",
    gender: "",
    next_of_kin: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",

    security_pin: "",
    account_type: "",
  });

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const nextPage = (newData: IFormData) => {
    setformData((prev) => ({ ...prev, ...newData }));
    setcurrentPage((prev) => prev + 1);
  };
  const prevPage = (newData: IFormData) => {
    setformData((prev) => ({ ...prev, ...newData }));
    setcurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    if (!searchParams.get("authToken")) {
      toast.error("Invalid Link");
      navigate("/sign-up");
    }
    let source = axios.CancelToken.source();
    axiosPublic
      .get(`/sign-up/?authToken=${searchParams.get("authToken")}`, {
        cancelToken: source.token,
      })
      .then(({ data }) => {
        if (data.error) {
          toast.error("The confirmation link was invalid");
          navigate("/sign-up");
        } else {
          setformData(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      source.cancel("canceling request");
    };
  }, []);

  return (
    <>
      <CreateAcctContext.Provider
        value={{
          currentPage,
          setcurrentPage,
          nextPage,
          prevPage,
          loading,
          setloading,
          formData,
          setformData,
          verifyData,
        }}
      >
        <Steps />
      </CreateAcctContext.Provider>
    </>
  );
};

export default CreateAcct;
