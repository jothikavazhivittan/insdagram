import { StyleSheet, Text, View,ScrollView ,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStyle from '../../assets/styles/main'
import style from './style'
import { ProfileTabNavigation } from '../../navigation/MainNavigation'
const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundwhite,globalStyle.flex]}>
    <ScrollView>
    <View style={style.ProfileImageContainer}>
      <View style={style.profileImageContent}>
        <Image source={require('../../assets/images/default_profile.png')}
         style={style.profileImage}/>
      </View>
   </View>
   <View style={style.userNameContainer}>
    <Text style={style.userName}>JothikaVazhivittan</Text>
   </View>
   <View style={style.profileStateContainer}>
    <View style={[style.singleState ,style.singleStateBorder]}>
      <Text style={style.singleStateNumber}>1,200</Text>
      <Text style={style.singleStateText}>Posts</Text>
    </View>
    <View style={[style.singleState,style.singleStateBorder]}>
      <Text style={style.singleStateNumber}>900M</Text>
      <Text style={style.singleStateText}>Followers</Text>
    </View>
    <View style={[style.singleState,style.singleStateBorder]}>
      <Text style={style.singleStateNumber}>150</Text>
      <Text style={style.singleStateText}>Following</Text>
    </View>
</View>
<View style={style.border}>
</View>
<View style={{height:"auto"}}>
<ProfileTabNavigation/>
</View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})