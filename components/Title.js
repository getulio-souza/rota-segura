import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View>
        <Text style={styles.title}></Text>
      </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize:24,
    textAlign: 'center',
    color: 'green',
    height: 155,
    display: 'flex',
    alignItems: 'center',
    maxWidth: 300,
    margin: 'auto',
    fontWeight: '600'
  },
})

export default Title