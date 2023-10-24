import { RouteInterface } from "@/types";
import { getRandomNumber } from "@/utils/helper";
import { Suspense, lazy } from "react";

import LoadingPage from "@/components/LoadingPage";
const ResetPin = lazy(() => import("../pages/ResetPin"));
// const ChangePassword = lazy(() => import("../pages/ChangePassword"));
const InterTx = lazy(() => import("../pages/InterTx"));
const TransferOB = lazy(() => import("../pages/TransferOB"));
const TranferSB = lazy(() => import("../pages/TranferSB"));
const CreditCard = lazy(() => import("../pages/CreditCard"));
const Transactions = lazy(() => import("../pages/Transactions"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const AccountDetails = lazy(() => import("../pages/AccountDetails"));
const TransactionDetails = lazy(() => import("../pages/TransactionDetails"));

export const UserRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Dashboard />
      </Suspense>
    ),
    path: "/dashboard",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AccountDetails />
      </Suspense>
    ),
    path: "/account-details",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Transactions />
      </Suspense>
    ),
    path: "/transactions-log",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <TransactionDetails />
      </Suspense>
    ),
    path: "/transactions-log/:id",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <CreditCard />
      </Suspense>
    ),
    path: "/card",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <TranferSB />
      </Suspense>
    ),
    path: "/onlineseacoat-transfer",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <TransferOB />
      </Suspense>
    ),
    path: "/other-transfer",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <InterTx />
      </Suspense>
    ),
    path: "/international-transfer",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <ResetPin />
      </Suspense>
    ),
    path: "/reset-pin",
  },
];
