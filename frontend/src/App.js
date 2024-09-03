
import { ThemeProvider } from '@emotion/react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './components/Home/Home';
import RestaurantDetail from './components/Restaurant/RestaurantDetail';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import CustomerRoute from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './components/State/Authentication/Action';
import { store } from './components/State/Store';

function App() {

  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const { auth } = useSelector(store => store)

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <CustomerRoute />
    </ThemeProvider>
  )
}

export default App;
