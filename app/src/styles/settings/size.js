import { createGlobalStyle } from 'styled-components'

const Size = createGlobalStyle`
    :root {
        --radius-small: 4px;

        --size-base:10px;
        --size-very-small: 1.2rem;
        --size-small:1.5rem;
        --size-medium:1.8rem;
        --size-half-big: 2rem;
        --size-big:2.4rem;
        --size-very-big:5rem;
        
        --size-menu: 80px;
        --size-active-menu: 340px;
    }

    @media (max-height:700px) {
        :root{
            --size-base:9.8px;
        }
    }
`

export default Size
