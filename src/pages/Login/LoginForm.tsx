import React from 'react';
import { useFormik } from 'formik';
import i18next from 'i18next';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

const validate = (values: LoginFormValues) => {
  const errors: Partial<LoginFormValues> = {};

  // email
  const emailFormat =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailFormat.test(values.email)) {
    errors.email = i18next.t('Invalid email address');
  }

  // password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = i18next.t('Must be characters or more', { length: 8 });
  }

  return errors;
};

export const LoginForm = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const loginForm = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSignInClick = () => {
    history.push('/');
  };

  return (
    <form onSubmit={loginForm.handleSubmit}>
      <Label>{t('email')}</Label>
      <Input
        id="email"
        type="email"
        placeholder={t('place input', { somethings: t('email') })}
        {...loginForm.getFieldProps('email')}
      />

      {/* error message */}
      {loginForm.touched.email && (
        <div className="error">{loginForm.errors.email}</div>
      )}

      <div className="pt-2" />

      <Label>{t('password')}</Label>
      <Input
        id="password"
        type="password"
        placeholder={t('place input', { somethings: t('password') })}
        {...loginForm.getFieldProps('password')}
      />

      {/* error message */}
      {loginForm.touched.password && (
        <div className="error">{loginForm.errors.password}</div>
      )}

      <div className="actions">
        <a className="textButton">{t('Forgot Password')}?</a>
        <Button onClick={handleSignInClick} type="submit">
          {t('Sign In')}
        </Button>
      </div>
    </form>
  );
};
