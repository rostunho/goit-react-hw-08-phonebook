import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export function PrivateRoute({ element: Component, redirectTo = '/' }) {
  const { isLoggedIn, isLoading } = useAuth();
  const shouldRedirect = !isLoggedIn && !isLoading;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
