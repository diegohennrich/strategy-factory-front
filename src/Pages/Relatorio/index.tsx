import React, { FC, useCallback, useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import ReactPDF from '@react-pdf/renderer';
import LogoStrategy from '../../Assets/Logo-editado.png';
import { useHistory } from 'react-router-dom';
import Swot from '../../Assets/swot.jpeg';
import { AiOutlineUser, AiOutlineIdcard, AiOutlineEye } from 'react-icons/ai';
import Checkbox from '../../Components/Checkbox';
import { FiRefreshCw } from 'react-icons/fi';
import { BsCloudDownload } from 'react-icons/bs';
import BodyContent from '../../Components/BodyContent';
import Button from '../../Components/Button';
import TextArea from '../../Components/Textarea';
import {
  Container,
  Title,
  Header,
  Logo,
  Separator,
  List,
  Item,
  Tabela,
  TabelaPlanoFinal,
  Content,
} from './styles';
import Box from '../../Components/Box';
import Text from '../../Components/Text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import TablePlano from '../../Components/TablePlano';

const Missao: FC = () => {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpjEmpresa, setCnpjEmpresa] = useState('');
  const [values, setValues] = useState<any>([]);
  const [forcas, setForcas] = useState<string[]>([]);
  const [fraquezas, setFraquezas] = useState<string[]>([]);
  const [oportunidades, setOportunidades] = useState<string[]>([]);
  const [ameacas, setAmeacas] = useState<string[]>([]);
  const [estrategia, setEstrategia] = useState<string[]>([]);
  const [rotacionar, setRotacionar] = useState('');
  const history = useHistory();

  const componentRef = useRef<any>();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    let cadastro: any = localStorage.getItem('@StrategyFactory:cadastro');

    if (cadastro) {
      cadastro = JSON.parse(cadastro);
      setNomeEmpresa(cadastro.nome);
      setCnpjEmpresa(cadastro.cnpj);
    }

    let values: any = localStorage.getItem('@StrategyFactory:missao');

    if (values) {
      values = JSON.parse(values);
      const valuesFinal = [];

      valuesFinal.push({ item: 'Missão', value: values.missao });
      valuesFinal.push({ item: 'Visão', value: values.visao });
      valuesFinal.push({ item: 'Valores', value: values.valores });

      setValues(valuesFinal);
    }

    let swotInterno: any | null = localStorage.getItem(
      '@StrategyFactory:swot-interno'
    );

    if (swotInterno) {
      swotInterno = JSON.parse(swotInterno);

      const forcasFinal = [];

      forcasFinal.push(swotInterno.forca1);
      forcasFinal.push(swotInterno.forca2);
      forcasFinal.push(swotInterno.forca3);

      setForcas(forcasFinal);

      const fraquezasFinal = [];

      fraquezasFinal.push(swotInterno.fraqueza1);
      fraquezasFinal.push(swotInterno.fraqueza2);
      fraquezasFinal.push(swotInterno.fraqueza3);

      setFraquezas(fraquezasFinal);
    }

    let swotExterno: any | null = localStorage.getItem(
      '@StrategyFactory:swot-externo'
    );

    if (swotExterno) {
      swotExterno = JSON.parse(swotExterno);

      const oportunidadesFinal = [];

      oportunidadesFinal.push(swotExterno.oportunidade1);
      oportunidadesFinal.push(swotExterno.oportunidade2);
      oportunidadesFinal.push(swotExterno.oportunidade3);

      setOportunidades(oportunidadesFinal);

      const ameacasFinal = [];

      ameacasFinal.push(swotExterno.ameaca1);
      ameacasFinal.push(swotExterno.ameaca2);
      ameacasFinal.push(swotExterno.ameaca3);

      setAmeacas(ameacasFinal);
    }

    let estrategia: any | null = localStorage.getItem(
      '@StrategyFactory:estrategia'
    );

    if (estrategia) {
      estrategia = JSON.parse(estrategia);
      setEstrategia(estrategia);
      const estrategiaFinal = [];
    }
  }, []);

  const handleReset = useCallback(() => {
    localStorage.removeItem('@StrategyFactory:cadastro');
    localStorage.removeItem('@StrategyFactory:estrategia');
    localStorage.removeItem('@StrategyFactory:missao');
    localStorage.removeItem('@StrategyFactory:objetivos');
    localStorage.removeItem('@StrategyFactory:swot-externo');
    localStorage.removeItem('@StrategyFactory:swot-interno');
    localStorage.removeItem('@StrategyFactory:plano');

    history.push('/');
  }, []);

  return (
    <BodyContent>
      <Content>
        <Container ref={componentRef}>
          <Box w="90%" textAlign="left" top="40px" bottom="40px">
            <Title>Relatório Final</Title>
          </Box>

          <Header>
            <Logo src={LogoStrategy} />
            <h1>STRATEGY FACTORY - PLANEJAMENTO ESTRATÉGICO</h1>
          </Header>

          <Separator>
            <h2>Nome: {nomeEmpresa}</h2>
            <h2>CNPJ: {cnpjEmpresa}</h2>
          </Separator>

          <Separator>
            <List>
              {values.map((i: any) => (
                <Item>{`${i.item}: ${i.value}`}</Item>
              ))}
            </List>
          </Separator>

          <Tabela>
            <tr>
              <td className="nothing"></td>
              <td>
                <h2>Impacto Positivo</h2>
              </td>
              <td>
                <h2>Impacto Negativo</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h1>AMBIENTE INTERNO</h1>
              </td>
              <td>
                <h3>FORÇAS:</h3>
                <List>
                  {forcas.map((i) => (
                    <Item>{i}</Item>
                  ))}
                </List>
              </td>
              <td>
                <h3>FRAQUEZAS:</h3>
                <List>
                  {fraquezas.map((i) => (
                    <Item>{i}</Item>
                  ))}
                </List>
              </td>
            </tr>
            <tr>
              <td>
                <h1>AMBIENTE Externo</h1>
              </td>
              <td>
                <h3>OPORTUNIDADES:</h3>
                <List>
                  {oportunidades.map((i) => (
                    <Item>{i}</Item>
                  ))}
                </List>
              </td>
              <td>
                <h3>AMEAÇAS: </h3>

                <List>
                  {ameacas.map((i) => (
                    <Item>{i}</Item>
                  ))}
                </List>
              </td>
            </tr>
          </Tabela>

          <Box w="90%" textAlign="left" top="50px">
            <Title>Vantagens Competitivas</Title>
          </Box>

          <Box w="90%" textAlign="left" top="0px" bottom="40px">
            <List>
              {estrategia.map((i) => (
                <Item>{i}</Item>
              ))}
            </List>
          </Box>

          <div className={rotacionar}>
            <Box w="90%" textAlign="left" top="80px">
              <Title>Plano de ação</Title>
            </Box>
            <Box w="90%" textAlign="center">
              <TabelaPlanoFinal>
                <TablePlano btnProsseguir={false} />
              </TabelaPlanoFinal>
            </Box>
          </div>
        </Container>

        <Box top="70px" w="90%" textAlign="left">
          <Button
            icon={BsCloudDownload}
            bgColor="#29166f"
            color="#FFFFFF"
            size="350px"
            iconOrientation="right"
            onClick={() => {
              setRotacionar('rotacionar');
              console.log('entrou aqui');
              if (handlePrint) {
                return handlePrint();
              }
            }}
          >
            Exportar Relatório
          </Button>
        </Box>

        <Box w="90%" bottom="30px" textAlign="left">
          <Button
            icon={FiRefreshCw}
            bgColor="#29166f"
            color="#FFFFFF"
            size="350px"
            iconOrientation="right"
            onClick={handleReset}
          >
            Fazer uma novo planejamento
          </Button>
        </Box>
      </Content>
    </BodyContent>
  );
};

export default Missao;
