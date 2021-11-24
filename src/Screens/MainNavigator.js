import  React,{useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../Screens/Home';
import screen from '../Screens/ShowScreen';
import {BlogProvider} from '../Context/BlogContext'; 
import { Icon } from 'react-native-vector-icons/Feather';
import create from '../Screens/Create';
import context from '../Context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button,Text,Image } from 'react-native';
import edit from '../Screens/Edit';

const Stack = createStackNavigator()



function MainStackNavigator() {
  
  
  return (
    <NavigationContainer>
        
      <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name="Home" component={home} options={({navigation})=>({headerRight:()=>(<TouchableOpacity onPress={()=>navigation.navigate("Create Blog")} ><Image style={{width:30,height:30,marginHorizontal:15}} source={require('../../node_modules/react-native-vector-icons/plus_48px.png')}/></TouchableOpacity>)})}/>
            <Stack.Screen name="Screen" component={screen} options={({navigation})=>({headerLeft:()=>(<TouchableOpacity onPress={()=>navigation.navigate("Home",{id:global.id})}><Image style={{width:30,height:30,marginHorizontal:15}} source={require('../../left_100px.png')}/></TouchableOpacity>),headerRight:()=>(<TouchableOpacity onPress={()=>navigation.navigate("Edit Blog")} ><Image style={{width:20,height:20,marginHorizontal:15}} source={require('../../edit_100px.png')}/></TouchableOpacity>)})}/>
            <Stack.Screen name="Create Blog" component={create} options={{title:'Create Blog'}}/>
            <Stack.Screen name="Edit Blog" component={edit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const final=()=>{
    return(
        <BlogProvider>
            <MainStackNavigator/>
        </BlogProvider>
    )

};
export default final;