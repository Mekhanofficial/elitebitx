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
      <section className="bg-slate-950 min-h-screen flex flex-col items-center p-4 md:p-10">
        {/* Referral Stats */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
          <div className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded-lg shadow-md w-full md:w-auto">
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
          <div className="flex items-center gap-3 bg-gray-800 text-white p-3 rounded-lg shadow-md w-full md:w-auto">
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

        {/* Referrals List with Scroll */}
        <div className="bg-slate-900 p-5 mt-12 rounded-xl shadow-lg border border-gray-800 max-w-full w-full">
          <h1 className="text-white font-semibold text-xl mb-5 text-center">
            All Referrals
          </h1>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="flex justify-between items-center text-white text-sm font-semibold border-b border-gray-700 pb-2">
                <h2>ID</h2>
                <h2>Email</h2>
                <h2>Full Name</h2>
                <h2>Date</h2>
              </div>

              {/* Empty state */}
              <div className="text-center text-gray-500 text-lg font-bold mt-5">
                No Referrals
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
