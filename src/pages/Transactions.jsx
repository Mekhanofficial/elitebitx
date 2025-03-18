import HeaderPage from "../components/Header";

export default function TransactionPage (){
    return (
      <>
        <HeaderPage />
        <div className="bg-slate-950 min-h-screen">
          <div className=" text-white font-semibold rounded-md relative top-28 justify-between items-center bg-slate-900 p-5 mx-10 hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105">
            <h1 className="font-semibold text-lg mb-10">All Transactions</h1>
            <div className="flex  justify-between items-center">
              <h2>ID</h2>
              <h2>Type</h2>
              <div className="flex items-center gap-16">
                <h2>Amount</h2>
                <h2>Method</h2>
              </div>

              <h2>Details</h2>
              <div className="flex items-center gap-16">
                <h2>Date</h2>
                <h2>Status</h2>
              </div>
            </div>
            <h1 className="text-2xl text-center mt-10 text-slate-400 font-semibold">
              No Recent Deposit
            </h1>
          </div>
        </div>
      </>
    );
}