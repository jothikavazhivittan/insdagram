import {StyleSheet, Text, View, Image,Pressable} from 'react-native';
import React from 'react';
import Proptypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faComment,
  faEllipsisH,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import UseProfileImage from '../UseProfileImage/UseProfileImage';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.userInformationContainer}>
        <View style={style.userInformation}>
          <UseProfileImage/>
          <View style={style.userPostInformation}>
          <Text style={style.name}>
            {props.firstName}
            {props.lastName}
          </Text>
          {props.location && (
          <Text style={style.location}>{props.location}</Text>
          )}
          </View>
        </View>
        <Pressable>   
            <FontAwesomeIcon icon={faEllipsisH} color={"#79869f"} size={22}/>
          </Pressable>
     </View>
      <View style={style.post}>
      <Image
      resizeMode={"stretch"}
       source={require('../../assets/images/default_post.png')} />
      </View>
      <View style={style.userpostStats}>
        <Pressable style={style.userPostStatButton}>
          <FontAwesomeIcon icon={faHeart} style={style.userPostStatIcon}/>
          <Text style={style.userPostStatText}>{props.likes}</Text>
        </Pressable>
        <Pressable style={style.userPostStatButton}>
          <FontAwesomeIcon icon={faComment} style={style.userPostStatIcon} />
          <Text style={style.userPostStatText}>{props.likes}</Text>
        </Pressable>
        <Pressable style={style.userPostStatButton}>
          <FontAwesomeIcon icon={faBookmark} style={style.userPostStatIcon} />
          <Text style={style.userPostStatText}>{props.bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};
UserPost.proptypes = {
  firstName: Proptypes.string.isRequired,
  lastName: Proptypes.string.isRequired,
  likes: Proptypes.number.isRequired,
  comments: Proptypes.number.isRequired,
  bookmarks: Proptypes.number.isRequired,
  location: Proptypes.string
};

export default UserPost;

const styles = StyleSheet.create({});
