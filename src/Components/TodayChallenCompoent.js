import React, { useEffect, useState } from "react";
import environment from "../assests/Concern for the environment.svg";
import "../Css/challengeday.css";
import groupimg from "../assests/Group 381.svg";
import uploadimg from "../assests/Upload to the Cloud.svg";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const TodayChallenCompoent = () => {
  const navigate = useNavigate();
  const params = useParams();
  // const todayid = params?.id;
  const [currentDay, setCurrentDay] = useState();

  const setData = (id) => {
    setCurrentDay(id);
  };

  useEffect(() => {
    setData(params?.id);
    console.log(currentDay);
  }, [params?.id]);

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
          <div className="d-flex align-items-center gap-2"> 
          <span className="backArrow"> <ArrowBackIosIcon sx={{color:"#7700FF"}} onClick={()=>navigate("/gameday")}/> </span>
          <h4 className="my-3">Today's challenge</h4>
          </div>

          <p>
            <img src={groupimg} alt="logo" className="pe-2" /> <span>50</span>
            creadits
          </p>
        </div>

        <div className="todayChallenge">

          <div className="challnDays d-flex justify-content-between align-items-center">
            {data?.map((val) => {
              if (val?.id == currentDay) {
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
          <div className="upload mt-5 text-center position-relative">
            <img src={uploadimg} alt="uploadimg" />
              <input type="file" name="file" id="file" />
            <p>
              Drag file here or click to <span>Select file to upload</span> proof of activity
            </p>
          </div>

          <div className="experience">
            <p className="mt-5">Share your experience</p>

            <p>
              Eg - I am very happy to share that i have used stairs instead of
              an elevator, it was tough using stairs all the day, but have loose
              my wait too. So its not only eco friendly activity but healthy
              activity.
            </p>

            <div className="d-flex justify-content-between expbtns">
              <button className="border-0">Later</button>
              <button className="border-0" onClick={()=>navigate("/congress")}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayChallenCompoent;
