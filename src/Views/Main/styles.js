import styled from "styled-components";
import { Button, TextField, Paper } from "@material-ui/core";

export const Title = styled.h1`
  color: #004d39;
  font-size: 50px;
  margin: 20px;
`;

export const Card = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  min-height: 400px;
  width: 90%;
  margin: 50px auto;
  color: #00cc99;
`;

export const SendButton = styled(Button)`
  && {
    background-color: #2cd923;
    color: #fff;
    border-radius: 20px;
    padding: 7px 14px;
    margin-left: 10px;
    margin: 20px;
  }
`;

export const Nome = styled.span`
  display: flex;
  color: black;
  font-size: 20px;
  padding: 0px;
  margin: 15px;
`;

export const Content = styled.span`
  display: flex;
  font-size: 15px;
  padding: 0px;
  margin: 15px;
  color: #00cc99;
`;

export const DeleteButton = styled(Button)`
  && {
    background-color: red;
    color: white;
    margin-right: 0px;
    margin-left: 5px;
    border-radius: 20px;
    float: right;
  }
`;

export const LogoutButton = styled(Button)`
  && {
    font-size: 20px;
    color: white;
    background-color: black;
    padding: 7px;
    margin: 7px;
    border-radius: 20px;
    float: right;
  }
`;

export const CloseButton = styled(Button)`
  && {
    background-color: red;
    color: white;
    margin-right: 0px;
    margin-left: 5px;
    border-radius: 20px;
  }
`;

export const MyInput = styled(TextField)`
  && {
    padding: 0px;
    margin: 20px;
  }
`;

export const PaperNome = styled(Paper)`
  && {
    display: inline-block;
    padding: 20px 10px;
    background: #fff;
    border-radius: 20px;
    min-height: 20px;
    width: 22%;
    margin: 7px;
  }
`;
