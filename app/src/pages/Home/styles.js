import styled from "styled-components";

import SubtitleCollab from "../../objects/SubtitleCollab";

import TextCollab from "../../objects/TextCollab";

import VideoDofrontaoend from "../../components/VideoDofrontaoend"

export const Section = styled.section`
    width:550px;    
    margin-left:auto;
    margin-right:auto;
    text-align:center;

    &> ${SubtitleCollab},
    &> ${VideoDofrontaoend} {
        margin-bottom: var(--spacing-big);
    }  

    &> ${SubtitleCollab} {
        width:90%;
        margin-left: auto;
        margin-right: auto;
    }

    &> ${TextCollab}{
        text-align:left;
        margin-bottom: var(--spacing-small);
    }
`;

export const Wrapper = styled.main `
    background-color: var(--color-first);
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

`;

