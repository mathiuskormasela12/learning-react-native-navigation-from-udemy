import { Platform, StyleSheet } from 'react-native'
import { Colors } from '../../themes'

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.ligth,
    margin: Platform.select({ android: 16, ios: 25 }),
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.select({ ios: 'visible', android: 'hidden' })
  },
  image: {
    width: '100%',
    height: 200
  },
  inner: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  isPressed: {
    opacity: 0.5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
})

export default styles
