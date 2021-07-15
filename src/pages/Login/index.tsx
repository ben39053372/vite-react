import './index.scss';
import React from 'react';
import { LoginForm } from './LoginForm';
import { Button } from '../../components/Button';

export const Login = () => {
  return (
    <div className="background">
      <div className="paper">
        <h1 className="text-4xl text-center pb-4">Login</h1>
        <LoginForm />
        <hr />
        <div className="otherActions">
          <Button disabled>Register</Button>
          <Button disabled>Google</Button>
          <Button disabled>Facebook</Button>
        </div>
      </div>
    </div>
  );
};
