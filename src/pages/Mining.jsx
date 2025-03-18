import { useState, useEffect } from "react";
import bg2 from "../pictures/bg12.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import HeaderPage from "../components/Header";
import CoinLibHorizontalliveTicker from "../components/CoinLib";
import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";

export default function MiningPage() {
  const [cryptoData, setCryptoData] = useState({
    BTC: { balance: 0, value: 0, hashPower: "GH/s" },
    ETH: { balance: 0, value: 0, hashPower: "GH/s" },
    BNB: { balance: 0, value: 0, hashPower: "0 GH/s" },
    DOGE: { balance: 0, value: 0, hashPower: "GH/s" },
    ATOM: { balance: 0, value: 0, hashPower: "GH/s" },
  });


  
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,dogecoin,cosmos&vs_currencies=usd"
    )
      .then((response) => response.json())
      .then((data) => {
        setCryptoData((prev) => ({
          BTC: { ...prev.BTC, value: data.bitcoin.usd },
          ETH: { ...prev.ETH, value: data.ethereum.usd },
          BNB: { ...prev.BNB, value: data.binancecoin.usd },
          DOGE: { ...prev.DOGE, value: data.dogecoin.usd },
          ATOM: { ...prev.ATOM, value: data.cosmos.usd },
        }));
      });
  }, []);

  return (
    <>
      <HeaderPage />
      <section className="overflow-x-hidden min-h-screen  bg-gray-900 text-white">
        <CoinLibHorizontalliveTicker />

        <div className="flex-col md:flex-row gap-6 p-6">
          {/* Main Content */}
          <div className="flex-1 flex flex-col p-3 rounded-lg shadow-lg bg-zinc-900 h-60">
            {/* Balance Section */}
            <div
              className="mb-4 p-10 rounded-lg relative overflow-hidden"
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="relative flex justify-between pb-4 mb-4 text-white">
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-amber-300">
                    $0.00
                  </h2>
                  <h6 className="text-gray-400">Balance</h6>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 justify-between">
              <button className="border border-amber-700 bg-transparent text-white px-4 py-2 rounded-md transition duration-300  hover:border-slate-500 hover:text-amber-700">
                BUY CONTRACT
              </button>
              <button className="border border-amber-700 bg-transparent text-white px-4 py-2 rounded-md transition duration-300 hover:bg- hover:border-green-700 hover:text-amber-700">
                MY CONTRACTS
              </button>
            </div>
          </div>

          {/* Crypto Data Widget */}
          <div className="space-y-4 mt-10">
            {Object.entries(cryptoData).map(([key, data]) => (
              <div
                key={key}
                className="flex items-center justify-between bg-zinc-900 p-4 rounded-lg shadow-lg border border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={
                      key === "BTC"
                        ? faBitcoin
                        : key === "ETH"
                        ? faEthereum
                        : faCoins
                    }
                    className="text-amber-400 text-2xl"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{key}</h3>
                    <p className="text-gray-400">
                      {data.balance.toFixed(6)} {key}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">
                    ${data.value.toLocaleString()}
                  </p>
                  <p className="text-gray-400">{data.hashPower}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
