import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var users = JSON.parse(localStorage.getItem("users"));
    var isUserExist = false;
    users?.map((user)=>{
      if(user.email === data.get("email")){
        console.log("user with same email found");
        isUserExist = true;
      }
    })
    if(!isUserExist){
      if(!users){
        users = [{
          email: data.get("email"),
          password: data.get("password"),
        }]
      }
      else{
        users?.push({
          email: data.get("email"),
          password: data.get("password"),
        })
      }
      localStorage.setItem("users", JSON.stringify(users));
    }
    console.log(JSON.parse(localStorage.getItem("users")));
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
          Sign in
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
            Sign In
          </Button>
          <Grid container>
            <Grid item>
                <Link to="/login" variant="body2">
                    {"Have an account? Loggin"}
                </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}