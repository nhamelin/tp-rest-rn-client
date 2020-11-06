import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import AppContainer from './navigation/AppContainer'
import { theme } from './styles'

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  )
}

export default App
