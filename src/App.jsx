import React, { useEffect } from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { darkTheme } from './Theme/DarkTheme';
import { ThemeProvider, CssBaseline } from '@mui/material'
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import { CustomerRoute } from './Routers/CustomerRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { findCart } from './component/State/Cart/Action';

const App = () => {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)
  useEffect(()=>{
    if (jwt) {  // Only fetch if JWT exists
      dispatch(getUser(jwt));
      dispatch(findCart(jwt));
    }
  }, [auth.jwt, jwt])

  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      
      <CustomerRoute/>

    </ThemeProvider>
  );
}

export default App