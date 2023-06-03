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

      <View>
        <Text
          style={styles.TitleBoxTitle}>Acompanhe o envio e a entrega dos seus alimentos
        </Text>
      </View>

      <View style={styles.stepsContainer}>
        <Text style={styles.stepsBoxTitle}>Como funciona</Text>

        <View style={styles.stepsBoxContainer}>

          <View style={styles.stepsBox}>
            <View>Icone</View>  
              <View>
                <Text style={styles.stepText}>Faça o seu cadastro no app</Text>
            </View> 
          </View>

          <View style={styles.stepsBox}>
            <View>Icone</View>  
              <View>
                <Text style={styles.stepText}>Consulte o despacho ou chegada da sua mercadoria</Text>
            </View> 
          </View>

          <View style={styles.stepsBox}>
            <View>Icone</View>  
              <View>
                <Text style={styles.stepText}>Saiba se houve algum problema no meio do caminho</Text>
            </View> 
          </View>

      </View>

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

  TitleBoxTitle: {
    fontSize: '24px',
    textAlign: 'center',
    color: 'green',
    height: '155px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '300px',
    margin: 'auto',
    fontWeight: '600'
  },

  stepsContainer: {
    backgroundColor: '#369928',
    height: '300px',
    paddingTop: '20px'
  },

  stepsBoxTitle: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#fff',
    maxWidth: '300px',
    margin: 'auto',
    fontWeight: '600',
  },

  stepsBoxContainer: {
    flex: 1,
    paddingTop: '40px',
    alignItems: 'flex-start'
  },

  stepsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px'
  },

  stepText: {
    color: '#fff',
    
  }
})