import { useEffect } from "react";
import { sizeFont, setBg } from "../utils/helper";

const useUtils = (pageTitle: string) => {
  useEffect(() => {
    sizeFont();
    setBg();
    document.title = `${pageTitle} | onlineseacoast`;

    return () => {};
  }, [pageTitle]);
  return true;
};

export default useUtils;
