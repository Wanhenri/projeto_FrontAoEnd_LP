import styled from "styled-components";

const InputCollab = styled.input`
    background-color: var(--color-negative-light);
    width:190px;
    height:38px;
    border-radius: var(--radius-small);
    padding-left: var(--spacing-small);
    color:var(--color-zero);

    &::placeholder {
        color: var(--color-zero);
        font-weight:bold;
    }
`;

export default InputCollab;