import React, { useState } from 'react';
import ListaMensagens from './components/ListaMensagens';
import EnvioMensagem from './components/EnvioMensagem';
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import TemaClaro from './components/Temas/TemaClaro';
import TemaEscuro from './components/Temas/TemaEscuro';
import BarraLateral from './components/BarraLateral/BarraLateral';
import MensagensContainer from './components/MensagemContainer';

const App = () => {
  const [mensagens, setMensagens] = useState([]);
  const [theme, setTheme] = useState(TemaEscuro);

  const toggleTheme = () => {
    setTheme(theme === TemaClaro ? TemaEscuro : TemaClaro);
  };

  const enviarMensagem = (remetente, conteudo) => {
    const novaMensagem = { remetente, conteudo };
    setMensagens([...mensagens, novaMensagem]);
  };

  const deletarMensagem = (mensagem) => {
    const novasMensagens = mensagens.filter((msg) => msg !== mensagem);
    setMensagens(novasMensagens);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header toggleTheme={toggleTheme} />
        <BarraLateral theme={theme} />
        <h1>Uaizap</h1>
        <MensagensContainer>
          <ListaMensagens mensagens={mensagens} />
        </MensagensContainer>
        <EnvioMensagem onEnviarMensagem={enviarMensagem} />
      </div>
    </ThemeProvider>
  );
};

export default App;
