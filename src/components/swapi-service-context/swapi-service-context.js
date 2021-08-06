import React from "react";

const { Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer } =
    React.createContext(); // consumer - потребитель


export {
    SwapiServiceProvider , 
    SwapiServiceConsumer
}