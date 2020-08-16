import React, { FC } from 'react';
import { Container } from './styles';

interface Props {
  w?: string;
  top?: string;
  bottom?: string;
  textAlign?: string;
  containerStyle?: object;
}
const Box: FC<Props> = ({
  w,
  top,
  bottom,
  textAlign,
  containerStyle,
  children,
}) => (
  <Container
    style={containerStyle}
    w={w}
    top={top}
    bottom={bottom}
    textAlign={textAlign}
  >
    {children}
  </Container>
);

export default Box;
