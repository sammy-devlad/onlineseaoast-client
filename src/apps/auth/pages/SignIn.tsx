import useUtils from "@/hooks/useUtils";
import { ISignInContext, ISigningResponse } from "@/types";
import { createContext, useState } from "react";
import Steps from "../components/login/Steps";

export const SignInContext = createContext<ISignInContext | undefined>(
  undefined
);

const SignIn = () => {
  useUtils("Log into your account");
  const [currentPage, setCurrentPage] = useState(0);
  const [laoding, setloading] = useState(false);
  const [storeDate, setstoreDate] = useState<ISigningResponse>();
  return (
    <>
      <SignInContext.Provider
        value={{
          currentPage,
          setCurrentPage,
          setstoreDate,
          storeDate,
          laoding,
          setloading,
        }}
      >
        <Steps />
      </SignInContext.Provider>
    </>
  );
};

export default SignIn;
