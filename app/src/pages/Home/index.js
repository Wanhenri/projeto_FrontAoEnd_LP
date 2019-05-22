import React from 'react';

import { Wrapper } from './styles';

import SubtitleCollab from '../../objects/SubtitleCollab';
import TitleDofrontaoend from "../../components/TitleDofrontaoend";
import VideoDofrontaoend from '../../components/VideoDofrontaoend';
import TextCollab from '../../objects/TextCollab';

 const Home = () => (
    <Wrapper>
        <TitleDofrontaoend>do Front ao End</TitleDofrontaoend>
        <SubtitleCollab>
             Um guia completo para quem quer se tornar um Desenvolvedor Front End
        </SubtitleCollab>

        <VideoDofrontaoend />

        <TextCollab>
            Quer receber novidades da próxima turma, só colocar seu email abaixo.
        </TextCollab>
    </Wrapper>
 );

 export default Home;

// class Home extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div>
//                 <TitleDofrontaoend>do Front ao End</TitleDofrontaoend>
//                 <SubtitleCollab>Um guia completo para quem quer se tornar um Desenvolvedor Front End</SubtitleCollab>
//             </div>
//          );
//     }
// }
//  
// export default Home;