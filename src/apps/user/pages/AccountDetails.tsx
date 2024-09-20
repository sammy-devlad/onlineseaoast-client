import { resetUser, updateUser } from "@/apps/auth/slicer";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import useUtils from "@/hooks/useUtils";
import { BASE_URL } from "@/utils/helper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BreadcrumNav from "../components/BreadcrumNav";
import PreiviewImage from "../components/PreiviewImage";

const AccountDetails = () => {
  useUtils("Account details");
  const axiosPrivate = useAxiosPrivate();
  const [loading, setloading] = useState(false);
  const user = useAppSelector((state) => state.user.user)!;
  const dispatch = useAppDispatch();
  const [profileImg, setprofileImg] = useState<File>();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(resetUser());
    toast.info("Logged out");
    navigate("/sign-in");
  };

  const previeIMG = (event: React.ChangeEvent<HTMLInputElement>) => {
    document.getElementById("img-previewi")?.classList.add("active");

    var { target } = event;
    if (!target.files) return;
    setprofileImg(target.files[0]);
    var outPut = document.getElementById("uploadPreview") as HTMLImageElement;
    outPut.src = URL.createObjectURL(target.files[0]);
    outPut.onload = () => {
      URL.revokeObjectURL(outPut.src);
    };
  };

  const closeModal = () => {
    document.getElementById("img-previewi")?.classList.remove("active");
  };

  const chooseImg = () => {
    document.getElementById("profilpics")?.click();
  };

  const uploadImg = () => {
    var fileUpload = document.getElementById("fileUpload") as HTMLInputElement;
    fileUpload.click();
  };

  const sendImg = async () => {
    setloading(true);
    try {
      const { data } = await axiosPrivate.put(
        "/change-profile/",
        { profile_image: profileImg },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      if (!data.error) {
        dispatch(updateUser(data.user));
        closeModal();
        toast.info("Profile change successfully");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">
          Accounts Details &amp; History
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {/* <!-- BEGIN: Profile Menu --> */}
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3 flex lg:block flex-col-reverse">
          <div className="intro-y box mt-5 lg:mt-0">
            <div className="relative flex items-center p-iv">
              <div className="w-12 h-12 image-fit">
                <img
                  src={user.image_url}
                  height="153.6"
                  width="153.6"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
              <div className="ml-4 mr-auto">
                <div className="font-medium text-base">admin acct</div>
                <div className="text-slate-500">Personal Online Banking</div>
              </div>
            </div>

            <div className="p-iv border-t border-slate-200/60 dark:border-darkmode-400">
              <a className="flex items-center text-primary font-medium" href="">
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
                  icon-name="activity"
                  data-lucide="activity"
                  className="lucide lucide-activity w-4 h-4 mr-2"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>{" "}
                Account No: {user.username}
              </a>
              <a className="flex items-center text-primary mt-5" href="">
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
                  icon-name="mail"
                  data-lucide="mail"
                  className="lucide lucide-mail w-4 h-4 mr-2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>{" "}
                Email: {user.email}
              </a>

              <a className="flex items-center text-primary mt-5" href="">
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
                  icon-name="phone"
                  data-lucide="phone"
                  className="lucide lucide-phone w-4 h-4 mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>{" "}
                Mobile No: {user.phone_number}
              </a>
              <a className="flex items-center text-primary mt-5" href="">
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
                  icon-name="phone"
                  data-lucide="phone"
                  className="lucide lucide-phone w-4 h-4 mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>{" "}
                Overdraft limit: $200,000
              </a>
            </div>

            <div className="p-iv border-t border-slate-200/60 dark:border-darkmode-400 flex">
              <button
                type="button"
                className="btn btn-primary py-1 px-2"
                onClick={chooseImg}
              >
                Change Profile
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary py-1 px-2 ml-auto"
              >
                Account
              </button>
            </div>
          </div>
          <div className="intro-y box p-iv bg-primary text-white mt-5">
            <div className="flex items-center">
              <div className="font-medium text-lg">onlineseacoast</div>
              <div className="text-xs bg-white dark:bg-primary dark:text-white text-slate-700 px-1 rounded-md ml-auto">
                New
              </div>
            </div>
            <div className="mt-4">
              Sign up offer requires you to deposit and maintain a minimum
              balance in order to earn the $520 bonus. For enquiries send us an
              email support@onlineseacoast.com
            </div>
            <div className="font-medium flex mt-5"></div>
          </div>
        </div>
        {/* <!-- END: Profile Menu --> */}
        <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
          <div className="grid grid-cols-12 gap-6">
            {/* <!-- BEGIN: Daily Sales --> */}
            <div className="intro-y box col-span-12 2xl:col-span-6">
              <div className="flex items-center px-iv py-iv sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="font-medium text-base mr-auto">
                  PREMIUM INDIVIDUAL ACCOUNT
                </h2>
                <div className="dropdown ml-auto sm:hidden">
                  <a
                    className="dropdown-toggle w-5 h-5 block"
                    href="javascript:;"
                    aria-expanded="false"
                    data-tw-toggle="dropdown"
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
                      icon-name="more-horizontal"
                      data-lucide="more-horizontal"
                      className="lucide lucide-more-horizontal w-5 h-5 text-slate-500"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-iv">
                <div className="relative flex items-center">
                  <table className="table table-resposive">
                    <tbody>
                      <tr>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>Current Balance</th>
                      </tr>

                      <tr>
                        <td>
                          {user.first_name} {user.last_name}
                        </td>
                        <td>{user.username}</td>

                        <td>${user.balance}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!-- END: Daily Sales -->
        <!-- BEGIN: Announcement --> */}
            <div className="intro-y box col-span-12 2xl:col-span-6"></div>
            {/* <!-- END: Announcement -->
        <!-- BEGIN: Projects -->

        <!-- END: Projects -->

        <!-- BEGIN: Latest Tasks --> */}
            <div className="intro-y box col-span-12 2xl:col-span-6">
              <div className="flex items-center px-iv py-iv sm:py-0 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="font-medium text-base mr-auto">
                  ACCOUNT HISTORY
                </h2>

                <div className="dropdown ml-auto sm:hidden">
                  <a
                    className="dropdown-toggle w-5 h-5 block"
                    href="javascript:;"
                    aria-expanded="false"
                    data-tw-toggle="dropdown"
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
                      icon-name="more-horizontal"
                      data-lucide="more-horizontal"
                      className="lucide lucide-more-horizontal w-5 h-5 text-slate-500"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </a>
                </div>
                <ul
                  className="nav nav-link-tabs w-auto ml-auto hidden sm:flex"
                  role="tablist"
                >
                  <li
                    id="latest-tasks-last-week-tab"
                    className="nav-item"
                    role="presentation"
                  >
                    <a
                      href="javascript:;"
                      className="nav-link py-iv"
                      data-tw-target="#latest-tasks-last-week"
                      aria-selected="false"
                      role="tab"
                    >
                      ...
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-iv">
                <div className="tab-content">
                  <div
                    id="latest-tasks-new"
                    className="tab-pane active"
                    role="tabpanel"
                    aria-labelledby="latest-tasks-new-tab"
                  >
                    {/* <!-- No Transaction Found --> */}

                    <div className="flex items-center mt-5">
                      <div className="border-l-2 border-primary dark:border-primary pl-4">
                        <a href="/transactions-log" className="font-medium">
                          View Record
                        </a>
                      </div>
                      <div className="form-check form-switch ml-auto">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END: Latest Tasks -->
        <!-- BEGIN: General Statistics -->

        <!-- END: General Statistics --> */}
          </div>
        </div>

        <div className="col-span-12 sm:col-span-12 2xl:col-span-3 intro-y">
          <div className="box p-iv zoom-in">
            <div className="flex">
              <div className="text-lg font-medium truncate mr-3"></div>

              <div>
                This site provides information about and access to services
                offered by the Institution and all its respective affiliates or
                partners.
                <br />
                ©2022 All rights reserved.
              </div>
              <div className="py-1 px-2 flex items-center rounded-full text-xs bg-slate-100 dark:bg-darkmode-400 text-slate-500 cursor-pointer ml-auto truncate">
                <img src="/home/logo_verisign.gif" width="93" height="52" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PreiviewImage
        closeModal={closeModal}
        sendImg={sendImg}
        previeIMG={previeIMG}
      />
    </>
  );
};

export default AccountDetails;
