import { useAppSelector } from "@/hooks/useStore";
import useUtils from "@/hooks/useUtils";
import { ITransferInContext, ITxtInterFormData } from "@/types";
import { createContext, useState } from "react";
import BreadcrumNav from "../components/BreadcrumNav";
import Steps from "../components/transferIn/Steps";
import { formatNumber } from "../utils";

export const TransferInContext = createContext<ITransferInContext | undefined>(
  undefined
);

const InterTx = () => {
  useUtils("International transfer");
  const user = useAppSelector((state) => state.user.user!);
  const [currentSteps, setcurrentSteps] = useState(0);
  const [formData, setformData] = useState<ITxtInterFormData>();
  return (
    <>
      <div className="container">
        <div className="row justify-content-center  ">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav pagenavTitle="Transfer" currentPage="transfer" />
          {/* breadcrum */}
          <div className="mt-4"></div>

          <div className="col-lg-4">
            <div className="amountBox">
              <h4>available balance</h4>
              <h2>
                $<span>{formatNumber(user.balance)}</span>
              </h2>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="transferCard">
              <p>International transfer</p>
              <TransferInContext.Provider
                value={{ currentSteps, setcurrentSteps, formData, setformData }}
              >
                <Steps />
              </TransferInContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterTx;
