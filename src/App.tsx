import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="font-jakarta text-gray-800 font-medium min-h-screen">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
