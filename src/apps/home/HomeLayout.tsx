import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import useDynamicCSS from "@/hooks/useDynamicCSS";
import LoadingPage from "@/components/LoadingPage";

const HomeLayout = () => {
  const links = [
    "/css/global.css",
    "/css/global.responsive.css",
    "/css/home.css",
    "/css/home.responsive.css",
  ];
  const loading = useDynamicCSS(links);
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
      {loading ? <LoadingPage /> : <Outlet />}

      <Footer2 />
    </>
  );
};

export default HomeLayout;
