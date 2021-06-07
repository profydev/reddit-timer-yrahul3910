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

export const Heading = styled.h2`
  font-family: ${(props) => props.theme.font.family.serif};
  font-size: 24px;
  font-weight: 400;
  margin-top: 487px;
  align-self: flex-start;
  margin-left: 351px;
  margin-bottom: 6px;
`;

export const Paragraph = styled.p`
  margin-top: 7px;
  font-family: ${(props) => props.theme.font.family.sansSerif};
  color: ${(props) => props.theme.colors.text.lighterGray};
  margin-left: 351px;
  margin-right: 351px;
  line-height: 27px;
  max-width: 738px;
`;

export const List = styled.ul`
  font-family: ${(props) => props.theme.font.family.sansSerif};
  color: ${(props) => props.theme.colors.text.lighterGray};
  align-self: flex-start;
  line-height: 27px;

  margin-left: 351px;
  margin-top: 6px;  
  padding-left: 9px;

  list-style-type: "•";
  list-style-position: outside;
`;

export const Image = styled.img`
  display: block;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.orange};

  padding: 0 16px;
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
