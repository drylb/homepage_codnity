import { Box, Typography, Stack, Avatar } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(to right, #fdfbfb, #ebedee)",
        px: 2,
      }}
    >
      <Stack spacing={3} maxWidth={600}>
        <Avatar
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
          sx={{ width: 100, height: 100, mx: "auto" }}
        />
        <Typography variant="h4" component="h1">
          About Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We are passionate developers building interactive and visually
          pleasing web experiences using React, Redux, and Material UI. Our goal
          is to create scalable and beautiful interfaces.
        </Typography>
      </Stack>
    </Box>
  );
};

export default About;
