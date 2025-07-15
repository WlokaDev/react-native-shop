import { Pressable, Text, TextStyle, ViewStyle } from 'react-native'
import { ButtonInterface } from '@/components'
import { useThemeStyles } from '@/theme'

const Button = ({
  variant = 'solid',
  radius = 'lg',
  fontSize = 'sm',
  color = 'primary',
  size = 'lg',
  isDisabled = false,
  children,
  styles,
  ...props
}: Readonly<ButtonInterface>) => {
  const buttonStyle = useThemeStyles<ViewStyle>(
    { variant, color, radius, size, isDisabled },
    {
      alignItems: 'center',
      ...styles?.button,
    },
  )
  const textStyle = useThemeStyles<TextStyle>(
    { fontSize, backgroundColor: color, size },
    {
      fontWeight: '500',
      ...styles?.text,
    },
  )

  return (
    <Pressable style={buttonStyle} {...props}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  )
}

export { Button }
