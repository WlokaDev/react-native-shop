import { ProductCardInterface } from './ProductCard.types'
import { Pressable, StyleSheet, View } from 'react-native'
import { useRadius } from '@/theme'
import { Image } from 'expo-image'
import { Button, Text } from '@/components'
import { IconPlus } from '@tabler/icons-react-native'

const ProductCard = ({
  product,
  backgroundColor,
  size = 'md',
}: Readonly<ProductCardInterface>) => {
  const borderRadius = useRadius('lg')
  const memoizedStyles = styles(size)

  return (
    <Pressable
      style={[
        memoizedStyles.container,
        borderRadius,
        ...(backgroundColor ? [{ backgroundColor }] : []),
      ]}
    >
      <Image source={product.image_url} style={memoizedStyles.image} />
      <Text fontSize={size === 'sm' ? 'sm' : 'md'} fontWeight={500}>
        {product.name}
      </Text>
      <View style={memoizedStyles.priceWithAddContainer}>
        <Text fontSize={'sm'} style={memoizedStyles.price}>
          {new Intl.NumberFormat('pl-PL', {
            style: 'currency',
            currency: 'PLN',
          }).format(product.price / 100)}
        </Text>
        <Button
          isIconOnly
          styles={{
            button: memoizedStyles.button,
          }}
          size={'none'}
          color={'secondary'}
          radius={'full'}
        >
          <IconPlus size={18} color={'#F08626'} />
        </Button>
      </View>
    </Pressable>
  )
}

const styles = (size: ProductCardInterface['size']) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingHorizontal: size === 'sm' ? 8 : 16,
      paddingVertical: size === 'sm' ? 16 : 24,
      position: 'relative',
      rowGap: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.05,
      shadowRadius: 24,
      elevation: 4,
      minWidth: size === 'sm' ? 140 : 160,
    },
    image: {
      width: '100%',
      height: size === 'sm' ? 64 : 80,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    priceWithAddContainer: {
      paddingTop: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    price: {
      color: '#F08626',
    },
    button: {
      backgroundColor: '#FFF2E7',
      width: 30,
      height: 30,
    },
  })

export { ProductCard }
