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
  const [count, setTxtcount] = useState();
  const [to_day, setto_day] = useState<String>();
  const is_negative = user.balance < 0;
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    const currentDate = new Date();
    setto_day(currentDate.toLocaleTimeString());
    const timeout = setTimeout(() => {
      axiosPrivate
        .get("/dashboard/")
        .then(({ data }) => {
          setTxt(data.transactions);
          setTxtcount(data.transactions_count);
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
            <div className="row">
              <div className="col-lg-4 mt-4">
                <div className="report-box zoom-in">
                  <div className="box p-iv">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        icon-name="credit-card"
                        data-lucide="credit-card"
                        className="lucide lucide-credit-card report-box__icon text-primary"
                      >
                        <rect
                          x="1"
                          y="4"
                          width="22"
                          height="16"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>
                      <div className="ml-auto">
                        <div className="report-box__indicator bg-primary   cursor-pointer">
                          <span id="date">{to_day}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            icon-name="chevron-up"
                            data-lucide="chevron-up"
                            className="lucide lucide-chevron-up w-4 h-4 ml-0.5"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      <small>$</small>
                      <span
                        className={is_negative ? "text-danger" : "text-success"}
                      >
                        {formatNumber(user.balance)}
                      </span>
                    </div>
                    <div className="text-base text-slate-500 mt-1">Balance</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-4">
                <div className="report-box zoom-in">
                  <div className="box p-iv">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right-left report-box__icon text-success"
                      >
                        <path d="m16 3 4 4-4 4" />
                        <path d="M20 7H4" />
                        <path d="m8 21-4-4 4-4" />
                        <path d="M4 17h16" />
                      </svg>
                      <div className="ml-auto">
                        <div className="report-box__indicator bg-primary   cursor-pointer">
                          Premium
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            icon-name="chevron-up"
                            data-lucide="chevron-up"
                            className="lucide lucide-chevron-up w-4 h-4 ml-0.5"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      {count}
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Transactions
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-4">
                <div className="report-box zoom-in">
                  <div
                    className="box p-iv"
                    style={{ backgroundColor: "#171616" }}
                  >
                    <div className="flex">
                      <img
                        src="/home/iconl.png"
                        alt="  Bank"
                        className=""
                        style={{ width: "30px" }}
                      />
                      <div className="ml-auto">
                        <div
                          className="r"
                          title=""
                          style={{
                            color: "#fff",
                            fontSize: "21px",
                            fontWeight: 700,
                          }}
                        >
                          ...
                        </div>
                      </div>
                    </div>

                    <div className="leading-8 mt-6">
                      <span
                        style={{
                          color: "#fff",
                          fontSize: "25px",
                          fontWeight: 700,
                        }}
                      >
                        {user.username}
                      </span>
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      {user.first_name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mt-5">
            <div className="row">
              <div className="col-lg-8">
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
              <div className="col-lg-4 mt-5">
                <div className="alert alert-warning borderless">
                  <h5 className="alert-heading">
                    Want to learn more about any service?
                  </h5>
                  <p>Send an E-mail to your Accout manager</p>
                  <div className="alert-btn">
                    <a
                      className="btn btn-primary white-gold"
                      href="mailto:support@onlineseacoast.com"
                    >
                      <i className="os-icon os-icon-ui-92"></i>
                      <span>Open a Ticket</span>
                    </a>
                  </div>
                </div>
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
