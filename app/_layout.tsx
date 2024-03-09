import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { useFonts } from 'expo-font';
import config from '../tamagui.config';
import { Auth0Provider } from 'react-native-auth0';
import authConfig from '../auth0-configuration';
import { useURL } from 'expo-linking';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootNavigator = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        gestureDirection: 'horizontal',
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="(auth)"
        // options={{
        //   presentation: 'transparentModal',
        //   animation: 'slide_from_bottom',
        //   header: () => null,
        // }}
      />
      <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
    </Stack>
  );
};

const Layout = () => {
  return (
    <Auth0Provider domain={authConfig.domain} clientId={authConfig.clientId}>
      <SafeAreaProvider>
        <TamaguiProvider config={config}>
          <RootNavigator />
        </TamaguiProvider>
      </SafeAreaProvider>
    </Auth0Provider>
  );
};

export default Layout;
