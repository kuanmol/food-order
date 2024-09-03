import React from "react";
import { Avatar, Badge, Box, Icon, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from "@mui/material/colors";
import "./Navbar.css"
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
    const { auth } = useSelector((store) => store);

    const navigate = useNavigate();

    const handleAvatarClick = () => {
        if (auth.user?.role === "ROLE_CUSTOMER") {
            navigate("/my-profile")
        } else {
            navigate("/my-profile")
        }
    }
    return (
        <Box className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li onClick={() => navigate("/")} className='logo font-semibold text-gray-300 text-2xl'>
                    World of Food
                </li>
            </div>

            {/* Right Section */}
            <div className='flex items-center space-x-2 lg:space-x-10'>
                {/* Search Icon */}
                <div>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>

                {/* User Avatar */}
                <div className="">
                    {auth.user ? (
                        <Avatar className="cursor-pointer" onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>{auth.user
                            ?.fullName[0].toUpperCase()} </Avatar>
                    ) : (

                        <IconButton onClick={() => navigate("/account/login")}>
                            <Person />
                        </IconButton>)}
                </div>

                {/* Shopping Cart Icon */}
                <div>
                    <IconButton>
                        <Badge color="secondary" badgeContent={300000}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box >
    );
};

export default Navbar;
