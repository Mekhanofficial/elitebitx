import HeaderPage from "../components/Header";

export default function PhotoUpdatePage() {
  return (
    <>
      <HeaderPage />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg ">
        <h1 className="text-2xl font-bold mb-4">Update Profile Photo</h1>
        <p className="text-gray-600 mb-6">Upload a new profile photo below.</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Photo
            </label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Update Photo
          </button>
        </form>
      </div>
    </>
  );
}
