import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  .rotacionar {
    transform: rotate(90deg);
    margin: 0;
    padding: 0;
    width: 1000px;
    margin-top: 270px;
  }
`;

export const Title = styled.h1`
  font-size: 21px;
`;

export const Lista = styled.ul`
  width: 90%;
  margin: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: auto;

  h1 {
    font-size: 17px;
  }
`;

export const Logo = styled.img`
  width: 250px;
`;

export const Separator = styled.div`
  display: flex;
  margin-top: 40px;
  width: 90%;
  text-align: left;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 18px;
    margin: 0;
  }
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const Item = styled.li`
  font-size: 18px;
`;

export const Tabela = styled.table`
  width: 700px;
  margin-top: 10px;
  tr {
    border: 0;
  }
  td {
    border: solid 1px black;
    padding: 10px 20px;
  }

  .nothing {
    border-top: solid 1px #ffffff;
    border-left: solid 1px #ffffff;
  }

  h2 {
    font-size: 20px;
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const TabelaPlanoFinal = styled.div`
  display: flex;
  justify-content: center;

  table {
    min-width: 1000px;
    text-align: center;
    margin: auto;

    td {
      border: solid 1px black !important;
      text-align: center;

      span {
        font-weight: bold;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
