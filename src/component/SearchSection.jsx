import React, { useState } from "react";

export default function SearchSection(props) {
  const [locationSearch,setLocationSearch] = useState();

  return <div className="d-flex flex-row justify-content-between align-items-center position-absolute top-0 start-0 bg-dark opacity-75" style={{zIndex:"1000"}}>
    <button type="button" className="btn btn-outline-secondary border-0 ms-2 p-0" style={{height:"30px",width:"auto"}}>
      <span className="material-symbols-outlined text-white" style={{fontSize:"35px"}}>list</span>
    </button>
    <input className="bg-white m-2 p-1 border-0 px-2" value={locationSearch} onChange={e=>setLocationSearch(e.target.value)} placeholder="Search Location..." style={{borderRadius:"20px",outline:"none",width:"250px"}}/>
    <button type="button" className="btn btn-outline-secondary border-0 mx-2 p-0" style={{height:"30px",width:"auto"}}>
      <span className="material-symbols-outlined text-white" style={{fontSize:"35px"}}>screen_share</span>
    </button>
  </div>
}