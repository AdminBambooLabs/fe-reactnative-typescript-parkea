import { Amplify } from '@aws-amplify/core';

Amplify.configure({
  Auth: {
    region: 'us-east-2',
    userPoolId: 'us-east-2_mSUVcJff4',
    userPoolWebClientId: '43hl1puu9ja9jvutg4umjl2jnm',
  },
});
