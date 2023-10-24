import { useContext } from "react";
import { TxtSameContext } from "../../pages/TranferSB";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const TxtSameStep = () => {
  const { currentSteps } = useContext(TxtSameContext)!;

  const contents = [<StepOne />, <StepTwo />];
  return contents[currentSteps];
};

export default TxtSameStep;
