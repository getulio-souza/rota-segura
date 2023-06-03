import React from 'react'
import { StyleSheet, View, Button, Text, TouchableHighlight } from 'react-native';
import LoginButton from '../components/LoginButton';
import BtnNextScreen from '../components/BtnNextScreen';

export default function Intro() {
  return (
    <View style={styles.introContainer}>

      <View style={styles.introHeader}>
        <View>menu</View>
        <LoginButton
          text="Login"
          color="#55B243"
        />
      </View>

      <View>
        <Text
          style={styles.TitleBoxTitle}>Acompanhe o envio e a entrega dos seus alimentos
        </Text>
      </View>

      <View style={styles.BoxContainer}>
        <Text style={styles.BoxTitle}>Vantagens</Text>
        <View style={styles.infoBoxContainer}>

          <View style={styles.infoBox}>
            <View>Icone</View>  
              <View>
                <Text style={styles.infoText}>Faça o seu cadastro no app</Text>
            </View> 
          </View>

          <View style={styles.infoBox}>
            <View>Icone</View>  
              <View>
                <Text style={styles.infoText}>Consulte o despacho ou chegada da sua mercadoria</Text>
            </View> 
          </View>

          <View style={styles.infoBox}>
            <View>Icone</View>  
              <View>
                <Text style={styles.infoText}>Saiba se houve algum problema no meio do caminho</Text>
            </View> 
          </View>
      </View>
      </View>

    <View View style = {styles.BoxContainer2}>
        <Text style={styles.BoxTitle2}>Como funciona</Text>

        <View style={styles.infoBoxContainer}>
          <View style={styles.infoBox}>
            <View>Icone</View>  
              <View>
                <Text style={styles.infoText2}>Faça o seu cadastro no app</Text>
            </View> 
          </View>

          <View style={styles.infoBox}>
            <View>Icone</View>  
              <View>
                <Text style={styles.infoText2}>Consulte o despacho ou chegada da sua mercadoria</Text>
            </View> 
          </View>

          <View style={styles.infoBox}>
            <View>Icone</View>  
              <View>
                <Text style={styles.infoText2}>Saiba se houve algum problema no meio do caminho</Text>
            </View> 
          </View>
      </View>
      </View>    

     

      <View style={styles.footerBtn}>
      <BtnNextScreen
        text="Vamos começar"
        color="#369928"
      />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  introContainer: {
    backgroundColor: '#fff',
    height:'100%'
  },

  introHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
    backgroundColor: '#369928',
    paddingLeft: 20,
    paddingRight: 20
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

  BoxContainer      : {
    backgroundColor: '#369928',
    height: '300px',
    paddingTop: '20px'
  },

  BoxContainer2: {
    backgroundColor: '#fff',
    height: '300px',
    paddingTop: '20px'
  },

  BoxTitle: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#fff',
    maxWidth: '300px',
    margin: 'auto',
    fontWeight: '600',
  },

  BoxTitle2: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#000',
    maxWidth: '300px',
    margin: 'auto',
    fontWeight: '600',
  },

  infoBoxContainer: {
    flex: 1,
    paddingTop: '40px',
    alignItems: 'flex-start'

  },

  infoBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px'
  },

  infoText: {
    color: '#fff',
    fontWeight:'600',
    maxWidth: 300
  },

  infoText2: {
    color: '#000',
    fontWeight:'600',
    maxWidth: 300
  },

  footerBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20px'
  },
})