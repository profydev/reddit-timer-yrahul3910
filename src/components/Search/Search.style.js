import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.font.family.serif};
  font-size: 38px;
  margin-top: 35px;
  margin-bottom: 0;
`;

export const Section = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

export const Paragraph = styled.p`
  margin-left: 3px;
  font-size: 18px;
  font-family: ${(props) => props.theme.font.family.sansSerif};
  margin-top: 8px;
`;

export const Textbox = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  margin-left: 10px;
  font-size: 14px;
  width: 351px;
  height: 17px;
  padding-left: 17px;
  padding-top: 8px;
  padding-bottom: 11px;
`;

export const Button = styled.a`
  margin-left: 8px;
  border-radius: 4px;
  border: none;
  font-family: ${(props) => props.theme.font.family.sansSerif};
  font-weight: 500;
  font-size: 14px;
  line-height: 9px;
  color: white;
  background-color: ${(props) => props.theme.colors.orange};
  text-transform: uppercase;
  width: 92px;
  height: 22px;
  padding-top: 14px;
  text-align: center;
`;
