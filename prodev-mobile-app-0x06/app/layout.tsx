import { Stack } from "expo-router";
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="(home)" />
      <Stack.Screen name="(join)" />
      <Stack.Screen name="(signin)" />
    </Stack>
  );
}