import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// import Navbar from "./components/NavBar";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
