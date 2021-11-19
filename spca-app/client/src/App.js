// import React from "react";
// import "./App.css";

// export default function App() {
//   return (
//     <> 
//       <div className="navbar">
//         <div className="links">
//           <a>MainPage</a>
//           <a>AnimalsPage</a>
//         </div>
//       </div> 
//       <button> hello </button>
//     </>
//   );
// }

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/registration" element={<Registration/>} />
        <Route path="/" element={<Main />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;