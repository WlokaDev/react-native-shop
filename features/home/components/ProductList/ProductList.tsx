import { ProductListInterface } from './ProductList.types'
import { FlatList, StyleSheet, View } from 'react-native'
import { ProductCard } from '@/features/products'
import _ from 'lodash'

const randomColors = [
  '#FDECEC',
  '#FFF5E5',
  '#F3F0FF',
  '#E6FFF8',
  '#FFF0F6',
  '#FFFBEA',
  '#E5F6FD',
  '#F0F7E9',
  '#FFECEC',
  '#FDF2FA',
]

const ProductList = ({
  products,
  withRandomColor,
  size = 'md',
}: Readonly<ProductListInterface>) => {
  const getRandomColor = () => _.sample(randomColors) as string

  return (
    <View
      style={{
        paddingBottom: 16,
      }}
    >
      <FlatList
        data={products}
        horizontal
        style={styles.container}
        contentContainerStyle={styles.flatList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ProductCard
            {...(withRandomColor && { backgroundColor: getRandomColor() })}
            product={item}
            key={index}
            size={size}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  flatList: {
    columnGap: 16,
    paddingBottom: 16,
  },
})

export { ProductList }
