import styled from "styled-components";

const BtnCollab = styled.input.attrs({
    type: "submit", 
    value: ({content}) => content

})`
    width:130px;
    border-radius: var(--radius-small);
    color:var(--color-first);
    font-weight:bold;
`;

export default BtnCollab;