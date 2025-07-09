import { Box, Grid, Typography, IconButton, Link, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        py: 4,
        px: { xs: 2, sm: 6 },
        mt: "auto",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Stack spacing={1}>
            <Link
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/about")}
              underline="hover"
              color="text.secondary"
            >
              About
            </Link>
            <Link
              sx={{ cursor: "pointer" }}
              underline="hover"
              color="text.secondary"
            >
              Careers
            </Link>
            <Link
              sx={{ cursor: "pointer" }}
              underline="hover"
              color="text.secondary"
            >
              Blog
            </Link>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <Stack spacing={1}>
            <Link
              sx={{ cursor: "pointer" }}
              underline="hover"
              color="text.secondary"
            >
              Help Center
            </Link>
            <Link
              sx={{ cursor: "pointer" }}
              underline="hover"
              color="text.secondary"
            >
              Contact
            </Link>
            <Link
              sx={{ cursor: "pointer" }}
              underline="hover"
              color="text.secondary"
            >
              Privacy Policy
            </Link>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h6" gutterBottom>
            Stay Connected
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Follow us on social media and stay updated with our latest news.
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              color="primary"
              href="https://facebook.com"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://twitter.com"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://linkedin.com"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://instagram.com"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 4 }}
      >
        © {new Date().getFullYear()} Codnity Inc. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
