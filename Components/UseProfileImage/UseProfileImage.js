import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import style from './style'
const UseProfileImage = () => {
  return (
    
        <View style={style.userImageContainer}>
        <Image source={require('../../assets/images/default_profile.png')} />
      </View>
        
  )
}

export default UseProfileImage

const styles = StyleSheet.create({})