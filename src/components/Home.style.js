import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center
`;

export const Title = styled.p`
  margin-top: 27px;
  margin-bottom: 10px;
  font-size: 38px;
  font-family: ${(props) => props.theme.font.family.serif};
  text-align: center
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 22px;
  font-size: 16px;
  font-family: ${(props) => props.theme.font.family.sansSerif};
  color: ${(props) => props.theme.colors.text.lighterGray};
`;

export const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.orange};

  width: 217px;
  height: 36px;
  margin-top: 23px;
  margin-bottom: 23px;
  border-radius: 4px;

  font-family: ${(props) => props.theme.font.family.sansSerif};
  font-weight: 500;
  font-size: 0.875em;
  line-height: 9px;
  text-transform: uppercase;
`;
