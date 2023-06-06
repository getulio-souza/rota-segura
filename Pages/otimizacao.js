import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Otimizacao = () => {
  return (
    <View style = {styles.mainContainer}>
      <Header></Header>
        <View style={styles.contentContainer}>
          <View>
            <Text
              style={styles.TitleBoxTitle}>Otimização de rotas
            </Text>
          </View>

        <View style={styles.dateAndCodeContainer}>
          <Text style={styles.dateAndCodeContainerText}>Quarta, 31 Jun</Text>
          <Text style={styles.dateAndCodeContainerText}>Código: 432kj42</Text>
        </View>

        <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Previsão de chegada</Text>
        </View>

        {/* transporte */}
        <View styles={styles.routeContainer}>
          <View styles={styles.routeContainerBox}>
            <Icon/>
            <View style={styles.timeStep}>
              <View style={styles.timeStepLeft}>
              <Text style={styles.timeStepTitle}>Coleta realizada</Text>
              <Text style={styles.timeStepSubTitle}>xxxxxxxxx de São Paulo</Text>
              </View>
              <Text style={styles.timeStepRight}>12:20</Text>
            </View>  
          </View>
          
          <View>
            <Icon/>
            <View style={styles.timeStep}>
              <View style={styles.timeStepLeft}>
              <Text style={styles.inativeStatus}>Caminhão em transporte</Text>
              <Text style={styles.inativeStatus}>xxxxxxxxx de Rio de Janeiro</Text>
              </View>
              <Text style={[styles.timeStepRight, styles.inativeStatus]}>13:40</Text>
            </View>  
          </View>
          
          <View>
            <Icon/>
            <View style={styles.timeStep}>
              <View style={styles.timeStepLeft}>
              <Text style={styles.inativeStatus}>Coleta realizada</Text>
              <Text style={styles.inativeStatus}>xxxxxxxxx de São Paulo</Text>
              </View>
              <Text style={[styles.timeStepRight, styles.inativeStatus]}>15:30</Text>
            </View> 
          </View>
          
          <View>
            <Icon/>
            <View style={styles.timeStep}>
              <View style={styles.timeStepLeft}>
              <Text style={styles.inativeStatus}>Coleta realizada</Text>
              <Text style={styles.inativeStatus}>xxxxxxxxx de São Paulo</Text>
              </View>
              <Text style={[styles.timeStepRight, styles.inativeStatus]}>18:20</Text>
            </View> 
          </View>
        </View>

        {/* Entrega */}
        <View style={styles.addressContainer}>
          <Icon
            name="house-user"
            size={30}
            color="#369928"
          />
          <View>
          <Text style={styles.addressTitle}>Endereço de entrega</Text>
          <Text style={styles.addressInfo}>R. dos Gusmões, 124 -Jd. Maria dos Santos - RJ</Text>
          </View>
        </View>
      </View>
      {/* Mapa */}
        <View style={styles.mapContainer}>
          <Image
          source={require('../assets/maps.png')}
        />
        <Text>mapa entra aqui</Text>
        </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    height: '100%'
  },

  contentContainer: {
    paddingLeft: '40px',
    paddingBottom: '20px',
  },

  TitleBoxTitle: {
    fontSize: '24px',
    textAlign: 'center',
    color: 'green',
    height: '125px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '300px',
    margin: 'auto',
    fontWeight: '600'
  },

  dateAndCodeContainer: {
    paddingBottom: '20px'
  },

  dateAndCodeContainerText: {
    color: '#AAAAAA',
    fontWeight: '600'
  },

  subTitleContainer: {
    paddingBottom: '20px',
  },

  subTitle: {
    fontSize: '18px',
    fontWeight: '700'
  },

  routeContainer: {
    paddingBottom: '20px'
  },

  routeContainerBox: {
    paddingBottom: '20px'
  },

  timeStep: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    gap: '20px',
    paddingBottom: '20px'
  },

  timeStepLeft: {
    display: 'flex',
    flexDirection: 'column'
  },

  inativeStatus: {
    color: '#D9DDD8'
  },

  timeStepTitle: {
    fontWeight: '600',
    fontSize:'16px'
  },

  timeStepSubTitle: {
    fontWeight: '600',
    fontSize: '12px'
  },

  timeStepRight: {
    paddingRight: '40px',
    fontWeight: '600',
  },

  addressContainer: {
    paddingTop: '20px',
    flexDirection: 'row',
    gap: '10px'
  },

  addressTitle: {
    fontSize: '16px',
    fontWeight:'600'
  },

  addressInfo: {
    fontSize: '12px',
    color:'#2a2a2a'
  },

  mapContainer: {
    width: '100',
    height: '100',
  }
})

export default Otimizacao