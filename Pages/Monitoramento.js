import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MoreInfoBtn from '../components/MoreInfo'

const Monitoramento = ({navigation}) => {
  return (
    <View style={styles.monitoramentoContainer}>
      <View>
        <Text
          style={styles.TitleBoxTitle}>Monitoramento
        </Text>
      </View>

      <View style={styles.truckContainer}>

        <View style={styles.truckInfo}>
          <Icon
            name="truck"
            size={25}
            color="#369928"
          />
          <View>
            <Text>Modelo xxxxx</Text>
            <Text>Placa 000-000</Text>
          </View>
          <MoreInfoBtn
            text="Saiba mais"
            color="#55B243"
            onPress={()=> navigation.navigate('TruckStatus')}
          />
        </View>

        <View style={styles.truckInfo}>
          <Icon
            name="truck"
            size={25}
            color="#369928"
          />
          <View>
            <Text>Modelo xxxxx</Text>
            <Text>Placa 000-000</Text>
          </View>
          <MoreInfoBtn
            text="Saiba mais"
            color="#55B243"
            onPress={()=> navigation.navigate('TruckStatus')}
          />
        </View>

        <View style={styles.truckInfo}>
          <Icon
            name="truck"
            size={25}
            color="#369928"
          />
          <View>
            <Text>Modelo xxxxx</Text>
            <Text>Placa 000-000</Text>
          </View>
          <MoreInfoBtn
            text="Saiba mais"
            color="#55B243"
            onPress={()=> navigation.navigate('TruckStatus')}
          />
        </View>

        <View style={styles.truckInfo}>
          <Icon
            name="truck"
            size={25}
            color="#369928"
          />
          <View>
            <Text>Modelo xxxxx</Text>
            <Text>Placa 000-000</Text>
          </View>
          <MoreInfoBtn
            text="Saiba mais"
            color="#55B243"
            onPress={()=> navigation.navigate('TruckStatus')}
          />
        </View>

        <View style={styles.truckInfo}>
          <Icon
            name="truck"
            size={25}
            color="#369928"
          />
          <View>
            <Text>Modelo xxxxx</Text>
            <Text>Placa 000-000</Text>
          </View>
          <MoreInfoBtn
            text="Saiba mais"
            color="#55B243"
            onPress={()=> navigation.navigate('TruckStatus')}
          />
        </View>

        <View style={styles.truckInfo}>
          <Icon
            name="truck"
            size={25}
            color="#369928"
          />
          <View>
            <Text>Modelo xxxxx</Text>
            <Text>Placa 000-000</Text>
          </View>
          <MoreInfoBtn
            text="Saiba mais"
            color="#55B243"
            onPress={()=> navigation.navigate('TruckStatus')}
          />
        </View>

        <View style={styles.truckInfo}>
          <Icon
            name="truck"
            size={25}
            color="#369928"
          />
          <View>
            <Text>Modelo xxxxx</Text>
            <Text>Placa 000-000</Text>
          </View>
          <MoreInfoBtn
            text="Saiba mais"
            color="#55B243"
            onPress={()=> navigation.navigate('TruckStatus')}
          />
        </View>

        <View style={styles.truckInfo}>
          <Icon
            name="truck"
            size={25}
            color="#369928"
          />
          <View>
            <Text>Modelo xxxxx</Text>
            <Text>Placa 000-000</Text>
          </View>
          <MoreInfoBtn
            text="Saiba mais"
            color="#55B243"
            onPress={()=> navigation.navigate('TruckStatus')}
          />
        </View>

        <View style={styles.truckInfo}>
          <Icon
            name="truck"
            size={25}
            color="#369928"
          />
          <View>
            <Text>Modelo xxxxx</Text>
            <Text>Placa 000-000</Text>
          </View>
          <MoreInfoBtn
            text="Saiba mais"
            color="#55B243"
            onPress={()=> navigation.navigate('TruckStatus')}
          />
        </View>

        <View style={styles.truckInfo}>
          <Icon
            name="truck"
            size={25}
            color="#369928"
          />
          <View>
            <Text>Modelo xxxxx</Text>
            <Text>Placa 000-000</Text>
          </View>
          <MoreInfoBtn
            text="Saiba mais"
            color="#55B243"
            onPress={()=> navigation.navigate('TruckStatus')}
          />
        </View>

        <View style={styles.truckInfo}>
          <Icon
            name="truck"
            size={25}
            color="#369928"
          />
          <View>
            <Text>Modelo xxxxx</Text>
            <Text>Placa 000-000</Text>
          </View>
          <MoreInfoBtn
            text="Saiba mais"
            color="#55B243"
            onPress={()=> navigation.navigate('TruckStatus')}
          />
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  monitoramentoContainer: {
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

  userLogged: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    gap: 10
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
  
  truckContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    gap:20
  },

  truckInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }
})

export default Monitoramento