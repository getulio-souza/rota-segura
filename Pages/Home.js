import React from 'react'
import { StyleSheet, View, Text } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  )
}

//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#369928'
  }
})