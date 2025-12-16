// import React from "react";
// import ReactDOM from "react-dom/client";
// import { HashRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css"; // 👈 REQUIRED

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </React.StrictMode>
// );
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // SEO provider
import App from "./App";
import "./index.css"; // Make sure global CSS is imported

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);
