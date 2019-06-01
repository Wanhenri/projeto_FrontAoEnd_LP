import styled from "styled-components";

import InputCollab from "../../objects/InputCollab";

import TextCollab from '../../objects/TextCollab';

export const Form = styled.form`
    &> ${TextCollab}{
        margin-bottom: var(--spacing-small);
    }

    &> ${InputCollab}{
        margin-right: var(--spacing-small);
    }
`;