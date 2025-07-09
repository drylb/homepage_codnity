import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(to right, #ece9e6, #ffffff)",
        px: 2,
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h3" component="h1">
          Welcome to Codnity Home Task
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Explore Pexels API collection of beautiful photos powered by React,
          Redux & MUI.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/gallery")}
          sx={{ alignSelf: "center" }}
        >
          View Gallery
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
