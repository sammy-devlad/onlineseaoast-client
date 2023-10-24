import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useUtils from "@/hooks/useUtils";
import { ITransactions } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BreadcrumNav from "../components/BreadcrumNav";
import TxtCard from "../components/TxtCard";

const Transactions = () => {
  useUtils("Transactions");
  const [transactions, setTxt] = useState<ITransactions[]>();
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      axiosPrivate
        .get("/transactions/")
        .then(({ data }) => {
          // console.log(data);
          setTxt(data.transactions);
        })
        .catch((e) => {
          console.log(e);
          toast.error("An Uknown error occured");
        });
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-item-center">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav
            pagenavTitle="Transactions"
            currentPage={`logs (${transactions?.length})`}
          />
          {/* breadcrum */}
          <div className="mb-3"></div>

          <div className="col-lg-8 mt-4">
            {transactions && transactions.length > 0 ? (
              transactions.map((tx) => <TxtCard transaction={tx} key={tx.id} />)
            ) : (
              <div className="text-center">
                <h6>No Transactions</h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
