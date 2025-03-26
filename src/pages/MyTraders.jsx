import { useState } from "react";
import traderImages from "./MyTradersImg"; // Import the images
import HeaderPage from "../components/Header";

const names = [
  "Lisa Dawson",
  "John Cerasani",
  "Defend Dark",
  "Tori Trades",
  "GirlGone_Crypto",
  "Molly Elmore",
  "Dontrece_HD〽️",
  "Taylor Hamilton",
  "Laurent Jones",
  "Kevin Kruze",
  "Angelo",
  "Crypto Tea",
  "Clarity Crypto",
  "Mrturnupthehustle",
  "TwentyEight",
  "Loudmouth.eth",
  "TJR",
  "Renzo",
  "Randi Hipper",
  "Cryptologicjohn",
  "Micheal Rodriguez",
  "Tradetravelchill",
  "Penny2x",
  "Micheal S Gibson",
  "Jpdandrea",
  "Crypto Rover",
  "Luke Belmar",
  "BAM INVESTOR",
  "Chris Buziness",
  "Coach Vince",
  "Milly",
  "Laurent Boutiller",
  "Dom Lucre",
  "Mason Versluis",
  "Greg",
  "Cole Jafari",
  "Evca Wolf",
  "Jenny",
  "SlumDoge",
  "Layah Woods",
  "Eva Savagiou",
  "CrypNuevo",
  "Zach Humphries",
  "Justin Wallers",
  "Oscar Ramos",
  "Brian Jung",
  "Calvin Williams",
  "Ixnkong",
  "Tiffany",
  "Tarabull808",
  "Tyler",
  "Stephan Borg",
  "Mona",
  "Blonde Broker",
  "Tommy Bryson",
  "JA",
  "Josh Lenny Lewis",
  "Lainylainylainy",
  "Chris Buziness",
  "Layah Heilpern",
  "Arno Wingen",
  "Kadin Thompson",
  "Tiago Andrade",
  "Hamza Hamed",
  "Rico",
  "Roc Zacharias",
  "Rey",
  "STXRBOY999",
  "NinjaScalp",
  "Thomas Kralow",
  "Alex Gonzalez",
  "Bob Smith",
  "Charlie Davis",
  "Diana Evans",
  "Ethan Wilson",
  "Fiona Carter",
  "George Adams",
  "Hannah Scott",
  "Ian Thompson",
  "Julia Baker",
  "Alice Johnson",
  "Bob Smith",
  "Charlie Davis",
  "Diana Evans",
  "Ethan Wilson",
  "Fiona Carter",
  "George Adams",
  "Hannah Scott",
  "Ian Thompson",
  "Julia Baker",
];

const traders = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: names[i % names.length],
  winRate: Math.floor(Math.random() * 31) + 70, // Random win rate between 70-100
  profitShare: Math.floor(Math.random() * 21) + 10, // Random profit share between 10-30
  balance: (Math.random() * 500 + 200).toFixed(2), // Random balance between 200 and 700
  losses: Math.floor(Math.random() * 10), // Random losses between 0-9
  wins: Math.floor(Math.random() * 50) + 1, // Random wins between 1-50
  image: traderImages[i % traderImages.length], // Use imported images
}));

export default function MyTraderPage() {
  const [search, setSearch] = useState("");
  const [copyStatus, setCopyStatus] = useState({});
  const [loadingId, setLoadingId] = useState(null);

  // Filter traders based on search input
  const filteredTraders = traders.filter((trader) =>
    trader.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle the "Copy" button click
  const handleCopy = (id) => {
    setLoadingId(id);
    setCopyStatus((prev) => ({
      ...prev,
      [id]: "Copying...",
    }));

    // Simulate a delay for copying
    setTimeout(() => {
      setLoadingId(null);
      setCopyStatus((prev) => ({
        ...prev,
        [id]: "Copied!",
      }));
    }, 2000);
  };

  return (
    <>
      <HeaderPage />
      <div className="p-6 bg-gradient-to-r from-gray-800  to-black min-h-screen text-white">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search traders..."
          className="w-full p-3 mb-6 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-300 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Trader Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTraders.map((trader) => (
            <div
              key={trader.id}
              className="p-6 bg-gray-900 rounded-xl shadow-lg text-center hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-yellow-500 hover:shadow-yellow-500/50 hover:scale-105"
            >
              {/* Trader Image */}
              <div className="relative mx-auto w-24 h-24">
                <img
                  src={trader.image}
                  alt={trader.name}
                  className="w-full h-full rounded-full border-4 border-white"
                />
                <span className="absolute bottom-0 right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-gray-900"></span>
              </div>

              {/* Trader Name and Balance */}
              <h2 className="mt-4 font-bold text-xl">{trader.name}</h2>
              <p className="text-lg text-amber-300 font-semibold">
                ${trader.balance}
              </p>
              <p className="text-sm text-gray-400">
                Profit Share: {trader.profitShare}%
              </p>

              {/* Win Rate and Losses */}
              <div className="flex justify-between items-center mt-4 text-sm">
                <div className="text-white text-left">
                  <div className="flex gap-2 items-center">
                    <p className="font-bold text-xl">{trader.winRate}%</p>
                    <p className="text-gray-500 text-xs">WIN RATE</p>
                  </div>
                  <p className="font-bold text-md">{trader.wins} WINS</p>
                </div>
                <div className="w-px h-10 bg-gray-600"></div>
                <div className="text-white text-right">
                  <p className="font-bold text-xl">{trader.losses}</p>
                  <p className="text-gray-400">LOSSES</p>
                </div>
              </div>

              {/* Copy Button */}
              <button
                className="mt-6 w-full bg-gradient-to-r from-orange-500 to-amber-400 text-black font-bold py-3 rounded-lg transition duration-200 hover:scale-105 focus:outline-none"
                onClick={() => handleCopy(trader.id)}
                disabled={loadingId === trader.id}
              >
                {loadingId === trader.id ? (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                  </div>
                ) : (
                  copyStatus[trader.id] || "Copy"
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}