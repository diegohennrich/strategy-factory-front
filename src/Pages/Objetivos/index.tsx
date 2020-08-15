import React, { FC, useCallback, useRef, useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useHistory } from 'react-router-dom';

import { AiOutlineUser, AiOutlineIdcard, AiOutlineEye } from 'react-icons/ai';
import { FaArrowCircleRight } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import BodyContent from '../../Components/BodyContent';
import Button from '../../Components/Button';
import TextArea from '../../Components/Textarea';
import {
  Container,
  Title,
  Content,
  Tabela,
  ListItems,
  Item,
  Separator,
  Left,
  Right,
} from './styles';
import Box from '../../Components/Box';
import Text from '../../Components/Text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

interface FormData {
  objetivo1_12: string;
  descricao1_12: string;
  objetivo2_12: string;
  descricao2_12: string;
  objetivo3_12: string;
  descricao3_12: string;
  meta1_12: string;
  meta1_descricao_12: string;
  meta2_12: string;
  meta2_descricao_12: string;
  meta3_12: string;
  meta3_descricao_12: string;
  objetivo1_5: string;
  descricao1_5: string;
  objetivo2_5: string;
  descricao2_5: string;
  objetivo3_5: string;
  descricao3_5: string;
  meta1_5: string;
  meta1_descricao_5: string;
  meta2_5: string;
  meta2_descricao_5: string;
  meta3_5: string;
  meta3_descricao_5: string;
}

const Missao: FC = () => {
  const [forcas, setForcas] = useState<string[]>([]);
  const [fraquezas, setFraquezas] = useState<string[]>([]);
  const [oportunidades, setOportunidades] = useState<string[]>([]);
  const [ameacas, setAmeacas] = useState<string[]>([]);
  const [estrategia, setEstrategia] = useState<string[]>([]);
  const history = useHistory();
  const FormRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    console.log('data: ', data);
    localStorage.setItem('@StrategyFactory:objetivos', JSON.stringify(data));

    history.push('/plano');
  }, []);

  useEffect(() => {
    const dados = localStorage.getItem('@StrategyFactory:objetivos');

    if (dados) {
      FormRef.current?.setData({ ...JSON.parse(dados) });
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

  return (
    <BodyContent>
      <Container>
        <div>
          <Title>Objetivos, Metas e Prazos</Title>
        </div>

        <Box w="100%" textAlign="left">
          <Text top="10px" textAlign="left">
            Considerando o que vimos até aqui – Missão, Visão, Valores, Ambiente
            Interno e Ambiente Externo, quais são os principais objetivos e
            metas a serem alcançados pela empresa no curto (até 12 meses) e
            médio (até 5 anos) prazo?
          </Text>
        </Box>

        <Box w="100%" top="25px" textAlign="left">
          <Separator>
            <Left>
              <Form
                ref={FormRef}
                onSubmit={handleSubmit}
                style={{ width: '100%' }}
              >
                <Text textAlign="left" size="20px" bottom="20px">
                  Objetivos nos próximos 12 meses
                </Text>
                <Content>
                  <table>
                    <tr>
                      <td>Objetivo</td>
                      <td>Data para atingir</td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="objetivo1_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <TextArea
                          name="descricao1_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="objetivo2_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        {' '}
                        <TextArea
                          name="descricao2_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="objetivo3_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        {' '}
                        <TextArea
                          name="descricao3_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                  </table>
                </Content>

                <Text textAlign="left" size="20px" bottom="20px" top="40px">
                  Metas nos próximos 12 meses
                </Text>
                <Content>
                  <table>
                    <tr>
                      <td>Meta</td>
                      <td>Data para atingir</td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="meta1_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <TextArea
                          name="meta1_descricao_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="meta2_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <TextArea
                          name="meta2_descricao_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="meta3_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <TextArea
                          name="meta3_descricao_12"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                  </table>
                </Content>

                <Text textAlign="left" size="20px" bottom="20px" top="40px">
                  Objetivos nos próximos 5 anos
                </Text>
                <Content>
                  <table>
                    <tr>
                      <td>Objetivo</td>
                      <td>Data para atingir</td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="objetivo1_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <TextArea
                          name="descricao1_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="objetivo2_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        {' '}
                        <TextArea
                          name="descricao2_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="objetivo3_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        {' '}
                        <TextArea
                          name="descricao3_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                  </table>
                </Content>

                <Text textAlign="left" size="20px" bottom="20px" top="40px">
                  Metas nos próximos 5 anos
                </Text>
                <Content>
                  <table>
                    <tr>
                      <td>Meta</td>
                      <td>Data para atingir</td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="meta1_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <TextArea
                          name="meta1_descricao_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="meta2_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        {' '}
                        <TextArea
                          name="meta2_descricao_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <TextArea
                          name="meta3_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <TextArea
                          name="meta3_descricao_5"
                          placeholder="Por Favor, descreva..."
                          styleContainer={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                  </table>
                </Content>
              </Form>
            </Left>
            <Right>
              <Tabela>
                <Text textAlign="left">
                  Para esta atividade, vamos considerar:
                </Text>
                <Text textAlign="left" top="20px">
                  Objetivos: Alvos conceituais. Ex.: “Ser a empresa mais
                  lembrada pelos consumidores em nosso segmento”, “Iniciar
                  operações no Chile”, etc.
                </Text>
                <Text textAlign="left" top="20px">
                  Metas: Alvos numéricos. Ex.: “Inaugurar mais 02 filiais”,
                  “Aumentar a produção em 25%”, etc.
                </Text>
                <Text textAlign="left" top="20px">
                  Para auxiliar na definição de seus objetivos, tenha em mente
                  as ameaças/fraquezas identificadas na análise SWOT, e qual a
                  vantagem competitiva que a empresa já tem ou pretende ter:
                </Text>
              </Tabela>

              <Tabela>
                <Text textAlign="left">Forças:</Text>
                <Text textAlign="left" top="20px">
                  <ListItems>
                    {forcas.map((i) => (
                      <Item>{i}</Item>
                    ))}
                  </ListItems>
                </Text>
                <Text textAlign="left" top="20px">
                  Fraquezas
                </Text>
                <Text textAlign="left" top="20px">
                  <ListItems>
                    {fraquezas.map((i) => (
                      <Item>{i}</Item>
                    ))}
                  </ListItems>
                </Text>
                <Text textAlign="left" top="20px">
                  Oportunidade:
                </Text>
                <Text textAlign="left" top="20px">
                  <ListItems>
                    {oportunidades.map((i) => (
                      <Item>{i}</Item>
                    ))}
                  </ListItems>
                </Text>
                <Text textAlign="left" top="20px">
                  Ameaça:
                </Text>
                <Text textAlign="left" top="20px">
                  <ListItems>
                    {ameacas.map((i) => (
                      <Item>{i}</Item>
                    ))}
                  </ListItems>
                </Text>
              </Tabela>

              <Tabela>
                <Text textAlign="left">Estratégia:</Text>
                <Text textAlign="left" top="20px">
                  <ListItems>
                    {estrategia.map((i) => (
                      <Item>{i}</Item>
                    ))}
                  </ListItems>
                </Text>
              </Tabela>
            </Right>
          </Separator>
        </Box>

        <Box top="70px" w="80%" bottom="90px" textAlign="left">
          <Button
            icon={FaArrowCircleRight}
            bgColor="#29166f"
            color="#FFFFFF"
            size="200px"
            iconOrientation="right"
            onClick={() => FormRef.current?.submitForm()}
          >
            Prosseguir
          </Button>
        </Box>
      </Container>
    </BodyContent>
  );
};

export default Missao;
