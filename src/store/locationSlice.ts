import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  locationLatLng: google.maps.LatLngLiteral | null;
  locationAddress: string;
}

const initialState: InitialState = {
  locationLatLng: null,
  locationAddress: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocationLatLng: (state, action: PayloadAction<google.maps.LatLngLiteral | null>) => {
      state.locationLatLng = action.payload;
    },

    setLocationAddress: (state, action: PayloadAction<string>) => {
      state.locationAddress = action.payload;
    },
  },
});

export const { setLocationAddress, setLocationLatLng } = locationSlice.actions;

export default locationSlice;
