import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../../store/modules/user/actions';

import { Title, Card, SendButton, MyInput } from './styles';

import api from '../../services/apiCards';

class Login extends Component {
  state = {
    login: '',
    password: '',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  handleInputChange = event => {
    const { target } = event;
    if (target.name === 'login') {
      this.setState({ login: target.value });
    } else {
      this.setState({ password: target.value });
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { login } = this.props;

    const response = await api
      .post('/login', {
        email: this.state.login,
        password: this.state.password,
      })
      .catch(function(error) {
        alert('Login inválido!');
      });
    if (response) {
      const { user, token } = response.data;
      user.token = token;
      login(user);
    }
  };

  render() {
    return (
      <>
        <Card>
          <center>
            <div className="forms">
              <ul>
                <Title>Login</Title>
                <form onSubmit={this.handleSubmit}>
                  <MyInput
                    label="Digite seu email:"
                    name="login"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                  <MyInput
                    label="Digite sua senha:"
                    name="password"
                    type="password"
                    onChange={this.handleInputChange}
                  />
                  <SendButton type="submit">Entrar</SendButton>
                </form>
              </ul>
            </div>
          </center>
        </Card>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(null, mapDispatchToProps)(Login);
