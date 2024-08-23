import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { ILogin } from "../../pages/Login";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// isError, isLoading, isSuccess, message
interface JwtPayload {
  id: string;
  email: string;
}

type FetchResponse<T> = {
  success: boolean;
  message?: string;
  user: T;
}
type TUser = {
  id: string | undefined;
  name: string;
  email: string;
  token: string;
};

type Initial_User = {
  user: TUser;
//   token: string | null;
  login: (data: ILogin) => void;
  logout: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  payloadToken: JwtPayload | null;
};
const initial_value_user = {
    id: "",
    name: "",
    email: "",
    token: ""
}

// ===== PROVIDER COMPONENT start
export const UserContext = createContext<Initial_User | undefined>(undefined);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  // const [name, setName] = useState("");
  const [user, setUser] = useState<TUser>(initial_value_user);
  const [payloadToken, setPayloadToken] = useState<JwtPayload | null>(null);

//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [newToken, setNewToken] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const login = async (data: ILogin) => {
    setLoading(true);
    try {
      const response = await axios.post<FetchResponse<TUser>>(
        "http://localhost:8000/api/users/login",
        data
      );
      const res = await response.data;
      if (!res.success) {
        setErrorMessage(res.message || '');
      } else {
        setUser(res.user);
        // setToken(res.token);
        // localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("token", res.user.token);
        navigate("/");
        setSuccess(true);
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
      setLoading(false);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    // setToken("");
    setUser(initial_value_user);
    localStorage.removeItem("token");
    navigate("/login");
  };
  //=============
  //  JWT DECODE 
  useEffect(() => {

    const {pathname} = location;
    if(!token){
    if (!token && pathname === '/register') {
      navigate('/register')
    } else if (!token && pathname === '/login') {
      navigate('/login')
      return;
    } else {
      navigate('/login');
    }
    return
  }
    try {
      const mytoken = jwtDecode<JwtPayload>(token);
      console.log(mytoken)
      // if (!mytoken.email) {
      //   return navigate('/login');
      // }
      setPayloadToken(mytoken)
    } catch (error: any) {
      console.log(error)
      localStorage.removeItem('token')
      navigate('/login');
    }
  }, [token, navigate])

  const value = {
    // name,
    user,
    // setName,
    // token,
    login,
    logout,
    isLoading,
    isSuccess,
    errorMessage,
    setErrorMessage,
    payloadToken
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
// ======== PROVIDER COMPONENT end

// CONSUMER
// Custom hook to use the context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

// useContext = React hook for sharing state
//
// Provider Component
// 1. import create context
// 2 export const myContext = createContext();
// 3.<MyContext.Provider value={value}> { children } </MyContext.Provider>

// Consumer Component
// 1. import useContext from 'react;
//    import {MyContext} from '..//..//'
// 2. const value = useContext(MyContext);
