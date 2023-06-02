import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text>Splash screen</Text>
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