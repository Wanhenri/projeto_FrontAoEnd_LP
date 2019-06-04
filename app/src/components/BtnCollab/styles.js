import styled, {css} from "styled-components";

const BtnCollab = styled.input.attrs({
    type: "submit", 
    value: ({content}) => content

})`
    position: absolute;
    right: 0;
    bottom:0;
    box-sizing:border-box;
    background-color:var(--color-zero);
    width:100%;
    height:40px;    
    border-radius: var(--radius-small);
    color:var(--color-first);
    font-weight:bold;
    font-size:var(--size-small);
    cursor: pointer;
    will-change:transform;
    transform-origin:right;
    transform: ${({loading}) => loading ? "scaleX(1)" : "scaleX(0.27)"};
    transition: transform ${({loading}) => loading ? "400ms" : "100ms"} linear, box-shadow 100ms linear, width 300ms linear;
    box-shadow: 0px 0px 0px var(--color-base);

    ${({loading}) => !loading && css ` 
            &focus,
            &:hover {
                transform:translateY(-3px) scaleX(0.27);
                box-shadow: 0px 2px 4px var(--color-base);
            }

            &:active {
                transform: translateY(-1px) scaleX(0.27);
            }
        `
    }
`;

export default BtnCollab;