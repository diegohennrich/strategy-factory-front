import styled from 'styled-components';

interface BoxProps {
  w?: string;
  top?: string;
  bottom?: string;
  textAlign?: string;
}

export const Container = styled.div<BoxProps>`
  width: ${(props) => props.w};
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
  text-align: ${(props) => props.textAlign || 'center'};
`;
