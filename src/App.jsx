import React from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { darkTheme } from './Theme/DarkTheme';
import { ThemeProvider, CssBaseline } from '@mui/material'
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import { CustomerRoute } from './Routers/CustomerRoute';

const App = () => {
  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/*<Home/>*/}
      {/*<RestaurantDetails/>*/}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomerRoute/>

    </ThemeProvider>
  );
}

export default App