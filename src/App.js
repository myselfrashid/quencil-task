import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CaseStudy from "./components/CaseStudy";
import JoinQuencil from "./components/JoinQuencil";
import Founder from "./components/Founder";
import Detail from "./components/Detail";
import Alumni from "./components/Alumni";
import './App.css'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="casestudy" element={<CaseStudy />} />
          <Route path="detail" element={<Detail />} />
          <Route path="founder" element={<Founder />} />
          <Route path="joinquencil" element={<JoinQuencil />} />
        </Routes>
    </div>
  )
}

export default App;