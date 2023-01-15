import React from "react";

export default function ControlSections(props) {
  return <div className="d-flex flex-column position-absolute end-0 p-2 bg-dark text-white rounded me-1" style={{zIndex:"1000",opacity:"0.8", top:"25%"}}>
    <button type="button" className="btn btn-outline-secondary border-0 my-2 p-0">
      <span className="material-symbols-outlined mt-1 mx-1">local_fire_department</span>
    </button>
    <button type="button" className="btn btn-outline-secondary border-0 my-2 p-0">
      <span className="material-symbols-outlined mt-1 mx-1">air</span>
    </button>
    <button type="button" className="btn btn-outline-secondary border-0 my-2 p-0">
      <span className="material-symbols-outlined mt-1 mx-1">water_drop</span>
    </button>
    <button type="button" className="btn btn-outline-secondary border-0 my-2 p-0">
      <span className="material-symbols-outlined mt-1 mx-1">rainy</span>
    </button>
    <button type="button" className="btn btn-outline-secondary border-0 my-2 p-0">
      <span className="material-symbols-outlined mt-1 mx-1">cloudy</span>
    </button>
    <button type="button" className="btn btn-outline-secondary border-0 my-2 p-0">
      <span className="material-symbols-outlined mt-1 mx-1">waves</span>
    </button>
    <button type="button" className="btn btn-outline-secondary border-0 my-2 p-0">
      <span className="material-symbols-outlined mt-1 mx-1">local_taxi</span>
    </button>
    <button type="button" className="btn btn-outline-secondary border-0 my-2 p-0">
      <span className="material-symbols-outlined mt-1 mx-1" style={{fontSize:"35px"}}>chevron_left</span>
    </button>
  </div>
}