import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useAppSelector } from "@/hooks/useStore";
import useUtils from "@/hooks/useUtils";
import { ITransactions } from "@/types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { formatNumber } from "../utils";

const Dashboard = () => {
  useUtils("Account overview");
  const user = useAppSelector((state) => state.user.user)!;
  const [transactions, setTxt] = useState<ITransactions[]>();
  const [txCount, setTxtcount] = useState();
  const [recievedAmount, setrecAmount] = useState();
  const [to_day, setto_day] = useState<String>();
  const is_negative = user.balance < 0;
  const axiosPrivate = useAxiosPrivate();
  const firstTransaction = transactions?.[0];
  useEffect(() => {
    const currentDate = new Date();
    setto_day(currentDate.toLocaleTimeString());
    const timeout = setTimeout(() => {
      axiosPrivate
        .get("/dashboard/")
        .then(({ data }) => {
          console.log(data);
          setTxt(data.transactions);
          setTxtcount(data.transactions_count);
          setrecAmount(data.received_amount);
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
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-9">
          <div className="grid grid-cols-12 gap-6">
            {/* <!-- BEGIN: General Report --> */}
            <div className="col-span-12 mt-8">
              <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Accounts Summary
                </h2>
                <a href="" className="ml-auto flex items-center text-primary">
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
                    icon-name="refresh-ccw"
                    data-lucide="refresh-ccw"
                    className="lucide lucide-refresh-ccw w-4 h-4 mr-3"
                  >
                    <path d="M3 2v6h6"></path>
                    <path d="M21 12A9 9 0 006 5.3L3 8"></path>
                    <path d="M21 22v-6h-6"></path>
                    <path d="M3 12a9 9 0 0015 6.7l3-2.7"></path>
                  </svg>
                  Reload Page
                </a>
              </div>
              <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
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
                          <div className="report-box__indicator bg-primary  cursor-pointer">
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
                          className={
                            is_negative ? "text-danger" : "text-success"
                          }
                        >
                          {formatNumber(user.balance)}
                        </span>
                      </div>
                      <div className="text-base text-slate-500 mt-1">
                        Balance
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
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
                          icon-name="user"
                          data-lucide="user"
                          className="lucide lucide-user report-box__icon text-warning"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
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
                        {txCount}
                      </div>
                      <div className="text-base text-slate-500 mt-1">
                        Transactions
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                  <div className="report-box zoom-in">
                    <div
                      className="box p-iv"
                      style={{ backgroundColor: " #171616" }}
                    >
                      <div className="flex">
                        <img
                          src="/home/iconl.png"
                          alt="online Savings Bank"
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
            {/* <!-- END: General Report -->
        <!-- BEGIN: Sales Report --> */}
            <div className="col-span-12 lg:col-span-6 mt-8">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">E-Banking</h2>
              </div>

              <div className="intro-y col-span-12 md:col-span-6 box">
                <div className="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit">
                  <img alt="e" className="rounded-t-md" src="/home/bank2.jpg" />
                  <div className="absolute w-full flex items-center px-iv pt-6 z-10"></div>
                  <div className="absolute bottom-0 text-white px-iv pb-6 z-10">
                    <span className="bg-white/20 px-2 py-1 rounded">
                      Online Savings Bank
                    </span>
                    <a href="" className="block font-medium text-xl mt-3">
                      More than Banking
                    </a>
                  </div>
                </div>
                <div className="p-iv text-slate-600 dark:text-slate-500">
                  Offering tailor made banking products and high quality
                  solutions that create value for you.
                </div>
                <div className="flex items-center px-iv py-3 border-t border-slate-200/60 dark:border-darkmode-400"></div>
              </div>
            </div>
            {/* <!-- END: Sales Report -->
        <!-- BEGIN: Weekly Top Seller -->
        <!-- BEGIN: General Report --> */}
            <div className="col-span-12 lg:col-span-8 xl:col-span-6 mt-2">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Received Funds
                </h2>
              </div>
              <div className="report-box-2 intro-y mt-12 sm:mt-5">
                <div className="box sm:flex">
                  <div className="px-8 py-12 flex flex-col justify-center flex-1">
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
                      icon-name="shopping-bag"
                      data-lucide="shopping-bag"
                      className="lucide lucide-shopping-bag w-10 h-10 text-warning"
                    >
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 01-8 0"></path>
                    </svg>
                    <div className="relative text-3xl font-medium mt-12 pl-4 ml-0.5">
                      <span className="absolute text-2xl font-medium top-0 left-0 -ml-0.5">
                        $
                      </span>
                      {recievedAmount}
                    </div>

                    <div className="mt-4 text-slate-500">
                      Total amount recieved for this month
                    </div>
                    <div className="mt-4 text-slate-500"></div>
                    <button className="btn btn-outline-secondary relative justify-start rounded-full mt-12">
                      Send Funds
                      <span className="w-8 h-8 absolute flex justify-center items-center bg-primary text-white rounded-full right-0 top-0 bottom-0 my-auto ml-auto mr-0.5">
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
                          icon-name="arrow-right"
                          data-lucide="arrow-right"
                          className="lucide lucide-arrow-right w-4 h-4"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="px-8 py-12 flex flex-col justify-center flex-1 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-darkmode-300 border-dashed">
                    <div className="text-slate-500 text-xs">
                      LAST TRANSACTION
                    </div>
                    <div className="mt-1.5 flex items-center">
                      <div className="text-base">{firstTransaction?.date}</div>
                    </div>
                    <div className="text-slate-500 text-xs mt-5">
                      ACCOUNT NAME
                    </div>
                    <div className="mt-1.5 flex items-center">
                      <div className="text-base">
                        {user.first_name} {user.last_name}
                      </div>
                    </div>
                    <div className="text-slate-500 text-xs mt-5">
                      ACCOUNT NUMBER
                    </div>
                    <div className="mt-1.5 flex items-center">
                      <div className="text-base">{user.username}</div>
                    </div>
                    <div className="text-slate-500 text-xs mt-5">BANK</div>
                    <div className="mt-1.5 flex items-center">
                      <div className="text-base"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END: General Report -->
        <!-- END: Sales Report -->
     
    
        <!-- BEGIN: General Report --> */}
            <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
              <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                <div className="box p-iv zoom-in">
                  <div className="flex items-center">
                    <div className="w-2/4 flex-none">
                      <div className="text-lg font-medium truncate">
                        Personal Online Banking
                      </div>
                      <div className="text-slate-500 mt-1">
                        admin acct &nbsp;
                        <div style={{}}>
                          <div>Last Login {user.last_login}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-none ml-auto relative">
                      <div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                          <div className=""></div>
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                          <div className=""></div>
                        </div>
                      </div>
                      <canvas
                        id="report-donut-chart-1"
                        width="90"
                        height="90"
                        className="chartjs-render-monitor"
                        style={{ display: "block" }}
                      ></canvas>
                      <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">
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
                          icon-name="user"
                          data-lucide="user"
                          className="lucide lucide-user w-4 h-4"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                <div className="box p-iv zoom-in">
                  <div className="flex">
                    <div className="text-lg font-medium truncate mr-3"></div>

                    <div>
                      This site provides information about and access to
                      services offered by the Institution and all its respective
                      affiliates or partners.
                      <br />
                      ©2022 All rights reserved.
                    </div>
                    <div className="py-1 px-2 flex items-center rounded-full text-xs bg-slate-100 dark:bg-darkmode-400 text-slate-500 cursor-pointer ml-auto truncate">
                      <img
                        src="/home/logo_verisign.gif"
                        width="93"
                        height="52"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END: General Report -->*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
