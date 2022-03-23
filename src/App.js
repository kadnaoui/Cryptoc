import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Routes/Home";
import CoinPage from "./Routes/CoinPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/CoinPage/:id" element={<CoinPage />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;