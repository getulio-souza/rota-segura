import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { color } from 'react-native-reanimated'

const Result = () => {
  return (
    <View style={styles.mainContainer}>
      <Header></Header>
      <View>
        <Text style={styles.title}>Resultado da simulação</Text>
      </View>

      <View style={styles.dataContainer}>
        <View sytle={styles.dataBox}>
          <Icon
            name="city"
            size={30}
            color="369928"
          />
          <Text style={styles.dataTitle}>Cidade</Text>
          <Text style={styles.dataInfo}>São Paulo</Text>
        </View>
        <View View sytle={styles.dataBox}>
          <Icon
            name="people-group"
            size={30}
            color="369928"
          />
          <Text style={styles.dataTitle}>Pessoas</Text>
          <Text style={styles.dataInfo}>240</Text>
        </View>
      </View>

      {/* frutas data */}
      <View style={styles.foodDataContainer}>
        {/* left column */}
        <View style={styles.foodLeftColum}>
          {/* frutas */}
          <View>
          <View style={styles.foodTitle}>
            <Icon
              name="chevron-down"
              size={15}
              color="#369928"
            />
            <Text style={styles.foodSubtitle}>Frutas</Text>
              <Text style={styles.foodSubtitleInfo}>60kg</Text>
              <View>
                <Text style={styles.peopleCount}>(aprox. 250g/pessoa)</Text>
              </View>
          </View>

          {/* fruit list */}
          <View>
            <View style={styles.foodType}>
              <Text style={styles.foodTypeTitle}>Banana:</Text>
              <Text style={styles.foodTypeTitleInfo}>15Kg</Text>
            </View>
            <View style={styles.foodType}>
              <Text style={styles.foodTypeTitle}>Maçã:</Text>
              <Text style={styles.foodTypeTitleInfo}>15Kg</Text>
            </View>
            <View style={styles.foodType}>
              <Text style={styles.foodTypeTitle}>Manga:</Text>
              <Text style={styles.foodTypeTitleInfo}>15Kg</Text>
            </View>
            <View style={styles.foodType}>
              <Text style={styles.foodTypeTitle}>Mamão:</Text>
              <Text style={styles.foodTypeTitleInfo}>15Kg</Text>
            </View>
          </View>
        </View>

        {/* verduras */}
        <View style={[styles.foodTitle, styles.verdurasTitle]}>
          <Icon
            name="chevron-right"
            size={15}
            color="#369928"
          />
          <Text style={styles.foodSubtitle}>Verduras</Text>
          <Text style={styles.foodSubtitleInfo}>60kg</Text>
            <View>
              <Text style={styles.peopleCount}>(aprox. 250g/pessoa)</Text>
            </View>
          </View>

        {/* carnes */}
        <View style={[styles.foodTitle, styles.carnesTitle]}>
            <Icon
            name="chevron-right"
            size={15}
            color="#369928"
          />
            <Text style={styles.foodSubtitle}>Carnes</Text>
            <Text style={styles.foodSubtitleInfo}>60kg</Text>

            <View>
              <Text style={styles.peopleCount}>(aprox. 250g/pessoa)</Text>
            </View>
          </View>
        </View>        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    height:'100%'
  },

  title: {
    fontSize: '24px',
    textAlign: 'center',
    color: '#369928',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '300px',
    margin: 'auto',
    fontWeight: '600'
  },

  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
    textAlign:'center',
    padding: '10px 20px',
    borderRadius: '10px'
  },

  dataBox: {
    backgroundColor: 'red',
    width:'300px'
  },

  dataTitle: {
    color: '#369928',
    fontSize: '14px',
    fontWeight:'600'
  },

  dataInfo: {
    color: '#2a2a2a',
    fontSize: '14px'
  },

  foodDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'flex-start',
    paddingTop:'40px'
  },

  foodTitle: {
    flexDirection: 'row',
    gap: '20px',
    paddingBottom: '10px',
    fontSize: '20px',
    alignItems:'center'
  },

  foodSubtitle: {
    fontSize: '17px',
    fontWeight: '600',
    color: '#369928'
  },

  foodSubtitleInfo: {
    color: '#3D3D3D'
  },

  foodType: {
    flexDirection: 'row',
    gap: '10px',
    paddingLeft: '30px',
    paddingBottom:'5px'
  },

  foodTypeTitle: {
    color: '#369928',
    fontWeight: '600',
    fontSize: '15px'
  },

  foodTypeTitleInfo: {
    color: '#3D3D3D'
  },

  peopleCount: {
    color: 'rgb(165, 158, 158)'
  },

  verdurasTitle: {
    paddingTop:'20px'
  },

  carnesTitle: {
    paddingTop: '20px'
  },

})

export default Result