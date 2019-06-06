import styled, {css} from "styled-components";

export const Button = styled.button.attrs({
    type: "submit"
})`
    position: relative;
    background-color:transparent;

    &:after {
        content: " ";
        display:block;
        background-color:var(--color-zero);
        width: 130px;
        height: 40px;
        transform-origin:right;
        transform: scaleX(0.27); 
        transform:scaleX(4.08);
    }
`;

export const Text = styled.span`
    position: absolute;
    width:100%;
    test-align:center;
`;

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