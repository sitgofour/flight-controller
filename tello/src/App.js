import React from 'react';
import styles from './styles/app.module.css';
import FlightController from './components/FlightController';
import StreamData from './components/StreamData';


function App() {
  return (
    <div className={styles.App}>
    <FlightController />
    <StreamData />
    </div>
  );
}

export default App;
