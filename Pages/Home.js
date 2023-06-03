import React from 'react'
import { StyleSheet, View, Button, Image } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image 
        source={require('../assets/first-logo-2.png')}
        />
      </View>
      <View>
        <Button
          title='comecar'
          color='#369928'
          onPress={()=> navigation.navigate('Intro')}
        />
      </View>
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

  logo: {
    justifyContent: 'center',
  },
})