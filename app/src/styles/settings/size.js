import { createGlobalStyle} from "styled-components";

const heightWindow = window.innerHeight;


const Size = createGlobalStyle `
    :root {
        --radius-small: 4px;
        --size-base:calc(10vh * 100 / ${heightWindow});
        --size-small:calc(16vh * 100 / ${heightWindow});
        --size-medium:calc(18vh * 100 / ${heightWindow});
        --size-very-big:calc(50vh * 100 / ${heightWindow});
    }
`;

export default Size;

