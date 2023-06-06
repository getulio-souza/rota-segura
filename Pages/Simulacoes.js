import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Simulacoes = () => {
  return (
    <View style={styles.mainContainer}>
      <Header></Header>
      <View>
        <Text style={styles.title}>Simulações de consumo</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>É importante que seu cliente conheça bem seu público alvo para que você possa fazer a simulação de consumo</Text>
      </View>
      {/* form */}
      <View>
        <View>
          <Text>Quantidade de pessoas:</Text>
          <TextInput
            keyboardType='numeric'
          />
        </View>

        <View>
          <Text>Média de idade:</Text>
          <TextInput
            keyboardType='numeric'
          />
        </View>

        <View>
          <Text>Cidade:</Text>
          {/* <Selection/> */}
        </View>

        <View>
          <Text>Principais produtos:</Text>
            
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    height: '100%'
  },

  title: {
    fontSize: '24px',
    textAlign: 'center',
    color: 'green',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '300px',
    margin: 'auto',
    fontWeight: '600'
  },

  subtitle: {
    fontSize: '15px',
    textAlign: 'center',
    color: 'green',
    height: '125px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '300px',
    margin: 'auto',
    height: '0px'
  }
})


export default Simulacoes