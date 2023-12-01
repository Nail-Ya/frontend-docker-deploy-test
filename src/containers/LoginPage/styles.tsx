import React from 'react';
import styled from "styled-components/macro";
import Button from 'components/Button';
import SInput from 'components/Input';

export const Input = styled(SInput).attrs(props => ({
  labelStyle: {
    minWidth: '100px',
    marginTop: '10px',
  },
  inputStyle: {
    width: '100%',
    background: '#FFFFFF'
  },
  inputWrapperStyle: {
    maxWidth: '448px',
    height: '36px',
    background: '#FFFFFF'
  },
}))`
  margin-top: 20px;
  margin-bottom: 0;
`;

export const ActionButton = styled(Button)`
  width: 100%;
  height: 48px;
  margin-top: 30px;
  border-radius: 90px;
  font-size: 16px;
  font-weight: 700;

  ${props => props.disabled
  ? `
      background: #E3E3E3;
      color: #FFFFFF;
   `
  : `display: flex;`}
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: -webkit-linear-gradient(bottom, #b73434, #ffffff);
`;


export const Title = styled.span`
  width: 95%;
  color: #000000;
  margin: 10px auto 0 auto;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 424px;
  background: #FFFFFF;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 8px;
  margin: 15px auto 0 auto;
`;

export const Icon = styled.img`
  width: 130px;
  height: 130px;
  margin: 80px auto 0 auto;
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;
