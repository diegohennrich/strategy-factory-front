import React, { FC, useCallback, useRef, useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useHistory } from 'react-router-dom';

import { AiOutlineUser, AiOutlineIdcard, AiOutlineEye } from 'react-icons/ai';
import { FaArrowCircleRight } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import BodyContent from '../../Components/BodyContent';
import Button from '../../Components/Button';
import TextArea from '../../Components/Textarea';
import { Container, Title, ListItems, Item } from './styles';
import Box from '../../Components/Box';
import Text from '../../Components/Text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

interface ObjetivoProps {
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
  const [data, setData] = useState<any>([]);
  const history = useHistory();
  const FormRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    console.log('data: ', data);
    // localStorage.setItem('@StrategyFactory:objetivos', JSON.stringify(data));

    // history.push('/plano');
  }, []);

  useEffect(() => {
    let dados: any | null = localStorage.getItem('@StrategyFactory:objetivos');

    if (dados) {
      dados = JSON.parse(dados);

      const payload = {
        objetivo_12: [
          dados.objetivo1_12,
          dados.objetivo2_12,
          dados.objetivo3_12,
        ],
        prazo_12: [
          dados.descricao1_12,
          dados.descricao2_12,
          dados.descricao3_12,
        ],
        meta_12: [dados.meta1_12, dados.meta2_12, dados.meta3_12],
        meta_descricao_12: [
          dados.meta1_descricao_12,
          dados.meta2_descricao_12,
          dados.meta3_descricao_12,
        ],
        objetivo_5: [dados.objetivo1_5, dados.objetivo2_5, dados.objetivo3_5],
        prazo_5: [dados.descricao1_5, dados.descricao2_5, dados.descricao3_5],
        meta_5: [dados.meta1_5, dados.meta2_5, dados.meta3_5],
        meta_descricao_5: [
          dados.meta1_descricao_5,
          dados.meta2_descricao_5,
          dados.meta3_descricao_5,
        ],
      };

      console.log('payload: ', payload);

      setData(payload);

      // FormRef.current?.setData({ ...payload });
    }
  }, []);
  return (
    <BodyContent>
      <Container>
        <div>
          <Title>Plano de Ação</Title>
        </div>

        <Box w="100%" textAlign="left">
          <Text top="10px" textAlign="left">
            Estamos quase no final do Planejamento! Agora complete o Plano de
            Ação abaixo. Para cada Objetivo e Meta listado, defina QUEM vai
            fazer, COMO vai fazer, QUANTO investimento será necessário, QUANDO
            vai começar (início da ação) e ATÉ QUANDO vai fazer (prazo final
            para atingimento). Utilize os Objetivos e Metas definidos na tela
            anterior, e acrescente outras ações se julgar necessário:
          </Text>
        </Box>

        <Box w="100%" top="25px" textAlign="left">
          <Form ref={FormRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
            <table>
              <tr>
                <td>
                  <span>
                    O Quê <br></br> (objetivo/meta)
                  </span>
                </td>
                <td>
                  <span>
                    Prazo <br></br> Inicial
                  </span>
                </td>
                <td>
                  <span>QUEM</span>
                </td>
                <td>
                  <span>COMO</span>
                </td>
                <td>
                  <span>QUANTO</span>
                </td>
                <td>
                  <span>
                    QUANDO <br></br>(início)
                  </span>
                </td>
                <td>
                  <span>
                    QUANO <br></br>(final)
                  </span>
                </td>
              </tr>

              <tr>
                <td style={{ minWidth: 250 }}>
                  <ListItems>
                    {data.objetivo_12 &&
                      data.objetivo_12.map((i: any) => <Item>{i}</Item>)}
                  </ListItems>
                </td>
                <td style={{ minWidth: 250 }}>
                  <ListItems>
                    {data.prazo_12 &&
                      data.prazo_12.map((i: any) => <Item>{i}</Item>)}
                  </ListItems>
                </td>
                <td>
                  <TextArea
                    name="quem_12"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="como_12"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quanto_12"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_inicial_12"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_final_12"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
              </tr>

              <tr>
                <td style={{ minWidth: 250 }}>
                  <ListItems>
                    {data.meta_12 &&
                      data.meta_12.map((i: any) => <Item>{i}</Item>)}
                  </ListItems>
                </td>
                <td style={{ minWidth: 250 }}>
                  <ListItems>
                    {data.meta_descricao_12 &&
                      data.meta_descricao_12.map((i: any) => <Item>{i}</Item>)}
                  </ListItems>
                </td>
                <td>
                  <TextArea
                    name="quem_12"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="como_12"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quanto_12"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_inicial_12"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_final_12"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
              </tr>

              <tr>
                <td style={{ minWidth: 250 }}>
                  <ListItems>
                    {data.objetivo_5 &&
                      data.objetivo_5.map((i: any) => <Item>{i}</Item>)}
                  </ListItems>
                </td>
                <td style={{ minWidth: 250 }}>
                  <ListItems>
                    {data.prazo_5 &&
                      data.prazo_5.map((i: any) => <Item>{i}</Item>)}
                  </ListItems>
                </td>
                <td>
                  <TextArea
                    name="quem_5"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="como_5"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quanto_5"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_inicial_5"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_final_5"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
              </tr>

              <tr>
                <td style={{ minWidth: 250 }}>
                  <ListItems>
                    {data.meta_5 &&
                      data.meta_5.map((i: any) => <Item>{i}</Item>)}
                  </ListItems>
                </td>
                <td style={{ minWidth: 250 }}>
                  <ListItems>
                    {data.meta_descricao_5 &&
                      data.meta_descricao_5.map((i: any) => <Item>{i}</Item>)}
                  </ListItems>
                </td>
                <td>
                  <TextArea
                    name="quem_5"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="como_5"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quanto_5"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_inicial_5"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_final_5"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
              </tr>

              <tr>
                <td style={{ minWidth: 250 }}>
                  <TextArea
                    name="objetivo_extra_1"
                    placeholder="Objetivo / Meta extra(opcional)"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td style={{ minWidth: 250 }}>
                  <TextArea
                    name="prazo_extra_1"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quem_extra_1"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="como_extra_1"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quanto_extra_1"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_inicial_extra_1"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_final_extra_1"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
              </tr>

              <tr>
                <td style={{ minWidth: 250 }}>
                  <TextArea
                    name="objetivo_extra_2"
                    placeholder="Objetivo / Meta extra(opcional)"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td style={{ minWidth: 250 }}>
                  <TextArea
                    name="prazo_extra_2"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quem_extra_2"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="como_extra_2"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quanto_extra_2"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_inicial_extra_2"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
                <td>
                  <TextArea
                    name="quando_final_extra_2"
                    placeholder="Preencher"
                    styleContainer={{ width: '100%', border: 0 }}
                  />
                </td>
              </tr>
            </table>

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
          </Form>
        </Box>
      </Container>
    </BodyContent>
  );
};

export default Missao;
