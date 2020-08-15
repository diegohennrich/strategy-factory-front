import React, { FC, useCallback, useRef, useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import Swot from '../../Assets/swot.jpeg';
import { AiOutlineUser, AiOutlineIdcard, AiOutlineEye } from 'react-icons/ai';
import { FaArrowCircleRight } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import BodyContent from '../../Components/BodyContent';
import Button from '../../Components/Button';
import TextArea from '../../Components/Textarea';
import { Container, Title, SwotImg } from './styles';
import Box from '../../Components/Box';
import Text from '../../Components/Text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

interface FormData {
  opotunidade1: string;
  descricao1: string;
  opotunidade2: string;
  descricao2: string;
  opotunidade3: string;
  descricao3: string;
  ameaca1: string;
  ameaca1_descricao: string;
  ameaca2: string;
  ameaca2_descricao: string;
  ameaca3: string;
  ameaca3_descricao: string;
}

const Missao: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const FormRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    console.log('data: ', data);
    localStorage.setItem('@StrategyFactory:swot-externo', JSON.stringify(data));

    history.push('/estrategia');
  }, []);

  useEffect(() => {
    const dados = localStorage.getItem('@StrategyFactory:swot-externo');

    if (dados) {
      FormRef.current?.setData({ ...JSON.parse(dados) });
    }
  }, []);

  return (
    <BodyContent>
      <Modal
        title="Análise SWOT"
        visible={showModal}
        maskClosable
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
        width="1000px"
      >
        <Box w="100%" top="10px" textAlign="left">
          <Title>Análise SWOT</Title>
          <Text textAlign="left">
            A análise SWOT é uma ferramenta de gestão utilizada para identificar
            os pontos fortes e fracos internos de uma empresa e as oportunidades
            e ameaças impostas pelo ambiente externo. SWOT vem do inglês:
            Strengths, Weaknesses, Opportunities and Threats, ou seja, Forças,
            Fraquezas, Oportunidades e ameaças. Seu principal objetivo está em
            auxiliar a empresa a melhorar sua percepção em relação aos diversos
            fatores envolvidos nas decisões empresariais, possibilitando que a
            empresa aproveite melhor as oportunidades e evite ou esteja melhor
            preparada para as ameaças identificadas na análise. Segundo Wright
            et. al. (2000) “o objetivo da análise é possibilitar que a empresa
            se posicione para tirar vantagem de determinadas oportunidades do
            ambiente e evitar ou minimizar ameaças ambientais”. É fundamental
            enfatizar que a análise SWOT pode ser utilizada em empresa de
            qualquer porte e ramo e a qualquer momento, ou seja, tanto na
            implantação da empresa, na expansão, ou na avaliação de seu
            posicionamento para auxiliar no processo decisório. A análise SWOT
            envolve a construção da matriz SWOT:
          </Text>

          <Box w="100%">
            <SwotImg src={Swot} />
          </Box>

          <Text textAlign="left">
            A análise SWOT contempla o ambiente interno e externo da
            organização. O ambiente interno são as características internas da
            empresa, que envolvem recursos, habilidades, experiências e
            conhecimentos, são aspectos controláveis e quem podem ser alterados
            pela empresa, estão relacionados a seus pontos fortes (forças) e
            fracos (fraquezas). Ex: equipe qualificada ou não, maquinário
            moderno ou defasado, localização da empresa adequada ou não. Já o
            ambiente externo engloba as oportunidades e ameaças que podem afetar
            os negócios da empresa e que não são por ela controláveis. Ex:
            políticas governamentais, efeitos climáticos, variações cambiais,
            políticas econômicas. A partir da matriz SWOT a empresa obtém um
            quadro esquemático resumido de sua situação estratégica, fornecendo
            informação vital para empresa, permitindo que avalie seu
            posicionamento estratégico e possa realizar um planejamento
            estratégico direcionado a seus objetivos. “Depois de ter realizado
            uma análise SWOT, a empresa pode estabelecer metas específicas para
            o período de planejamento”. (KOTLER & KELLER, 2006).
          </Text>
        </Box>
      </Modal>

      <Container>
        <div>
          <Title>Análise SWOT – Ambiente Externo</Title>
          <button onClick={() => setShowModal(true)}>
            Consulte os conceitos aqui
            <AiOutlineEye size="20px" style={{ marginLeft: 10 }} />
          </button>
        </div>

        <Box w="80%" textAlign="left">
          <Text top="10px" textAlign="left">
            A exemplo do que foi realizado na etapa anterior, agora vamos
            analisar o ambiente externo da empresa:
          </Text>
        </Box>

        <Box w="80%" textAlign="left">
          <Text textAlign="left">
            Liste as principais OPORTUNIDADES EXTERNAS que a empresa possui
            hoje, que a tornam ou que podem a tornar positivamente diferenciada:
          </Text>
        </Box>

        <Box w="80%" top="25px" textAlign="left">
          <Form ref={FormRef} onSubmit={handleSubmit}>
            <Box w="100%" top="30px" textAlign="left">
              <table>
                <tr>
                  <td>Nome da Oportunidade</td>
                  <td>Descrição</td>
                </tr>
                <tr>
                  <td>
                    <TextArea
                      name="oportunidade1"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    {' '}
                    <TextArea
                      name="descricao1"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextArea
                      name="oportunidade2"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    {' '}
                    <TextArea
                      name="descricao2"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextArea
                      name="oportunidade3"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    {' '}
                    <TextArea
                      name="descricao3"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                </tr>
              </table>
            </Box>

            <Box w="100%" top="50px" textAlign="left">
              <Text textAlign="left">
                Agora liste as principais AMEAÇAS EXTERNAS que prejudicam ou que
                podem prejudicar os objetivos da empresa:
              </Text>
            </Box>

            <Box w="100%" top="30px" textAlign="left">
              <table>
                <tr>
                  <td>Nome da Ameaça</td>
                  <td>Descrição</td>
                </tr>
                <tr>
                  <td>
                    <TextArea
                      name="ameaca1"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    {' '}
                    <TextArea
                      name="ameaca1_descricao"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextArea
                      name="ameaca2"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    {' '}
                    <TextArea
                      name="ameaca2_descricao"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextArea
                      name="ameaca3"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    {' '}
                    <TextArea
                      name="ameaca3_descricao"
                      placeholder="Por Favor, descreva..."
                      styleContainer={{ width: '100%' }}
                    />
                  </td>
                </tr>
              </table>
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
                Prossegir
              </Button>
            </Box>
          </Form>
        </Box>
      </Container>
    </BodyContent>
  );
};

export default Missao;
