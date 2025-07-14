import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { Button } from '@/components'

export default function OnboardingScreen() {
  return (
    <View
      style={{
        flex: 1,
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
          source={require('@/assets/images/onboarding/main.png')}
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
          <Button color={'secondary'}>Let’s Continue</Button>
        </View>
      </SafeAreaView>
    </View>
  )
}
