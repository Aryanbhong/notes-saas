

// import React, { useEffect, useState } from "react";
// import Login from "./pages/Login";
// import Notes from "./pages/Notes";
// import api from "./services/api";

// export default function App() {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [role, setRole] = useState(localStorage.getItem("role"));
//   const [tenantSlug, setTenantSlug] = useState(localStorage.getItem("tenantSlug"));

//   const login = async (email, password) => {
//     const res = await api("/auth/login", "POST", null, { email, password });
//     localStorage.setItem("token", res.token);
//     localStorage.setItem("role", res.role);
//     localStorage.setItem("tenantSlug", res.tenantSlug);
//     setToken(res.token);
//     setRole(res.role);
//     setTenantSlug(res.tenantSlug);
//   };

//   const logout = () => {
//     localStorage.clear();
//     setToken(null);
//     setRole(null);
//     setTenantSlug(null);
//   };

//   return (
//     <div className="bg-gray-900 text-gray-100 font-sans min-h-screen">
//       <header className="flex justify-between items-center p-6 bg-gray-800 border-b border-gray-700 shadow-md">
//         <h2 className="text-2xl font-bold text-white">Notes SaaS</h2>
//         {token && (
//           <button
//             onClick={logout}
//             className="px-4 py-2 bg-red-600 text-white rounded-md font-semibold
//                        hover:bg-red-700 transition-colors duration-200
//                        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
//           >
//             Logout
//           </button>
//         )}
//       </header>

//       <main className="p-4 md:p-8">
//         {!token ? (
//           <Login onLogin={login} />
//         ) : (
//           <Notes token={token} role={role} tenantSlug={tenantSlug} />
//         )}
//       </main>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import Login from "./pages/Login";
// import Notes from "./pages/Notes";
// import api from "./services/api";

// export default function App() {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [role, setRole] = useState(localStorage.getItem("role"));
//   const [tenantSlug, setTenantSlug] = useState(localStorage.getItem("tenantSlug"));

//   const login = async (email, password) => {
//     const res = await api("/auth/login", "POST", null, { email, password });
//     localStorage.setItem("token", res.token);
//     localStorage.setItem("role", res.role);
//     localStorage.setItem("tenantSlug", res.tenantSlug);
//     setToken(res.token);
//     setRole(res.role);
//     setTenantSlug(res.tenantSlug);
//   };

//   const logout = () => {
//     localStorage.clear();
//     setToken(null);
//     setRole(null);
//     setTenantSlug(null);
//   };

//   return (
//     <div className="bg-gray-950 text-gray-100 font-sans min-h-screen antialiased">
//       <header className="flex justify-between items-center p-6 bg-gray-900 border-b border-gray-700 shadow-lg">
//         <h2 className="text-3xl font-extrabold text-blue-400 tracking-wide">
//           Notes SaaS
//         </h2>
//         {token && (
//           <button
//             onClick={logout}
//             className="px-5 py-2 bg-red-600 text-white rounded-lg font-semibold
//                        hover:bg-red-700 transition-colors duration-200
//                        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
//           >
//             Logout
//           </button>
//         )}
//       </header>

//       <main className="p-4 md:p-10">
//         {!token ? (
//           <Login onLogin={login} />
//         ) : (
//           <Notes token={token} role={role} tenantSlug={tenantSlug} />
//         )}
//       </main>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import api from "./services/api";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [tenantSlug, setTenantSlug] = useState(localStorage.getItem("tenantSlug"));

  const login = async (email, password) => {
    const res = await api("/auth/login", "POST", null, { email, password });
    localStorage.setItem("token", res.token);
    localStorage.setItem("role", res.role);
    localStorage.setItem("tenantSlug", res.tenantSlug);
    setToken(res.token);
    setRole(res.role);
    setTenantSlug(res.tenantSlug);
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
    setTenantSlug(null);
  };

  return (
    <div className="bg-gray-950 text-gray-100 font-sans min-h-screen antialiased overflow-hidden">
      <header className="flex justify-between items-center p-6 bg-gray-900 border-b border-gray-700 shadow-lg">
        <h2 className="text-3xl font-extrabold text-purple-400 tracking-wide">
          Notes SaaS
        </h2>
        {token && (
          <button
            onClick={logout}
            className="px-5 py-2 bg-red-600 text-white rounded-lg font-semibold
                       hover:bg-red-700 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Logout
          </button>
        )}
      </header>

      <main className="p-4 md:p-10">
        {!token ? (
          <Login onLogin={login} />
        ) : (
          <Notes token={token} role={role} tenantSlug={tenantSlug} />
        )}
      </main>
    </div>
  );
}