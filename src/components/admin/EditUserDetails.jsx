"use client";

import { MdOutlineClose } from "react-icons/md";
import Input from "./Input";
import { useState } from "react";
import { db } from "../../firebase/firebase-config";
import { deleteDoc, doc, setDoc } from "firebase/firestore";

const EditUserDetails = ({
  id,
  firstName,
  LastName,
  phoneNumber,
  email,
  profit,
  totalDeposit,
  totalWithdrawal,
  transactionCode,
  setIsEdit,
}) => {
  const [userTransactionCode, setTransactionCode] = useState(transactionCode);
  const [userProfit, setProfit] = useState(profit);
  const [userTotalDeposit, setTotalDeposit] = useState(totalDeposit);
  const [userTotalWithdrawal, setTotalWithdrawal] = useState(totalWithdrawal);
  const [isUpdateUserLoading, setIsUpdateUserLoading] = useState(false);
  const [isDeleteUserLoading, setIsDeleteUserLoading] = useState(false);

  const updateUserData = async () => {
    setIsUpdateUserLoading(true);
    const docRef = doc(db, "users", id);

    try {
      await setDoc(docRef, {
        first_name: firstName,
        last_name: LastName,
        email: email,
        phone_number: phoneNumber,
        total_deposit: userTotalDeposit,
        total_withdrawal: userTotalWithdrawal,
        profit: userProfit,
        transaction_code: userTransactionCode,
      });

      setIsEdit(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUserData = async () => {
    setIsDeleteUserLoading(true);
    const docRef = doc(db, "users", id);

    try {
      await deleteDoc(docRef);

      setIsEdit(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.3)] grid items-center p-10">
      <div className="bg-white rounded-md p-5 grid grid-rows-[auto_1fr_auto] gap-10 max-w-2xl mx-auto w-full max-h-full overflow-hidden">
        <div className="grid grid-cols-[1fr_auto]">
          <p>{email}</p>
          <MdOutlineClose
            onClick={() => setIsEdit(false)}
            className="ml-auto cursor-pointer"
          />
        </div>

        <div className="px-5 grid gap-5 h-full overflow-auto  ">
          <Input
            type={"text"}
            label={"Transaction Code"}
            value={userTransactionCode}
            onChange={(e) => setTransactionCode(e)}
          />
          <Input
            type={"number"}
            label={"Profit"}
            value={userProfit}
            onChange={(e) => setProfit(e)}
          />
          <Input
            type={"number"}
            label={"Total Deposit"}
            value={userTotalDeposit}
            onChange={(e) => setTotalDeposit(e)}
          />
          <Input
            type={"number"}
            label={"Total Withdrawal"}
            value={userTotalWithdrawal}
            onChange={(e) => setTotalWithdrawal(e)}
          />
        </div>

        <div className="grid grid-cols-2 gap-10">
          <button
            onClick={() => deleteUserData()}
            className={`text-[#f42f54] border border-[#f42f54] py-3 px-10 rounded-md block`}
            disabled={isDeleteUserLoading}
          >
            {isDeleteUserLoading ? (
              <span className="block w-5 h-5 border-2 border-[#f42f54] border-l-transparent rounded-full border-b-transparent animate-spin mx-auto"></span>
            ) : (
              "Delete User"
            )}
          </button>

          <button
            onClick={() => updateUserData()}
            className={`text-white bg-[#f42f54] py-3 px-10 rounded-md block`}
            disabled={isUpdateUserLoading}
          >
            {isUpdateUserLoading ? (
              <span className="block w-5 h-5 border-2 border-white border-l-transparent rounded-full border-b-transparent animate-spin mx-auto"></span>
            ) : (
              "Update"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserDetails;
