import { Dimensions, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input } from '@/components'
import { ScreenProps } from '../../types'

const ScreenTwo = ({ handleNext }: Readonly<ScreenProps>) => {
  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get('screen').width,
      }}
    >
      <View
        style={{
          flex: 4 / 3,
          backgroundColor: '#FFA451',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 50,
        }}
      >
        <Image
          source={require('@/assets/images/onboarding/screen_two.png')}
          style={{
            width: 300,
            height: 260,
          }}
        />
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            paddingVertical: 50,
            paddingHorizontal: 24,
            rowGap: 40,
          }}
        >
          <View
            style={{
              rowGap: 16,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 500,
                color: '#27214D',
              }}
            >
              What is your firstname?
            </Text>
            <Input placeholder={'Enter firstname'} />
          </View>
          <Button onPress={handleNext} color={'secondary'}>
            Start ordering
          </Button>
        </View>
      </SafeAreaView>
    </View>
  )
}

export { ScreenTwo }
