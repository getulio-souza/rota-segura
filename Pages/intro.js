import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native';

export default function Intro() {
  return (
    <View style={styles.introContainer}>

      <View style={styles.introHeader}>
        <View>menu</View>
        <View>
        <Button style={styles.Button}
        title='Login'
        />
        </View>
      </View>

      <View style={styles.TitleBox}>
        <Text
          style={styles.TitleBoxTitle}>Acompanhe o envio e a entrega dos seus alimentos
        </Text>
      </View>

      <View style={styles.stepsBox}>
        <Text style={styles.stepsBoxTitle}>Como funciona</Text>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  introContainer: {
    backgroundColor: '#fff',
  },

  introHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
    backgroundColor: '#369928',
  },

  Button: {
    maxWidth: '60px',
    backgroundColor: '#55B243'
  },

  TitleBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
    height: '300px'
  },

  TitleBoxTitle: {
    fontSize: '24px',
    textAlign: 'center',
    color: 'green'
  },

  stepsBox: {
    backgroundColor: '#369928',
    height: '300px',
    paddingTop: '20px'
  },

  stepsBoxTitle: {
    textAlign: 'center',
    fontSize: '24px',
    color:'#fff'
  }
})