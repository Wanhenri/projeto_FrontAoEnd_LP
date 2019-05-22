import React, { Component } from "react";


import Colors from "./styles/settings/colors";
import Spacing from "./styles/settings/spacing";
import Reset from "./styles/generic/reset"
import Base from "./styles/base";

import Home from "./pages/Home";

class App extends Component{
        render() {
                return(
    <div>
        <Colors />
        <Spacing />
        <Reset />
        <Base />
        <Home />
    </div>
        )};
}

export default App;


