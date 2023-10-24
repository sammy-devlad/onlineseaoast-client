import { useAppSelector } from "@/hooks/useStore";
import useUtils from "@/hooks/useUtils";
import { ITransferToSameContext, ITxtSameFormData } from "@/types";
import { createContext, useState } from "react";
import BreadcrumNav from "../components/BreadcrumNav";
import TxtSameStep from "../components/transerSb/Steps";
import { formatNumber } from "../utils";

export const TxtSameContext = createContext<ITransferToSameContext | undefined>(
  undefined
);

const TranferSB = () => {
  useUtils("Transfer to onlineseacoat bank");
  const [currentSteps, setcurrentSteps] = useState(0);
  const [formData, setformData] = useState<ITxtSameFormData>();
  const user = useAppSelector((state) => state.user.user!);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-item-center">
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
              <p>Transfer to the same bank</p>

              <TxtSameContext.Provider
                value={{ currentSteps, setcurrentSteps, formData, setformData }}
              >
                <TxtSameStep />
              </TxtSameContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TranferSB;
