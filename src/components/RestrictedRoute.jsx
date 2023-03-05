import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import PropTypes from 'prop-types';

export function RestrictedRoute({ element: Component, redirectTo = '/' }) {
  const { isLoggedIn, isLoading } = useAuth();
  const shouldRedirect = isLoggedIn && !isLoading;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

RestrictedRoute.propTypes = {
  element: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
