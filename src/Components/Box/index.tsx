import React, { FC } from 'react';
import { Container } from './styles';

interface Props {
  w?: string;
  top?: string;
  bottom?: string;
  textAlign?: string;
}
const Box: FC<Props> = ({ w, top, bottom, textAlign, children }) => (
  <Container w={w} top={top} bottom={bottom} textAlign={textAlign}>
    {children}
  </Container>
);

export default Box;
