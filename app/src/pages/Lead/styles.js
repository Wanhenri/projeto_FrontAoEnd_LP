import styled from 'styled-components'

import SubtitleCollab from '../../objects/SubtitleCollab'
import VideoDofrontaoend from '../../components/VideoDofrontaoend'
import { Form } from '../../components/FormLead/styles'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    min-width: 545px;

    & > ${SubtitleCollab}, & > ${VideoDofrontaoend} {
        margin-bottom: var(--spacing-big);
    }

    & > ${SubtitleCollab} {
        text-align: center;
        width: 500px;
        color: var(--color-zero);
    }

    & > ${Form} {
        min-width: 545px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--color-first);
    padding-left: var(--size-menu);
`
