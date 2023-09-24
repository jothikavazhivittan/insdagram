import { View, Text } from 'react-native'
import React from 'react'
import Proptypes from 'prop-types'
import style from './style'

const Title = props => {
  return (
    <View>
      <Text style={style.title}>{props.title}</Text>
    </View>
  )
}
Title.Proptypes={
  title:Proptypes.string.isRequired,
}

export default Title