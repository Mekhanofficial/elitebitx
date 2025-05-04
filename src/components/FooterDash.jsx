import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faExchangeAlt,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";

export default function FooterDash({ isSidebarOpen }) {
  return (
    <footer
      className={`fixed bottom-0 h-16 bg-white dark:bg-slate-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-slate-700 z-20 transition-all duration-200 ${
        isSidebarOpen ? "left-64" : "left-16"
      } right-0`}
    >
      <div className="flex justify-around items-center h-full">
        {/* Home */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </div>

        {/* Trade */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faExchangeAlt} className="h-5 w-5" />
          <span className="text-xs mt-1">Trade</span>
        </div>

        {/* Transactions */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faReceipt} className="h-5 w-5" />
          <span className="text-xs mt-1">Transactions</span>
        </div>
      </div>
    </footer>
  );
}
