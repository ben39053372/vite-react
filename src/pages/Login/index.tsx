import './index.scss';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { Button } from '../../components/Button';

export const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="background">
      <div className="paper">
        <Label className="asd">{t('email')}</Label>
        <Input
          placeholder={t('place input', { somethings: t('email') })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="pt-2" />
        <Label>{t('password')}</Label>
        <Input
          placeholder={t('place input', { somethings: t('password') })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="actions">
          <Button>{t('Sign In')}</Button>
          <a className="textButton">{t('Forgot Password')}?</a>
        </div>
      </div>
    </div>
  );
};
