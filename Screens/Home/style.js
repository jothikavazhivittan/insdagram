import {StyleSheet} from 'react-native';

const style=StyleSheet.create({
header:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding:26,
    paddingTop:30,
    paddingRight:26,
    paddingLeft:17
},
messageIcon:{
    backgroundColor:"#F9FAFB",
    padding:12,
    borderRadius:100
},
messageNumberContainer:{
    width:10,
    height:10,
    backgroundColor:"#F35BAC",
    borderRadius:10,
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    right:7,
    top:10,
},
messageNumber:{
    fontFamily:"Inter",
    fontSize:6,
    lineHeight:7,
    fontWeight:"600",
    color:"white"
},
userStoryContainer:{
    paddingHorizontal:28,
    marginTop:12,
    height:100,
},
userPostContainers:{
    marginTop:15,
    height:"auto",
    paddingHorizontal:30,
    
}
})
export default style;