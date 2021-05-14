import { createSlice } from '@reduxjs/toolkit';

const isUserAdmin = user => {
  return user && user.email === 'testAdmin@gmail.com' && user.password === '12345yuiopp';
};

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
  isAdmin: isUserAdmin(JSON.parse(localStorage.getItem('user')))
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
      if (isUserAdmin(state.user)) {
        state.isAdmin = true;
      }
    },
    logout(state) {
      state.user = null;
      state.isAdmin = false;
      localStorage.removeItem('user');
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
