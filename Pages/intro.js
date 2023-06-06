import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import LoginButton from '../components/LoginButton';
import BtnNextScreen from '../components/BtnNextScreen';
import Icon from 'react-native-vector-icons/FontAwesome5'
// import Sidebar from '../components/drawer/Sidebar';

export default function Intro({navigation}) {
  return (
    <View style={styles.introContainer}>

      <View style={styles.introHeader}>
        <Icon
          name="bars"
          size={25}
          color="#fff"
        />
        {/* < Sidebar/> */}
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
            <Icon
              name="hourglass"
              size={25}
              color="#fff"
            />  
              <View>
                <Text style={styles.infoText}>Acompanhamento em tempo real</Text>
            </View> 
          </View>

          <View style={styles.infoBox}>
            <Icon
              name="trash"
              size={25}
              color="#fff"
            />  
              <View>
                <Text style={styles.infoText}>Desperdicio zero de alimentos</Text>
            </View> 
          </View>

          <View style={styles.infoBox}>
            <Icon
              name="laptop"
              size={25}
              color="#fff"
            />
              <View>
                <Text style={styles.infoText}>Tecnologia de ponta</Text>
            </View> 
          </View>

          <View style={styles.infoBox}>
            <Icon
              name= "truck"
              size={25}
              color="#fff"
            />
              <View>
                <Text style={styles.infoText}>Logistica mais eficiente</Text>
            </View> 
          </View>
      </View>
      </View>

    <View View style = {styles.BoxContainer2}>
        <Text style={styles.BoxTitle2}>Como funciona</Text>

        <View style={styles.infoBoxContainer}>
          <View style={styles.infoBox}>
            <Icon
              name="user-plus"
              size={25}
              color="#000"
            />  
              <View>
                <Text style={styles.infoText2}>Faça o seu cadastro no app</Text>
            </View> 
          </View>

          <View style={styles.infoBox}>
            <Icon
              name="truck"
              size={25}
              color="#000"
            />   
              <View>
                <Text style={styles.infoText2}>Consulte o despacho ou chegada da sua mercadoria</Text>
            </View> 
          </View>

          <View style={styles.infoBox}>
            <Icon
              name="exclamation"
              size={25}
              color="#000"
              style={{paddingLeft:10}}
            />   
              <View style={{paddingLeft:10}}>
                <Text style={styles.infoText2}>Saiba se houve algum problema no meio do caminho</Text>
            </View> 
          </View>
      </View>
      </View>    

     

      <View style={styles.footerBtn}>
      <BtnNextScreen
        text="Vamos começar"
        color="#369928"
        onPress={() => navigation.navigate('Monitoramento')}
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
    textAlign: 'start',
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
    paddingTop: '20px',
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
    paddingTop: '20px'
  },

  infoText: {
    color: '#fff',
    fontWeight:'600',
    maxWidth: 250,
  },

  infoText2: {
    color: '#000',
    fontWeight:'600',
    maxWidth: 250
  },

  footerBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '20px'
  },
})

//https://reactnavigation.org/docs/drawer-navigator/