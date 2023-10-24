import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "@/assets/global.scss";
import "@/assets/global.responsive.scss";
import "./assets/auth.scss";
import "./assets/auth.responsive.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ToastDialog from "@/components/ToastDialog";
const AuthLayout = () => {
  const [dimensionheight, setDimensions] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="auth-wrapper" style={{ minHeight: dimensionheight }}>
        <Outlet />
        <div className="imGBox">
          <img src="/home/logo.png" alt="Logo" />
        </div>
        <ToastDialog />
      </div>
    </>
  );
};

export default AuthLayout;
