import axios from "axios"

import { loginType, signUpType } from "@/types/auth";
import { ApiResponse

 } from "@/types/responseType";

export const signUpApi = async (form: signUpType): Promise<ApiResponse<any>> => {
  try {
    const response = await axios.post<ApiResponse<any>>(
      'http://192.168.245.128:8080/api/auth/register',
      form,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Error during signup:', error);
    throw new Error(error.response?.data?.message || "Signup failed"); 
    
  }
};

export const loginApi = async (form: loginType): Promise<ApiResponse<any>> => {
  try {
    const response = await axios.post<ApiResponse<any>>(
      'http://192.168.245.128:8080/api/auth/login',
      form,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Error during signup:', error);
    throw new Error(error.response?.data?.message || "Signup failed"); 
    
  }
};
