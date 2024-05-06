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
    var logedInUser = localStorage.getItem("loged-in-user");
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction={"row"} justifyContent={"space-between"} sx={{width:"100%"}}>
            <Button color="inherit" onClick={() => navigate("/")}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Clothes Shop
                </Typography>
            </Button>
            <Stack direction={"row"}>
                {!logedInUser &&(<Button color="inherit" onClick={()=>navigate("/login")}>Login</Button>)}
                {!logedInUser &&(<Button color="inherit" onClick={()=>navigate("/register")}>Register</Button>)}
                {logedInUser &&(<Button color="inherit" onClick={()=>navigate("/cart")}>Open Cart</Button>)}
                {logedInUser &&(<Button color="inherit" onClick={()=>{
                  localStorage.removeItem("loged-in-user");
                  navigate("/")
                }}>Log out</Button>)}
            </Stack>
        </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}