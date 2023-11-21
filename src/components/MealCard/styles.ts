import { Platform, StyleSheet } from 'react-native'
import { Colors } from '../../themes'

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    // on iOS you have to set backgroundColor to make shadow works well
    backgroundColor: Colors.ligth,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: Platform.select({ android: 'hidden', ios: 'visible' })
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  inner: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default styles
