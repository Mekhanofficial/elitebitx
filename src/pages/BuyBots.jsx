import HeaderPage from "../components/Header";
import bt1 from "../pictures/bt1.jpeg";

// Bot data array
const bots = [
  {
    id: 1,
    name: "3COMMAS",
    image: bt1,
    profitRate: "25%",
    amount: "$750",
    botLevel: "25",
    winRate: "20%",
  },
  {
    id: 2,
    name: "CRYPTOHOPPER",
    image: bt1,
    profitRate: "30%",
    amount: "$1000",
    botLevel: "30",
    winRate: "25%",
  },
  {
    id: 3,
    name: "TRADINGVIEW",
    image: bt1,
    profitRate: "22%",
    amount: "$600",
    botLevel: "20",
    winRate: "18%",
  },
  {
    id: 4,
    name: "ZIGNALY",
    image: bt1,
    profitRate: "28%",
    amount: "$900",
    botLevel: "28",
    winRate: "22%",
  },
  {
    id: 5,
    name: "SHRIMMPY",
    image: bt1,
    profitRate: "35%",
    amount: "$1200",
    botLevel: "35",
    winRate: "30%",
  },
  {
    id: 6,
    name: "COINRULE",
    image: bt1,
    profitRate: "20%",
    amount: "$500",
    botLevel: "18",
    winRate: "15%",
  },
  {
    id: 7,
    name: "TRADEBOT",
    image: bt1,
    profitRate: "27%",
    amount: "$850",
    botLevel: "25",
    winRate: "20%",
  },
  {
    id: 8,
    name: "BITUNIVERSE",
    image: bt1,
    profitRate: "33%",
    amount: "$1100",
    botLevel: "32",
    winRate: "28%",
  },
];

export default function BuyBotPage() {
  return (
    <>
      <HeaderPage />
      <section className=" p-8 bg-slate-950 min-h-screen">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white">Trading Bots</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Purchasing our Trading Bot can help you streamline your trading
            strategy and potentially maximize your profits. Our Trading Bot is
            designed to analyze market trends and execute trades based on
            pre-programmed rules and parameters. Purchase our Trading Bot today
            and start automating your trades for optimal results!
          </p>
        </div>

        {/* Bot Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bots.map((bot) => (
            <div
              key={bot.id}
              className="bg-slate-900 p-6 rounded-lg flex flex-col items-center text-center shadow-lg border border-gray-800 hover:scale-105 transition-transform duration-300"
            >
              {/* Bot Image and Status */}
              <div className="relative mb-4">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={bot.image}
                  alt={bot.name}
                />
                <span className="absolute top-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-slate-950"></span>
              </div>

              {/* Bot Name and Profit Rate */}
              <h2 className="text-2xl font-semibold text-white">{bot.name}</h2>
              <h5 className="text-gray-400 mb-4 text-lg">
                Profit Rate:{" "}
                <span className="text-green-500">{bot.profitRate}</span>
              </h5>

              {/* Bot Details */}
              <div className="flex justify-between w-full px-6 text-gray-300 text-lg">
                <div className="text-left">
                  <h1 className="font-bold text-white">{bot.amount}</h1>
                  <h1 className="text-gray-400">AMOUNT</h1>
                  <h1 className="font-bold text-white">{bot.winRate}</h1>
                </div>
                <div className="text-right">
                  <h1 className="font-bold text-white">BOT LEVEL</h1>
                  <h1 className="text-orange-400">{bot.botLevel}</h1>
                  <h1 className="text-gray-400">WIN RATE</h1>
                </div>
              </div>

              {/* Purchase Button */}
              <button className="w-full bg-gradient-to-r mt-3 from-teal-950 to-teal-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300 shadow-lg mb-6 hover:shadow-xl">
                Purchase
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
