import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import shikshaData from '../data/shikshaData';
import { Card, CardContent, Typography, Stack, Button } from '@mui/material';

const ActivityList = () => {
  const { className, subjectName, volumeName, topicName } = useParams();
  const navigate = useNavigate();
  const activities = shikshaData[className]?.[subjectName]?.[volumeName]?.[topicName] || [];

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Activities for "{topicName}"</Typography>
      {activities.map((act, idx) => (
        <Card key={idx}>
          <CardContent>
            <Typography variant="h6">{act.activity}</Typography>
            <Typography variant="body1"><b>Description:</b> {act.description}</Typography>
            <Typography variant="body2"><b>Materials:</b> {act.materials}</Typography>
          </CardContent>
        </Card>
      ))}
      <Button variant="text" color="secondary" onClick={() => navigate(-1)}>← Back</Button>
    </Stack>
  );
};

export default ActivityList;