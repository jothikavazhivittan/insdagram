import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import { Route } from './Route';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';
import ProfileTabTitle from '../Components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabPost from '../Components/ProfileTabPost/ProfileTabPost';
const Stack=createStackNavigator();
const Drawer=createDrawerNavigator();
const ProfileTabs=createMaterialTopTabNavigator();

const Tab2=()=>{
  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text>This a Tabs 2</Text>
    </View>
  )
}
const Tab3=()=>{
  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text>This a Tabs 3</Text>
    </View>
  )
}


export const ProfileTabNavigation= () => {
  return(
 <ProfileTabs.Navigator 
 screenOptions={{
  tabBarIndicatorStyle:{
    backgroundColor:"transparent",
  },
  tabBarStyle:{
    elevation:0,
    zIndex:0
  }
 }}>
     <ProfileTabs.Screen name={'Tab1'} component={ProfileTabPost}
     options={{
      tabBarLabel:({focused})=>{
         return <ProfileTabTitle title={"Photos"} isFoucused={focused}/>
      }
     }}
     />
     <ProfileTabs.Screen name={'Tab2'} component={Tab2} options={{
      tabBarLabel:({focused})=>{
        return <ProfileTabTitle title={'Videos'} isFoucused={focused}/>
      }
     }}/>
     <ProfileTabs.Screen name={'Tab3'} component={Tab3} options={{
      tabBarLabel:({focused})=>{
        return <ProfileTabTitle title={'Saved'} isFoucused={focused}/>
      }
     }}
     />
 </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation=()=>{
  return(
    <Drawer.Navigator screenOptions={{header:() => null}}>
      <Drawer.Screen name={Route.Home} component={Home}/>
      <Drawer.Screen name={Route.Profile} component={Profile}/>
    </Drawer.Navigator>
  )
}
const MainNavigation=()=>{
    return(
  <Stack.Navigator initialRouteName={Route.Home} 
  screenOptions={{header:()=>null,headerShown:false}}>
    <Stack.Screen name={'Drawer'} component={MainMenuNavigation}/>
 </Stack.Navigator>
    )
}
export default MainNavigation;