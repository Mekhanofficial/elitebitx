import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HeaderSidebar from "../constants/HeaderSidebar";
import DashboardSidebar from "../constants/DashboardSidebar";
import { useTheme } from "next-themes";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const { theme } = useTheme();
  const location = useLocation();
  const sidebarRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const showFullSidebar = isSidebarOpen || isHovered;

  // Get the correct background colors based on theme
  const sidebarBg = theme === "dark" ? "bg-zinc-950" : "bg-gray-50";
  const headerBg = theme === "dark" ? "bg-slate-800" : "bg-gray-200";
  const hoverBg = theme === "dark" ? "hover:bg-slate-700" : "hover:bg-gray-300";

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-4 left-4 bottom-4 z-40 transition-all duration-200 ease-in-out ${
        showFullSidebar ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-full ${sidebarBg} border ${
          theme === "dark" ? "border-slate-700" : "border-gray-200"
        } shadow-xl flex flex-col rounded-xl overflow-hidden ${
          showFullSidebar ? "p-2" : "p-1"
        }`}
      >
        {/* Sidebar Header */}
        <div
          className={`p-3 flex items-center ${
            showFullSidebar ? `justify-between ${headerBg}` : "justify-center"
          } h-16 rounded-lg`}
        >
          {showFullSidebar ? (
            <h1 className="text-xl font-bold text-amber-500 dark:text-amber-600 whitespace-nowrap">
              PRIME
              <span className="text-amber-400 dark:text-amber-500">HUB</span>
            </h1>
          ) : (
            <span className="text-xl font-bold text-amber-500 dark:text-amber-600">
              PR
            </span>
          )}
          {showFullSidebar && (
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-1 rounded ${hoverBg}`}
            >
              <FontAwesomeIcon icon={faBars} className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Sidebar Content */}
        <div
          className={`flex-1 ${
            showFullSidebar ? "overflow-y-auto" : "overflow-hidden"
          } py-2`}
        >
          <DashboardSidebar isCollapsed={!showFullSidebar} />
        </div>
      </div>
    </div>
  );
}
