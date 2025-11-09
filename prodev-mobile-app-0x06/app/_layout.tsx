import { Stack } from "expo-router";
import { View } from 'react-native'
import "@/styles/global.css"; 

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen name="(home)" />
      <Stack.Screen name="(join)" />
      <Stack.Screen name="(signin)" />
    </Stack>
  );
}