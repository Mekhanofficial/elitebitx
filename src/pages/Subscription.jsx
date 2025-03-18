import HeaderPage from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function SubscriptionPage() {
  const plans = [
    {
      name: "Elite",
      price: "$25,000.00",
      minAmount: "Minimum",
      description: "High ROI After Trading Session",
      duration: "7 Days",
      roi: "55.00%",
      features: ["Trading Bot"],
    },
    {
      name: "Premium",
      price: "$10,000.00",
      minAmount: "Minimum",
      description: "Moderate ROI After Trading Session",
      duration: "5 Days",
      roi: "30.00%",
      features: ["Trading Bot"],
    },
    {
      name: "Platinum",
      price: "$5,000.00",
      minAmount: "Minimum",
      description: "Low ROI After Trading Session",
      duration: "3 Days",
      roi: "15.00%",
      features: ["Trading Bot"],
    },
    {
      name: "Standard",
      price: "$1,000.00",
      minAmount: "Minimum",
      description: "Basic ROI After Trading Session",
      duration: "1 Day",
      roi: "5.00%",
      features: ["Manual Trading"],
    },
  ];

  return (
    <>
      <HeaderPage />
      <section className="min-h-screen mx-auto px-4 py-8 bg-slate-950">
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
              <h5 className="text-sm text-slate-400 mb-4">{plan.minAmount}</h5>
              <h4 className="text-lg mb-4">{plan.description}</h4>
              <hr className="border-slate-700 mb-4" />
              <div className="space-y-4">
                {/* Duration with Check Icon */}
                <p className="text-sm flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-700 mr-2 h-5"
                  />
                  <span className="font-semibold">Duration:</span>{" "}
                  {plan.duration}
                </p>
                {/* ROI with Check Icon */}
                <p className="text-sm flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-700 mr-2 h-5"
                  />
                  <span className="font-semibold">ROI:</span> {plan.roi}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Features:</span>{" "}
                  {plan.features.join(", ")}
                </p>
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
                    Subscribe to Plan
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
