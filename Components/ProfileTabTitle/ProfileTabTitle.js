import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from './style'
import Proptypes from 'prop-types'

const ProfileTabTitle = (props) => {
  return (
    <View>
      <Text style={[style.title,
      {
        color :props .isFoucused ? "#000000" : "#79869F",
        fontWeight :props .isFoucused ? '500' : "400"

      }]} >{props.title}</Text>
    </View>
  )
}
ProfileTabTitle.prototype={
    isFoucused:Proptypes.bool.isRequired,
    title:Proptypes.string.isRequired
}

export default ProfileTabTitle

const styles = StyleSheet.create({})