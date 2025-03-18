import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faWallet,
  faCoins,
  faPlus,
  faEye,
  faArrowDown,
  faArrowUp,
  faExchangeAlt,
  faHistory,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import HeaderPage from "../components/Header";
import { LineChart, Line, ResponsiveContainer } from "recharts";

// Simulated trading data with ups and downs
const data = [
  { value: 10 },
  { value: 0 },
  { value: 100 },
  { value: 30 },
  { value: 88 },
  { value: 15 },
  { value: 115 },
  { value: 40 },
  { value: 65 },
];

export default function DashPage() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const tradeVolumes = [3, 7, 5, 9, 6, 8, 4, 10, 2, 7];

  const actions = [
    { icon: faArrowDown, label: "DEPOSIT", color: "text-green-400" },
    { icon: faArrowUp, label: "WITHDRAW", color: "text-red-400" },
    { icon: faExchangeAlt, label: "TRADE", color: "text-blue-400" },
    { icon: faHistory, label: "HISTORY", color: "text-yellow-400" },
  ];

  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum,tether,ripple,binancecoin,solana,usd-coin,cardano",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );

        const formattedData = response.data.map((crypto) => ({
          name: crypto.name,
          symbol: crypto.symbol.toUpperCase(),
          price: `$${crypto.current_price.toLocaleString()}`,
          change: `${crypto.price_change_percentage_24h.toFixed(2)}%`,
          volume: `$${crypto.total_volume.toLocaleString()}`,
          image: crypto.image, // Added image URL
        }));

        setCryptoData(formattedData);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <>
      <HeaderPage />
      <section className="flex flex-col lg:flex-row min-h-screen  bg-zinc-950 text-white p-4 lg:p-8 overflow-x-hidden">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 lg:pr-4">
          {/* Welcome Card */}
          <div className="bg-gradient-to-r from-teal-700 to-teal-950 border-2 border-slate-700 rounded-lg p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h1 className="text-2xl font-bold mb-2">Welcome to EliteBitx!</h1>
            <p className="text-gray-300 mb-4">
              Your gateway to the exciting world of cryptocurrency trading.
            </p>
            <button className="bg-gray-300 hover:bg-teal-600 hover:text-black text-teal-600 px-4 py-2 rounded-full flex items-center gap-2 transition duration-300">
              <FontAwesomeIcon icon={faBitcoin} />
              Crypto Update
            </button>
          </div>

          {/* Balance Card */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-950 rounded-lg p-6 mb-6 shadow-lg hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold">Available Balance:</h4>
              <FontAwesomeIcon icon={faEye} className="cursor-pointer" />
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">$0</h1>
              <div className="flex items-center gap-3">
                <h3>Transactions</h3>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="cursor-pointer h-3"
                />
              </div>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition duration-300">
                <FontAwesomeIcon icon={faPlus} />
                Add Funds
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-950 rounded-lg p-6 mb-6 shadow-lg hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {actions.map((action, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`p-4 rounded-full inline-block mb-2 bg-slate-950 ${action.color} transition-all duration-300 relative`}
                  >
                    <FontAwesomeIcon
                      icon={action.icon}
                      className={`h-6 ${action.color}`}
                    />
                  </div>
                  <h3 className="text-sm font-semibold">{action.label}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "0 Live", value: "$0.00", icon: faChartLine },
              { label: "Last Profit", value: "$0.00", icon: faCoins },
              { label: "Capital", value: "$0.00", icon: faWallet },
              { label: "Rewards", value: "$0.00", icon: faCoins },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-700 to-slate-950 rounded-lg p-6 shadow-lg hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-teal-600 p-3 rounded-full">
                    <FontAwesomeIcon icon={stat.icon} className="h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trade Volumes and Chart */}
          <div className="flex flex-col sm:flex-row gap-4 mt-5">
            <div className="bg-[#1A1D2E] p-5 rounded-xl flex-1 flex gap-10 items-center text-white hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105 h-[120px]">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">
                  {tradeVolumes.reduce((a, b) => a + b, 0)}
                </span>
                <span className="text-lg text-gray-400">Trades</span>
              </div>
              <div className="flex mt-2 gap-1">
                {tradeVolumes.map((height, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 relative justify-end"
                    onMouseEnter={() => setHoverIndex(i)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    {[...Array(height)].map((_, j) => (
                      <div
                        key={j}
                        className={`w-3 h-1 rounded-sm ${
                          j % 2 === 0
                            ? "bg-green-500 glow"
                            : "bg-gray-400 glowup"
                        }`}
                      ></div>
                    ))}
                    {hoverIndex === i && (
                      <div className="absolute bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded-md">
                        {`Trade ${i + 1}: ${height} orders`}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-4 flex items-center rounded-xl shadow-lg flex-1 text-white hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105 h-[120px]">
              <div>
                <p className="text-md font-bold text-gray-400">0</p>
                <p className="text-xl font-bold text-slate-300">Total</p>
                <p className="text-gray-500">Won</p>
              </div>
              <ResponsiveContainer height={80} width={200}>
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#00c8ff"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 lg:pl-4">
          {/* Trade Progress */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-950 rounded-lg p-6 mb-6 shadow-lg hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Trade Progress</h2>
            <div className="flex items-center justify-between">
              <h3 className="text-4xl font-bold">0%</h3>
              <div className="w-3/4 h-2 bg-teal-600 rounded-full">
                <div
                  className="h-2 bg-teal-400 rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Verify Account */}
          <button className="w-full bg-gradient-to-r from-teal-950 to-teal-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300 shadow-lg mb-6 hover:shadow-xl">
            VERIFY ACCOUNT
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {cryptoData.map((crypto, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-700 to-slate-950 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105 flex items-center"
              >
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  className="w-10 h-10 mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">{crypto.name}</h3>
                    <span className="text-sm text-gray-300">
                      {crypto.symbol}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold">{crypto.price}</h2>
                  <div className="flex justify-between items-center text-sm">
                    <span
                      className={`${
                        crypto.change.startsWith("-")
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {crypto.change}
                    </span>
                    <span className="text-gray-300">Vol: {crypto.volume}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
