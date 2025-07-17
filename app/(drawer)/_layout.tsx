import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'
import { IconHome, IconShoppingCart } from '@tabler/icons-react-native'

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#FFF2E7',
          drawerActiveTintColor: '#F08626',
          drawerItemStyle: {
            borderRadius: 16,
          },
        }}
        detachInactiveScreens
      >
        <Drawer.Screen
          options={(props) => ({
            title: 'Home',
            drawerIcon: ({ color }) => <IconHome size={16} color={color} />,
            drawerLabel: 'Home',
            ...props,
          })}
          name={'index'}
        />
        <Drawer.Screen
          options={(props) => ({
            title: 'Cart',
            drawerIcon: ({ color }) => (
              <IconShoppingCart size={16} color={color} />
            ),
            drawerLabel: 'Cart',
            ...props,
          })}
          name={'cart'}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
