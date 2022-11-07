import { AuthContext } from "./AuthContext"
import { useContext, useState } from "react"

import {post} from '../useGetPost'
const SERVER_URL='https://backend.leonyoung.repl.co/api/auth2';
const LOCAL_USER_KEY = '_user'

export const useAuth = () => {
  const [error, setError] = useState();
  const context = useContext(AuthContext);
  const user = context.user;

  if(!context) {
    throw Error('useAuth must be used inside an AuthState')
  }

  async function send(url, body) {
    console.log(context.database)
    setError(null);
    if(!body) body = {};
    body.database = context.database;
    const [data, err] = await post(url, body);
    if (err) {
      setError(err);
      return null;
    }
    return data;
  }

  async function signup(email, password) {
    const url = SERVER_URL + "/signup";
    const body = {email, password}
    const user = await send(url, body);

    if (user) {
      // save the user to local storage
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user))
      context.login(user)
    }
    return user
  }
  
  async function login(email, password) {
    const url = SERVER_URL + "/login";
    const body = {email, password}
    const user = await send(url, body);
    if (user) {
      // save the user to local storage
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user))
      context.login(user)
    }
    return user
  }

  const logout = () => {
    // remove user from storage
    localStorage.removeItem(LOCAL_USER_KEY)

    // dispatch logout action
    context.logout()
  }

  return {signup, login, logout, error, user}
}

export default useAuth;