import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome5'

 const data = [{
     type: 'fruta',
     name: 'banana',
     weight: 43
   },
   {
     type: 'Verdura',
     name: 'Brocolis',
     weight: 15
   },
   {
     type: 'Legume',
     name: 'Tomate',
     weight: 22
   },
   {
     type: 'Legume',
     name: 'Tomate',
     weight: 22
   },
   {
     type: 'Legume',
     name: 'Tomate',
     weight: 34
   },
 ]

const TruckStatus = () => {

  const item = ({item}) => {
    return (
      <View style={styles.statusTable}>
        <View style={styles.tableRow}>
          <Text>{item.type}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text>{item.weight}</Text>
        </View>
      </View>
    )
  }

  return (
    <View View style = {styles.mainContainer}>
      <Header></Header>
      <View style={styles.contentContainer}>
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
          <Text style={styles.infoStatusTitle}>Temperatura</Text>
          <Text style={styles.infoStatusNumber}>10°C</Text>
        </View>

        <View style={styles.statusInfo}>
          <Icon
            name="temperature-high"
            color="#369928"
            size={30}
          />
          <Text style={styles.infoStatusTitle}>Umidade</Text>
          <Text style={styles.infoStatusNumber}>30%</Text>
        </View>

        <View style={styles.statusInfo}>
          <Icon
            name="temperature-high"
            color="#369928"
            size={30}
          />
          <Text style={styles.infoStatusTitle}>Velocidade média</Text>
          <Text style={styles.infoStatusNumber}>10km/h</Text>
        </View>
      </View>

      <View style={styles.foodContainer}>
        <Text
          style={styles.foodTitle}>Alimentos transportados
        </Text>

        {/* table */}
        <View styles={styles.tableContainer}>
          <View style={styles.statusTable}>

        <View style={styles.tableRow}>
          <Text style={styles.headerTh}>Tipo</Text>
            </View>
            
        <View style={styles.tableRow}>
          <Text style={styles.headerTh}>Nome</Text>
            </View>
            
        <View style={styles.tableRow}>
          <Text style={styles.headerTh}>Peso (KG)</Text>
            </View>
            
          </View>
          <FlatList
            data={data}
            renderItem={item}
            keyExtractor={(item, index)=> index.toString()}
          >
          </FlatList>
        </View>
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

  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px'
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

  infoStatusTitle: {
    paddingTop: '10px'
  },

  infoStatusNumber: {
    fontWeight: '700',
    paddingTop:'10px'
  },

  foodContainer: {
    paddingTop: '40px',
    alignItems:'center'
  },
  
  foodTitle: {
    fontSize: '24px',
    textAlign: 'center',
    color: 'green',
    maxWidth: '300px',
    margin: 'auto',
    fontWeight: '600',
    paddingBottom: '30px',
  },

  tableContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  tableRow: {
    backgroundColor: '#fff',
    width: 100,
    height: '40px'
  },

  statusTable: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  
  headerTh: {
    fontWeight: '700',
    fontSize: '17px',
    color: '#268c1b',
    height: '40px'
  }
})

export default TruckStatus