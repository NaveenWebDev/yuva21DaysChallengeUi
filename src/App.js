import GameDay from "./Components/GameDay";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodayChallenge from "./Components/TodayChallenge";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gameday" element={<GameDay/>}/>
          <Route path="/todayChallenge" element={<TodayChallenge/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
