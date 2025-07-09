import { useEffect, useState } from "react";
import {
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPhotos } from "../store/gallerySlice";

const Gallery = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const { photosByPage, loading } = useAppSelector((state) => state.gallery);
  const photos = photosByPage[page] || [];

  useEffect(() => {
    if (!photosByPage[page]) {
      dispatch(fetchPhotos(page));
    }
  }, [dispatch, page, photosByPage]);

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Gallery
      </Typography>

      {loading && !photos.length ? (
        <CircularProgress />
      ) : (
        <>
          <Grid container spacing={3}>
            {photos.map((photo) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={photo.id}>
                <Card
                  elevation={2}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "6",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="200"
                    image={photo.url}
                    alt={photo.alt}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      noWrap
                      title={photo.alt}
                    >
                      {photo.alt || "Text Placeholder"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
            <Button
              variant="outlined"
              onClick={handlePrev}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Typography variant="body1" sx={{ alignSelf: "center" }}>
              Page {page}
            </Typography>
            <Button variant="outlined" onClick={handleNext}>
              Next
            </Button>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Gallery;
