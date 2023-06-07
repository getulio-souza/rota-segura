import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import HomeBtn from '../components/homeBtn';
export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logoTitle}>Rota <Text style={{ color: '#167f0e' }}>Segura</Text></Text>
      </View>
      
      {/* title */}
      <View>
        <Text style={styles.titleHome}>Selecione uma categoria abaixo</Text>
        <View style={styles.btnContainer}>
          <HomeBtn
            text='Monitoramento'
            onPress={()=> navigation.navigate('Monitoramento')}
          />
          <HomeBtn
            text='Otimização de rotas'
            onPress={()=> navigation.navigate('Otimizacao')}
          />
          <HomeBtn
            text='Simulações'
            onPress={() => navigation.navigate('Simulacoes')}
          />
        </View>
      </View>
    </View>
  )
}

//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#369928'
  },

  logoTitle: {
    fontSize: '40px',
    paddingBottom: '40px',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight:'900'
  },

  logo: {
    justifyContent: 'center',
  },

  titleHome: {
    fontSize: '30px',
    maxWidth:'300px',
    color:'#fff',
    textAlign: 'center',
    paddingBottom: '40px',
  },

  btnContainer: {
    margin:'auto',
    gap:'20px'
  }
})