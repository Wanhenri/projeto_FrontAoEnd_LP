import styled from "styled-components";

const BtnCollab = styled.input.attrs({
    type: "submit", 
    value: ({content}) => content

})`
    width:130px;
`;

export default BtnCollab;