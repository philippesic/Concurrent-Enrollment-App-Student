import useAuth from './auth/useAuth'
import useDatabase from './useDatabase' 
import { useFetchOnMount, useFetchOnChange} from './useOnEvent'
import useLocalStorage from 'use-local-storage';



export const Hooks =  {
  useDatabase,
  useAuth,
  useFetchOnMount,
  useFetchOnChange,
  useLocalStorage,
};
export default Hooks;