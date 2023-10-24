import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useAppSelector } from "@/hooks/useStore";
import useUtils from "@/hooks/useUtils";
import { ITransactions } from "@/types";
import moment from "moment";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import { STATUS } from "../utils";

const TransactionDetails = () => {
  useUtils("Transaction Details");
  const axiosPrivate = useAxiosPrivate();
  const [transaction, setTxt] = useState<ITransactions>();
  const [benneficiary_name, setbenneficiary_name] = useState("");
  const [rexText, setrexText] = useState("Loading..");
  const [modeN, setmodeN] = useState("");

  const [mode, setmode] = useState("");
  const { id } = useParams();

  const user = useAppSelector((state) => state.user.user)!;

  useEffect(() => {
    const timeout = setTimeout(() => {
      axiosPrivate
        .get(`/transactions/${id}`)
        .then(({ data }) => {
          if (data.transaction) {
            if (data.transaction.sender.username == user.username) {
              setmode("Send");
              setmodeN("to");
            } else {
              setmode("Receive");
              setmodeN("from");
            }

            if (data.transaction.interDetail) {
              setbenneficiary_name(data.transaction.interDetail.full_name);
            } else if (data.transaction.receiver) {
              setbenneficiary_name(data.transaction.receiver.full_name);
            }
          }
          setrexText("finished");
          setTxt(data.transaction);
        })
        .catch((e) => {
          console.log(e);
          setrexText("Not Found");
        });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [id]);
  const dialog = document.getElementById("dialog-wrapper") as HTMLElement;
  return ReactDOM.createPortal(
    <>
      <div className="txtDialog active">
        <Link to="/transactions-log" className="txtDialogclose">
          <i className="fa-solid fa-xmark"></i>
        </Link>
        <div className="txtDialogContent text-truncate">
          {transaction ? (
            <>
              <h5 className="text-center">Transaction</h5>
              <div className="txtDialogHead">
                <div>
                  {/* <div className="txtDHIcon">
                    <i className="fa-solid fa-clock-rotate-left text-info"></i>
                  </div> */}
                  <div className="txtDHname text-truncate">
                    <h4 className="">
                      <small className="text-small text-muted">
                        {" "}
                        {mode} {modeN} :
                      </small>{" "}
                      {benneficiary_name}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="txtDialogBody">
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>Type</td>
                      <td className="text-center">
                        <span id="with-user">{transaction.type}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Beneficiary</td>
                      <td className="text-center">
                        <span id="with-user">{transaction.ben_acct}</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Amount</td>
                      <td className="text-center text-danger">
                        $<span id="with-amount">{transaction.amount}</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Date</td>
                      <td className="text-center">
                        <span id="with-date">
                          {`${moment(transaction.date).format("MMM Do YY")}`}
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Description</td>
                      <td className="text-center text-truncate text-muted">
                        <span id="with-date">{transaction.purpose}</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Status</td>
                      <td className="text-center ">
                        {transaction.status == STATUS.DECLINED ? (
                          <span className="text-danger" id="with-status">
                            {transaction.status}
                          </span>
                        ) : null}
                        {transaction.status == STATUS.PENDING ? (
                          <span className="text-warning" id="with-status">
                            {transaction.status}
                          </span>
                        ) : null}

                        {transaction.status == STATUS.SUCCESS ? (
                          <span className="text-success" id="with-status">
                            {transaction.status}
                          </span>
                        ) : null}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-center">{rexText}</h3>
            </>
          )}
        </div>
      </div>
    </>,
    dialog
  );
};

export default TransactionDetails;
