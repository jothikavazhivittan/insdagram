import {StyleSheet} from 'react-native';

const style=StyleSheet.create({
ProfileImageContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    marginTop:32
},
profileImageContent:{
    borderWidth:2,
    padding:4,
    borderColor:"#1500ff",
    borderRadius:120,
   
},
profileImage:{
    width:120,
    height:120
},
userNameContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    flexDirection:"row"
},
userName:{
    fontFamily:"Inter",
    fontSize:20,
    fontWeight:"800",
    color:"black",
    lineHeight:24
},
profileStateContainer:{
    marginHorizontal:24,
    flexDirection:"row",
    // borderWidth:1,
    justifyContent:"center",
    marginTop:16
},
singleState:{
    paddingHorizontal:18,
    alignItems:"center",
    paddingVertical:12
},
singleStateBorder:{
    borderRightWidth:1,
    borderColor:"#E9EFF1"
},
singleStateNumber:{
  fontFamily:"Inter",
  fontSize:20,
  lineHeight:24,
  fontWeight:"700",
  color:"black"
},
singleStateText:{
    marginTop:6,
    fontFamily:"Inter",
    fontSize:16,
    lineHeight:19,
    fontWeight:"400",
    color:"#79869F"
},
border:{
    borderTopWidth:1,
    borderColor:"#EFF2F6",
    marginVertical:16,
    marginHorizontal:28,

}

})
export default style
