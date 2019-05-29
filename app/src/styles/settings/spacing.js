import { createGlobalStyle } from "styled-components";

const Spacing = createGlobalStyle`
    :root {
        --spacing-base:10px;
        --spacing-small:calc(1 *--spacing-base);
        --spacing-big: calc(4 * --spacing-base);
    }    

    @media (max-height:700px){
        :root{
        --spacing-base:8px;

        }
    }
`;

export default Spacing;