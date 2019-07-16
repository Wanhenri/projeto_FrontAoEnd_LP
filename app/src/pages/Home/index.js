import React from 'react';

import { Wrapper,  Menu } from './styles';


import HeaderCollab from "../../components/HeaderCollab";

import Lead from "../Lead";


 const Home = () => (
    <Wrapper>

        <HeaderCollab />
        <Lead />

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