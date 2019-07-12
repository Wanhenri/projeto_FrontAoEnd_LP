import React from 'react';

import { Wrapper, Lead, Menu } from './styles';

import SubtitleCollab from '../../objects/SubtitleCollab';

import HeaderCollab from "../../components/HeaderCollab";

import TitleDofrontaoend from "../../components/TitleDofrontaoend";
import VideoDofrontaoend from '../../components/VideoDofrontaoend';
import FormLead from '../../components/FormLead';



 const Home = () => (
    <Wrapper>

        <HeaderCollab />

        <Lead>
            <TitleDofrontaoend>do Front ao End</TitleDofrontaoend>
            <SubtitleCollab>
                 Um guia completo para quem quer se tornar um Desenvolvedor Front End
            </SubtitleCollab>

            <VideoDofrontaoend />

            <FormLead />
        </Lead>

        <Menu></Menu>
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