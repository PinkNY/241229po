/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from './DashboardStyles';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
  return (
    <div css={styles.container}>
      <Navbar />
      <div css={styles.content}>
        <h1>Welcome to the Dashboard</h1>
        <p>This is where your virtual character and visualization will go!</p>
      </div>
    </div>
  );
};

export default Dashboard;

