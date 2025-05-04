import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import DashboardSidebar from "../constants/DashboardSidebar";
import { useTheme } from "next-themes";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const { theme } = useTheme();
  const sidebarRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const showFullSidebar = isSidebarOpen || isHovered;

  const sidebarBg = theme === "dark" ? "bg-zinc-950" : "bg-gray-50";
  const headerBg = theme === "dark" ? "bg-slate-800" : "bg-gray-200";
  const hoverBg = theme === "dark" ? "hover:bg-slate-700" : "hover:bg-gray-300";

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 bottom-0 z-40 transition-transform duration-200 ease-in-out ${
          showFullSidebar ? "w-64" : "w-16"
        } ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`h-full ${sidebarBg} border ${
            theme === "dark" ? "border-slate-700" : "border-gray-200"
          } shadow-xl flex flex-col rounded-r-xl overflow-hidden ${
            showFullSidebar ? "p-2" : "p-1"
          }`}
        >
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
                <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
              </button>
            )}
          </div>

          <div
            className={`flex-1 ${
              showFullSidebar ? "overflow-y-auto" : "overflow-hidden"
            } py-2`}
          >
            <DashboardSidebar isCollapsed={!showFullSidebar} />
          </div>
        </div>
      </div>
    </>
  );
}