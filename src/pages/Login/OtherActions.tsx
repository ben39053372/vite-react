import React from 'react';
import { Button } from '../../components/Button';
import { GrFacebook } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export const OtherActions = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleSignUpClick = () => {
    history.push('/signUp');
  };

  return (
    <div className="otherActions">
      <Button onClick={handleSignUpClick}>Register</Button>
      <Button className="google" disabled>
        <FcGoogle size={18} className="mr-2" />
        {t('Login with', { service: t('Google') })}
      </Button>
      <Button className="facebook" disabled>
        <GrFacebook size={18} className="mr-2" />
        {t('Login with', { service: t('Facebook') })}
      </Button>
    </div>
  );
};
