import { useReducer, useEffect } from "react";
import AuthContext from "./AuthContext";

// ACTION TYPES
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// REDUCER FUNCTION - ACTION HANDLER
function reducer( state, action ) {
  //console.log("Auth reducer received: " + action.type);
  switch (action.type) {
    case 'LOGIN':
      return { 
        ...state,
        user: action.payload
      }
    case 'LOGOUT':
      return { 
        ...state,
        user: null
      }
    default:
      return state;
  }
};

function AuthState ({database, children}) {
  const [state, dispatch] = useReducer(reducer, {user: null, database});

  const dispatchers = {
    login: (user) => {
      dispatch({
        type: LOGIN,
        payload: user,
      });
    },
    logout: () => {
      dispatch({
        type: LOGOUT,
        payload: {}
      });
    },
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('_user'))
    if (user) {
      dispatchers.login(user);
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{...state, ...dispatchers}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;

