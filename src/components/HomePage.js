import React from "react";
import { useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";

const HomePage = () => {
    // const navigate = useNavigate();

    // const handleloginCLick = () => {
    //     navigate('/login');
    // };
    return (
        <div className="hero-home-page">
            <Header></Header>
            <div>
                Welcome to Equal NFT!
            </div>
        </div>
    );
}

export default HomePage;
