import HeaderPage from "../components/Header";

export default function TradesRoiPage(){
    return (
      <>
        <HeaderPage />
        <section className="bg-slate-950 min-h-screen overflow-x-hidden">
          {/* Recent Trades Section */}
          <div className="text-white font-semibold rounded-md bg-slate-900 mx-10 p-5 border top-20 relative border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300">
            <h1 className="font-semibold text-xl mb-6 text-center lg:text-left">
              Recent Trades
            </h1>

            {/* Horizontal Scroll Wrapper */}
            <div className="overflow-x-auto">
              <div className="min-w-[1000px]">
                <div className="flex justify-between items-center text-gray-400 border-b border-gray-700 pb-2">
                  <h2 className="px-4">ID</h2>
                  <h2 className="px-4">Type</h2>
                  <div className="flex items-center gap-8 lg:gap-16 px-4">
                    <h2>Trade Time</h2>
                    <h2>Amount</h2>
                  </div>
                  <h2 className="px-4">Pair</h2>
                  <div className="flex items-center gap-8 lg:gap-16 px-4">
                    <h2>Action</h2>
                    <h2>Entry</h2>
                    <h2>SL</h2>
                    <h2>TP</h2>
                    <h2>Time in Force</h2>
                    <h2>Result</h2>
                    <h2>Details</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty State */}
            <h1 className="text-2xl text-center mt-10 text-slate-400 font-bold">
              You haven't placed any trades.
            </h1>
          </div>
        </section>
      </>
    );
}