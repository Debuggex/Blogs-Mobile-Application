import React, { useState, useEffect, useContext } from 'react';
import {Text,View, Button} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import context from '../Context/BlogContext';

const Edit=({navigation})=>{
    
    const{search,editblog}=useContext(context);
    const data=search(global.id);
    
    const[title,settitle]=useState(data[0].title);
    data[0].title=title;
    
    const[content,setcontent]=useState(data[0].content);
    data[0].content=content;
   
    const combine=()=>{
        editblog(global.id,title,content);
        navigation.navigate("Screen",{id:global.id});
    }

    return (
        <View>
            <TextInput  value={title} onChangeText={(newvalue)=>settitle(newvalue)}/>
            <TextInput  value={content} onChangeText={(newcon)=>setcontent(newcon)}/>
            <Button title="Submit Changes" onPress={combine}/>
        </View>   
    );
};

export default Edit;