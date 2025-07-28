import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ClassSelection = () => {
  const navigate = useNavigate();
  const classes = ['Nursery', 'Junior KG', 'Senior KG'];

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h5">Select a Class</Typography>
      {classes.map(cls => (
        <Button key={cls} variant="contained" onClick={() => navigate(`/${cls}`)}>{cls}</Button>
      ))}
    </Stack>
  );
};

export default ClassSelection;