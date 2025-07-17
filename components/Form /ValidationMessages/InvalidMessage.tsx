import { FC } from 'react'
import { ValidateResult } from 'react-hook-form'
import { StyleSheet, Text, View } from 'react-native'
import { themeConfig } from '@/theme/themeConfig'
import { IconAlertCircle } from '@tabler/icons-react-native'

const InvalidMessage: FC<{
  message: string | ValidateResult
}> = ({ message }) => {
  return (
    <View style={styles.container}>
      <IconAlertCircle size={20} color={themeConfig.colors.danger.DEFAULT} />
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    columnGap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: themeConfig.colors.danger.DEFAULT,
  },
})

export { InvalidMessage }
