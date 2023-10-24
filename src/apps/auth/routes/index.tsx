import LoadingPage from "@/components/LoadingPage";
import { Suspense, lazy } from "react";
import { RouteInterface } from "@/types";
import { getRandomNumber } from "@/utils/helper";

const SignIn = lazy(() => import("../pages/SignIn"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ConfirmEmail = lazy(() => import("../pages/ConfirmEmail"));
const SignUp = lazy(() => import("../pages/SignUp"));
const CreateAcct = lazy(() => import("../pages/CreateAcct"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));

const AuthRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <SignIn />
      </Suspense>
    ),
    path: "/sign-in",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <ForgotPassword />
      </Suspense>
    ),
    path: "/forgot-password",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <ConfirmEmail />
      </Suspense>
    ),
    path: "/confirm-mail",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <SignUp />
      </Suspense>
    ),
    path: "/sign-up",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <CreateAcct />
      </Suspense>
    ),
    path: "/create-account",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <ResetPassword />
      </Suspense>
    ),
    path: "/reset-password",
  },
];

export default AuthRoutes;
