import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;