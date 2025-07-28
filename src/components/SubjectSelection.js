import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import shikshaData from '../data/shikshaData';
import { Button, Stack, Typography } from '@mui/material';

const SubjectSelection = () => {
  const { className } = useParams();
  const navigate = useNavigate();
  const subjects = Object.keys(shikshaData[className] || {});

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h5">Subjects in {className}</Typography>
      {subjects.map(sub => (
        <Button key={sub} variant="outlined" onClick={() => navigate(`/${className}/${sub}`)}>{sub}</Button>
      ))}
      <Button variant="text" color="secondary" onClick={() => navigate(-1)}>← Back</Button>
    </Stack>
  );
};

export default SubjectSelection;