import HeaderPage from "../components/Header";

export default function TradesRoiPage(){
    return (
      <>
        <HeaderPage />
        <section className="bg-slate-950 min-h-screen">
          {/* Recent Trades Section */}
          <div className="text-white font-semibold rounded-md relative top-28 bg-slate-900 p-5 mx-4 lg:mx-10  border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 overflow-x-auto">
            <h1 className="font-semibold text-xl mb-10">Recent Trades</h1>
            <div className="flex justify-between items-center min-w-[800px]">
              <h2>ID</h2>
              <h2>Type</h2>
              <div className="flex items-center gap-16">
                <h2>Trade Time</h2>
                <h2>Amount</h2>
              </div>
              <h2>Pair</h2>
              <div className="flex items-center gap-16">
                <h2>Action</h2>
                <h2>Entry</h2>
                <h2>SL</h2>
                <h2>TP</h2>
                <h2>Time in Force</h2>
                <h2>Result</h2>
                <h2>Details</h2>
              </div>
            </div>
            <h1 className="text-2xl text-center mt-10 text-slate-400 font-bold">
              You haven't placed any trades.
            </h1>
          </div>
        </section>
      </>
    );
}