// import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { logIn } from 'redux/auth/operations';
// import { useAuth } from 'hooks/useAuth'; // CLEAR LATER

// export function LogInForm() {
//   const { isLoggedIn } = useAuth(); //CLEAR LATER
//   const dispatch = useDispatch();

//   const onLogIn = event => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );

//     form.reset();
//   };

//   if (isLoggedIn) {
//     return <Navigate to="/contacts" />;
//   } // CLEAR LATER

//   return (
//     <form onSubmit={onLogIn}>
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//   );
// }
