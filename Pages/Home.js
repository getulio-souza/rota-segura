import React from 'react'
import { StyleSheet, View, Image, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo}
          source={require('../assets/logo.png')}
        />
      </View>
      {/* <Button
        title='Iniciar'
        onPress={()=> navigation.navigate('Intro')}
      /> */}
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
  },

  button: {
    backgroundColor: '#fff',
    padding: '10px 25px'
  }
})