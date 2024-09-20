import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import useDynamicjs from "@/hooks/useDynamicjs";
import useDynamicCSS from "@/hooks/useDynamicCSS";
import "./assets/custom.scss";
import { useAppSelector } from "@/hooks/useStore";

const UserLayout = () => {
  const user = useAppSelector((state) => state.user.user)!;
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
    
    <!-- BEGIN: Account Menu --> */}
            <div className="intro-x dropdown w-8 h-8">
              <div
                className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                role="button"
                aria-expanded="false"
                data-tw-toggle="dropdown"
              >
                <img
                  src={user.image_url}
                  height="153.6"
                  width="153.6"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
              {/* <!-- dropdown --> */}
              <div className="dropdown-menu w-56">
                <ul className="dropdown-content bg-primary text-white">
                  <li className="p-2">
                    <div className="font-medium truncate">
                      {user.first_name}
                    </div>
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

          {/* My content */}

          <Outlet />
          {/* My content */}
        </div>

        {/* <!-- END: Content -->*/}
      </div>
      {/* End Flex */}
    </>
  );
};

export default UserLayout;
