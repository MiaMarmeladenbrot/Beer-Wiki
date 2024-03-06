import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import All from "./pages/All/All";
import Detailpage from "./pages/Detailpage/Detailpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/all/:id" element={<Detailpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
