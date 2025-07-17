import { TextInterface } from './Text.types'
import { Text as BaseText, TextStyle } from 'react-native'
import { useThemeStyles } from '@/theme'

const Text = ({
  fontSize = 'md',
  fontWeight = 400,
  color = 'text',
  style,
  ...rest
}: Readonly<TextInterface>) => {
  const textStyle = useThemeStyles<TextStyle>(
    { fontSize },
    {
      fontWeight,
      ...style,
    },
  )

  return <BaseText style={textStyle} {...rest} />
}

export { Text }
