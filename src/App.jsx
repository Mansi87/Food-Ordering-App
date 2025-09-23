import React from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { darkTheme } from './Theme/DarkTheme';
import { ThemeProvider, CssBaseline } from '@mui/material'
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';

const App = () => {
  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/*<Home/>*/}
      <RestaurantDetails/>

    </ThemeProvider>
  );
}

export default App