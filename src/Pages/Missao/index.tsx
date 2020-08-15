import React, { FC, useCallback, useRef, useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import { AiOutlineUser, AiOutlineIdcard, AiOutlineEye } from 'react-icons/ai';
import { FaArrowCircleRight } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import BodyContent from '../../Components/BodyContent';
import Button from '../../Components/Button';
import TextArea from '../../Components/Textarea';
import { Container, Title, Content, Info } from './styles';
import Box from '../../Components/Box';
import Text from '../../Components/Text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

interface FormData {
  missao: string;
  visao: string;
  valores: string;
}

const Missao: FC = () => {
  const [showModalMissao, setShowModalMissao] = useState(false);
  const [showModalVisao, setShowModalVisao] = useState(false);
  const [showModalValores, setShowModalValores] = useState(false);
  const history = useHistory();

  const FormRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    console.log('data: ', data);
    localStorage.setItem('@StrategyFactory:missao', JSON.stringify(data));

    history.push('/swot-interno');
  }, []);

  useEffect(() => {
    const dados = localStorage.getItem('@StrategyFactory:missao');

    if (dados) {
      FormRef.current?.setData({ ...JSON.parse(dados) });
    }
  }, []);

  return (
    <BodyContent>
      <Modal
        title="Declaração de missão"
        visible={showModalMissao}
        maskClosable
        onOk={() => setShowModalMissao(false)}
        onCancel={() => setShowModalMissao(false)}
      >
        <Box w="100%" textAlign="left">
          <Text textAlign="left">
            É uma descrição breve, em uma ou duas frases, que define a razão de
            ser da organização. A missão deve refletir o propósito fundamental
            (atualmente, algumas empresas inclusive utilizam o termo “propósito”
            em substituição a “missão”) da organização, principalmente o que ela
            fornece aos clientes. A declaração de missão serve como uma
            referência para atuação dos dirigentes e funcionários da
            organização.
          </Text>

          <Text textAlign="left" top="20px">
            Exemplo de missão: “Organizar as informações no mundo e torna-lás
            acessíveis e úteis para todos.” (Google).
          </Text>
        </Box>
      </Modal>

      <Modal
        title="Declaração de visão"
        visible={showModalVisao}
        maskClosable
        onOk={() => setShowModalVisao(false)}
        onCancel={() => setShowModalVisao(false)}
      >
        <Box w="100%" textAlign="left">
          <Text textAlign="left">
            A declaração de visão estipula os objetivos de médio e longo prazo
            (três a dez anos) da empresa. Esta declaração deve tornar pública
            como a empresa quer ser vista pelo mundo. Tradicionalmente, a visão
            deve possuir três componentes: ter um objetivo ousado, definir o
            nicho de atuação e definir um prazo para se alcançar esse objetivo.
            Atualmente, percebe-se que as grandes empresas não têm se preocupado
            com a definição de nicho (até porque, em sua maioria, são empresas
            presentes em diversos segmentos) e o horizonte temporal. Porém, a
            definição de um objetivo ousado é fundamental e está sempre
            presente. O objetivo arrojado da declaração de visão deve ser
            diferente da situação atual da empresa e serve como mola propulsora
            para levar a empresa a patamares muito superiores de desempenho, não
            se contentando com bons resultados no presente e melhorias
            incrementais no futuro.
          </Text>

          <Text textAlign="left" top="20px">
            Exemplo de visão: “Ser a maior e melhor rede de chocolates finos do
            mundo, oferecendo aos seus clientes e parceiros uma relação
            duradoura, com foco no crescimento, rentabilidade e responsabilidade
            socioambiental.” (Cacau Show).
          </Text>
        </Box>
      </Modal>

      <Modal
        title="Declaração de valores"
        visible={showModalValores}
        maskClosable
        onOk={() => setShowModalValores(false)}
        onCancel={() => setShowModalValores(false)}
      >
        <Box w="100%" textAlign="left">
          <Text textAlign="left">
            Os valores da empresa direcionam os comportamentos e o caráter da
            organização. Valores organizacionais são crenças e atitudes que dão
            uma personalidade à empresa, definindo uma "ética" para a atuação
            das pessoas e da organização como um todo. Eles devem servir de
            alicerce para a cultura da empresa.
          </Text>

          <Text textAlign="left" top="20px">
            Exemplo de valores: “ética, foco no cliente, inovação, eficiência,
            confiabilidade, senso de dono e espírito público”. (Banco do
            Brasil).
          </Text>
        </Box>
      </Modal>

      <Container>
        <Box w="80%" top="40px" textAlign="left">
          <Title>Missão, Visão e Valores</Title>
        </Box>
        <Box w="80%" textAlign="left">
          <Text top="10px" textAlign="left">
            Nesta etapa, é importante que você defina, em uma frase, o que sua
            empresa se propõe a fazer (“missão”), o que a empresa aspira para o
            seu futuro (“visão”), e os valores que serão a base para as suas
            decisões (“valores”).
          </Text>
        </Box>

        <Box w="80%" top="25px" textAlign="left">
          <Form ref={FormRef} onSubmit={handleSubmit}>
            <Content>
              <button onClick={() => setShowModalMissao(true)}>
                Ver conceitos
                <AiOutlineEye size="20px" style={{ marginLeft: 10 }} />
              </button>

              <Info>
                <div>
                  <span>1. Missão: </span>
                </div>
                <TextArea
                  name="missao"
                  placeholder="Descreva sua missão"
                  styleContainer={{ width: '100%' }}
                />
              </Info>
            </Content>

            <Content>
              <button onClick={() => setShowModalVisao(true)}>
                Ver conceitos
                <AiOutlineEye size="20px" style={{ marginLeft: 10 }} />
              </button>

              <Info>
                <div>
                  <span>2. Visão: </span>
                </div>
                <TextArea
                  name="visao"
                  placeholder="Descreva sua Visão"
                  styleContainer={{ width: '100%' }}
                />
              </Info>
            </Content>

            <Content>
              <button onClick={() => setShowModalValores(true)}>
                Ver conceitos
                <AiOutlineEye size="20px" style={{ marginLeft: 10 }} />
              </button>

              <Info>
                <div>
                  <span>3. Valores: </span>
                </div>
                <TextArea
                  name="valores"
                  placeholder="Descreva seus Valores"
                  styleContainer={{ width: '100%' }}
                />
              </Info>
            </Content>

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
