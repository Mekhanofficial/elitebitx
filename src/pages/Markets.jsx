import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderPage from "../components/Header";
import axios from "axios";

// Helper function to abbreviate volume
const abbreviateVolume = (volume) => {
  if (volume >= 1_000_000_000) {
    return `$${(volume / 1_000_000_000).toFixed(1)}B`;
  } else if (volume >= 1_000_000) {
    return `$${(volume / 1_000_000).toFixed(1)}M`;
  } else if (volume >= 1_000) {
    return `$${(volume / 1_000).toFixed(1)}K`;
  } else {
    return `$${volume.toLocaleString()}`;
  }
};

export default function MarketPage() {
  const [cryptoData, setCryptoData] = useState([]);
  const [news, setNews] = useState([]);
  const { symbol } = useParams();

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum,tether,ripple,binancecoin,solana,usd-coin,cardano,dogecoin,polkadot,uniswap,litecoin,chainlink,bitcoin-cash,stellar,filecoin,vechain,monero,avalanche-2,polygon,cosmos,tron",
              order: "market_cap_desc",
              per_page: 22, // Increased to accommodate additional coins
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
          volume: abbreviateVolume(crypto.total_volume), // Abbreviated volume
          image: crypto.image,
        }));

        setCryptoData(formattedData);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=crypto&apiKey=cd73ac3d48314b67b9b116b14a37fcdb"
        );
        const data = await response.json();
        if (data.articles) {
          // Filter news to only include articles with images
          const filteredNews = data.articles
            .filter((article) => article.urlToImage)
            .slice(0, 4); // Limit to 4 articles
          setNews(filteredNews);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [symbol]);

  return (
    <>
      <section className="overflow-x-hidden bg-slate-950 ">
        <HeaderPage />
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 p-4">
          {/* Crypto Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
            {cryptoData.map((crypto, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105 flex items-center"
              >
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  className="w-10 h-10 mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300 font-medium">
                      {crypto.name}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        crypto.change.startsWith("-")
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {crypto.change}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <h2 className="text-lg font-bold text-white">
                      {crypto.price}
                    </h2>
                    <span className="text-sm text-gray-300">
                      Vol: {crypto.volume}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* News Section */}
          <div className="w-full lg:w-1/3 bg-slate-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h2 className="text-lg font-bold text-teal-500 mb-6">LIVE NEWS</h2>
            <div className="space-y-6">
              {news.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={article.urlToImage}
                      alt="News"
                      className="w-32 h-32 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
              {/* Single "Read More" Button at the Bottom */}
              <a
                href="https://www.example.com/crypto-news" // Replace with your desired URL
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full text-center bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
