
export default function PasswordUpdatePage() {
  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg ">
        <h1 className="text-2xl font-bold mb-4">Update Password</h1>
        <p className="text-gray-600 mb-6">Enter your new password below.</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input 
              type="password" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              placeholder="Enter new password"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input 
              type="password" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              placeholder="Confirm new password"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Update Password
          </button>
        </form>
      </div>
    </>
  );
}
