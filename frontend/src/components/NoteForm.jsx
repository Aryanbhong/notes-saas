// import React, { useState } from "react";

// const NoteForm = ({ onCreate }) => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   const submit = (e) => {
//     e.preventDefault();
//     onCreate({ title, body });
//     setTitle("");
//     setBody("");
//   };

//   return (
//     <form
//       onSubmit={submit}
//       className="p-6 bg-gray-800 rounded-lg shadow-xl max-w-lg mx-auto space-y-4 border border-gray-700"
//     >
//       <h3 className="text-xl font-bold text-white text-center">
//         Create a New Note
//       </h3>
//       <input
//         className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         className="w-full px-4 py-2 h-24 text-gray-900 bg-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//         placeholder="Body"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="w-full py-2 px-4 rounded-md text-white font-bold transition-colors
//                    bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed
//                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
//       >
//         Create Note
//       </button>
//     </form>
//   );
// };

// // export default NoteForm;

// import React, { useState } from "react";

// const NoteForm = ({ onCreate }) => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   const submit = (e) => {
//     e.preventDefault();
//     onCreate({ title, body });
//     setTitle("");
//     setBody("");
//   };

//   return (
//     <form
//       onSubmit={submit}
//       className="p-8 bg-gray-800 rounded-2xl shadow-2xl max-w-lg mx-auto space-y-6 border border-gray-700 transition-all duration-300 transform hover:scale-[1.01]"
//     >
//       <h3 className="text-3xl font-extrabold text-blue-400 text-center tracking-wide">
//         Create a New Note
//       </h3>
//       <input
//         className="w-full px-5 py-3 text-gray-200 bg-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         className="w-full px-5 py-3 h-32 text-gray-200 bg-gray-700 rounded-lg placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
//         placeholder="Body"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="w-full py-3 px-6 rounded-full text-white font-bold text-lg transition-colors duration-300
//                    bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed
//                    focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg"
//       >
//         Create Note ✨
//       </button>
//     </form>
//   );
// };

// export default NoteForm;

import React, { useState } from "react";

const NoteForm = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onCreate({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form
      onSubmit={submit}
      className="p-8 bg-gray-900 rounded-2xl shadow-2xl max-w-lg mx-auto space-y-6 border border-gray-700 transition-all duration-300 transform hover:scale-[1.01]"
    >
      <h3 className="text-3xl font-extrabold text-purple-400 text-center tracking-wide">
        Create a New Note
      </h3>
      <input
        className="w-full px-5 py-3 text-gray-100 bg-gray-800 rounded-lg placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full px-5 py-3 h-32 text-gray-100 bg-gray-800 rounded-lg placeholder-gray-500 resize-none border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        type="submit"
        className="w-full py-3 px-6 rounded-full text-white font-bold text-lg transition-colors duration-300
                   bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed
                   focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg"
      >
        Create Note ✨
      </button>
    </form>
  );
};

export default NoteForm;