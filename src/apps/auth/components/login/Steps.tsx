import { useContext } from "react";
import { SignInContext } from "../../pages/SignIn";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const Steps = () => {
  const { currentPage } = useContext(SignInContext)!;
  const page = [<StepOne />, <StepTwo />];
  return page[currentPage];
};

export default Steps;
