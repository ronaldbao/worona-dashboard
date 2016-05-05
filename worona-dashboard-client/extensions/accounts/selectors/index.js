export const isLoggedIn = state => state.accounts.isLoggedIn;
export const isLoggingIn = state => state.accounts.isLoggingIn;
export const loginStatus = state => state.accounts.loginStatus;
export const loginError = state => state.accounts.loginError;
export const isLoggingOut = state => state.accounts.isLoggingOut;
export const isCreatingAccount = state => state.accounts.isCreatingAccount;
export const createAccountStatus = state => state.accounts.createAccountStatus;
export const createAccountError = state => state.accounts.createAccountError;
export const isFirstLogin = state => state.accounts.isFirstLogin;

export { isConnected } from '../dependencies';
