

// import React, { useState } from "react";

// export default function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     try {
//       await onLogin(email, password);
//     } catch (err) {
//       setError(err.error || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4">
//       <div className="w-full max-w-sm p-8 space-y-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
//         <h3 className="text-2xl font-bold text-center text-white">Login</h3>
//         <form onSubmit={submit} className="space-y-4">
//           <input
//             className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//             placeholder="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//             placeholder="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             disabled={loading}
//             type="submit"
//             className="w-full py-2 px-4 rounded-md text-white font-semibold transition-colors
//                        bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed
//                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
//           >
//             {loading ? "..." : "Login"}
//           </button>
//         </form>

//         {error && (
//           <p className="text-red-400 text-sm text-center font-medium">{error}</p>
//         )}

//         <div className="mt-4 text-sm text-gray-400 border-t border-gray-700 pt-4 text-center">
//           <strong className="block mb-2 text-gray-300">Test accounts:</strong>
//           <div className="space-y-1">
//             <div>admin@acme.test / password</div>
//             <div>user@acme.test / password</div>
//             <div>admin@globex.test / password</div>
//             <div>user@globex.test / password</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await onLogin(email, password);
    } catch (err) {
      setError(err.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
      <div className="w-full max-w-sm p-8 space-y-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 transition-all duration-300 transform hover:scale-[1.01]">
        <h3 className="text-3xl font-extrabold text-center text-purple-400">
          Welcome Back ✨
        </h3>
        <form onSubmit={submit} className="space-y-5">
          <div className="relative">
            <input
              className="w-full px-5 py-3 text-gray-100 bg-gray-800 rounded-lg placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <input
              className="w-full px-5 py-3 text-gray-100 bg-gray-800 rounded-lg placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full py-3 px-6 rounded-lg text-white font-bold text-lg shadow-lg
                       bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed
                       transition-colors transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            {loading ? "..." : "Login"}
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-sm text-center font-medium p-2 bg-gray-800 rounded-md">
            {error}
          </p>
        )}

        <div className="text-sm text-gray-500 border-t border-gray-700 pt-6 text-center">
          <strong className="block mb-2 text-gray-400">Test accounts:</strong>
          <div className="space-y-1">
            <div className="bg-gray-800 rounded-sm py-1 px-2">admin@acme.test / password</div>
            <div className="bg-gray-800 rounded-sm py-1 px-2">user@acme.test / password</div>
            <div className="bg-gray-800 rounded-sm py-1 px-2">admin@globex.test / password</div>
            <div className="bg-gray-800 rounded-sm py-1 px-2">user@globex.test / password</div>
          </div>
        </div>
      </div>
    </div>
  );
}