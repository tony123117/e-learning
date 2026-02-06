import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import App from "./App";
import Faqs from "./pages/Faqs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Home page */}
      <Route path="/" element={<App />} />

      {/* FAQs page */}
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
  </BrowserRouter>
);
