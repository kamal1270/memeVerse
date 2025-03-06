import { createSlice } from '@reduxjs/toolkit';

const memeSlice = createSlice({
  name: 'memes',
  initialState: {
    items: [],
  },
  reducers: {
    setMemes: (state, action) => {
      state.items = action.payload;
    },
    addMeme: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setMemes, addMeme } = memeSlice.actions;
export default memeSlice.reducer;