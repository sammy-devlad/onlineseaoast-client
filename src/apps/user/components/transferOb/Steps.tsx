import { useContext } from "react";
import { TransferObContext } from "../../pages/TransferOB";
import StepTwo from "../transferOb/StepTwo";
import StepOne from "./StepOne";

const Steps = () => {
  const { currentSteps } = useContext(TransferObContext)!;
  let contents = [<StepOne />, <StepTwo />];
  return contents[currentSteps];
};

export default Steps;
