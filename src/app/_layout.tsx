import { Stack } from 'expo-router'
import { ThreadProvider } from '@/contexts/thread-context'

const RootLayout = () => {
  return (
    <ThreadProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThreadProvider>
  )
}

export default RootLayout
