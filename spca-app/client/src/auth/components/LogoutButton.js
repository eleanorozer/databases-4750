import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { button } from 'react-validation/build/button';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block"
      style={{width: "100px"}}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

// const LogoutButton = () => {
//     const { logout, isAuthenticated } = useAuth0
//     return (
//         <button
//             className="btn btn-danger btn-block"
//             style={{width: "100px"}}
//             onClick={() =>
//                 logout({
//                     returnTo: window.location.origin,
//                 })
//             }
//         >
//             Log Out
//         </button>   
//     );
// };

export default LogoutButton;