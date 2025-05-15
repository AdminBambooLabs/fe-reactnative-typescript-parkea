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

      console.log('[result]', result);
      return result;
    } catch (error) {
      console.log('Error signing up:', error);
      return null;
    }
  };

  const resendCode = async (username: string) => {
    try {
      const result = await Auth.resendSignUp(username);

      console.log('[result]', result);
      return result;
    } catch (error) {
      console.log('Error signing up:', error);
      return null;
    }
  };

  return {
    signup,
    confirmSignUp,
    resendCode,
  };
}

export default useAmplifyAuth;
