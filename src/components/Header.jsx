import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBars, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import HeaderSidebar from "../constants/HeaderSidebar";
import DashboardSidebar from "../constants/DashboardSidebar";

export default function HeaderPage() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Ref for the sidebar

  const pageTitles = {
    "/Dashboard": "Dashboard",
    "/Markets": "Markets",
    "/Mining": "Mining",
    "/Deposits": "Deposits",
    "/Account": "Account",
    "/Referrals": "Referrals",
    "/Withdrawals": "Withdrawals",
    "/EmailUpdate": "Update Email",
    "/PhotoUpdate": "Update Photo",
    "/PasswordUpdate": "Update Password",
    "/AccountSettings": "Account Settings",
    "/Logout": "Logout",
  };

  const currentPage = pageTitles[location.pathname];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    // Add event listener when the sidebar is open
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <nav className=" top-0 left-0 w-full z-40 bg-slate-950 p-4 flex justify-between items-center text-white">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="h-6 cursor-pointer"
            icon={faBars}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Sidebar"
          />
          {currentPage && <h1 className="text-2xl font-bold">{currentPage}</h1>}
        </div>

        {/* Right Side */}
        <div className="flex gap-5 items-center">
          <FontAwesomeIcon className="h-4 cursor-pointer" icon={faSun} />
          <Link to="/Dashboard">
            <FontAwesomeIcon className="h-4 cursor-pointer" icon={faUser} />
          </Link>
        </div>
      </nav>

    {/* Sidebar */}
<div
  ref={sidebarRef} // Attach the ref to the sidebar
  className={`fixed top-0 rounded-2xl left-0 w-64 border-4 border-teal-900 bg-slate-900 text-white z-50 transition-transform duration-200 ease-in-out shadow-lg h-screen overflow-y-auto ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="p-4 h-full flex flex-col">
    {/* Sidebar Header */}
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-extrabold text-amber-600">
        PR<span className="text-amber-400">IMEHUB</span>
      </h1>
      <FontAwesomeIcon
        className="h-6 cursor-pointer"
        icon={faBars}
        onClick={() => setIsSidebarOpen(false)}
        aria-label="Close Sidebar"
      />
    </div>

    {/* Navigation Links - Show HeaderSidebar for Home, otherwise DashboardSidebar */}
    <nav className="space-y-4 overflow-y-auto flex-1 pr-2">
      {location.pathname === "/" ? <HeaderSidebar /> : <DashboardSidebar />}
    </nav>
  </div>
</div>
      
    </>
  );
}
