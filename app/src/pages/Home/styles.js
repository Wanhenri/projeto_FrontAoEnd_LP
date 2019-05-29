import styled from "styled-components";

import SubtitleCollab from "../../objects/SubtitleCollab";
import TextCollab from "../../objects/TextCollab";
import VideoDofrontaoend from "../../components/VideoDofrontaoend";

import { Form } from "../../components/FormLead/styles.js";

export const Section = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
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
        text-align:left;
        margin-bottom: var(--spacing-small);
    }

    &> ${Form}{
        min-width: 545px;
    }
`;

export const Wrapper = styled.main `
    background-color: var(--color-first);
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

`;

