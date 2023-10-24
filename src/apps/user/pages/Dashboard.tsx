import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useAppSelector } from "@/hooks/useStore";
import useUtils from "@/hooks/useUtils";
import { ITransactions } from "@/types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import BreadcrumNav from "../components/BreadcrumNav";
import TxtCard from "../components/TxtCard";
import { formatNumber } from "../utils";

const Dashboard = () => {
  useUtils("Account overview");
  const user = useAppSelector((state) => state.user.user)!;
  const [transactions, setTxt] = useState<ITransactions[]>();
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      axiosPrivate
        .get("/dashboard/")
        .then(({ data }) => {
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
        <div className="row">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav
            pagenavTitle="Dashboard"
            currentPage="account overview"
          />
          {/* breadcrum */}
          <div className="col-lg-12">
            <div className="accountOv">
              <div className="accountOVBox text-truncate hiddenMobile">
                <h4 className="text-muted">account number</h4>
                <h2 className="text-success">{user.username}</h2>
              </div>

              <div className="accountOVBox balance text-truncate ">
                <div>
                  <h4 className="text-muted">Balance</h4>
                  <h2>
                    $
                    <span className="text-warning">
                      {formatNumber(user.balance)}
                    </span>
                  </h2>
                </div>
                <div className="sendIconBox">
                  <a href="#" className="sendLink">
                    <i className="fa-solid fa-upload"></i>
                  </a>
                </div>
              </div>

              <div className="accountOVBox text-truncate hiddenMobile">
                <h4 className="text-muted">Account name</h4>
                <h2 style={{ color: "#b71b1b" }}>
                  {user.first_name + " " + user.last_name}
                </h2>
              </div>
              <div className="alert alert-warning borderless">
                <h5 className="alert-heading">
                  Want to learn more about any service?
                </h5>
                <p>Send an E-mail to your Accout manager</p>
                <div className="alert-btn">
                  <a
                    className="btn btn-primary white-gold"
                    href="mailto:support@onlineseacoastacct.net"
                  >
                    <i className="os-icon os-icon-ui-92"></i>
                    <span>Open a Ticket</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="iframeBox">
              <h4 className="ibTitle">Currency exchange</h4>
              <div className="">
                <iframe
                  src="https://themoneyconverter.com/CurrencyConverter?tab=0&bg=ffffff&from=USD&to=EUR"
                  width="100%"
                  frameBorder="0"
                  height="400"
                  seamless={true}
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="recentTxt mb-4">
              <div className="recentTxtHeade">
                <h3>Recent transaction</h3>
                <Link to="/transactions-log">
                  more <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
              <div className="recentTxtBody">
                {transactions ? (
                  transactions.map((tx) => (
                    <TxtCard transaction={tx} key={tx.id} />
                  ))
                ) : (
                  <div className="text-center">
                    <h6>No Recent Transactions</h6>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
