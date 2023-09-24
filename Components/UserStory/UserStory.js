import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Proptypes from 'prop-types';
import style from './style';
import UseProfileImage from '../UseProfileImage/UseProfileImage';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <UseProfileImage/>
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};
UserStory.proptypes = {
  firstName: Proptypes.string.isRequired,
};

export default UserStory;

const styles = StyleSheet.create({});
