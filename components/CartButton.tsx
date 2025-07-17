import { Pressable, StyleSheet, Text, TextStyle } from 'react-native'
import { router } from 'expo-router'
import { IconShoppingCart } from '@tabler/icons-react-native'
import { themeConfig, useThemeStyles } from '@/theme'

const CartButton = () => {
  const textStyle = useThemeStyles<TextStyle>(
    {
      fontSize: 'xs',
    },
    {
      fontWeight: 500,
    },
  )

  return (
    <Pressable
      style={styles.button}
      onPress={() => router.push('/(drawer)/cart')}
    >
      <IconShoppingCart color={themeConfig.colors.secondary.DEFAULT} />
      <Text style={textStyle}>My Cart</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    rowGap: 2,
    alignItems: 'center',
  },
})

export { CartButton }
