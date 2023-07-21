import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs
      safeAreaInsets={{ bottom: 10 }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="profile" options={{ title: 'Perfil' }} />
    </Tabs>
  )
}

export default TabsLayout
