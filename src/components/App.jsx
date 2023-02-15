import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { LogInForm } from './LogInForm/LogInForm';
import { Toaster } from 'react-hot-toast';

export const App = () => {
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
