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

export default function DailySignalPage() {
  const plans = [
    {
      name: "Learn II Trade",
      price: "$9,899.00",
    },
    {
      name: "AVA TRADE",
      price: "$4,999.00",
    },
    {
      name: "RoboForex",
      price: "$2,899.00",
    },
    {
      name: "ZERO TO HERO",
      price: "$15,988.00",
    },
    {
      name: "1000 PIPS",
      price: "$1, 500.0;",
    },
    {
      name: "WeTalkTrade",
      price: "$10,900.00",
      duration: "1 Day",
    },
  ];

  return (
    <>
      <HeaderPage />

      <section className="min-h-screen mx-auto px-4 py-8 bg-slate-950">
        <div className="bg-slate-900 p-6 flex items-center mb-10 rounded-xl shadow-lg w-96 text-white">
          <div>
            <p className="text-md font-bold text-gray-400">Purchased Signal</p>
            <p className="text-xl font-bold text-slate-300">None</p>
            <p className="text-gray-500">$0.00</p>
          </div>
          <ResponsiveContainer  height={100} width={400}>
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#00c8ff"
                strokeWidth={4}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg shadow-lg p-6 text-white relative hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105"
            >
              {/* Try It Now Button */}
              <button className="absolute -top-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition duration-300 shadow-md">
                Try It Now
              </button>

              <h1 className="text-2xl font-bold mb-2">{plan.name}</h1>
              <h3 className="text-xl font-semibold mb-2">{plan.price}</h3>
              <hr className="border-slate-700 mb-4" />
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Amount
                  </label>
                  <input
                    type="text"
                    placeholder={plan.price.replace("$", "").replace(",", "")}
                    className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button className="w-full bg-gradient-to-r from-teal-600 to-teal-800 text-white px-4 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-900 transition duration-300 shadow-lg">
                    Purchase Signal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
