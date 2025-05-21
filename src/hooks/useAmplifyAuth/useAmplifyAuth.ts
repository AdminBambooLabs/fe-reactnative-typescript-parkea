import { Auth } from '@aws-amplify/auth';

function useAmplifyAuth() {
  const signup = async (email: string, password: string) => {
    try {
      const result = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
      });

      return result;
    } catch (error) {
      console.log('Error signing up:', error);
      return null;
    }
  };

  const confirmSignUp = async (username: string, confirmationCode: string) => {
    try {
      const result = await Auth.confirmSignUp(username, confirmationCode);

      return result;
    } catch (error) {
      console.log('Error confirming sign up:', error);
      return null;
    }
  };

  const resendCode = async (username: string) => {
    try {
      const result = await Auth.resendSignUp(username);

      return result;
    } catch (error) {
      console.log('Error resending code:', error);
      return null;
    }
  };

  const signIn = async (username: string, password: string) => {
    console.log('[username]', username);
    console.log('[password]', password);

    try {
      const result = await Auth.signIn({
        username,
        password,
      });

      console.log('[signIn]', result);
      return result;
    } catch (error) {
      console.log('Error signing in:', error);
      return null;
    }
  };

  return {
    signup,
    confirmSignUp,
    resendCode,
    signIn,
  };
}

export default useAmplifyAuth;
