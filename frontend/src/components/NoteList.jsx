// import React from "react";

// const NoteList = ({ notes, onDelete }) => {
//   if (notes.length === 0) {
//     return (
//       <p className="text-gray-400 text-center py-4">
//         No notes yet.
//       </p>
//     );
//   }

//   return (
//     <div className="grid gap-4">
//       {notes.map((n) => (
//         <div 
//           key={n._id}
//           className="bg-gray-800 border border-gray-700 rounded-lg p-5 shadow-lg
//                      hover:bg-gray-700 transition-colors duration-200"
//         >
//           <div className="flex justify-between items-start">
//             <h3 className="text-xl font-bold text-blue-400 mb-2">
//               {n.title}
//             </h3>
//             <button 
//               onClick={() => onDelete(n._id)}
//               className="px-3 py-1 text-sm bg-red-600 text-white rounded-md
//                          hover:bg-red-700 transition-colors duration-200
//                          focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               Delete
//             </button>
//           </div>
//           <p className="text-gray-300">
//             {n.body}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NoteList;



// import React from "react";

// const NoteList = ({ notes, onDelete }) => {
//   if (notes.length === 0) {
//     return (
//       <p className="text-gray-400 text-center py-4">
//         No notes yet.
//       </p>
//     );
//   }

//   return (
//     <div className="grid gap-4">
//       {notes.map((n) => (
//         <div 
//           key={n._id}
//           className="bg-gray-800 border border-gray-700 rounded-lg p-5 shadow-lg
//                      hover:bg-gray-700 transition-colors duration-200"
//         >
//           <div className="flex justify-between items-start">
//             <h3 className="text-xl font-bold text-blue-400 mb-2">
//               {n.title}
//             </h3>
//             <button 
//               onClick={() => onDelete(n._id)}
//               className="px-3 py-1 text-sm bg-red-600 text-white rounded-md
//                          hover:bg-red-700 transition-colors duration-200
//                          focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               Delete
//             </button>
//           </div>
//           <p className="text-gray-300">
//             {n.body}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NoteList;


import React from "react";

const NoteList = ({ notes, onDelete }) => {
  if (notes.length === 0) {
    return (
      <p className="text-gray-500 text-center py-10 text-xl font-medium">
        You don't have any notes yet.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((n) => (
        <div 
          key={n._id}
          className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-xl
                     transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
        >
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-extrabold text-blue-400">
              {n.title}
            </h3>
            <button 
              onClick={() => onDelete(n._id)}
              className="px-4 py-1 text-sm bg-red-600 text-white rounded-lg font-semibold
                         hover:bg-red-700 transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Delete
            </button>
          </div>
          <p className="text-gray-300 text-base leading-relaxed">
            {n.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;