import React from 'react';
import styles from './styles/app.module.css';
import FlightController from './components/FlightController';
import StreamData from './components/StreamData';
import CommandResponse from './components/CommandResponse';


function App() {
  return (
    <div className={styles.App}>
    <h1>Tello Flight Controller</h1>
    <FlightController />
    <StreamData />
    <CommandResponse />
    </div>
  );
}

export default App;
