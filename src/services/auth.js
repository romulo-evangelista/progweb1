export const TOKEN_KEY = "";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const createSession = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const deleteSession = () => {
  localStorage.removeItem(TOKEN_KEY);
};