import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import shikshaData from '../data/shikshaData';
import { Button, Stack, Typography } from '@mui/material';

const TopicSelection = () => {
  const { className, subjectName, volumeName } = useParams();
  const navigate = useNavigate();
  const topics = Object.keys(shikshaData[className]?.[subjectName]?.[volumeName] || {});

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h5">Topics in {volumeName}</Typography>
      {topics.map(topic => (
        <Button key={topic} variant="outlined" onClick={() => navigate(`/${className}/${subjectName}/${volumeName}/${topic}`)}>{topic}</Button>
      ))}
      <Button variant="text" color="secondary" onClick={() => navigate(-1)}>← Back</Button>
    </Stack>
  );
};

export default TopicSelection;