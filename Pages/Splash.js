import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <AnimatedLottieView source={require('../assets/loading-effect.json')} autoPlay loop/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
})