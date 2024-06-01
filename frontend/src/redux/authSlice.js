import { createSlice } from '@reduxjs/toolkit';
import axios from "axios"

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loginStatus: false,
    imageArr: [],
    loading: false,
    error: null,
  },
  reducers: {
    login: state => {
      state.loginStatus = true;
    },
    logout: state => {
      state.loginStatus = false;
      sessionStorage.clear();
    },
    setImageArr: (state, action) => {
      state.imageArr = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { login, logout, setImageArr, setLoading, setError } = authSlice.actions;

export const fetchImages = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`https://image-hub-pszo.vercel.app/image/getimages`);
    dispatch(setImageArr(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError('Error fetching images'));
    dispatch(setLoading(false));
    console.error(error);
  }
};

export const selectLoginStatus = state => state.auth.loginStatus;
export const selectImgArr = state => state.auth.imageArr;
export const selectLoading = state => state.auth.loading;
export const selectError = state => state.auth.error;

export default authSlice.reducer;
