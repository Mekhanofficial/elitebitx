import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faExchangeAlt,
  faReceipt,
  faCoins,
  faTimes,
  faArrowDown,
  faArrowUp,
  faFileAlt,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import dashbar from "../pictures/dashbar.png";

const FooterActionWidget = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const actions = [
    { icon: faArrowDown, label: "Deposit" },
    { icon: faArrowUp, label: "Withdraw" },
    { icon: faFileAlt, label: "Proof" },
    { icon: faDatabase, label: "Stake" },
  ];

  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white rounded-xl px-4 py-3 flex gap-6 z-30 shadow-lg">
      {actions.map((action, index) => (
        <div key={index} className="flex flex-col items-center">
          <FontAwesomeIcon icon={action.icon} className="h-5 w-5" />
          <span className="text-sm mt-1">{action.label}</span>
        </div>
      ))}
    </div>
  );
};

const FooterNavItem = ({ icon, label }) => (
  <div className="flex flex-col items-center">
    <FontAwesomeIcon icon={icon} className="h-6 w-6" />
    <span className="text-sm mt-1">{label}</span>
  </div>
);

const FooterToggleButton = ({ isWidgetOpen, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-full dark:bg-teal-800 bg-teal-900 p-4 relative -top-5 z-30 transition-transform hover:scale-105"
    aria-label={isWidgetOpen ? "Close menu" : "Open menu"}
  >
    {isWidgetOpen ? (
      <FontAwesomeIcon icon={faTimes} className="h-5 w-5 text-white" />
    ) : (
      <img src={dashbar} className="h-7 w-7" alt="Menu" />
    )}
  </button>
);

export default function FooterDash({ isSidebarOpen }) {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const leftNavItems = [
    { icon: faHome, label: "Home" },
    { icon: faCoins, label: "Assets" },
  ];

  const rightNavItems = [
    { icon: faExchangeAlt, label: "Trade" },
    { icon: faReceipt, label: "Transactions" },
  ];

  return (
    <>
      <FooterActionWidget
        isOpen={isWidgetOpen}
        onClose={() => setIsWidgetOpen(false)}
      />

      <footer
        className={`fixed bottom-0 h-16 bg-white dark:bg-slate-950 text-gray-900 dark:text-white border-t border-gray-200 dark:border-slate-700 z-20 transition-all duration-200 ${
          isSidebarOpen ? "md:left-64 left-0" : "md:left-16 left-0"
        } right-0`}
      >
        <div className="flex justify-center gap-10 items-center h-full text-gray-500 font-semibold">
          <div className="flex gap-10">
            {leftNavItems.map((item, index) => (
              <FooterNavItem key={index} icon={item.icon} label={item.label} />
            ))}
          </div>

          <FooterToggleButton
            isWidgetOpen={isWidgetOpen}
            onClick={() => setIsWidgetOpen(!isWidgetOpen)}
          />

          <div className="flex gap-10">
            {rightNavItems.map((item, index) => (
              <FooterNavItem key={index} icon={item.icon} label={item.label} />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
