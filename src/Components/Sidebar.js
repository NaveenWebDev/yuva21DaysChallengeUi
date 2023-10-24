import React, { useEffect, useState } from 'react'
import "../Css/pageTwo.css"

const PageTwo = () => {

    const leftData = [
        {
            id:1,
            icon:"person",
            name:"profile"
        },
        {
            id:2,
            icon:"profile",
            name:"YMG20"
        },
        {   
            id:3,
            icon:"icon",
            name:"Hackathon 2047"
        },
        {   
            id:4,
            icon:"icon",
            name:"Model UN"
        },
        {   
            id:5,
            icon:"icon",
            name:"Model Parliament"
        },  
        {
            id:6,
            icon:"icon",
            name:"Students"
        },
        {   
            id:7,
            icon:"icon",
            name:"Teacher"
        },
        {   
            id:8,
            icon:"icon",
            name:"Certification"
        },
        {   
            id:9,
            icon:"icon",    
            name:"Setting"
        },
        {   
            id:10,
            icon:"icon",
            name:"Report"
        }
        ];

        const dropDownData = [
            {
                id:1,
                name:"itemOne"
            },
            {
                id:1,
                name:"itemTwo"
            },
            {
                id:1,
                name:"itemThree"
            },
        ]

        const [state , setState] = useState(false);
        
        const addData = ()=>{
            if(state){
                const dropData = document.querySelectorAll(".sidebar li");
                const dropDownElement = dropData[5];
                dropDownElement.style.background="#FFFAEE";
                dropDownElement.style.color="#891DA4";
            }else{
                const dropData = document.querySelectorAll(".sidebar li")
                const dropDownElement = dropData[5]
                dropDownElement.style.background="#FFF";
                dropDownElement.style.color="#333333";
            }
        }

        useEffect(()=>{
            addData()
        },[state])
        
  return (
    <>
    <div className="sidebar-items d-flex flex-column justify-content-between ">

        <ul className='sidebar m-0 p-0'>
            {
                leftData.map((val,ind)=>{
                    return(
                        <li className="sidebar-data my-1 px-2 py-3 position-relative" onClick={()=>(val.id === 6)? setState(!state):setState(false)}><span>{val.icon}</span> {val.name}</li>
                    )
                })
            }
        </ul>

        <a href="#" className='text-decoration-none fw-bold text-center text-black'> <span>Premium </span>Plan</a>
    </div>
    </>
  )
}

export default PageTwo