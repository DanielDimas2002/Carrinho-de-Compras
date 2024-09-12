import React from "react";
import Header from "./componentes/Header/Header";
import Produtos from "./componentes/Produtos/Produtos";
import Provider from "./context/Provider";


function App() {
  return (
    <Provider>
      <Header />
      <Produtos />
    </Provider>
  );
}

export default App;
