import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  type PexelsPhoto,
  type PexelsApiResponse,
  type Photo,
  type GalleryState,
} from "../types/types";

const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

const initialState: GalleryState = {
  photosByPage: {},
  loading: false,
  error: null,
  currentPage: 1,
};

export const fetchPhotos = createAsyncThunk<
  { page: number; photos: Photo[] },
  number
>("gallery/fetchPhotos", async (page) => {
  const res = await axios.get<PexelsApiResponse>(
    `https://api.pexels.com/v1/curated?per_page=12&page=${page}`,
    {
      headers: {
        Authorization: apiKey,
      },
    },
  );

  const photos = res.data.photos.map((photo: PexelsPhoto) => ({
    id: photo.id,
    alt: photo.alt,
    url: photo.src.medium,
  }));

  return { page, photos };
});

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        const { page, photos } = action.payload;
        state.photosByPage[page] = photos;
        state.currentPage = page;
        state.loading = false;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default gallerySlice.reducer;
