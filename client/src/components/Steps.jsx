import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';

const Steps = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8, mb: 8,ml:10,mr:10 }}>
      {/* Main Title */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        How to Summarize YouTube Videos?
      </Typography>
      
      {/* Subtitle */}
      <Typography variant="body1" sx={{ color: '#777', mb: 8 }}>
        You can easily use YouTube AI summarizer with just 3 simple steps.
      </Typography>
      
      {/* Steps Section */}
      <Grid container spacing={4} justifyContent="center">
        {/* Step 1 */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: '16px', p: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Step1: Get YouTube video link
              </Typography>
              <Typography variant="body2" sx={{ color: '#777' }}>
                Copy and paste the YouTube video link into NoteGPT.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Step 2 */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: '16px', p: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Step2: Generate Summary of YouTube
              </Typography>
              <Typography variant="body2" sx={{ color: '#777' }}>
                Click the "Generate Summary" button, and NoteGPT will fetch the transcript and summarize the YouTube video.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Step 3 */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: '16px', p: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Step3: Read the AI summary
              </Typography>
              <Typography variant="body2" sx={{ color: '#777' }}>
                Read the concise summary, and save valuable time.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Steps;
