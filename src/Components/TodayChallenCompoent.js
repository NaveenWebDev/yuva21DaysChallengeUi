import React from "react";
import environment from "../assests/Concern for the environment.svg";
import "../Css/challengeday.css";
import groupimg from "../assests/Group 381.svg";


const TodayChallenCompoent = () => {
    const currentDay = 5;
    const data = [
      {
        id: 1,
        day: "Day 1",
        work: "Completed",
        para: "GameDay this is the high game play",
        credits: 23 + " credits",
      },
      {
        id: 2,
        day: "Day 2",
        work: "Completed",
        para: "GameDay",
        credits: 23 + " credits",
      },
      {
        id: 3,
        day: "Day 3",
        work: "not Completed",
        para: "GameDay",
        credits: 23 + " credits",
      },
      {
        id: 4,
        day: "Day 4",
        work: "incompleted",
        para: "GameDay",
        credits: 23 + " credits",
      },
      {
        id: 5,
        day: "Day 5",
        work: "Completed",
        para: "GameDay this is the high game play",
        credits: 23 + " credits",
      },
    ];
  
    return (
      <>
        <div className="challengeDays p-3">
          <div className="challengehead position-relative d-flex justify-content-between align-items-center">
            <h2>
              21 Days <br /> Challenge
            </h2>
            <img
              src={environment}
              alt="environment"
              className="position-absolute"
            />
  
            <p>
              <img src={groupimg} alt="logo" className="pe-2" /> <span>50</span>
              creadits
            </p>
          </div>
  
          <div className="todayChallenge">
            <h4 className="my-3">Today's challenge</h4>
  
            <div
              className="challnDays d-flex justify-content-between align-items-center"
            >
              {data.map((val) => {
                if (val.id === currentDay) {
                  return (
                    <>
                      <div className="dayVal text-white"> {val.day}</div>
                      <div className="daypara align-align-self-lg-stretch">
                        <p>{val.work}</p>
                        <p>{val.para}</p>
                      </div>
                      <div className="daycredits">
                        <p>{val.credits}</p>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>

          <div className="pastChallenge">
            <h4 className="my-5">Upload</h4>
            
          </div>
        </div>
      </>
    );
}

export default TodayChallenCompoent