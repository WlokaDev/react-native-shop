import { FC } from 'react'
import { MultipleFieldErrors } from 'react-hook-form'
import { InvalidMessage } from './InvalidMessage'
import { StyleSheet, View, ViewStyle } from 'react-native'

const ValidationMessages: FC<{
  messages: MultipleFieldErrors | undefined
  style?: ViewStyle
}> = ({ messages, style }) => {
  if (!messages) return null

  return (
    <View style={[validationMessagesStyles.container, style]}>
      {Object.entries(messages).map(([type, message]) => (
        <InvalidMessage message={message} key={type} />
      ))}
    </View>
  )
}

const validationMessagesStyles = StyleSheet.create({
  container: {
    rowGap: 4,
  },
})

export { ValidationMessages }
