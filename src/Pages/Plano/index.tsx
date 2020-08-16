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
import TablePlano from '../../Components/TablePlano';

const Missao: FC = () => {
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

        <TablePlano />
      </Container>
    </BodyContent>
  );
};

export default Missao;
