import { Pressable, Text, TextStyle, ViewStyle } from 'react-native'
import { ButtonInterface } from '@/components'
import { useThemeStyles } from '@/theme'

const Button = ({
  variant = 'solid',
  radius = 'sm',
  fontSize = 'sm',
  color = 'primary',
  size = 'lg',
  children,
  styles,
  ...props
}: Readonly<ButtonInterface>) => {
  const buttonStyle = useThemeStyles<ViewStyle>(
    { variant, color, radius, size },
    styles?.button,
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
