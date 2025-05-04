import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBars, faSun, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import HeaderSidebar from "../constants/HeaderSidebar";
import logo from "../pictures/logo.png";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

export default function HomeHeaderPage() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <nav className="top-0 left-0 w-full z-40 bg-slate-950 p-4 flex justify-between items-center text-white">
        {/* Mobile: Hamburger left, Logo right */}
        <div className="flex items-center gap-2 lg:hidden">
          <FontAwesomeIcon
            className="h-6 cursor-pointer"
            icon={faBars}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Sidebar"
          />
        </div>

        {/* Logo - Right on mobile, Left on desktop */}
        <div className={`flex items-center ${window.innerWidth >= 1024 ? 'order-first' : 'order-last'}`}>
          <img src={logo} alt="" className="w-28 h-12" />
        </div>

        {/* Desktop: Sign-in button right */}
        <div className="hidden lg:flex items-center gap-5">
          <Link to="/Dashboard">
            <button className="bg-teal-300 font-semibold bg-opacity-20 border-opacity-70 border border-teal-800 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-teal-300 hover:text-slate-900 hover:shadow-teal-300 z-100 hover:shadow-lg transition duration-300">
              <FontAwesomeIcon className="h-3 cursor-pointer" icon={faUser} />
              <h2>Sign in</h2>
            </button>
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 rounded-lg left-0 w-64 border-4 h-screen border-teal-900 bg-slate-900 text-white z-[100] transition-transform duration-200 ease-in-out shadow-lg ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-extrabold text-amber-600">
              <img src={logo} alt="" className="w-28 h-14" />
            </h1>
            <FontAwesomeIcon
              className="h-4 cursor-pointer"
              icon={faX}
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close Sidebar"
            />
          </div>
          <nav
            className="space-y-4 overflow-y-auto flex-1 pr-2"
            style={{ maxHeight: "calc(100vh - 100px)" }}
          >
            <HeaderSidebar />
          </nav>
        </div>
      </div>
    </>
  );
}