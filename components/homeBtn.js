import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeBtn = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },

  text: {
    color: 'green',
    fontSize: 20,
    fontWeight: '600',
    textAlign:'center'
  }
})

export default HomeBtn