import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import HeaderPage from "../components/Header";

export default function ReferralsPage() {
  const referralLink = "https://EliteBitx.net/log_opt/register.php?ref=457689";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <>
      <HeaderPage />
      <section className="bg-slate-950  min-h-screen">
        <div className="p-5 flex justify-between mx-20">
          {/* Referral Stats */}
          <div className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded-lg shadow-md">
            <FontAwesomeIcon
              icon={faUserFriends}
              className="h-6 text-teal-400"
            />
            <div>
              <h1 className="text-3xl font-bold">0</h1>
              <h6 className="text-gray-400">Total Referrals</h6>
            </div>
          </div>

          {/* Referral Link */}
          <div className="flex items-center gap-3 mt-6 bg-gray-800 text-white p-3 rounded-lg shadow-md">
            <h3 className="text-sm break-all">{referralLink}</h3>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition"
            >
              <FontAwesomeIcon icon={faCopy} className="h-5" />
              <span>Copy</span>
            </button>
          </div>
        </div>

        {/* Referrals List */}
        <div className="text-white font-semibold rounded-md bg-slate-900 p-5 mx-4 lg:mx-10 my-6 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 overflow-x-auto">
          <h1 className="font-semibold text-xl mb-5">All Referrals</h1>
          <div className="flex justify-between items-center min-w-[800px] text-gray-400 border-b border-gray-700 pb-2">
            <h2>ID</h2>
            <h2>Email</h2>
            <h2>Full Name</h2>
            <h2>Date</h2>
          </div>
          <h1 className="text-2xl text-center mt-10 text-gray-500 font-bold">
            No Referrals
          </h1>
        </div>
      </section>
    </>
  );
}
