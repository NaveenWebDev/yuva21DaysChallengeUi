import GameDay from "./Components/GameDay";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodayChallenge from "./Components/TodayChallenge";
import Congress from "./Components/Congress";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalPage from "./Components/FinalPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gameday" element={<GameDay/>}/>
          <Route path="/today-Challenge/:id" element={<TodayChallenge/>}/>
          <Route path="/congress" element={<Congress/>}/>
          <Route path="/final-page" element={<FinalPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
