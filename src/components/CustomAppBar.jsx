import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';

export default function CustomAppBar() {
    const navigate = useNavigate();
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Stack direction={"row"} justifyContent={"space-between"} sx={{width:"100%"}}>
            <Button color="inherit" onClick={()=>navigate("/")}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Clothes Shop
                </Typography>
            </Button>
            <Stack direction={"row"}>
                <Button color="inherit" onClick={()=>navigate("/login")}>Login</Button>
                <Button color="inherit" onClick={()=>navigate("/register")}>Register</Button>
            </Stack>
        </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}