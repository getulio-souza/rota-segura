import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import map from '../assets/maps.png'

const Otimizacao = () => {
  const [time, setTime] = useState("");
  const [codigo, setCodigo] = useState("");
  const [servico, setServico] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  let token = '1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=LX002249507BR';
   
      const dataFetching =  () => {
        fetch("https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=LX002249507BR",
         ).then(response => response.json())
          .then(data => {
            try {
              setErrorMessage("")
              setTime(data.time)
              setServico(data.servico)
              setCodigo(data.codigo)
          }
          catch (error) {
              setErrorMessage("Muitos pedidos. Tente Novamente")
              console.log(setErrorMessage)
          }
          })
        .catch(error => console.error('erro fetching JSON:', error))
      }
      dataFetching()
  
  return (
    <View style = {styles.mainContainer}>
        <View style={styles.contentContainer}>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text
              style={styles.TitleBoxTitle}>Otimização de rotas
          </Text>
          <TouchableOpacity
            style={styles.checkBtnContainer}
            onPress={dataFetching}
          >
            <Text style={styles.checkBtn}>consultar</Text>
          </TouchableOpacity>

          <Text style={{color:'red'}}>{errorMessage}</Text>
          </View>

        <View style={styles.dateAndCodeContainer}>
          {/* <Text style={styles.dateAndCodeContainerText}>Quarta, 31 Jun</Text> */}
          <Text style={styles.dateAndCodeContainerText}>Quarta, 7 Jun</Text>
          <Text style={styles.dateAndCodeContainerText}>{codigo}</Text>
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
              <Text style={styles.timeStepTitle}>{servico} </Text>
              <Text style={styles.timeStepSubTitle}>xxxxxxxxx de São Paulo</Text>
              </View>
              <Text style={styles.timeStepRight}>{time}</Text>
            </View>  
          </View>
          
          <View>
            <Icon/>
            <View style={styles.timeStep}>
              <View style={styles.timeStepLeft}>
              <Text style={styles.inativeStatus}>{servico} </Text>
              <Text style={styles.inativeStatus}>xxxxxxxxx de Rio de Janeiro</Text>
              </View>
              <Text style={[styles.timeStepRight, styles.inativeStatus]}>{time}</Text>
            </View>  
          </View>
          
          <View>
            <Icon/>
            <View style={styles.timeStep}>
              <View style={styles.timeStepLeft}>
              <Text style={styles.inativeStatus}>{servico}</Text>
              <Text style={styles.inativeStatus}>xxxxxxxxx de São Paulo</Text>
              </View>
              <Text style={[styles.timeStepRight, styles.inativeStatus]}>{time}</Text>
            </View> 
          </View>
          
          <View>
            <Icon/>
            <View style={styles.timeStep}>
              <View style={styles.timeStepLeft}>
              <Text style={styles.inativeStatus}>{servico}</Text>
              <Text style={styles.inativeStatus}>xxxxxxxxx de São Paulo</Text>
              </View>
              <Text style={[styles.timeStepRight, styles.inativeStatus]}>{time}</Text>
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
        {/* <View>
          <Image source={map}/>
        <Text style={styles.maptitle}>mapa entra aqui</Text>
        </View> */}
    </View>
  ) 
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    height: '100%'
  },

  contentContainer: {
    paddingLeft: 40,
    paddingBottom: 20,
  },

  TitleBoxTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: 'green',
    height: 125,
    display: 'flex',
    alignItems: 'center',
    maxWidth: 300,
    margin: 'auto',
    fontWeight: '600'
  },

  checkBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  checkBtn: {
    padding: 10,
    backgroundColor: 'green',
    color: '#fff',
    borderRadius:10
  },

  dateAndCodeContainer: {
    paddingBottom: 20
  },

  dateAndCodeContainerText: {
    color: '#AAAAAA',
    fontWeight: '600'
  },

  subTitleContainer: {
    paddingBottom: 20,
  },

  subTitle: {
    fontSize: 18,
    fontWeight: '700'
  },

  routeContainer: {
    paddingBottom: 20
  },

  routeContainerBox: {
    paddingBottom: 20
  },

  timeStep: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    gap: 20,
    paddingBottom: 20
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
    fontSize:16
  },

  timeStepSubTitle: {
    fontWeight: '600',
    fontSize: 12
  },

  timeStepRight: {
    paddingRight: 40,
    fontWeight: '600',
  },

  addressContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    gap: 10
  },

  addressTitle: {
    fontSize: 16,
    fontWeight:'600'
  },

  addressInfo: {
    fontSize: 12,
    color:'#2a2a2a'
  },

  maptitle: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Otimizacao