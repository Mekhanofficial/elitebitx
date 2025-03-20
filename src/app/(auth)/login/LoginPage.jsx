import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <h2 className="text-sm font-bold text-gray-900">
            SIGN IN{" "}
            <span className="text-gray-400">
              <Link to="/SignUpPage" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </span>
          </h2>
          <h1 className="text-3xl font-extrabold text-amber-600">
            ELITE<span className="text-amber-400">BITX</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              className="w-full p-3 mt-1 border rounded-lg bg-gray-100 text-gray-900 focus:ring focus:ring-orange-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full p-3 mt-1 border rounded-lg bg-gray-100 text-gray-900 focus:ring focus:ring-orange-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            LOG IN
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          <Link to="/forgot-password" className="text-gray-400 hover:underline">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;




// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../firebase/firebase-config";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex h-screen justify-center items-center bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//           Login
//         </h2>
//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Form fields */}
//         </form>
//         <p className="text-sm text-gray-500 mt-4 text-center">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-blue-500 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;