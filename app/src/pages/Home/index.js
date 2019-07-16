import React from 'react';

import { Main } from './styles';


import HeaderCollab from "../../components/HeaderCollab";

import Lead from "../Lead";
import Menu from "../Menu";


 const Home = () => {
     return(
        <Main>

            <HeaderCollab onclick={() => console.log("FOI")}  />
            <Lead />
            <Menu />

        </Main>
    )
};

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