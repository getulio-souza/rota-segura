import React from 'react'
import { StyleSheet, View, Button, Image } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View>
      <Image source={require('../assets/first-logo.png')}/>
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
    // backgroundColor: '#369928'
  },

  // logo: {
  //   justifyContent: 'center',
  // },
})