
import 'react-native-gesture-handler'
import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import Navigator from './paths/welcomeStack'


/* function to return any font requested */
const getFont = () => Font.loadAsync({
    'ralewayRegular': require('./assets/font/Raleway-Regular.ttf'),
    'ralewayBold': require('./assets/font/Raleway-Bold.ttf')
  })


export default function App() {
  /* useState tracks if fonts were set; returns boolean
    default is false */
  const [fontUsed, setFontUsed] = useState(false)

  
  /* if font set successfully display landing(welcome) page */
  if(fontUsed) {
    return (
      <Navigator />
    );
  }
  else {
    /* if font not set successfully run getFont function to set font 
    then useState switch to true */
    return (
      <AppLoading
      startAsync={getFont}
      onFinish={() => setFontUsed(true)}
      />
    )
  }
}
