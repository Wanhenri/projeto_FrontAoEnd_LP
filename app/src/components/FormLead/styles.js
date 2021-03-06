import styled from 'styled-components'

import InputCollab from '../../objects/InputCollab'

import TextCollab from '../../objects/TextCollab'

import BtnCollab from '../BtnCollab'

export const Form = styled.form`
    position: relative;

    & > ${TextCollab} {
        margin-bottom: var(--spacing-small);
        color: var(--color-zero);
    }

    & > ${InputCollab} {
        margin-right: var(--spacing-small);
    }

    & > ${BtnCollab} {
        position: absolute;
        right: 0;
        bottom: 0;
    }
`
