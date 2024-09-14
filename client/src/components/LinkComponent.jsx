import React from 'react';
import { Button, TextField, Box, Typography, Link } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat'; 
import FeedbackIcon from '@mui/icons-material/Feedback'; 


export default function LinkComponent() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt:0, 
        p: 25,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#f5f7fa',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333' }}>
        YouTube Video Summarizer
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, mb: 4, color: '#555' }}>
        Get YouTube transcript and use AI to summarize YouTube videos in one click for <br />
        free online with NoteGPT's YouTube summary tool.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
        Want to summarize local Video/Audio files?{' '}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #4a90e2',
          borderRadius: '8px',
          p: 1,
          width: '60%',
          maxWidth: '600px',
        }}
      >
        <TextField
          fullWidth
          placeholder="https://www.youtube.com/watch?v=tTJSNUQlabY"
          variant="outlined"
          sx={{
            input: { color: '#555' },
            borderColor: '#4a90e2',
            '& fieldset': { border: 'none' },
          }}
        />
       <Button
  variant="contained"
  size="small" // Makes the button smaller
  sx={{
    ml: 2,
    px: 2, // Adjust horizontal padding (left and right)
    py: 1, // Adjust vertical padding (top and bottom)
    bgcolor: '#FFD700', // Deep yellow for Generate Summary button
    color: '#fff',
    '&:hover': {
      bgcolor: '#ffcc00',
    },
  }}
>
  Generate Summary
</Button>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Link href="#" sx={{ color: '#4a90e2', textDecoration: 'none', mr: 2 }}>
          <ChatIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
          Join Our Discord
        </Link>
        <Link href="#" sx={{ color: '#4a90e2', textDecoration: 'none' }}>
          <FeedbackIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
          Write a Feedback
        </Link>
      </Box>
    </Box>
  );
}
