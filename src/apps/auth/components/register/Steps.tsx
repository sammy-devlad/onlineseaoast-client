import { useContext } from "react";
import { CreateAcctContext } from "../../pages/CreateAcct";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const Steps = () => {
  const { currentPage } = useContext(CreateAcctContext)!;
  const pages = [<StepOne />, <StepTwo />, <StepThree />, <StepFour />];
  return pages[currentPage];
};

export default Steps;
