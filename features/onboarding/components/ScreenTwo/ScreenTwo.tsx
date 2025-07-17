import { Dimensions, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input } from '@/components'
import { ScreenProps } from '../../types'
import { Controller, useForm } from 'react-hook-form'
import { onboardingValidation } from '@/features/onboarding'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormControl } from '@/components/Form /FormControl'
import { useState } from 'react'
import { Toast } from 'toastify-react-native'

const ScreenTwo = ({ handleNext }: Readonly<ScreenProps>) => {
  const { defaultValues, schema } = onboardingValidation
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema()),
    defaultValues,
    mode: 'onChange',
    criteriaMode: 'all',
  })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async ({ name }: typeof defaultValues) => {
    try {
      setIsLoading(true)

      // Simulate an API call or some processing
      await new Promise((resolve) => setTimeout(resolve, 1000))

      handleNext()
    } catch (error) {
      console.log(error)
      Toast.error('An error occurred while processing your request.')
    } finally {
      setIsLoading(false)
    }
  }

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
            <Controller
              render={({ field, fieldState: { error } }) => (
                <FormControl name={field.name} errors={errors}>
                  <Input
                    isInvalid={!!error}
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder={'Enter your name'}
                  />
                </FormControl>
              )}
              name={'name'}
              control={control}
            />
          </View>
          <Button
            isLoading={isLoading}
            onPress={handleSubmit(onSubmit)}
            color={'secondary'}
          >
            Start ordering
          </Button>
        </View>
      </SafeAreaView>
    </View>
  )
}

export { ScreenTwo }
