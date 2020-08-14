import styled from 'styled-components';

interface BoxProps {
  size?: string;
  top?: string;
  bottom?: string;
  textAlign?: string;
}

export const Container = styled.div<BoxProps>`
  font-size: ${(props) => props.size};
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
  text-align: ${(props) => props.textAlign || 'center'};
`;
