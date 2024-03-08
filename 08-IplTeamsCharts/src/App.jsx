import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const teamData = [
  {
    name: "Mumbai Indians(MI)",
    captain: "Hardik Pandya",
    bestPlayer: "Rohit Sharma",
    sologan: "MiPaltan",
    totalSession: 16,
    champions: 5,
    matchWin: "56.68%",
    photoName: "teams/mi.jpg",
  },
  {
    name: "Chennai Super Kings(CSK)",
    captain: "MS Dhoni",
    bestPlayer: "Ravindra jadeja",
    sologan: "WhistlePodu",
    totalSession: 14,
    champions: 5,
    matchWin: "58.96%",
    photoName: "teams/csk.jpg",
  },
  {
    name: "Royal Challengers Bangalore(RCB)",
    captain: "Faf du Plessis",
    bestPlayer: "Virat Kohli",
    sologan: "PlayBold",
    totalSession: 16,
    champions: 0,
    matchWin: "48.73%",
    photoName: "teams/rcb.jpg",
  },
  {
    name: "Kalkata Knight Riders(KKR)",
    captain: "Shreyas lyer",
    bestPlayer: "Rinku Singh",
    sologan: "FanNahiTooFanhain",
    totalSession: 16,
    champions: 2,
    matchWin: "51.05%",
    photoName: "teams/kkr.jpg",
  },
  {
    name: "Gujarat Titans(GJ)",
    captain: "Shubham Gill",
    bestPlayer: "Kane Williamson",
    sologan: "aavaDe",
    totalSession: 2,
    champions: 1,
    matchWin: "51.05%",
    photoName: "teams/gt.jpg",
  },
  {
    name: "Delhi Capitals(DC)",
    captain: "Rishab Pant",
    bestPlayer: "Kuldeep Yadav",
    totalSession: 16,
    champions: 0,
    matchWin: "45.33%",
    photoName: "teams/dc.jpg",
  },
  {
    name: "Rajasthan Royals(RR)",
    captain: "Sanju Samson",
    bestPlayer: "yashasvi Jaiswal",
    sologan: "HallaBol",
    totalSession: 14,
    champions: 1,
    matchWin: "50.24%",
    photoName: "teams/dc.jpg",
  },
  {
    name: "Sunrisers Hyderabad(SRH)",
    captain: "Pat Cummins",
    bestPlayer: "Bhuvneshwar Kumar",
    sologan: "OrangeArmy",
    totalSession: 10,
    champions: 1,
    matchWin: "48.49%",
    photoName: "teams/srh.jpg",
  },
  {
    name: "Punjab Kings(PB)",
    captain: "Shikhar Dhawan",
    bestPlayer: "Liam Livingstone",
    sologan: "SaddaPunjab",
    totalSession: 16,
    champions: 0,
    matchWin: "45.68%",
    photoName: "teams/pk.jpg",
  },
  {
    name: "Lucknow Super Giants(LSG)",
    captain: "KL Rahul",
    bestPlayer: "Nicholas Pooran",
    sologan: "GazabAndaaz",
    totalSession: 2,
    champions: 0,
    matchWin: "58.62%",
    photoName: "teams/lsg.jpg",
  },
]

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  )
}
function Header() {
  return (
    <h1 className="text-center font-semibold text-8xl text-yellow-400 mt-4">IPL Team Charts</h1>
  )
}

function Menu() {
  return (
    <div>
      <div>
        <h1 className="text-center font-semibold uppercase px-2 py-6 text-red-500 underline">Teams</h1>
      </div>
      <ul className="grid grid-cols-2 gap-16 mx-32">
        {teamData.map((teams) => (
          <Teams teamsObj={teams} key={teams.name} />
        ))}

      </ul>
    </div>
  )
}

function Footer() {
  return (
    <h1 className="text-center mt-4 py-6 font-bold text-emerald-800">Support Your Fav Team</h1>
  )
}

function Teams(props) {
  return (
    <li>
      <img src={props.teamsObj.photoName} alt={props.name} className=" w-80" />
      <h2 className=" font-bold text-5xl">{props.teamsObj.name}</h2>
      <h2 className=" text-3xl font-bold mt-2">Caption: {props.teamsObj.captain}</h2>
      <h2 className=" text-3xl font-bold">BestPlayer: {props.teamsObj.bestPlayer}</h2>
      <h2 className=" text-3xl font-bold">Sologan: {props.teamsObj.sologan}</h2>
      <h3 className=" text-3xl font-bold">TotalSession: {props.teamsObj.totalSession}</h3>
      <span className=" text-3xl font-bold text-red-600">Champions: {props.teamsObj.champions}</span>
      <h3 className=" text-3xl font-bold">MatchWin: {props.teamsObj.matchWin}</h3>

    </li>
  )
}


export default App;
