import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SimulationButton = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    width: '130px',
    height: '35px',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight:'600'
  }
})

export default SimulationButton