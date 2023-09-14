import styled from 'styled-components';

const MensagensContainer = styled.div`
  position: absolute;
  top: 60px; /* Altura do header */
  left: 200px; /* Largura da barra lateral */
  right: 0;
  bottom: 40px; /* Acomode a altura do EnvioMensagem */
  padding: 16px;
  overflow-y: auto;
`;

export default MensagensContainer;
