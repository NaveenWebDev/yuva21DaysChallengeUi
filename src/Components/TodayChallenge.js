import React from 'react';
import "../Css/home.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TodayChallenCompoent from './TodayChallenCompoent';

const GameDay = () => {
  
  return (
    <>
    <header>

    <Navbar></Navbar>

    <main>
    <div className="my_container">

      <div className="d-flex">
          <div className="siderBar">
              <Sidebar />
          </div>
          <div className="main">
              <TodayChallenCompoent />
          </div>

      </div>

    </div>

    </main>
</header>

  </>
  )
}

export default GameDay