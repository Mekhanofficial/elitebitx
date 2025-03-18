import HeaderPage from "../components/Header";

export default function VerifyAccountPage() {
  return (
    <>
      <HeaderPage />
      <div className="bg-slate-950 min-h-screen">
        <section className="max-w-lg mx-auto bg-slate-900 text-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">VERIFY ACCOUNT</h1>
          <p className="text-sm mb-6">
            To request an account verification, kindly provide your information
            with a valid means of identification attached as an image document.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block mb-2">Front ID</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 bg-gray-800 rounded-md"
              />
            </div>

            <div>
              <label className="block mb-2">Back ID</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 bg-gray-800 rounded-md"
              />
            </div>

            <div>
              <label className="block mb-2">ID Type</label>
              <select className="w-full p-2 bg-gray-800 rounded-md">
                <option value="passport">Passport</option>
                <option value="national-id">National ID</option>
                <option value="driver-license">Driver's License</option>
                <option value="social-security">Social Security Card</option>
                <option value="voters-card">Voter’s Card</option>
              </select>
            </div>

            <button className="w-full bg-gradient-to-r from-teal-950 to-teal-700 text-white px-4 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
              Submit Verification Request
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
