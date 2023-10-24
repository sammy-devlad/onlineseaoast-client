import { useAppSelector } from "@/hooks/useStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Protected = () => {
  const user = useAppSelector((state) => state.user.user);

  const { pathname } = useLocation();
  if (user) {
    if (!user.is_superuser) {
      return <Outlet />;
    } else {
      toast.error("This is an user page your  logged as admin");
      return <Navigate to="/sign-in" replace={true} />;
    }
  } else {
    toast.warn("Please login");

    return <Navigate to={`/sign-in?next=${pathname}`} replace={true} />;
  }
};

export default Protected;
