import React from 'react';
import Navbar from './Navbar';
import "../Css/home.css";
import Main from "./Main";
import Sidebar from './Sidebar';

const Home = () => {
  
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
                    <Main></Main>
                  </div>

              </div>

            </div>

            </main>
        </header>

    </>
  )
}

export default Home