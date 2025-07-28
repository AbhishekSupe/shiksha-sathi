// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassSelection from './components/ClassSelection';
import SubjectSelection from './components/SubjectSelection';
import VolumeSelection from './components/VolumeSelection';
import TopicSelection from './components/TopicSelection';
import ActivityList from './components/ActivityList';
import { Container, Typography } from '@mui/material';
import logo from './assets/shiksha-sarthi-logo.png';

function App() {
  return (
    <Router>
      <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '20px' }}>
        <img src={logo} alt="ShikshaSathi Logo" style={{ width: 150, marginBottom: 10 }} />
        <Typography variant="h4" gutterBottom>ShikshaSathi</Typography>

        <Routes>
          <Route path="/" element={<ClassSelection />} />
          <Route path="/:className" element={<SubjectSelection />} />
          <Route path="/:className/:subjectName" element={<VolumeSelection />} />
          <Route path="/:className/:subjectName/:volumeName" element={<TopicSelection />} />
          <Route path="/:className/:subjectName/:volumeName/:topicName" element={<ActivityList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
