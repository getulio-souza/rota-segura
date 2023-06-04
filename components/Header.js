import { View, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.Header}>
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
     paddingRight: 20
   },
})


export default Header