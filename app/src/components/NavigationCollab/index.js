import React from "react";

import {Navigation, Item, Content } from "./styles"

const NavigationCollab = ({items, hover}) => (
    <Navigation>
        {items.map((content, key) => (
            <Item key={key}>
                {key} <Content hover>{content}</Content>
            </Item>
        ))}    
    </Navigation>
);

export default NavigationCollab;