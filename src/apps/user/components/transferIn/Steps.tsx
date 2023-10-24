import { useContext } from "react";
import { TransferInContext } from "../../pages/InterTx";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const Steps = () => {
  const { currentSteps } = useContext(TransferInContext)!;
  let context = [<StepOne />, <StepTwo />];
  return context[currentSteps];
};

export default Steps;
