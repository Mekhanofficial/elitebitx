import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faStar,
  faMoneyBill,
  faEnvelope,
  faImage,
  faLock,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import HeaderPage from "../components/Header";

export default function AccountPage() {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const registeredUser = JSON.parse(
      localStorage.getItem("registeredUser")
    ) || {
      name: "User",
      email: "user@example.com",
    };
    setUser(registeredUser);
  }, []);

  return (
    <>
      <HeaderPage />
      <div className="bg-gradient-to-b from-slate-950 to-slate-900 min-h-screen flex flex-col items-center p-6 text-white">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-700 hover:border-teal-500">
            <FontAwesomeIcon
              icon={faImage}
              className="text-7xl text-slate-400 hover:text-teal-500 transition-all duration-300"
            />
          </div>
          <h2 className="text-3xl font-bold mt-4 text-white">{user.name}</h2>
          <p className="text-slate-400 text-sm mt-1">{user.email}</p>
        </div>

        {/* Buttons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl p-4">
          <Button
            icon={faUserFriends}
            text="Referrals"
            iconColor="text-teal-400"
            bgColor="bg-slate-800"
          />
          <Button
            icon={faSignOutAlt}
            text="Logout"
            iconColor="text-red-400"
            bgColor="bg-slate-800"
          />
          <Button
            icon={faStar}
            text="Watch List"
            iconColor="text-yellow-400"
            bgColor="bg-slate-800"
          />
          <Button
            icon={faEnvelope}
            text="Update Email"
            iconColor="text-blue-400"
            bgColor="bg-slate-800"
          />
          <Button
            icon={faMoneyBill}
            text="Withdrawals"
            iconColor="text-green-400"
            bgColor="bg-slate-800"
          />
          <Button
            icon={faImage}
            text="Update Photo"
            iconColor="text-pink-400"
            bgColor="bg-slate-800"
          />
          <Button
            icon={faLock}
            text="Update Password"
            iconColor="text-purple-400"
            bgColor="bg-slate-800"
          />
          <Button
            icon={faCog}
            text="Account Settings"
            iconColor="text-orange-400"
            bgColor="bg-slate-800"
          />
        </div>
      </div>
    </>
  );
}

function Button({ icon, text, iconColor, bgColor }) {
  return (
    <button
      className={`flex items-center p-5 w-full rounded-lg ${bgColor} text-white text-left shadow-md transition-all transform hover:scale-105 hover:shadow-2xl hover:brightness-110 sm:text-base text-sm   duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 `}
    >
      <FontAwesomeIcon icon={icon} className={`text-lg mr-3 ${iconColor}`} />{" "}
      {text}
    </button>
  );
}
 