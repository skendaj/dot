import { useRouter } from 'expo-router';
import { Alert, TouchableOpacity } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import WebView from 'react-native-webview';
import { Button, Spinner, Text, View } from 'tamagui';
import { routerPaths } from '~/constants/router';

export const SignInScreen = () => {
  const { authorize, clearSession, user, getCredentials, error, isLoading } = useAuth0();
  const router = useRouter();
  const onLogin = async () => {
    try {
      await authorize({}, {});
      console.log('user@SignIn: ', user);
    } catch (error) {
      console.log('error: ', error);
    } finally {
      const credentials = await getCredentials();
      console.log('credentials: ', credentials);
      if (credentials && credentials.accessToken) {
        console.log('here');
        router.replace(routerPaths.explore);
      }
    }
  };

  console.log(authorize, clearSession, user, getCredentials, error, isLoading);

  // const loggedIn = user !== undefined && user !== null;
  // const onLogout = async () => {
  //   try {
  //     await clearSession();
  //     // .then(() => {
  //     //   router.replace(routerPaths.signin);
  //     //   console.log('Logged out');
  //     // });
  //   } catch (e) {
  //     console.log('Log out cancelled : ', e);
  //   }
  // };

  if (isLoading) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }
  console.log('error: ', error);
  return (
    <>
      <View>
        <TouchableOpacity onPress={onLogin}>
          <Text color="$blue10Dark">Log In</Text>
        </TouchableOpacity>
      </View>
      <WebView
        source={{
          uri: 'https://dev-2lh70xalcvsq5gun.us.auth0.com/u/login?state=hKFo2SAzWW5VODFLZkdIbi1JWGFySHN3ME9SSVNXZV9nQy03TaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGVMcExjNWRETzFzX1htYTJJaE1OUVBiTDNoTnNHZkVCo2NpZNkgNjZheENNV3B6SWpaWlh2M3dha2V1RE9vMFdLS0dvUUc',
        }}
        style={{ flex: 1, padding: 0 }}
      />
    </>

    //   <View>
    //   <Text> Auth0Sample - Login </Text>
    //   {user && <Text>You are logged in as {user.name}</Text>}
    //   {!user && <Text>You are not logged in</Text>}
    //   <TouchableOpacity onPress={loggedIn ? onLogout : onLogin}>
    //     <Text color="$blue10Dark">{loggedIn ? 'Log Out' : 'Log In'}</Text>
    //   </TouchableOpacity>
    //   {error && <Text color="$red6Light">{error.message}</Text>}
    //   {/* <TouchableOpacity onPress={() => router.push('/signup')}>
    //     <Text color="$blue10Dark">Sign up</Text>
    //   </TouchableOpacity> */}
    // </View>
  );
};
