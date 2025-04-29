import { useEffect } from "react";
import Toast, { BaseToast, ErrorToast, SuccessToast } from 'react-native-toast-message';
import { Stack } from "expo-router";
import "./global.css"
// Toast configuration
const toastConfig = {
  success: (props: any) => (
    <SuccessToast
      {...props}
      // --- CHANGE THESE COLORS ---
      style={{ backgroundColor: '#4CAF50', borderLeftColor: '#4CAF50' }} // Use a green color
      // --- END CHANGE ---
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF', // White text should be fine on green
      }}
      text2Style={{
        fontSize: 14,
        color: '#FFF', // White text should be fine on green
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      // This part was already correct for red
      style={{ backgroundColor: '#d32f2f', borderLeftColor: '#d32f2f' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
      }}
      text2Style={{
        fontSize: 14,
        color: '#FFF',
      }}
    />
  ),
};

// --- The rest of your _layout.tsx file remains the same ---

// export const unstable_settings = { ... };

export default function RootLayout() {
  useEffect(() => {
    console.log('RootLayout rendered');
    Toast.show({
      type: 'error', // This will now use your green style
      text1: 'Welcome',
      text2: 'Sign up to get started!',
      autoHide: true,
      visibilityTime: 3000,
    });

  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ title: 'Sign Up', headerShown: false }} />
        <Stack.Screen name="login" options={{ title: 'Login', headerShown: false }} />
      </Stack>
      <Toast config={toastConfig} />
    </>
  );
}