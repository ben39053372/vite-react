import React from 'react';
import { Button } from '../../components/Button';
import { GrFacebook } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';
import { useTranslation } from 'react-i18next';

export const OtherActions = () => {
  const { t } = useTranslation();
  return (
    <div className="otherActions">
      <Button disabled>Register</Button>
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
