import HeaderPage from "../components/Header";

export default function PaymentProofPage() {
  return (
    <>
      <HeaderPage />
      <section className="bg-slate-950">
        <div className=" p-8 rounded-xl bg-slate-900 relative top-16 shadow-lg mx-auto max-w-lg">
          <h1 className="text-white text-2xl font-bold mb-3 text-center">
            PAYMENT PROOF
          </h1>
          <h3 className="text-sm font-semibold text-red-600 mb-5 text-center">
            Upload your payment proof once deposit is done
          </h3>

          <div className="space-y-4">
            <div className="flex flex-col text-white">
              <label className="text-md font-semibold mb-1">Amount</label>
              <input
                type="text"
                placeholder="Enter amount"
                className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-teal-500 focus:ring focus:ring-teal-500/50"
              />
            </div>
            <div className="flex flex-col text-white">
              <label className="text-md font-semibold mb-1">Reason</label>
              <input
                type="text"
                placeholder="Enter reason"
                className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-teal-500 focus:ring focus:ring-teal-500/50"
              />
            </div>
          </div>

          <button className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-full flex items-center justify-center transition duration-300 w-full mt-5">
            Upload Proof
          </button>
        </div>

        <div className="text-white font-semibold rounded-md mt-24 justify-between items-center bg-slate-900 p-5 mx-10 hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105 overflow-x-auto">
          <h1 className="font-semibold text-xl mb-10">Payment Proof</h1>
          <div className="flex justify-between items-center min-w-[800px]">
            <h2>ID</h2>
            <h2>Amount</h2>
            <div className="flex items-center gap-16">
              <h2>Reason</h2>
              <h2>Date</h2>
            </div>
            <h2>Details</h2>
            <div className="flex items-center gap-16">
              <h2>Date</h2>
              <h2>Status</h2>
            </div>
          </div>
          <h1 className="text-2xl text-center mt-10 text-slate-400 font-semibold">
            No Recent Payment Proof
          </h1>
        </div>
      </section>
    </>
  );
}
