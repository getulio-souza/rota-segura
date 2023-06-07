import { View, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Header = () => {
  return (
    <View style={styles.Header}>
      <Icon
          name="bars"
          size={25}
          color="#fff"
      />
      
      {/* <View style={styles.userLogged}>
        <Icon
          name='user'
          size={25}
          color='#fff'
          />
          <Icon
            name='chevron-down'
            size={20}
            color='#fff'
          />
        </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
   Header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
    backgroundColor: '#369928',
    paddingLeft: 20,
    paddingRight: 20,
  },
  
   userLogged: {
     display: 'flex',
     flexDirection: 'row',
     alignItems: 'center',
     gap: 10
   },
})


export default Header