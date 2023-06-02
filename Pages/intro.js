import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import {Icon} from 'react-native-elements'

export default function Intro() {
  return (
    <View style={styles.introContainer}>
      <View style={styles.introHeader}>
        <Icon/>
        <View>
        <Button style={styles.Button}
        title='Login'
        />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  introContainer: {
    backgroundColor: '#fff'
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
  }
})