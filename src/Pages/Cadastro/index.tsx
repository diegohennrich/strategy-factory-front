import React, { FC, useCallback, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineUser, AiOutlineIdcard } from 'react-icons/ai';
import { FaArrowCircleRight } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import BodyContent from '../../Components/BodyContent';
import Input from '../../Components/Input';
import TextArea from '../../Components/Textarea';
import { Container, Title } from './styles';
import Box from '../../Components/Box';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

interface FormData {
  nome: string;
  cnpj: string;
  atividades: string;
  fundacao: string;
  dirigentes: string;
  cidades: string;
  produtos: string;
  concorrentes: string;
  perfil_concorrentes: string;
}

const Cadastro: FC = () => {
  const FormRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: FormData) => {
    console.log('data: ', data);
    localStorage.setItem('@StrategyFactory:cadastro', JSON.stringify(data));

    history.push('/missao');
  }, []);

  useEffect(() => {
    const dados = localStorage.getItem('@StrategyFactory:cadastro');

    if (dados) {
      FormRef.current?.setData({ ...JSON.parse(dados) });
    }
  }, []);

  return (
    <BodyContent>
      <Container>
        <Box w="80%" top="40px" textAlign="left">
          <Title>Cadastro</Title>
        </Box>
        <Box w="80%" textAlign="left">
          <Text top="10px" textAlign="left">
            Conte um pouco sobre sua empresa:
          </Text>
        </Box>

        <Box w="80%" top="25px" textAlign="left">
          <Form ref={FormRef} onSubmit={handleSubmit}>
            <Input name="nome" icon={AiOutlineUser} placeholder="Nome" />

            <Input name="cnpj" icon={AiOutlineIdcard} placeholder="CNPJ" />

            <TextArea
              name="atividades"
              placeholder="Atividade(s) Econômica(s)"
            />

            <Input
              name="fundacao"
              icon={BsCalendar}
              placeholder="Data de fundação"
              style={{ marginTop: 10 }}
            />

            <TextArea name="dirigentes" placeholder="Dirigentes" />

            <TextArea
              name="cidades"
              placeholder="Cidades / Regiões / Países onde atua"
              styleContainer={{ marginTop: 10 }}
            />

            <TextArea
              name="produtos"
              placeholder="Principais Produtos / Serviços"
              styleContainer={{ marginTop: 10 }}
            />

            <TextArea
              name="concorrentes"
              placeholder="Principais concorrentes"
              styleContainer={{ marginTop: 10 }}
            />

            <TextArea
              name="perfil_concorrentes"
              placeholder="Perfil dos principais clientes"
              styleContainer={{ marginTop: 10 }}
            />

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

export default Cadastro;
