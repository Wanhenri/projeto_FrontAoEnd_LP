import React from 'react'

import { Header } from './styles'

import TitleCollab from '../../objects/TitleCollab'
import SubtitleCollab from '../../objects/SubtitleCollab'

import BtnCollab from '../BtnCollab'

const HeaderContent = () => (
    <Header>
        <BtnCollab>Inscrever-se</BtnCollab>
        <TitleCollab>Como funciona o curso?</TitleCollab>
        <SubtitleCollab>
            Esta ementa não define a ordem cronologica do curso, apenas separa
            em topicos para facilitar a leitura.
        </SubtitleCollab>
    </Header>
)

export default HeaderContent
