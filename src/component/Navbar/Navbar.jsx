import React from 'react'
import { AppBar, Avatar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import Person from '@mui/icons-material/Person'; 
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const {auth}=useSelector(store=>store)
    const navigate=useNavigate();
    const handleAvatarClick=()=>{
        if(auth.user?.role=="ROLE_CUSTOMER"){
            navigate("/my-profile")
        }
        else{
            navigate("/admin/restaurant")
        }
    }
    return(
         <div className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>

            <div className='lg-mr-10 cursor-pointer flex-items-center space-x-4'>
                <li onClick={()=>navigate("/")} className='logo font-semibold text-gray-300 text-2xl'>
                    Yum Food
                </li>
            </div>

         <div className='flex items-center space-x-2 lg:space-x-10'>
            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem", color:"white"}}/> 
                </IconButton>
            </div>
            <div className=''>
                {auth.user?
                    <Avatar onClick={handleAvatarClick} sx={{bgcolor:"white", color:pink.A400, fontWeight:"bold"}}>{auth.user?.fullName[0].toUpperCase()}</Avatar>:
                <IconButton onClick={()=>navigate("/account/login")}>
                    <Person/>
                </IconButton>}
            </div>
            <div className=''>
                <IconButton>
                    <Badge badgeContent={3} 
                        sx={{
                            '& .MuiBadge-badge': {
                                backgroundColor: 'white',
                                color: '#e91e63'
                            }
                        }}>
                        <ShoppingCartIcon sx={{fontSize:"1.5rem", color:"white"}}/>
                    </Badge>
                    
                </IconButton>
            </div>
         </div>

         </div>
    )
} 