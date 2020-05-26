import React from 'react';
import styles from './styles/app.module.css';
import FlightController from './components/FlightController';

function App() {
  return (
    <div className={styles.App}>
    <h1>Tello Flight Controller</h1>
    <FlightController />
    </div>
  );
}

export default App;
