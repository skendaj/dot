import React, { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import config from '../tamagui.config';
import { Auth0Provider } from 'react-native-auth0';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    mon: require('../assets/fonts/MontserratRegular.ttf'),
    'mon-b': require('../assets/fonts/MontserratBold.ttf'),
    'mon-sb': require('../assets/fonts/MontserratSemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Auth0Provider domain="com.brunoskendaj.dot" clientId="66axCMWpzIjZZXv3wakeuDOo0WKKGoQG">
      <TamaguiProvider config={config}>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: true }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </TamaguiProvider>
    </Auth0Provider>
  );
}
