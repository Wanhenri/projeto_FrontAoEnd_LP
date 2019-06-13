import styled from "styled-components";

import LogoAvatar from "../../objects/LogoAvatar";

export const Header = styled.header`
    background-color: var(--color-zero);
    padding-top:20px;
    width: 80px;    
    height: 100vh;
    position: absolute;
    z-index:1;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;

    &> ${LogoAvatar}{
        
    }
`;

