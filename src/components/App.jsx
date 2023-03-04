import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { themeLight, themeDark } from 'constants/theme';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { userRefresh } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import { selectCurrentTheme } from 'redux/theme/selectors';
import { GlobalStyle } from './App.styled';
import { Container } from './Container/Container';
import { Layout } from './Layout/Layout';
import { Skeleton } from './Skeleton/Skeleton';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const ContactDetailsPage = lazy(() => import('pages/ContactDetailsPage'));
const NewContactPage = lazy(() => import('pages/NewContactPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));

export const App = () => {
  const themeShouldBeDark = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeShouldBeDark ? themeDark : themeLight}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Container>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    element={<SignUpPage />}
                  />
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    element={<SignInPage />}
                  />
                }
              />

              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectTo="/" element={<ContactsPage />} />
                }
              />
              <Route
                path="contacts/:id/:name/:number"
                element={<ContactDetailsPage />}
              />
              <Route path="contacts/new" element={<NewContactPage />} />
            </Route>
          </Routes>
        </Container>
      )}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        theme={themeShouldBeDark ? 'dark' : 'light'}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
};
