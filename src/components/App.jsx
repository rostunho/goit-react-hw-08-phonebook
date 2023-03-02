import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from 'constants/theme';
import { GlobalStyle } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { userRefresh } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import { selectCurrentTheme } from 'redux/theme/selectors';
import { HomePage } from 'pages/HomePage';
import { ContactsPage } from 'pages/ContactsPage';
import { ContactDetailsPage } from 'pages/ContactDetailsPage';
import { NewContactPage } from 'pages/NewContactPage';
import { SignUpPage } from 'pages/SignUpPage';
import { SignInPage } from 'pages/SignInPage';
import { Container } from './Container/Container';
import { Layout } from './Layout/Layout';
// import { SignUpForm } from './SignUpForm/SignUpForm';
// import { LogInForm } from './LogInForm/LogInForm';
// import { NewContactForm } from './NewContactForm/NewContactForm';

export const App = () => {
  const themeShouldBeDark = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeShouldBeDark ? themeDark : themeLight}>
      {!isLoading && (
        <Container>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="register" element={<SignUpPage />} />
              <Route path="login" element={<SignInPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route
                path="contacts/:id/:name/:number"
                element={<ContactDetailsPage />}
              />
              <Route path="contacts/new" element={<NewContactPage />} />
            </Route>
          </Routes>
        </Container>
      )}
      <Toaster />
      <GlobalStyle />
    </ThemeProvider>
  );
};
