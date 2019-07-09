import styled from "styled-components";

import AvatarCollab from "../AvatarCollab";

export const Figure = styled.figure`
    width:500px;
    
    &> * {
        height:42px;
    }
    &> ${AvatarCollab} {
        margin-right: var(--spacing-small);
        float:left;
        
    }
    
`;

