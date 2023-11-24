import { StatusBar } from 'expo-status-bar'
import Router from './src/Router'
import React, { Fragment } from 'react'
import 'react-native-gesture-handler'

const App: React.FC = () => {
  return (
    <Fragment>
      <StatusBar style='light' />
      <Router />
    </Fragment>
  )
}

export default App
