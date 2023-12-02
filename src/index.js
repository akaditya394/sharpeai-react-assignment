import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transaction from "./pages/transaction";
import DataPage from "./pages/data";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/data" element={<DataPage />} />
    </Routes>
  </BrowserRouter>
);
