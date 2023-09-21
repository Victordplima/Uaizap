import React, { useState } from 'react';
import styled from 'styled-components';
import perfil from '../../assets/perfil.jpg';
import ligado from '../../assets/ligado.png';
import desligado from '../../assets/desligado.png';
import fotoGrupo from '../../assets/fotoGrupo.jpg'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.headerColor};
  color: ${props => props.theme.textColor};
  padding: 16px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 8px;
  border-radius: 20px;
  position: relative;
  width: 60px;
  height: 30px;
  margin-right: 20px;

  .track {
    position: absolute;
    top: 50%;
    left: 0;
    width: 60px;
    height: 30px; /* Aumente a altura para cobrir o botão */
    background-color: ${props => (props.switchOn ? '#ffffff' : '#bb86fc')};
    transform: translateY(-50%);
    transition: background-color 0.3s;
    border-radius: 20px; /* Adicione bordas arredondadas */
    border: black 1px solid
  }

  .slider {
    position: absolute;
    top: 2px;
    left: ${props => (props.switchOn ? '32px' : '2px')};
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: 0.3s;
    background-image: url(${props => (props.switchOn ? desligado : ligado)});
    background-size: cover;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #ccc;
  padding-right: 90px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const GroupInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1450px;
`;

const GroupImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

const GroupDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const GroupName = styled.div`
  font-weight: bold;
`;

const GroupDescription = styled.div`
  font-size: 12px;
  color: #888;
`;

const Perfil = styled.img`
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MensagemBoasVindas = styled.div`
  font-size: 16px;
  color: ${props => props.theme.textColor};
`;

const Header = ({ toggleTheme }) => {
  const [switchOn, setSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setSwitchOn(!switchOn);
    toggleTheme();
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <Perfil src={perfil} alt="Foto de Perfil" />
        <MensagemBoasVindas>Bem-vindo, Usuário!</MensagemBoasVindas>
      </LeftSection>
      <RightSection>
        <GroupInfo>
          <GroupImage src={fotoGrupo} alt="Foto do Grupo" />
          <GroupDetails>
            <GroupName>Uaizap</GroupName>
            <GroupDescription>Descrição</GroupDescription>
          </GroupDetails>
        </GroupInfo>
        <ToggleButton
          onClick={toggleSwitch}
          switchOn={switchOn}
        >
          <span className="track"></span>
          <span className="slider"></span>
        </ToggleButton>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
