import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "@/assets/global.scss";
import "@/assets/global.responsive.scss";
import "./assets/home.scss";
import "./assets/home.responsive.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

const HomeLayout = () => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1200,
      easing: "ease-in-out",
    });

    return () => {};
  }, []);

  return (
    <>
      <Nav />
      <Outlet />

      <Footer2 />
    </>
  );
};

export default HomeLayout;
