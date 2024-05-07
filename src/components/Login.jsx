import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
   
    const [loginError,setLoginError]=useState("");  
    const handleSubmit = (event) => {
    event.preventDefault();
   


    const data = new FormData(event.currentTarget);
    const userLogin = {
      email: data.get("email"),
      password: data.get("password"),
    }
      var users = JSON.parse(localStorage.getItem("users"));
      var isUserExist = false;
      users?.map((user)=>{
        if(userLogin.email === user.email && userLogin.password === user.password){
          isUserExist = true;
        }
      })
      if(isUserExist){
        localStorage.setItem("loged-in-user", JSON.stringify(userLogin));
        navigate("/");
      }
      else{
        setLoginError("Incoorect email or password");
      }
   
    
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
           
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          {loginError && <Typography
          color="error" 
          variant="body2"
          align="center">
            {loginError}
          </Typography>
          }
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}