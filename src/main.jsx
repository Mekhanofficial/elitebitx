import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParticlesComponent from "./components/ParticlesBackground.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CoinLibHorizontalliveTicker from "./components/CoinLib.jsx";
import SideImg from "./components/ContactImg.jsx";
import FAQ from "./components/faq/index.jsx";
import FaqItem from "./components/faq/FaqItem.jsx";
import ContactUs from "./components/ContactIndex.jsx";
import TradingViewChart from "./components/Tradingview.jsx";
import CryptocurrencyMarketWidget from "./components/trading-view-widgets/CryptocurrencyMarketWidget.jsx";
// import LoginPage from "./app/(auth)/login/LoginPage.jsx";
import DashPage from "./pages/Dashboard.jsx";
// import SignUpPage from "./components/auth/sign-up/Form.jsx";
import TransactionPage from "./pages/Transactions.jsx";
import PaymentProofPage from "./pages/PaymentProof.jsx";
import WithdrawalPage from "./pages/Withdrawal.jsx";
import MiningPage from "./pages/Mining.jsx";
import DepositPage from "./pages/Deposits.jsx";
import MyTraderPage from "./pages/MyTraders.jsx";
import BuyCrypto from "./pages/BuyCrypto.jsx";
import TradesRoiPage from "./pages/TradesRoi.jsx";
import MycopyTradersPage from "./pages/MyCopytraders.jsx";
import BuyBotPage from "./pages/BuyBots.jsx";
import StakePage from "./pages/Stake.jsx";
import SubscriptionPage from "./pages/Subscription.jsx";
import VerifyAccountPage from "./pages/VerifyAccount.jsx";
import AccountPage from "./pages/Account.jsx";
import AccountSetPage from "./pages/AccountSettings.jsx";
import EmailUpdatePage from "./pages/EmailUpdate.jsx";
import PasswordUpdatePage from "./pages/PasswordUpdate.jsx";
import PhotoUpdatePage from "./pages/PhotoUpdate.jsx";
import ReferralsPage from "./pages/Referrals.jsx";
import DailySignalPage from "./pages/DailySignal.jsx";
import RealestPage from "./pages/RealEstate.jsx";
import Modal from "./pages/Modal.jsx";
import ProjectDetail from "./pages/RealEstatedetails.jsx";
import PlaceTradePage from "./pages/PlaceTrade.jsx";
import AssetPage from "./pages/Assets.jsx";



const root = ReactDOM.createRoot(document.getElementById("root"));

const proRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ContactIndex",
    element: <ContactUs />,
  },
  {
    path: "/Subscription",
    element: <SubscriptionPage />,
  },
  {
    path: "/DailySignal",
    element: <DailySignalPage />,
  },
  {
    path: "/RealEstate",
    element: <RealestPage />,
  },
  {
    path: "/RealEstateDetails",
    element: <ProjectDetail />,
  },
  {
    path: "/Modal",
    element: <Modal />,
  },
  {
    path: "/VerifyAccount",
    element: <VerifyAccountPage />,
  },
  {
    path: "/ParticleBackground",
    element: <ParticlesComponent id="particles" />,
  },
  {
    path: "/trading-view",
    element: <TradingViewChart />,
  },
  {
    path: "/TradesRoi",
    element: <TradesRoiPage />,
  },
  {
    path: "/MyCopytraders",
    element: <MycopyTradersPage />,
  },
  {
    path: "/BuyBots",
    element: <BuyBotPage />,
  },
  {
    path: "/Stake",
    element: <StakePage />,
  },
  {
    path: "/Transactions",
    element: <TransactionPage />,
  },
  {
    path: "/PaymentProof",
    element: <PaymentProofPage />,
  },
  {
    path: "/Withdrawal",
    element: <WithdrawalPage />,
  },
  {
    path: "/CryptocurrencyMarketWidget",
    element: <CryptocurrencyMarketWidget />,
  },
  {
    path: "/faqItem",
    element: <FaqItem />,
  },
  {
    path: "/ContactImg",
    element: <SideImg />,
  },
  // {
  //   path: "/LoginPage",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "/SignUpPage",
  //   element: <SignUpPage />,
  // },
  // {
  //   path: "/useSignUP",
  //   element: <SignUpPage />,
  // },
  {
    path: "/Dashboard",
    element: <DashPage />,
  },
  {
    path: "/Assets",
    element: <AssetPage />,
  },
  {
    path: "/PlaceTrade",
    element: <PlaceTradePage/>,
  },
  {
    path: "/Mining",
    element: <MiningPage />,
  },
  {
    path: "/Deposits",
    element: <DepositPage />,
  },
  {
    path: "/MyTraders",
    element: <MyTraderPage />,
  },
  {
    path: "/BuyCrypto",
    element: <BuyCrypto />,
  },
  {
    path: "/Account",
    element: <AccountPage />,
  },
  {
    path: "/Referrals",
    element: <ReferralsPage />,
  },
  {
    path: "/EmailUpdate",
    element: <EmailUpdatePage />,
  },
  {
    path: "/PasswordUpdate",
    element: <PasswordUpdatePage />,
  },
  {
    path: "/PhotoUpdate",
    element: <PhotoUpdatePage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={proRouter} />
  </React.StrictMode>
);
