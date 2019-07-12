import styled from "styled-components";

import SubtitleCollab from "../../objects/SubtitleCollab";
import TextCollab from "../../objects/TextCollab";
import VideoDofrontaoend from "../../components/VideoDofrontaoend";

import { Form } from "../../components/FormLead/styles.js";

export const Menu = styled.section`
    height: 100vh;
    background-color: var(--color-second);
`;

export const Lead = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
    height: 100vh;
    width:60%;
    min-width: 545px; 
    

    &> ${SubtitleCollab},
    &> ${VideoDofrontaoend} {
        margin-bottom: var(--spacing-big);
    }  

    &> ${SubtitleCollab} {
        text-align:center;
        width: 500px;
    }

    &> ${TextCollab}{
        margin-bottom: var(--spacing-small);
    }

    &> ${Form}{
        min-width: 545px;
    }
`;

export const Wrapper = styled.main `
    background-color: var(--color-first);
    padding-left:80px;

`;

