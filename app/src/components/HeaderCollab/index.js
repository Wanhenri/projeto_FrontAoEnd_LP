import React, { useState } from "react";

import { Header }  from "./styles";

import LogoCollab from "../../objects/LogoCollab";
import NavigationCollab from "../NavigationCollab";



const HeaderCollab = () => {
    const [isHovered, setIsHovered] = useState(false);    
    const items = [
            "Como funciona?",
            "Git e GitHub", 
            "HTML5 e CSS3",
            "JavaScript Moderno",
            "Webpack e Gulp",
            "React",
            "User Experience"
    ];

    const handleMouseEnter  = () => setIsHovered(true);

    const handleMouseLeave  = () => setIsHovered(false);

    return (
        <Header onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} hover={isHovered}>

        <LogoCollab />
        
            <NavigationCollab items={ items } hover={isHovered} />
        </Header>
    )
};

export default HeaderCollab;

