import { Platform, StyleSheet } from 'react-native'
import { Colors } from '../../themes'

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.ligth,
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({ ios: 'visible', android: 'hidden' }),
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.25
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
    textAlign: 'center',
    margin: 8
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginHorizontal: 4
  }
})

export default styles
