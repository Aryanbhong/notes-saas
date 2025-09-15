

// import React, { useEffect, useState } from "react";
// import api from "../services/api";
// import NoteForm from "../components/NoteForm";
// import NoteList from "../components/NoteList";

// const Notes = ({ token, role, tenantSlug }) => {
//   const [notes, setNotes] = useState([]);
//   const [error, setError] = useState(null);

//   // Invite state
//   const [inviteEmail, setInviteEmail] = useState("");
//   const [inviteRole, setInviteRole] = useState("member");
//   const [inviteMessage, setInviteMessage] = useState(null);

//   const loadNotes = async () => {
//     try {
//       const res = await api("/notes", "GET", token);
//       setNotes(res);
//     } catch (err) {
//       setError(err.error || err.message);
//     }
//   };

//   useEffect(() => {
//     loadNotes();
//   }, [token]);

//   const createNote = async (note) => {
//     try {
//       await api("/notes", "POST", token, note);
//       await loadNotes();
//     } catch (err) {
//       setError(err.error || err.message);
//     }
//   };

//   const deleteNote = async (id) => {
//     try {
//       await api(`/notes/${id}`, "DELETE", token);
//       setNotes(notes.filter((n) => n._id !== id));
//     } catch (err) {
//       setError(err.error || err.message);
//     }
//   };

//   const upgrade = async () => {
//     try {
//       await api(`/tenants/${tenantSlug}/upgrade`, "POST", token);
//       alert("Upgraded to Pro!");
//     } catch (err) {
//       setError(err.error || err.message);
//     }
//   };

//   const inviteUser = async () => {
//     if (!inviteEmail) {
//       setInviteMessage({ text: "Email is required", type: "error" });
//       return;
//     }
//     try {
//       const res = await api("/users/invite", "POST", token, {
//         email: inviteEmail,
//         role: inviteRole,
//       });
//       setInviteMessage({ text: `User ${res.email} invited as ${res.role}`, type: "success" });
//       setInviteEmail("");
//     } catch (err) {
//       setInviteMessage({ text: err.error || err.message, type: "error" });
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
//       <div className="container mx-auto p-4 md:p-8 max-w-4xl space-y-10">
//         <h2 className="text-4xl font-extrabold text-center text-white mb-8 tracking-wide">
//           My Notes <span role="img" aria-label="notes">📝</span>
//         </h2>

//         {/* Note creation */}
//         <NoteForm onCreate={createNote} />

//         {/* Error display */}
//         {error && (
//           <p className="p-4 bg-red-800 text-red-200 rounded-lg text-center font-medium shadow-inner">
//             {error}
//           </p>
//         )}

//         {/* Free plan limit / upgrade */}
//         {notes.length >= 3 && role === "admin" && (
//           <div className="p-6 md:p-8 text-center border-2 border-dashed border-gray-600 rounded-xl bg-gray-800 shadow-xl">
//             <p className="font-semibold text-lg text-gray-300 mb-4">
//               Free plan limit reached ({notes.length} notes).
//             </p>
//             <button
//               onClick={upgrade}
//               className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg
//                          hover:bg-blue-700 transition-colors transform hover:scale-105
//                          focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               Upgrade to Pro 🚀
//             </button>
//           </div>
//         )}

//         {/* Invite user form (Admin only) */}
//         {role === "admin" && (
//           <div className="p-6 md:p-8 border border-gray-700 rounded-xl bg-gray-800 shadow-lg space-y-4">
//             <h3 className="text-xl font-bold text-white text-center">Invite a New User</h3>
//             <div className="grid sm:grid-cols-2 gap-4 items-end">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
//                   User Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="name@example.com"
//                   value={inviteEmail}
//                   onChange={(e) => setInviteEmail(e.target.value)}
//                   className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600
//                              focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors placeholder-gray-500"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="role" className="block text-sm font-medium text-gray-400 mb-1">
//                   Role
//                 </label>
//                 <select
//                   id="role"
//                   value={inviteRole}
//                   onChange={(e) => setInviteRole(e.target.value)}
//                   className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600
//                              focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//                 >
//                   <option value="member">Member</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </div>
//             </div>
//             <button
//               onClick={inviteUser}
//               className="w-full py-3 bg-green-600 text-white font-bold rounded-lg
//                          hover:bg-green-700 transition-colors focus:outline-none focus:ring-2
//                          focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               Send Invitation
//             </button>
//             {inviteMessage && (
//               <p
//                 className={`mt-2 text-center text-sm ${
//                   inviteMessage.type === "error" ? "text-red-400" : "text-green-400"
//                 }`}
//               >
//                 {inviteMessage.text}
//               </p>
//             )}
//           </div>
//         )}

//         {/* Notes listing */}
//         <NoteList notes={notes} onDelete={deleteNote} />
//       </div>
//     </div>
//   );
// };

// export default Notes;



import React, { useEffect, useState } from "react";
import api from "../services/api";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

const Notes = ({ token, role, tenantSlug }) => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  // Invite state
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("member");
  const [inviteMessage, setInviteMessage] = useState(null);

  const loadNotes = async () => {
    try {
      const res = await api("/notes", "GET", token);
      setNotes(res);
    } catch (err) {
      setError(err.error || err.message);
    }
  };

  useEffect(() => {
    loadNotes();
  }, [token]);

  const createNote = async (note) => {
    try {
      await api("/notes", "POST", token, note);
      await loadNotes();
    } catch (err) {
      setError(err.error || err.message);
    }
  };

  const deleteNote = async (id) => {
    try {
      await api(`/notes/${id}`, "DELETE", token);
      setNotes(notes.filter((n) => n._id !== id));
    } catch (err) {
      setError(err.error || err.message);
    }
  };

  const upgrade = async () => {
    try {
      await api(`/tenants/${tenantSlug}/upgrade`, "POST", token);
      alert("Upgraded to Pro!");
    } catch (err) {
      setError(err.error || err.message);
    }
  };

  const inviteUser = async () => {
    if (!inviteEmail) {
      setInviteMessage({ text: "Email is required", type: "error" });
      return;
    }
    try {
      const res = await api("/users/invite", "POST", token, {
        email: inviteEmail,
        role: inviteRole,
      });
      setInviteMessage({ text: `User ${res.email} invited as ${res.role}`, type: "success" });
      setInviteEmail("");
    } catch (err) {
      setInviteMessage({ text: err.error || err.message, type: "error" });
    }
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans antialiased">
      <div className="container mx-auto p-4 md:p-8 max-w-4xl space-y-12">
        <h2 className="text-4xl font-extrabold text-center text-purple-400 mb-8 tracking-wide">
          My Notes <span role="img" aria-label="notes">📝</span>
        </h2>

        {/* Note creation */}
        <NoteForm onCreate={createNote} />

        {/* Error display */}
        {error && (
          <p className="p-4 bg-red-800 text-red-200 rounded-lg text-center font-medium shadow-inner">
            {error}
          </p>
        )}

        {/* Free plan limit / upgrade */}
        {notes.length >= 3 && role === "admin" && (
          <div className="p-6 md:p-8 text-center border-2 border-dashed border-gray-600 rounded-xl bg-gray-800 shadow-xl transition-all duration-300 transform hover:scale-[1.01]">
            <p className="font-semibold text-lg text-gray-300 mb-4">
              Free plan limit reached ({notes.length} notes).
            </p>
            <button
              onClick={upgrade}
              className="w-full sm:w-auto px-8 py-3 bg-purple-600 text-white font-bold rounded-full text-lg shadow-lg
                         hover:bg-purple-700 transition-colors transform hover:scale-105
                         focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Upgrade to Pro 🚀
            </button>
          </div>
        )}

        {/* Invite user form (Admin only) */}
        {role === "admin" && (
          <div className="p-6 md:p-8 border border-gray-700 rounded-xl bg-gray-800 shadow-lg space-y-4 transition-all duration-300 transform hover:scale-[1.01]">
            <h3 className="text-xl font-bold text-white text-center">Invite a New User</h3>
            <div className="grid sm:grid-cols-2 gap-4 items-end">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  User Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600
                             focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-400 mb-1">
                  Role
                </label>
                <select
                  id="role"
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600
                             focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                >
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <button
              onClick={inviteUser}
              className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg
                         hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2
                         focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Send Invitation
            </button>
            {inviteMessage && (
              <p
                className={`mt-2 text-center text-sm ${
                  inviteMessage.type === "error" ? "text-red-400" : "text-green-400"
                }`}
              >
                {inviteMessage.text}
              </p>
            )}
          </div>
        )}

        {/* Notes listing */}
        <NoteList notes={notes} onDelete={deleteNote} />
      </div>
    </div>
  );
};

export default Notes;