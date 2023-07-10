import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const LoginButton = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 35,
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

export default LoginButton