import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Header, Logo, Container, Title, Subtitle } from './styles';
import { FaArrowCircleRight } from 'react-icons/fa';
import BodyContent from '../../Components/BodyContent';
import FactoryLogo from '../../Assets/Logo-editado.png';
import UnisinosLogo from '../../Assets/Unisinos.png';
import Box from '../../Components/Box';
import Button from '../../Components/Button';

const Tela1: FC = () => (
  <BodyContent>
    <Container>
      <Header>
        <Logo src={UnisinosLogo} w="257px" h="157px" />
        <Logo src={FactoryLogo} w="338px" h="218px" />
      </Header>

      <Box w="60%" top="50px">
        <Title>UNIVERSIDADE DO VALE DO RIO DOS SINOS – UNISINOS</Title>
        <Title>UNIDADE ACADÊMICA DE PESQUISA E PÓS-GRADUAÇÃO</Title>
        <Title>
          PROGRAMA DE PÓS-GRADUAÇÃO EM GESTÃO E NEGÓCIOS NÍVEL MESTRADO
        </Title>
      </Box>

      <Box w="52%" top="50px">
        <Subtitle>
          Sistema desenvolvido para a disciplina Controle de Gestão, pelo
          Programa de Mestrado Profissional em Gestão e Negócios – Turma Banco
          do Brasil - da Universidade do Vale do Rio dos Sinos - UNISINOS,
          ministrada pelo Professor Dr. <b>Oscar Rudy Kronmeyer Filho.</b>
        </Subtitle>
      </Box>

      <Box w="52%" top="50px">
        <ul>
          <li>Mestrandos:</li>
          <li>Daniela Regina Lassen Wink</li>
          <li>Herbert Maldotti Ramos</li>
          <li>Patrícia Paseto de Moraes</li>
          <li>Rafael Machado de Oliveira</li>
          <li>Ronaldo Souza de Lemos</li>
          <li>Porto Alegre RS, Agosto de 2020</li>
        </ul>
      </Box>

      <Box top="90px" w="52%" bottom="90px">
        <Link to="/explicacoes">
          <Button
            icon={FaArrowCircleRight}
            bgColor="#29166f"
            color="#FFFFFF"
            size="200px"
            iconOrientation="right"
          >
            INICIAR
          </Button>
        </Link>
      </Box>
    </Container>
  </BodyContent>
);

export default Tela1;
