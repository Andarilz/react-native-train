import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import {MainLayout} from './src/MainLayout'
import {TodoState} from './src/context/todo/TodoState'
import {ScreenState} from './src/context/screen/ScreenState'

async function loadApplication() {
  await Font.loadAsync({
    'roboto-bold': require('./assets/Roboto-Bold.ttf'),
    'roboto-regular': require('./assets/Roboto-Regular.ttf')
  })
}

const App = () => {

  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }


  return (
    <ScreenState>
        <TodoState>
          <MainLayout />
        </TodoState>
    </ScreenState>
    )

}



export default App

