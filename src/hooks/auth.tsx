import React,
{
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
}
from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { SCOPE } = process.env;
const { CDN_IMAGE } = process.env;
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

import api from '../services/api';
import { COLLECTION_USER, COLLECTION_APPOINTMENTS} from '../configs/storage'

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContext = {
  user: User;
  loading: boolean;
  singOut: () => Promise<void>;
  signIn: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}

export const AuthContext = createContext({} as AuthContext);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser]= useState<User>({} as User);
  const [loading, setLoading]= useState(false);

  async function signIn(){
    try {
      setLoading(true);
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { type, params } = await AuthSession
      .startAsync({ authUrl }) as AuthorizationResponse
      
      if (type === 'success' && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');

        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token
        }
        
        await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));

        setUser(userData);
        setLoading(false);
      }
    } catch {
      throw new Error('Não foi possível autenticar');

    } finally {
      setLoading(false);
    }
  }

  async function singOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(COLLECTION_USER);
  }

  async function loadStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USER);

    if(storage) {
      const userLogged = JSON.parse(storage) as User;
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
      setUser(userLogged)
    }
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, singOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
 const context = useContext(AuthContext);
 
 return context;
}

export {
  AuthProvider,
  useAuth,
}