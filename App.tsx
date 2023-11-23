import { StatusBar } from 'expo-status-bar'
import Router from './src/Router'
import React, { Fragment } from 'react'

const App: React.FC = () => {
  return (
    <Fragment>
      <StatusBar style='light' />
      <Router />
    </Fragment>
  )
}

export default App
