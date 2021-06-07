import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  top: 1310px;
  height: 100px;
  width: 100%;
  margin-left: 0;
  padding-top: 1px;
`;

export const Anchor = styled.a`
  font-size: 14px;
  line-height: 17px;

  &:first-of-type {
    padding-left: 58px;
  }

  &:last-of-type {
    padding-right: 50px;
  }
`;

export const Image = styled.img`
  padding-left: 2px;
`;
