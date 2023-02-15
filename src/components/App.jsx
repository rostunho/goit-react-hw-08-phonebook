import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRefresh } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { LogInForm } from './LogInForm/LogInForm';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<SignUpForm />} />
          <Route path="login" element={<LogInForm />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
