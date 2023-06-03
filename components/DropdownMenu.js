import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


export default function DropdownMenu() {
  return (
    <View style={styles.dropdownContainer}>

      <View>
        <View>logo</View>
        <View>X</View>
      </View>

      <View style={styles.categoriesContainer}>
        <View style={styles.category}>
          <View>Icone</View>
          <Text>Monitoramento</Text>
        </View>

        <View style={styles.category}>
          <View>Icone</View>
          <Text>Otimização de rotas</Text>
        </View>

        <View style={styles.category}>
          <View>Icone</View>
          <Text>Simulações de consumo</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dropdownContainer: {
    height: '100%',
    width: '50%',
    backgroundColor: '#8EDB87'
  }
})