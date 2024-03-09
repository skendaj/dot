import { Redirect } from 'expo-router';
import { useAuth0 } from 'react-native-auth0';
import { Spinner } from 'tamagui';

export const App = () => {
  const { authorize, user, isLoading } = useAuth0();
  console.log('user: ', user);

  if (isLoading) {
    return <Spinner />;
  }

  if (user) {
    return <Redirect href="/explore" />;
  }
  return <Redirect href="/signin" />;
};

export default App;
