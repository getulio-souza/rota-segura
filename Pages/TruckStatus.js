import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TruckStatus = () => {
  return (
    <View View style = {styles.mainContainer}>
      <Header></Header>
      <View>
        <Text
          style={styles.TitleBoxTitle}>Status do veiculo
        </Text>
      </View>
      <View style={styles.truckImg}>
        <Icon
            name="truck"
            size={50}
            color="#369928"
          />
      </View>

      <View style={styles.statusContainer}>

        <View style={styles.statusInfo}>
          <Icon
            name="temperature-high"
            color="#369928"
            size={30}
          />
          <Text>Temperatura</Text>
          <Text>10°C</Text>
        </View>

        <View style={styles.statusInfo}>
          <Icon
            name="temperature-high"
            color="#369928"
            size={30}
          />
          <Text>Umidade</Text>
          <Text>30%</Text>
        </View>

        <View style={styles.statusInfo}>
          <Icon
            name="temperature-high"
            color="#369928"
            size={30}
          />
          <Text>Velocidade média</Text>
          <Text>10km/h</Text>
        </View>
      </View>

      <View style={styles.foodContainer}>
      <Text
        style={styles.foodTitle}>Alimentos transportados
      </Text>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    height: '100%'
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

  truckImg: {
    display: 'flex',
    alignItems: 'center',
  },

  statusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: '50px'
  },

  statusInfo: {
    textAlign: 'center',
  },

  foodContainer:{
    paddingTop: '40px'
  },
  
  foodTitle: {
    fontSize: '24px',
    textAlign: 'center',
    color: 'green',
    maxWidth: '300px',
    margin: 'auto',
    fontWeight: '600',
  },

  
})

export default TruckStatus