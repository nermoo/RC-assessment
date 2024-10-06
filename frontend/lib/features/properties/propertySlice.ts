import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  location: string | null;
}

const initialState: FilterState = {
  location: null,
};

const PropertySlice = createSlice({
  name: 'propertyFilter',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string | null>) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = PropertySlice.actions;
export default PropertySlice.reducer;
