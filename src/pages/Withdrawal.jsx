import { useState } from "react";
import HeaderPage from "../components/Header";

// Custom Alert Component
const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-slate-950 p-6 rounded-lg shadow-lg border border-slate-700 max-w-md w-full">
        <p className="text-gray-200">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function WithdrawalPage() {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [formData, setFormData] = useState({
    cryptoAsset: "BTC",
    amount: "",
    btcAddress: "",
    bankAccountNumber: "",
    bankName: "",
    cashAppId: "",
    paypalEmail: "",
    skrillEmail: "",
  });
  const [balance] = useState(1000); // Example balance
  const [alertMessage, setAlertMessage] = useState(null); // State for custom alert

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    setShowPaymentOptions(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWithdrawal = () => {
    if (!selectedPaymentMethod) {
      setAlertMessage("Please select a payment method.");
      return;
    }

    // Validate required fields based on the selected payment method
    switch (selectedPaymentMethod) {
      case "Crypto":
        if (!formData.cryptoAsset || !formData.amount || !formData.btcAddress) {
          setAlertMessage(
            "Please fill in all required fields for crypto withdrawal."
          );
          return;
        }
        break;
      case "Bank Transfer":
        if (!formData.bankAccountNumber || !formData.bankName) {
          setAlertMessage(
            "Please fill in all required fields for bank transfer."
          );
          return;
        }
        break;
      case "Cash App":
        if (!formData.cashAppId) {
          setAlertMessage("Please enter your Cash App ID.");
          return;
        }
        break;
      case "PayPal":
        if (!formData.paypalEmail) {
          setAlertMessage("Please enter your PayPal email.");
          return;
        }
        break;
      case "Skrill":
        if (!formData.skrillEmail) {
          setAlertMessage("Please enter your Skrill email.");
          return;
        }
        break;
      default:
        break;
    }

    // Submit withdrawal request (e.g., API call)
    setAlertMessage(
      `Withdrawal request for $${formData.amount} via ${selectedPaymentMethod} submitted.`
    );
  };

  const renderFormFields = () => {
    switch (selectedPaymentMethod) {
      case "Crypto":
        return (
          <>
            <div>
              <label className="block text-gray-400">Coin Assets</label>
              <select
                name="cryptoAsset"
                value={formData.cryptoAsset}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              >
                {["BTC", "ETH", "LTC", "XRP", "BCH"].map((coin) => (
                  <option key={coin} value={coin}>
                    {coin}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-400">Amount</label>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
              <p className="text-sm text-gray-400 mt-1">Balance: ${balance}</p>
            </div>
            <div>
              <label className="block text-gray-400">
                {formData.cryptoAsset} Address
              </label>
              <input
                type="text"
                name="btcAddress"
                placeholder={`${formData.cryptoAsset} Address`}
                value={formData.btcAddress}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
            </div>
          </>
        );
      case "Bank Transfer":
        return (
          <>
            <div>
              <label className="block text-gray-400">Bank Name</label>
              <input
                type="text"
                name="bankName"
                placeholder="Bank Name"
                value={formData.bankName}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-400">Account Number</label>
              <input
                type="text"
                name="bankAccountNumber"
                placeholder="Account Number"
                value={formData.bankAccountNumber}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-400">Account Name</label>
              <input
                type="text"
                name="bankAccountName"
                placeholder="Account Name"
                value={formData.bankAccountName}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-400">Amount</label>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
              <p className="text-sm text-gray-400 mt-1">Balance: ${balance}</p>
            </div>
          </>
        );
      case "Cash App":
        return (
          <>
            <div>
              <label className="block text-gray-400">Cash App ID</label>
              <input
                type="text"
                name="cashAppId"
                placeholder="Cash App ID"
                value={formData.cashAppId}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-400">Amount</label>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
              <p className="text-sm text-gray-400 mt-1">Balance: ${balance}</p>
            </div>
          </>
        );
      case "PayPal":
        return (
          <>
            <div>
              <label className="block text-gray-400">PayPal Email</label>
              <input
                type="email"
                name="paypalEmail"
                placeholder="PayPal Email"
                value={formData.paypalEmail}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-400">Amount</label>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
              <p className="text-sm text-gray-400 mt-1">Balance: ${balance}</p>
            </div>
          </>
        );
      case "Skrill":
        return (
          <>
            <div>
              <label className="block text-gray-400">Skrill Email</label>
              <input
                type="email"
                name="skrillEmail"
                placeholder="Skrill Email"
                value={formData.skrillEmail}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-400">Amount</label>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full p-2 bg-slate-900 text-gray-200 border border-gray-700 rounded-md"
              />
              <p className="text-sm text-gray-400 mt-1">Balance: ${balance}</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <HeaderPage />
      <section className="flex flex-col lg:flex-row justify-between min-h-screen  bg-slate-950 p-4">
        {/* Payment Method Section */}
        <div className="bg-slate-900 shadow-lg rounded-lg p-6 w-full lg:w-2/3 mb-6 lg:mb-0 lg:mr-4">
          <h1 className="text-2xl font-bold mb-4 text-teal-600">
            Withdrawal Page
          </h1>
          <p className="text-gray-400 mb-6">Choose a withdrawal method.</p>

          <button
            onClick={() => setShowPaymentOptions(!showPaymentOptions)}
            className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition"
          >
            {selectedPaymentMethod || "Select Payment Method"}
          </button>

          {showPaymentOptions && (
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h2 className="text-xl font-bold mb-3 text-gray-200">
                Select Payment Method
              </h2>
              <ul className="space-y-2">
                {[
                  "Bank Transfer",
                  "Crypto",
                  "Cash App",
                  "PayPal",
                  "Skrill",
                ].map((method) => (
                  <li
                    key={method}
                    onClick={() => handlePaymentMethodSelect(method)}
                    className="p-2 bg-gray-700 text-gray-200 shadow rounded cursor-pointer hover:bg-gray-600"
                  >
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedPaymentMethod && (
            <div className="mt-6 space-y-4">
              <h2 className="text-xl font-bold text-gray-200">
                {selectedPaymentMethod} Withdrawal
              </h2>
              {renderFormFields()}
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="bg-slate-900 shadow-lg rounded-lg p-6 w-full lg:w-1/3">
          <h2 className="text-xl font-bold mb-4 text-teal-600">
            Withdrawal Summary
          </h2>
          <div className="space-y-3 text-gray-400">
            <p>
              <span className="font-semibold">Payment Method:</span>{" "}
              {selectedPaymentMethod || "Not selected"}
            </p>
            {selectedPaymentMethod && (
              <>
                <p>
                  <span className="font-semibold">Amount:</span> $
                  {formData.amount}
                </p>
                {selectedPaymentMethod === "Crypto" && (
                  <>
                    <p>
                      <span className="font-semibold">Coin:</span>{" "}
                      {formData.cryptoAsset}
                    </p>
                    <p>
                      <span className="font-semibold">Address:</span>{" "}
                      {formData.btcAddress}
                    </p>
                  </>
                )}
                {selectedPaymentMethod === "Bank Transfer" && (
                  <>
                    <p>
                      <span className="font-semibold">Bank Name:</span>{" "}
                      {formData.bankName}
                    </p>
                    <p>
                      <span className="font-semibold">Account Number:</span>{" "}
                      {formData.bankAccountNumber}
                    </p>
                    <p>
                      <span className="font-semibold">Account Name:</span>{" "}
                      {formData.bankAccountName}
                    </p>
                  </>
                )}
                {selectedPaymentMethod === "Cash App" && (
                  <p>
                    <span className="font-semibold">Cash App ID:</span>{" "}
                    {formData.cashAppId}
                  </p>
                )}
                {selectedPaymentMethod === "PayPal" && (
                  <p>
                    <span className="font-semibold">PayPal Email:</span>{" "}
                    {formData.paypalEmail}
                  </p>
                )}
                {selectedPaymentMethod === "Skrill" && (
                  <p>
                    <span className="font-semibold">Skrill Email:</span>{" "}
                    {formData.skrillEmail}
                  </p>
                )}
              </>
            )}
            <button
              onClick={handleWithdrawal}
              className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition"
            >
              Confirm Withdrawal
            </button>
          </div>
        </div>
      </section>

      {/* Custom Alert Popup */}
      {alertMessage && (
        <CustomAlert
          message={alertMessage}
          onClose={() => setAlertMessage(null)}
        />
      )}
    </>
  );
}
