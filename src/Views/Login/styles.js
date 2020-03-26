import styled from "styled-components";
import { Button, TextField, Paper } from '@material-ui/core';

export const Title = styled.h1`
  font-family: Yanone Kaffeesatz;
  font-size: 50px;
  margin: 20px;
`;

export const Card = styled.div`
  font-family: Yanone Kaffeesatz;
  padding: 10px;
  background: #fff;
  border-radius: 20px;
  min-height: 400px;
  width: 90%;
  margin: 50px auto;
`;

export const SendButton = styled(Button)`
  && {
    font-family: Yanone Kaffeesatz;
    background-color: #2cd923;
    color: #fff;
    border-radius: 20px;
    padding: 7px 14px;
    margin-left: 10px;
    margin: 20px;
  }
`;
export const MyInput = styled(TextField)`
  && {
    display: flex;
    padding: 0px;
    margin: 40px;
    width: 40%;
  }
`;


