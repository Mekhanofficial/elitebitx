import HeaderPage from "../components/Header";

export default function MyCopyTradersPage() {
  return (
    <>
      <HeaderPage />
      <section className=" px-10 bg-slate-950 min-h-screen  text-center">
        <h1 className="text-3xl font-bold text-gray-400">My Copy Traders</h1>
        <p className="text-lg text-gray-500 mt-7 bg-slate-900 rounded-3xl p-10 hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-teal-500 hover:shadow-teal-500/50 hover:scale-105">
          No copy traders yet.
        </p>
      </section>
    </>
  );
}
