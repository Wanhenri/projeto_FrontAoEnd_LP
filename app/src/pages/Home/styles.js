import styled from 'styled-components'

import { Section as Menu } from '../Menu/styles'

export const Main = styled.main``

export const Wrapper = styled.div`
    & > ${Menu} {
        position: absolute;
        width: cal(100vw - var(--spacing-menu));
    }
`
