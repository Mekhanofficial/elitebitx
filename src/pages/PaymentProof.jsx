import HeaderPage from "../components/Header";

export default function PaymentProofPage() {
  return (
    <>
      <HeaderPage />
      <section className="bg-slate-950 min-h-screen flex flex-col items-center p-4 md:p-10">
        {/* Payment Proof Form */}
        <div className="bg-slate-900 p-6 md:p-8 rounded-xl shadow-lg max-w-md lg:max-w-lg w-full mt-10">
          <h1 className="text-white text-2xl font-bold mb-3 text-center">
            PAYMENT PROOF
          </h1>
          <h3 className="text-sm font-semibold text-red-600 mb-5 text-center">
            Upload your payment proof once deposit is done
          </h3>

          <div className="space-y-4">
            <div className="flex flex-col text-white">
              <label className="text-md font-semibold mb-1">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 bg-gray-800 rounded-md"
              />
            </div>

            <div className="flex flex-col text-white">
              <label className="text-md font-semibold mb-1">Amount</label>
              <input
                type="text"
                placeholder="Enter amount"
                className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-teal-500 focus:ring focus:ring-teal-500/50"
              />
            </div>

            <div className="flex flex-col text-white">
              <label className="text-md font-semibold mb-1">Reason</label>
              <input
                type="text"
                placeholder="Enter reason"
                className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-teal-500 focus:ring focus:ring-teal-500/50"
              />
            </div>
          </div>

          <button className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-full transition duration-300 w-full mt-5">
            Upload Proof
          </button>
        </div>

        {/* Payment Proof Table with Scrollable Section */}
        <div className="bg-slate-900 p-5 mt-12 rounded-xl shadow-lg border border-gray-800 max-w-full w-full">
          <h1 className="text-white font-semibold text-xl mb-5 text-center">
            Payment Proof
          </h1>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="flex justify-between items-center text-white text-sm font-semibold border-b border-gray-700 pb-2">
                <h2>ID</h2>
                <h2>Amount</h2>
                <h2>Reason</h2>
                <h2>Date</h2>
                <h2>Status</h2>
              </div>

              {/* Empty state */}
              <div className="text-center text-slate-400 text-lg font-semibold mt-5">
                No Recent Payment Proof
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
