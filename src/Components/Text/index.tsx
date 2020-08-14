import React, { FC } from 'react';
import { Container } from './styles';

interface Props {
  size?: string;
  top?: string;
  bottom?: string;
  textAlign?: string;
}
const Text: FC<Props> = ({ size, top, bottom, textAlign, children }) => (
  <Container size={size} top={top} bottom={bottom} textAlign={textAlign}>
    {children}
  </Container>
);

export default Text;
