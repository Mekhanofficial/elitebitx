import { useState } from "react";
import HeaderPage from "../components/Header";
import TradingViewChart from "../components/Tradingview";

export default function PlaceTradePage() {
  const [tradeType, setTradeType] = useState("Choose Trade Type");
  const [assets, setAssets] = useState([]);

  const tradeAssets = {
    "VIP Trades": ["VIP Asset 1", "VIP Asset 2", "VIP Asset 3"],
    Crypto: ["BTC/USD", "ETH/USD", "ETM/USD"],
    Forex: ["EUR/USD", "GBP/USD", "JPY/USD"],
  };

  const handleTradeTypeChange = (e) => {
    const selectedTradeType = e.target.value;
    setTradeType(selectedTradeType);
    setAssets(tradeAssets[selectedTradeType] || []);
  };

  return (
    <>
      <HeaderPage />
      <section className="overflow-x-hidden bg-slate-950 px-4 md:px-6 lg:px-10 py-5">
        <div className="flex flex-col lg:flex-row min-h-screen text-gray-100 gap-4">
          {/* Main Chart Content */}
          <div className="w-full lg:w-2/3 flex flex-col text-center">
            <TradingViewChart
              symbol="BTC/USD"
              interval="60"
              width="100%"
              height={400}
            />
          </div>

          {/* Trade Form */}
          <div className="w-full lg:w-1/3 bg-slate-900 p-5 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-left text-yellow-600 mb-5 font-bold text-lg">
              PLACE TRADE
            </h2>
            <div className="flex flex-col sm:flex-row justify-between mb-2 gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 w-full sm:w-1/2 rounded-lg">
                BUY
              </button>
              <button className="bg-red-500 text-white px-4 py-2 w-full sm:w-1/2 rounded-lg">
                SELL
              </button>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Type</label>
              <select
                className="w-full bg-slate-800 text-white p-2 rounded-lg"
                value={tradeType}
                onChange={handleTradeTypeChange}
              >
                <option>Choose Trade Type</option>
                <option>VIP Trades</option>
                <option>Crypto</option>
                <option>Forex</option>
              </select>
              <label className="block text-sm font-medium">Assets</label>
              <select className="w-full bg-slate-800 text-white p-1 rounded-lg">
                {assets.length > 0 ? (
                  assets.map((asset, index) => (
                    <option key={index} value={asset}>
                      {asset}
                    </option>
                  ))
                ) : (
                  <option>Select a trade type first</option>
                )}
              </select>
              <label className="block text-sm font-medium">Amount</label>
              <input
                type="text"
                className="w-full bg-slate-800 text-white p-1 rounded-lg"
                placeholder="500"
              />
              <label className="block text-sm font-medium">Lot Size</label>
              <select className="w-full bg-slate-800 text-white p-1 rounded-lg">
                <option>2 LS</option>
                <option>5 LS</option>
                <option>10 LS</option>
                <option>15 LS</option>
              </select>
              <label className="block text-sm font-medium">Take Profit</label>
              <input
                type="text"
                className="w-full bg-slate-800 text-white p-1 rounded-lg"
                placeholder="1.0013"
              />
              <label className="block text-sm font-medium">Stop Loss</label>
              <input
                type="text"
                className="w-full bg-slate-800 text-white p-1 rounded-lg"
                placeholder="1.0013"
              />
              <label className="block text-sm font-medium">Duration</label>
              <select className="w-full bg-slate-800 text-white p-1 rounded-lg">
                <option>5 Minutes</option>
                <option>10 Minutes</option>
                <option>15 Minutes</option>
                <option>30 Minutes</option>
              </select>
            </div>
            <div className="mt-4 mb-2 bg-red-900 rounded-md p-4 text-sm text-gray-400">
              Your trade will auto close if SL or TP does not hit.
            </div>
            <button className="mt-2 w-full bg-gradient-to-r from-teal-700 to-teal-950 text-black py-2 rounded-lg font-semibold">
              Place Order
            </button>
          </div>
        </div>

        {/* Recent Trades Section */}
        <div className="text-white font-semibold rounded-md bg-slate-900 p-5 my-4 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300">
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
