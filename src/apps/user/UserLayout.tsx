import { Outlet } from "react-router-dom";
import "./assets/user.scss";
import "./assets/user.responsive.scss";
import "@/assets/global.scss";
import "@/assets/global.responsive.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
import AOS from "aos";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ToastDialog from "@/components/ToastDialog";

const UserLayout = () => {
  useEffect(() => {
    document.body.classList.add("users");
    AOS.init({
      offset: 0,
      duration: 1200,
      easing: "ease-in-out",
    });

    return () => {};
  }, []);
  return (
    <>
      <div className="user-wrapper">
        {/* top bar */}
        <Header />

        {/* top bar ends */}
        <div className="wrapper-content">
          {/* side bar   */}
          <SideBar />
          {/* side bar ends */}
          <div className="wrapper-inner-content">
            <Outlet />
          </div>
        </div>
      </div>

      <ToastDialog />
    </>
  );
};

export default UserLayout;
