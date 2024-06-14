import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import useDynamicjs from "@/hooks/useDynamicjs";
import useDynamicCSS from "@/hooks/useDynamicCSS";

const UserLayout = () => {
  const scripts = [
    "/user/dist/js/app.js",
    "/user/dist/js/store.min.js",
    "/user/dist/js/jquery-idleTimeout.js",
  ];
  const links = ["/user/dist/css/app.css"];

  useDynamicCSS(links);

  useDynamicjs(scripts);
  useEffect(() => {
    document.body.classList.add("user");

    AOS.init({
      offset: 0,
      duration: 1200,
      easing: "ease-in-out",
    });

    return () => {};
  }, []);
  return (
    <>
      {/* <!-- BEGIN: Mobile Menu --> */}
      <div className="mobile-menu md:hidden">
        <div className="mobile-menu-bar">
          <a href="/" className="flex mr-auto">
            <img
              src="/home/logo.png"
              alt="Heritage Savings Bank"
              className="w-6"
              style={{ width: "160px" }}
            />
          </a>
          <a href="javascript:;" id="mobile-menu-toggler">
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
              icon-name="bar-chart-2"
              data-lucide="bar-chart-2"
              className="lucide lucide-bar-chart-2 w-8 h-8 text-white transform -rotate-90"
            >
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </a>
        </div>
        <nav>
          <ul
            className="border-t border-white/[0.08] py-5 hidden"
            style={{ display: "none" }}
          >
            <li>
              <a href="javascript:;" className="menu menu--active">
                <div className="menu__icon">
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
                    icon-name="home"
                    data-lucide="home"
                    className="lucide lucide-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div className="menu__title">
                  Accounts
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
                    icon-name="chevron-down"
                    data-lucide="chevron-down"
                    className="lucide lucide-chevron-down menu__sub-icon transform rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </a>
              <ul className="menu__sub-open">
                <li>
                  <a href="/dashboard" className="menu">
                    <div className="menu__icon">
                      <i className="fas fa-list-alt"></i>
                    </div>
                    <div className="menu__title">Accounts Summary</div>
                  </a>
                </li>
                <li>
                  <a href="/account-details" className="menu menu--active">
                    <div className="menu__icon">
                      <i className="fa fa-user-edit"></i>
                    </div>
                    <div className="menu__title">Account Details</div>
                  </a>
                </li>
                <li>
                  <a href="/transactions-log" className="menu">
                    <div className="menu__icon">
                      <i className="fa fa-file-alt"></i>
                    </div>
                    <div className="menu__title">Transactions log</div>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="javascript:;" className="menu menu--active">
                <div className="menu__icon">
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
                    icon-name="trello"
                    data-lucide="trello"
                    className="lucide lucide-trello"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect x="7" y="7" width="3" height="9"></rect>
                    <rect x="14" y="7" width="3" height="5"></rect>
                  </svg>
                </div>
                <div className="menu__title">
                  Transfer
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
                    icon-name="chevron-down"
                    data-lucide="chevron-down"
                    className="lucide lucide-chevron-down menu__sub-icon transform rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </a>
              <ul className="menu__sub-open">
                <li>
                  <a href="/domestic-transfer/" className="menu">
                    <div className="menu__icon">
                      <i className="fa fa-exchange-alt"></i>
                    </div>
                    <div className="menu__title">Transfer to same bank</div>
                  </a>
                </li>
                <li>
                  <a href="/other-transfer/" className="menu">
                    <div className="menu__icon">
                      <i className="fas fa-random"></i>
                    </div>
                    <div className="menu__title">Transfer to other bank</div>
                  </a>
                </li>
                <li>
                  <a
                    href="/international-transfer/"
                    className="menu menu--active"
                  >
                    <div className="menu__icon">
                      <i className="fas fa-globe"></i>
                    </div>
                    <div className="menu__title">International Transfers</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- END: Mobile Menu --> */}
      {/* Flex */}
      <div className="flex">
        {/* <!-- BEGIN: Side Menu --> */}
        <nav className="side-nav">
          <a href="/" className="intro-x flex items-center pl-5 pt-4">
            <img
              src="/home/logo.png"
              alt="Heritage Savings Bank"
              className="w-6"
              style={{ width: "160px" }}
            />
          </a>
          <div className="side-nav__devider my-6"></div>
          <ul>
            <li>
              <a href="javascript:;" className="side-menu side-menu--active">
                <div className="side-menu__icon">
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
                    icon-name="home"
                    data-lucide="home"
                    className="lucide lucide-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div className="side-menu__title">
                  MY ACCOUNT
                  <div className="side-menu__sub-icon transform rotate-180">
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
                      icon-name="chevron-down"
                      data-lucide="chevron-down"
                      className="lucide lucide-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
              <ul className="side-menu__sub-open">
                <li>
                  <a href="/dashboard" className="side-menu side-menu--active">
                    <div className="side-menu__icon">
                      <i className="fas fa-list-alt"></i>
                    </div>
                    <div className="side-menu__title">Accounts Summary</div>
                  </a>
                </li>

                <li>
                  <a href="/account-details/" className="side-menu">
                    <div className="side-menu__icon">
                      <i className="fa fa-user-edit"></i>
                    </div>
                    <div className="side-menu__title">Account Details</div>
                  </a>
                </li>
                <li>
                  <a href="/transactions-log/" className="side-menu">
                    <div className="side-menu__icon">
                      <i className="fa fa-file-alt"></i>
                    </div>
                    <div className="side-menu__title">Transactions</div>
                  </a>
                </li>
              </ul>
            </li>

            <li className="side-nav__devider my-6"></li>

            <li>
              <a href="javascript:;" className="side-menu">
                <div className="side-menu__icon">
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
                    icon-name="trello"
                    data-lucide="trello"
                    className="lucide lucide-trello"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect x="7" y="7" width="3" height="9"></rect>
                    <rect x="14" y="7" width="3" height="5"></rect>
                  </svg>
                </div>
                <div className="side-menu__title">
                  TRANSFERS
                  <div className="side-menu__sub-icon">
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
                      icon-name="chevron-down"
                      data-lucide="chevron-down"
                      className="lucide lucide-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="/domestic-transfer/" className="side-menu">
                    <div className="side-menu__icon">
                      <i className="fa fa-exchange-alt"></i>
                    </div>
                    <div className="side-menu__title">
                      Transfer to same bank
                    </div>
                  </a>
                </li>

                <li>
                  <a href="/other-transfer" className="side-menu">
                    <div className="side-menu__icon">
                      <i className="fas fa-random"></i>
                    </div>
                    <div className="side-menu__title">
                      Transfer to other bank
                    </div>
                  </a>
                </li>

                <li>
                  <a href="/international-transfer/" className="side-menu">
                    <div className="side-menu__icon">
                      <i className="fas fa-globe"></i>
                    </div>
                    <div className="side-menu__title">
                      International Transfers
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* <!-- END: Side Menu -->
  

        {/* <!-- BEGIN: Content --> */}
        <div className="content">
          {/* <!-- BEGIN: Top Bar --> */}
          <div className="top-bar">
            {/* <!-- BEGIN: Breadcrumb --> */}
            <nav
              aria-label="breadcrumb"
              className="-intro-x mr-auto hidden sm:flex"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Application</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </nav>
            {/* <!-- END: Breadcrumb -->
    <!-- BEGIN: Search --> */}
            <div className="intro-x relative mr-3 sm:mr-6">
              {/* <!-- <div id="google_translate_element"></div> --> */}
            </div>
            {/* <!-- END: Search -->
    <!-- BEGIN: Notifications -->

    <!-- END: Notifications -->
    <!-- BEGIN: Account Menu --> */}
            <div className="intro-x dropdown w-8 h-8">
              <div
                className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                role="button"
                aria-expanded="false"
                data-tw-toggle="dropdown"
              >
                <img
                  src="https://heritagebankonline.net/media/profile/8ii.htf.jpeg"
                  height="153.6"
                  width="153.6"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
              {/* <!-- dropdown --> */}
              <div className="dropdown-menu w-56">
                <ul className="dropdown-content bg-primary text-white">
                  <li className="p-2">
                    <div className="font-medium truncate">admin acct</div>
                  </li>
                  <li>
                    <hr className="dropdown-divider border-white/[0.08]" />
                  </li>
                  <li>
                    <a
                      href="/forgot-password/"
                      className="dropdown-item hover:bg-white/5"
                    >
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
                        className="lucide lucide-user w-4 h-4 mr-2"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>{" "}
                      Change Password
                    </a>
                  </li>
                  <li>
                    <a
                      href="/reset-pin/"
                      className="dropdown-item hover:bg-white/5"
                    >
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
                        icon-name="edit"
                        data-lucide="edit"
                        className="lucide lucide-edit w-4 h-4 mr-2"
                      >
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>{" "}
                      Reset Pin
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider border-white/[0.08]" />
                  </li>
                  <li>
                    <a
                      href="/logout"
                      className="dropdown-item hover:bg-white/5"
                    >
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
                        icon-name="toggle-right"
                        data-lucide="toggle-right"
                        className="lucide lucide-toggle-right w-4 h-4 mr-2"
                      >
                        <rect
                          x="1"
                          y="5"
                          width="22"
                          height="14"
                          rx="7"
                          ry="7"
                        ></rect>
                        <circle cx="16" cy="12" r="3"></circle>
                      </svg>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- dropdown --> */}
            </div>
            {/* <!-- END: Account Menu --> */}
          </div>
          {/* <!-- END: Top Bar --> */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 2xl:col-span-9">
              <div className="grid grid-cols-12 gap-6">
                {/* <!-- BEGIN: General Report --> */}
                <div className="col-span-12 mt-8">
                  <div className="intro-y flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                      Accounts Summary
                    </h2>
                    <a
                      href=""
                      className="ml-auto flex items-center text-primary"
                    >
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
                              <div className="report-box__indicator bg-primary tooltip cursor-pointer">
                                <span id="date">8:31:40 AM</span>
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
                            <span className=" text-success ">0</span>
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
                              <div className="report-box__indicator bg-primary tooltip cursor-pointer">
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
                            19
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
                              alt="Heritage Savings Bank"
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
                              admin
                            </span>
                          </div>
                          <div className="text-base text-slate-500 mt-1">
                            admin acct
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
                    <h2 className="text-lg font-medium truncate mr-5">
                      E-Banking
                    </h2>
                  </div>

                  <div className="intro-y col-span-12 md:col-span-6 box">
                    <div className="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit">
                      <img
                        alt="e"
                        className="rounded-t-md"
                        src="/home/bank2.jpg"
                      />
                      <div className="absolute w-full flex items-center px-5 pt-6 z-10"></div>
                      <div className="absolute bottom-0 text-white px-5 pb-6 z-10">
                        <span className="bg-white/20 px-2 py-1 rounded">
                          Heritage Savings Bank
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
                    <div className="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400"></div>
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
                          0
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
                          <div className="text-base">
                            Nov. 4, 2024, midnight
                          </div>
                        </div>
                        <div className="text-slate-500 text-xs mt-5">
                          ACCOUNT NAME
                        </div>
                        <div className="mt-1.5 flex items-center">
                          <div className="text-base">admin acct</div>
                        </div>
                        <div className="text-slate-500 text-xs mt-5">
                          ACCOUNT NUMBER
                        </div>
                        <div className="mt-1.5 flex items-center">
                          <div className="text-base">admin</div>
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
        <!-- BEGIN: Official Store -->

        <!-- END: Official Store -->
        <!-- BEGIN: Weekly Best Sellers -->

        <!-- END: Weekly Best Sellers -->
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
                              <div>Last Login June 11, 2024, 7:28 a.m.</div>
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
                          services offered by the Institution and all its
                          respective affiliates or partners.
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
                {/* <!-- END: General Report -->
        <!-- BEGIN: Weekly Top Products -->

        <!-- END: Weekly Top Products --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END: Content -->*/}
      </div>
      {/* End Flex */}
    </>
  );
};

export default UserLayout;
