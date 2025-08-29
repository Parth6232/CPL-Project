import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import MatchDetail from "./Components/MatchDetail";
import NavBar from "./Components/NavBar";
import PointsTable from "./Components/PointsTable";
import News from "./Components/News";

function App() {
  return (
    // 🔹 CHANGED: Applied Tailwind background & font
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/pointstable" element={<PointsTable />} />
          <Route path="/matchDetail/:id" element={<MatchDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
