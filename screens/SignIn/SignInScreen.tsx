import { useRouter } from 'expo-router';
import { Alert, TouchableOpacity } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { Button, Spinner, Text, View } from 'tamagui';
import { routerPaths } from '~/constants/router';

export const SignInScreen = () => {
  const { authorize, clearSession, user, getCredentials, error, isLoading } = useAuth0();
  const router = useRouter();
  const onLogin = async () => {
    try {
      await authorize({}, {});
      console.log('credentials: ', credentials);
      console.log('user@SignIn: ', user);
    } catch (error) {
      console.log('error: ', error);
    } finally {
      const credentials = await getCredentials();
      if (credentials && credentials.accessToken) {
        console.log('here');
        router.replace(routerPaths.explore);
      }
    }
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      await clearSession();
      // .then(() => {
      //   router.replace(routerPaths.signin);
      //   console.log('Logged out');
      // });
    } catch (e) {
      console.log('Log out cancelled : ', e);
    }
  };

  if (isLoading) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }

  // const onPress = async () => {
  //   try {
  //     await authorize();
  //   } catch (error) {
  //     console.log('error: ', error);
  //   }
  // };
  console.log('error: ', error);
  return (
    <View>
      <Text> Auth0Sample - Login </Text>
      {user && <Text>You are logged in as {user.name}</Text>}
      {!user && <Text>You are not logged in</Text>}
      {/* <Button onPress={loggedIn ? onLogout : onLogin} title={loggedIn ? 'Log Out' : 'Log In'} /> */}
      <TouchableOpacity onPress={loggedIn ? onLogout : onLogin}>
        <Text color="$blue10Dark">{loggedIn ? 'Log Out' : 'Log In'}</Text>
      </TouchableOpacity>
      {error && <Text color="$red6Light">{error.message}</Text>}

      {/* <TouchableOpacity onPress={() => router.push('/signup')}>
        <Text color="$blue10Dark">Sign up</Text>
      </TouchableOpacity> */}
    </View>
  );
};
