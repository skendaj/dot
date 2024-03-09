import { Stack } from 'expo-router';

// import { AppHeader } from '@mobile-ui/components';

const AuthNavigator = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
          paddingHorizontal: 16,
          paddingVertical: 20,
        },
      }}>
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
    </Stack>
  );
};

const Layout = () => {
  return (
    <>
      {/* <AppHeader /> */}
      <AuthNavigator />
    </>
  );
};

export default Layout;
