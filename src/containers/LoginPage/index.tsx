import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from "hooks/redux";
import * as Styled from './styles';
import { removeToken, setRefreshToken, setToken } from 'utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { login } from 'store/user/ActionCreators';
import { LoginOptions } from 'models/User';
import icon from "assets/images/icl_big.png";
import URLS from 'constants/urls';
import OpenedEyeIcon from 'assets/icons/OpenedEyeIcon';
import ClosedEyeIcon from 'assets/icons/ClosedEyeIcon';
import { setLoggedIn } from 'store/user/UserSlice';

const defaultLoginOptions: LoginOptions = {
  username: undefined,
  password: undefined,
}

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoginLoading } = useAppSelector(state => state.userReducer);
  const [loginOptions, setLoginOptions] = useState<LoginOptions>(defaultLoginOptions);
  const [passwordInputType, setPasswordInputType] = useState('password');

  const handleLogin = () => {
    removeToken();
    dispatch(login(loginOptions))
      // .unwrap()
      // .then((res) => {
      //   if (res) {
      //     navigate(URLS.MAIN);
      //     setToken(res['token'] as string);
      //     setRefreshToken(res['refresh_token'] as string);
      //   }
      // })
      dispatch(setLoggedIn(true))
      navigate(URLS.MAIN);
      setToken('token' as string);
      setRefreshToken('refresh_token' as string);
  }

  const changePasswordInputType = () => {
    setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password');
  }

  return (
    <Styled.Container>
      <Styled.Icon src={icon} />
      <Styled.Wrapper>
        <Styled.Title>Утилита миграции политик безопасности</Styled.Title>
        <Styled.Input
          label='Логин'
          value={loginOptions.username ?? ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginOptions({ ...loginOptions, username: e.target.value })}
          placeholder='Введите логин'
        />
        <Styled.Input
          label='Пароль'
          type={passwordInputType}
          value={loginOptions.password ?? ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginOptions({ ...loginOptions, password: e.target.value })}
          placeholder='Введите пароль'
          icon={
            <Styled.IconContainer>
              {
                passwordInputType === 'password'
                ? <ClosedEyeIcon onClick={changePasswordInputType} />
                : <OpenedEyeIcon onClick={changePasswordInputType} />
              }
            </Styled.IconContainer>
          }
        />
        <Styled.ActionButton
          disabled={!loginOptions?.username || !loginOptions?.password || isLoginLoading}
          primary
          onClick={handleLogin}
          loading={isLoginLoading}
        >
          Войти
        </Styled.ActionButton>
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default LoginPage;
