import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import TemaClaro from './components/Temas/TemaClaro';
import TemaEscuro from './components/Temas/TemaEscuro';
import Header from './components/Header/Header';
import BarraLateral from './components/BarraLateral/BarraLateral';
import MensagensContainer from './components/MensagemContainer';
import Chat from './components/Chat'; // Importe o componente Chat
import { createGlobalStyle } from 'styled-components';
import darkBackground from './assets/darkBackground.jpg';
import lightBackground from './assets/lightBackground.png';
import 'typeface-roboto';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${props => props.theme.mode === 'temaClaro' ? lightBackground : darkBackground});
    background-color: black;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const App = () => {
  const [mensagens, setMensagens] = useState([]);
  const [theme, setTheme] = useState(TemaEscuro);

  const toggleTheme = () => {
    setTheme(theme === TemaEscuro ? TemaClaro : TemaEscuro);
    document.body.style.backgroundImage = `url(${theme === TemaEscuro ? lightBackground : darkBackground})`;
  };

  const enviarMensagem = (remetente, conteudo) => {
    const horario = new Date().toLocaleTimeString();
    const novaMensagem = { remetente, conteudo, horario };
    setMensagens([...mensagens, novaMensagem]);
  };

  const deletarMensagem = (index) => {
    const novasMensagens = [...mensagens];
    novasMensagens.splice(index, 1);
    setMensagens(novasMensagens);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Header toggleTheme={toggleTheme} />
        <BarraLateral theme={theme} />
        <MensagensContainer>
          <Chat
            mensagens={mensagens}
            onEnviarMensagem={enviarMensagem}
            onDelete={deletarMensagem}
          />
        </MensagensContainer>
      </div>
    </ThemeProvider>
  );
};

export default App;
