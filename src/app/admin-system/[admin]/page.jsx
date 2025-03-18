"use client";

import { usePathname, useRouter } from "next/navigation";
import AdminTable from "../../../components/admin/AdminTable";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase-config";
import WindowHeight from "../../../components/web-app/WindowHeight";
import Logo from "../../../components/Logo";
import Input from "../../../components/auth/Input";
import { signInWithEmailAndPassword } from "firebase/auth";

const Page = () => {
  const router = useRouter();
  const adminId = usePathname().split("/")[2];
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email] = useState("myonly.jobmail.org@gmail.com");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loginAdmin = async () => {
    setIsLoginLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password.trim());

      setIsLoginLoading(false);
      setIsAdmin(true);
    } catch (error) {
      setIsLoginLoading(false);
      setErrorMessage(error.message);
    }
  };

  if (!isAdmin) {
    return (
      <WindowHeight>
        <div className="fixed top-0 left-0 h-full w-screen grid content-center bg-[#1c1f2d] z-10 p-10">
          <div className="w-full max-w-sm mx-auto">
            <Input
              type="password"
              label={"Admin Password"}
              value={password}
              onChange={(e) => setPassword(e)}
            />

            {errorMessage && (
              <p className="text-red-400 mt-5">{errorMessage}</p>
            )}

            <button
              onClick={() => loginAdmin()}
              className={`text-white bg-[#f42f54] py-3 px-10 rounded-md w-full block mt-10`}
              disabled={isLoginLoading}
            >
              {isLoginLoading ? (
                <span className="block w-5 h-5 border-2 border-white border-l-transparent rounded-full border-b-transparent animate-spin mx-auto"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </div>
      </WindowHeight>
    );
  }

  return (
    <div className="min-h-screen bg-[#1c1f2d] px-5 py-10 grid grid-rows-[auto_1fr] gap-10">
      <h2 className="text-2xl text-[#97afd5] text-center">Welcome John</h2>

      <AdminTable />
    </div>
  );
};

export default Page;
