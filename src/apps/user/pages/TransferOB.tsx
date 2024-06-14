import { useAppSelector } from "@/hooks/useStore";
import useUtils from "@/hooks/useUtils";
import { ITranserObContext, ITxtOtherFormData } from "@/types";
import { createContext, useState } from "react";
import BreadcrumNav from "../components/BreadcrumNav";
import Steps from "../components/transferOb/Steps";
import { formatNumber } from "../utils";
export const TransferObContext = createContext<ITranserObContext | undefined>(
  undefined
);

const TransferOB = () => {
  useUtils("Transfer to other banks");
  const user = useAppSelector((state) => state.user.user!);
  const [currentSteps, setcurrentSteps] = useState(0);
  const [formData, setformData] = useState<ITxtOtherFormData>();
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
              <p>Transfer to other bank</p>
              <TransferObContext.Provider
                value={{ currentSteps, setcurrentSteps, formData, setformData }}
              >
                <Steps />
              </TransferObContext.Provider>
              <small style={{ color: "red" }}>
                Warning: if you have insufficient funds in your account to cover
                the transactions, your account is at risk of going into
                overdraft.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferOB;
