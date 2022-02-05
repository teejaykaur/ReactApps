import styled from "react-emotion";
import React, { Component }  from 'react';

const Wrapper = styled("div")`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: right;
`;

const Text = styled("span")`
  font-size: 16px;
  color: white;
`;

const Footer = () => (
  <Wrapper>
    <Text>Formidable Labs</Text>
  </Wrapper>
);

export default Footer;
