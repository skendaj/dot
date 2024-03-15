import { router, useRouter } from 'expo-router';
import { useAuth0 } from 'react-native-auth0';
import { YStack } from 'tamagui';
import { Avatar, XStack } from 'tamagui';
import { Button, Image, Text, View } from 'tamagui';
import { routerPaths } from '~/constants/router';

export const ProfileScreen = () => {
  const router = useRouter();
  const { authorize, clearSession, user, getCredentials, error, isLoading } = useAuth0();
  console.log('user: ', user);
  const onLogout = async () => {
    try {
      await clearSession().then(() => {
        router.replace(routerPaths.signin);
        console.log('Logged out');
      });
    } catch (e) {
      console.log('Log out cancelled : ', e);
    }
  };
  return (
    <View>
      <XStack>
        <Avatar circular size="$6">
          <Avatar.Image src={user?.picture} />
          <Avatar.Fallback bc="gray" />
        </Avatar>
        <YStack>
          <Text>Name : {user?.name}</Text>
          <Text>Nickname : {user?.nickname}</Text>
        </YStack>
      </XStack>
      {/* <Image
        source={{
          uri: user?.picture,
          width: 200,
          height: 300,
        }} */}
      {/* /> */}

      <Button onPress={onLogout}>Log out</Button>
    </View>
  );
};
