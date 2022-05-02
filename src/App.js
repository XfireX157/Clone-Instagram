import React from 'react'

import { Cabecalho } from './Components/Cabecalho/index'
import { GlobalStyle } from './GlobalStyle'
import { Container } from './Components/Container/index'

import { ThemeProvider } from 'styled-components'
import { TemaClaro, TemaEscuro } from './Components/Temas/index'

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
