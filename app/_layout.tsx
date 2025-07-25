import { useFonts } from 'expo-font'
import { router, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageKeyEnum } from '@/enums'
import { ThemeProvider } from '@/theme'
import ToastManager from 'toastify-react-native'

void SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false)
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })
  
  useEffect(() => {
    const prepare = async () => {
      try {
        if (!loaded) return

        const isFirstLaunch = await AsyncStorage.getItem(
          AsyncStorageKeyEnum.IS_FIRST_LAUNCH,
        )

        if (isFirstLaunch === null) {
          await AsyncStorage.setItem(
            AsyncStorageKeyEnum.IS_FIRST_LAUNCH,
            'true',
          )

          router.replace('/onboarding')
        }

        setIsReady(true)
        await SplashScreen.hideAsync()
      } catch (error) {
        console.log(error)
      }
    }

    void prepare()
  }, [loaded])

  if (!isReady) {
    // Async font loading only occurs in development.
    return null
  }

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name={'onboarding'} options={{ headerShown: false }} />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      <ToastManager />
    </ThemeProvider>
  )
}
