import styled from 'styled-components'
import { Figure } from '../../objects/LogoCollab/styles'
import CollabCode from '../../objects/CollabCode'

import { Navigation, Content } from '../NavigationCollab/styles'

export const Header = styled.header`
    box-sizing: border-box;
    background-color: var(--color-zero);
    padding: 20px 20px 0;
    width: ${({ active }) =>
        active ? 'var(--size-active-menu)' : 'var(--spacing-menu)'};
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: width 300ms linear;
    cursor: pointer;

    &:hover {
        width: var(--size-active-menu);
    }

    & > ${Navigation} {
        padding-left: 11px;
        width: var(--size-active-menu);
    }

    & > ${Figure} {
        position: absolute;
        top: var(--spacing-medium);
        width: var(--size-active-menu);
    }

    & ${CollabCode}, & ${Content} {
        transition: opacity 100ms linear;
        opacity: ${({ active }) => (active ? 1 : 0)};
    }

    &:hover ${CollabCode}, &:hover ${Content} {
        transition-duration: 200ms;
        transition-delay: 150ms;
        opacity: 1;
    }
`
