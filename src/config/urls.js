export const API_BASE_URL = "http://192.168.100.101:8001/api";

export  const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN_API = getApiUrl('/userlogin');
export const SIGNUP_API = getApiUrl('/signup');