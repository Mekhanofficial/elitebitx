import HeaderPage from "../components/Header";
import bt1 from "../pictures/bt1.jpeg";

const stakeAssets = [
  { name: "Bitcoin", symbol: "BTC", img: bt1, min: "1 BTC", max: "10 BTC" },
  { name: "Ethereum", symbol: "ETH", img: bt1, min: "0.1 ETH", max: "50 ETH" },
  { name: "Cardano", symbol: "ADA", img: bt1, min: "100 ADA", max: "5000 ADA" },
  { name: "Solana", symbol: "SOL", img: bt1, min: "1 SOL", max: "100 SOL" },
  { name: "Polkadot", symbol: "DOT", img: bt1, min: "5 DOT", max: "500 DOT" },
  {
    name: "Avalanche",
    symbol: "AVAX",
    img: bt1,
    min: "1 AVAX",
    max: "200 AVAX",
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    img: bt1,
    min: "10 LINK",
    max: "1000 LINK",
  },
  { name: "Litecoin", symbol: "LTC", img: bt1, min: "0.5 LTC", max: "100 LTC" },
  { name: "Ripple", symbol: "XRP", img: bt1, min: "50 XRP", max: "5000 XRP" },
];

export default function StakePage() {
  return (
    <>
      <HeaderPage />
      <section className=" px-10 flex flex-col bg-slate-950 items-center">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-400">Stake</h1>
          <h4 className="text-lg text-gray-500">
            Earn profits from staking and manage your staking history
          </h4>
        </div>

        <h1 className="text-2xl text-gray-400 font-semibold mb-5">POOLS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stakeAssets.map((asset, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-lg flex flex-col items-center text-center w-80 shadow-lg border border-gray-800"
            >
              <div className="relative mb-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src={asset.img}
                  alt={asset.name}
                />
                <span className="absolute top-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-slate-950"></span>
              </div>
              <h2 className="text-2xl text-white font-bold">{asset.name}</h2>
              <h5 className="text-gray-400 font-semibold mb-4">
                {asset.symbol}
              </h5>
              <div className="flex justify-between w-full px-6 text-gray-300 text-sm">
                <div className="text-left">
                  <h1 className="font-bold">{asset.min}</h1>
                  <h1 className="text-gray-400">MINIMUM</h1>
                  <h1 className="font-bold">{asset.max}</h1>
                </div>
                <div className="text-right">
                  <h1 className="font-bold">MAXIMUM</h1>
                  <h1 className="text-orange-400">Daily</h1>
                  <h1 className="text-gray-400">CYCLE</h1>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r mt-3 from-teal-950 to-teal-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300 shadow-lg mb-6 hover:shadow-xl">
                Stake
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 text-white font-semibold rounded-md p-5 hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105 w-full max-w-4xl">
          <h1 className="text-2xl text-gray-400 font-bold mb-5">Stakings</h1>
          <div className="flex justify-between items-center text-gray-300">
            <h2>ID</h2>
            <h2>Ref</h2>
            <div className="flex items-center gap-10">
              <h2>Amount</h2>
              <h2>Duration</h2>
            </div>
            <h2>Total (USD)</h2>
            <h2>ROI</h2>
            <div className="flex items-center gap-10">
              <h2>Stake Date</h2>
              <h2>Status</h2>
            </div>
          </div>
          <h1 className="text-2xl text-center mt-10 text-slate-400 font-semibold">
            You haven't made any stake.
          </h1>
        </div>
      </section>
    </>
  );
}
