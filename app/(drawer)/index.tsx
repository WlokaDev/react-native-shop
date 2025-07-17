import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Button,
  CartButton,
  DrawerToggleButton,
  Input,
  Text,
} from '@/components'
import {
  IconAdjustmentsHorizontal,
  IconSearch,
} from '@tabler/icons-react-native'
import { useState } from 'react'
import { ProductList, Tabs } from '@/features/home'
import { homeMockData } from '@/mock/home'

export default function HomeScreen() {
  const [value, setValue] = useState<string>('')

  const handleSearch = () => {}

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <SafeAreaView style={styles.root}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <View style={styles.nav}>
            <DrawerToggleButton />
            <CartButton />
          </View>
          <View style={styles.titleContainer}>
            <Text fontSize={'xl'}>
              Hello Tony,{' '}
              <Text fontSize={'xl'} fontWeight={500}>
                What fruit salad combo do you want today?
              </Text>
            </Text>
          </View>
          <View style={styles.searchContainer}>
            <Input
              styles={{
                container: styles.input,
              }}
              value={value}
              onChangeText={setValue}
              startContent={<IconSearch size={16} color={'#86869E'} />}
              placeholder={'Search for fruit salad combos'}
            />
            <Button
              size={'sm'}
              isIconOnly
              color={'secondary'}
              onPress={handleSearch}
            >
              <IconAdjustmentsHorizontal color={'#FFF'} size={18} />
            </Button>
          </View>
          <View style={styles.recommendedContainer}>
            <Text
              fontSize={'2xl'}
              style={styles.recommendedTitle}
              fontWeight={500}
            >
              Recommended for you
            </Text>
            <ProductList products={homeMockData.recommended} />
          </View>
          <View>
            <Tabs />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingVertical: 24,
    rowGap: 24,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  titleContainer: {
    maxWidth: 260,
    paddingHorizontal: 16,
  },
  searchContainer: {
    columnGap: 16,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
  },
  recommendedContainer: {
    paddingTop: 24,
  },
  recommendedTitle: {
    paddingHorizontal: 16,
  },
})
