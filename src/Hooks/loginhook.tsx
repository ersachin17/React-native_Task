import { useState } from "react";
import axios from "axios";

const useLogin = () => {

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  const loginUser = async(username,password)=>{

    setLoading(true);
    setError(null);

    try{

      const res = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username,
          password
        }
      );

      setLoading(false);

      return res.data;

    }catch(err){

      setError("Invalid username or password");
      setLoading(false);

      return null;
    }

  }

  return{
    loginUser,
    loading,
    error
  }

}

export default useLogin;
