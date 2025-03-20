import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCoins,
  faWallet,
  faMoneyBillTransfer,
  faReceipt,
  faExchangeAlt,
  faUsers,
  faChartLine,
  faRobot,
  faBuilding,
  faUser,
  faUserCircle,
  faSignOutAlt,
  faBitcoinSign,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

export default function DashboardSidebar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();

  const mainLinks = [
    { to: "/Dashboard", icon: faHome, text: "Home" },
    { to: "/Assets", icon: faCoins, text: "Assets" },
    { to: "/deposits", icon: faWallet, text: "Deposit" },
    { to: "/Withdrawal", icon: faMoneyBillTransfer, text: "Withdraw" },
    { to: "/PaymentProof", icon: faReceipt, text: "Payment Proof" },
    { to: "/transactions", icon: faExchangeAlt, text: "Transactions" },
    { to: "/Referrals", icon: faUsers, text: "Referral" },
  ];

  const tradingLinks = [
    { to: "/PlaceTrade", icon: faChartLine, text: "Place Trade" },
    { to: "/Subscription", icon: faClipboardList, text: "Subscription" },
    { to: "/MyTraders", icon: faUsers, text: "Copy Trade" },
    { to: "/DailySignal", icon: faChartLine, text: "Daily Signal" },
    { to: "/BuyBots", icon: faRobot, text: "Buy Bots" },
    { to: "/Mining", icon: faUsers, text: "Mining" },
    { to: "/Stake", icon: faCoins, text: "Stake" },
    { to: "/RealEstate", icon: faBuilding, text: "Real Estate" },
    { to: "/MyCopytraders", icon: faUsers, text: "My Copy Trade" },
    { to: "/TradesRoi", icon: faChartLine, text: "Trades/ROI" },
    { to: "/BuyCrypto", icon: faBitcoinSign, text: "Buy Crypto" },
  ];

  const userLinks = [
    { to: "/Account", icon: faUserCircle, text: "My Profile" },
    { to: "/VerifyAccount", icon: faUser, text: "Verify Account" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col space-y-2 text-gray-400 h-screen">
      <h1 className="font-bold text-slate-800">DASHBOARD</h1>
      {/* Main Links */}
      {mainLinks.map(({ to, icon, text }) => (
        <Link
          key={to}
          to={to}
          className={`flex items-center font-semibold gap-3 p-2 hover:text-teal-600 hover:bg-slate-800 rounded transition-colors ${
            isActive(to)
              ? "text-teal-600 bg-slate-800 border-l-4 border-teal-600"
              : ""
          }`}
          aria-label={text}
        >
          <FontAwesomeIcon icon={icon} /> {text}
        </Link>
      ))}

      {/* Trading Links */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase">
          Trading
        </h3>
        {tradingLinks.map(({ to, icon, text }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-3 p-2 hover:text-teal-600 rounded transition-colors ${
              isActive(to)
                ? "text-teal-600 bg-slate-800 border-l-4 border-teal-600"
                : ""
            }`}
            aria-label={text}
          >
            <FontAwesomeIcon icon={icon} /> {text}
          </Link>
        ))}
      </div>

      {/* User Section */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase">User</h3>
        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center justify-between w-full p-2 hover:text-teal-600 rounded transition-colors"
            aria-label="User Menu"
          >
            <span className="flex items-center gap-3">
              <FontAwesomeIcon icon={faUser} /> User
            </span>
            <span>{isUserMenuOpen ? "▲" : "▼"}</span>
          </button>

          {/* User Dropdown Menu */}
          {isUserMenuOpen && (
            <div
              className="mt-1 w-full bg-slate-800 shadow-lg rounded-lg"
              style={{ boxShadow: "0 0 10px 2px rgba(245, 158, 11, 0.5)" }}
            >
              {userLinks.map(({ to, icon, text }) => (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-3 p-2 hover:text-teal-600 transition-colors ${
                    isActive(to)
                      ? "text-teal-600 bg-slate-800 border-l-4 border-teal-600"
                      : ""
                  }`}
                  aria-label={text}
                >
                  <FontAwesomeIcon icon={icon} /> {text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Logout Link */}
      <div className={isUserMenuOpen ? "mt-28" : "mt-2"}>
        <Link
          to="/"
          className={`flex items-center gap-3 p-2 hover:text-teal-600 rounded transition-colors ${
            isActive("/")
              ? "text-teal-600 bg-slate-800 border-l-4 border-teal-600"
              : ""
          }`}
          aria-label="Logout"
        >
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Link>
      </div>
    </div>
  );
}
