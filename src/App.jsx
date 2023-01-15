import React from 'react';
import './App.css'
import ControlSections from './component/ControlSections';
import SearchSection from './component/SearchSection';
import MapLeaflet from './map/MapLeaflet';

function App() {
  return <div className="App">
    <MapLeaflet/>
    <ControlSections/>
    <SearchSection/>
  </div>
}

export default App
