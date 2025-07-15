import { Dimensions, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '@/components'
import { ScreenProps } from '../../types'

const ScreenOne = ({ handleNext }: Readonly<ScreenProps>) => {
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
          source={require('@/assets/images/onboarding/screen_one.png')}
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
            rowGap: 58,
          }}
        >
          <View
            style={{
              rowGap: 8,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 500,
                color: '#27214D',
              }}
            >
              Get The Freshest Fruit Salad Combo
            </Text>
            <Text
              style={{
                color: '#5D577E',
              }}
            >
              We deliver the best and freshest fruit salad in town. Order for a
              combo today!!!
            </Text>
          </View>
          <Button onPress={handleNext} color={'secondary'}>
            Let’s Continue
          </Button>
        </View>
      </SafeAreaView>
    </View>
  )
}

export { ScreenOne }
