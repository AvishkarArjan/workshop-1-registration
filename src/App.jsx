import "./App.css";
import Details from "./components/Details";
import Introduction from "./components/Introduction";
import FinalThankYou from "./components/FinalThankYou";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormCard from "./components/FormCard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/ThankYou" element={<FinalThankYou />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
