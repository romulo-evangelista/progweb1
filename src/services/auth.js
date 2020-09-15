// Token
export const TOKEN_KEY = "";
export const isAuthenticated = () => localStorage.getItem("TOKEN_KEY") !== null;
export const getToken = () => localStorage.getItem("TOKEN_KEY");

// User Type
export const USER_TYPE = "";
export const isAuthorized = () => localStorage.getItem("USER_TYPE") === 'admin';
export const getUserType = () => localStorage.getItem("USER_TYPE");

// Session
export const createSession = (token, userType) => {
  localStorage.setItem("TOKEN_KEY", token);
  localStorage.setItem("USER_TYPE", userType)
};
export const deleteSession = () => {
  localStorage.removeItem("TOKEN_KEY");
  localStorage.removeItem("USER_TYPE");
};