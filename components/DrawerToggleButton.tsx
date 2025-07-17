import { useNavigation } from 'expo-router'
import { Pressable } from 'react-native'
import { DrawerActions } from '@react-navigation/native'
import { IconMenu } from '@tabler/icons-react-native'

const DrawerToggleButton = () => {
  const { dispatch } = useNavigation()

  return (
    <Pressable onPress={() => dispatch(DrawerActions.openDrawer())}>
      <IconMenu />
    </Pressable>
  )
}

export { DrawerToggleButton }
