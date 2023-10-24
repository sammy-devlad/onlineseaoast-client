import { useAppSelector } from "@/hooks/useStore";
import { ITxtcard } from "@/types";
import { Link } from "react-router-dom";
import moment from "moment";
import { formatNumber, STATUS } from "../utils";

const TxtCard = ({ transaction }: ITxtcard) => {
  let trxIcon: JSX.Element;
  let trxAmount: JSX.Element;
  let mode: string;
  const user = useAppSelector((state) => state.user.user)!;
  if (transaction.sender.username == user.username) {
    mode = "Send";
    trxIcon = <i className="fa-solid fa-upload text-danger"></i>;
    if (transaction.status == STATUS.SUCCESS) {
      trxAmount = (
        <h4 className="text-success">-${formatNumber(transaction.amount)}</h4>
      );
    } else if (transaction.status == STATUS.DECLINED) {
      trxAmount = (
        <h4 style={{ color: "orangered" }}>
          -${formatNumber(transaction.amount)}
        </h4>
      );
    } else {
      trxAmount = (
        <h4 className="text-warning">-${formatNumber(transaction.amount)}</h4>
      );
    }
  } else {
    mode = "Receive";
    trxIcon = <i className="fas fa-download text-warning"></i>;
    trxAmount = (
      <h4 className="text-success">+${formatNumber(transaction.amount)}</h4>
    );
  }

  return (
    <>
      <div className="in-trans-card">
        <div
          className="trans-icon"
          style={{ backgroundColor: "rgb(189, 182, 182)" }}
        >
          {trxIcon}
        </div>
        <div className="trans-name text-truncate">
          <h4>{mode}</h4>
          <p className="in-text-lead text-truncate">{`${moment(
            transaction.date
          ).format("MMMM Do YYYY, h:mm:ss a")}`}</p>
        </div>
        <div className="trans-amount">{trxAmount}</div>
        <div className="trans-detail">
          <div>
            <Link to={`/transactions-log/${transaction.id}`} className="">
              <i className="fas fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TxtCard;
