import { useState } from "react";
import HeaderPage from "../components/Header";
import px17 from "../pictures/px17.png";
import px18 from "../pictures/px18.png";
import px19 from "../pictures/px19.png";
import px20 from "../pictures/px20.png";
import px21 from "../pictures/px21.png";
import px22 from "../pictures/px22.png";
import Modal from "./Modal";
import ProjectDetail from "./RealEstatedetails";

const realest = [
  {
    id: 1,
    name: "Hilton Philadelphia City Avenue",
    image: px17,
    profitRate:
      "Discounted acquisition of a recently renovated hotel property in Philadelphia with below-market, assumable debt.",
    amount: "$33,000.00",
    botLevel: "25",
    winRate: "68.7%",
  },
  {
    id: 2,
    name: "Fabian Labs, Palo Alto",
    image: px18,
    profitRate:
      "Two-building life science conversion in the heart of Silicon Valley and minutes from Stanford University.",
    amount: "$24,000.00",
    botLevel: "30",
    winRate: "57%",
  },
  {
    id: 3,
    name: "Go Store It Nashville",
    image: px19,
    profitRate:
      "Class A self-storage development in one of Nashville's fastest growing suburbs with constrained supply.",
    amount: "$15,000.00",
    winRate: "18%",
  },
  {
    id: 4,
    name: "The Mirage - Texas State Student Housing",
    image: px20,
    profitRate:
      "A Texas State University student housing acquisition assuming below-market fixed-rate debt.",
    amount: "$32,500.00",
    winRate: "84.35%",
  },
  {
    id: 5,
    name: "Palmetto Industrial Park",
    image: px21,
    profitRate:
      "Acquisition of a newly constructed three-building industrial property, attracting prospective tenants.",
    amount: "$25,000.00",
    winRate: "78%",
  },
  {
    id: 6,
    name: "Bridge Labs at Pegasus Park",
    image: px22,
    profitRate:
      "Life science redevelopment within a thriving new biotech-focused campus in Dallas.",
    amount: "$12,000.00",
    winRate: "85%",
  },
];

export default function RealestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedReal, setSelectedReal] = useState(null);

  const handleInvestClick = (real) => {
    setSelectedReal(real);
    setIsModalOpen(true);
  };

  const handleViewClick = (real) => {
    setSelectedReal(real);
    setIsDetailOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <>
      <HeaderPage />
      <section className=" p-8 bg-slate-950 min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white">Real Estate</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Invest in projects and earn passive income
          </p>
          <h4 className="text-xl font-semibold text-white mt-6">My Projects</h4>
        </div>

        <h1 className="text-3xl font-bold text-white mb-8">All Projects</h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {realest.map((real) => (
            <div
              key={real.id}
              className="bg-slate-900 p-6 rounded-xl flex flex-col items-center text-center shadow-lg border border-gray-800 transition-transform duration-300 hover:scale-105"
            >
              <img
                className="w-full h-64 rounded-2xl object-cover mb-4 p-2"
                src={real.image}
                alt={real.name}
              />
              <h2 className="text-2xl font-semibold text-white mb-2">
                {real.name}
              </h2>
              <p className="text-gray-400 mb-4 text-lg">{real.profitRate}</p>
              <div className="flex justify-between w-full px-6 text-gray-300 text-lg">
                <div className="text-center">
                  <h1 className="font-bold text-white">{real.amount}</h1>
                  <p className="text-gray-400 text-sm font-semibold">MINIMUM</p>
                  <h1 className="font-bold text-white ">{real.winRate}</h1>
                </div>
                <div className="text-center">
                  <h1 className="font-bold text-white">ROI</h1>
                  <p className="text-orange-400 text-sm">Growth & Income</p>
                  <p className="text-gray-400 text-sm mt-2">STRATEGY</p>
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <button
                  onClick={() => handleViewClick(real)}
                  className="w-full bg-gradient-to-r mt-6 from-slate-700 to-slate-950 text-white px-4 py-3 rounded-lg shadow-lg transition duration-300 hover:from-slate-800 hover:to-slate-700"
                >
                  View
                </button>
                <button
                  onClick={() => handleInvestClick(real)}
                  className="w-full bg-gradient-to-r mt-6 from-teal-700 to-teal-950 text-white px-4 py-3 rounded-lg shadow-lg transition duration-300 hover:from-teal-900 hover:to-teal-700"
                >
                  Invest Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-slate-800 p-8 rounded-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Invest in {selectedReal.name}
            </h2>
            <p className="text-gray-400 mb-4">Enter your investment amount:</p>
            <input
              type="number"
              className="w-full p-2 rounded-lg bg-slate-700 text-white mb-4"
              placeholder="Amount"
            />
            <button
              className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg"
              onClick={closeModal}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {isDetailOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeDetail}
        >
          <div
            className="bg-slate-800 p-8 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectDetail project={selectedReal} onClose={closeDetail} />
          </div>
        </div>
      )}
    </>
  );
}