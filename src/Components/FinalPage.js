import React from 'react';
import Navbar from './Navbar';
import "../Css/home.css";
import Main from "./Main";

const FinalPage = () => {
  
  return (
    <>
        <header>

            <Navbar></Navbar>

            <main>
            <div className="my_container">

              <div className="d-flex justify-content-center">
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

export default FinalPage