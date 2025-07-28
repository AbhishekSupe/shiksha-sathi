import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import shikshaData from '../data/shikshaData';
import { Button, Stack, Typography } from '@mui/material';

const VolumeSelection = () => {
  const { className, subjectName } = useParams();
  const navigate = useNavigate();
  const volumes = Object.keys(shikshaData[className]?.[subjectName] || {});

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h5">Volumes in {subjectName}</Typography>
      {volumes.map(vol => (
        <Button key={vol} variant="outlined" onClick={() => navigate(`/${className}/${subjectName}/${vol}`)}>{vol}</Button>
      ))}
      <Button variant="text" color="secondary" onClick={() => navigate(-1)}>← Back</Button>
    </Stack>
  );
};

export default VolumeSelection;
