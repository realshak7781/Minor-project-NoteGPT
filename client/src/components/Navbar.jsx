import * as React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';  // Use this or replace with a suitable icon

export default function Navbar() {
  return (
    <AppBar 
      position="sticky" 
      sx={{ backgroundColor: '#fff', color: '#000', padding: 0 }} // Zero boundary paddings
    >
      <Toolbar sx={{ padding: 0 }}>  {/* Removing padding from the toolbar as well */}
        <EmojiObjectsIcon sx={{ color: '#FFD700', mr: 1 }} />  {/* Logo icon in deep yellow */}
        <Typography 
          variant="h6" 
          sx={{ flexGrow: 1, color: '#FFD700' }} // Deep yellow for app name
        >
          NoteGPT
        </Typography>
        <Button color="inherit">Products</Button>
        <Button color="inherit">AI Generator</Button>
        <Button color="inherit">Tools</Button>
        <Button color="inherit">Blog</Button>
        <Button color="inherit">Pricing</Button>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}
