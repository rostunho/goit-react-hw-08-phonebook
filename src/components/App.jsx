import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HomePage } from 'pages/HomePage';
import { Layout } from './Layout/Layout';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { LogInForm } from './LogInForm/LogInForm';
import { Toaster } from 'react-hot-toast';
import { userRefresh } from 'redux/auth/operations';
import { ContactsPage } from 'pages/ContactsPage';
import { ContactDetailsPage } from 'pages/ContactDetailsPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<SignUpForm />} />
          <Route path="login" element={<LogInForm />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route
            path="contacts/:id/:name/:number"
            element={<ContactDetailsPage />}
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
