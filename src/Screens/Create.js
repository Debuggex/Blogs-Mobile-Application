import React,{useContext, useState} from 'react';
import {Text,StyleSheet,Button,View}from 'react-native';
import context from '../Context/BlogContext';
import { FlatList, TextInput } from 'react-native-gesture-handler';

const Create=({navigation})=>{
    const[title,settitle]=useState("");
    const[content,setcontent]=useState("");
    const {blog,addblog,del,search}=useContext(context);
    return (
        <View>
            <Text>Title</Text>
            <TextInput
                style={{fontSize:15,borderWidth:1,borderRadius:15,margin:15}}
                value={title}
                onChangeText={(newvalue)=>{settitle(newvalue);}}
            />
            <Text>Content</Text>
            <TextInput
                style={{fontSize:15,borderWidth:1,borderRadius:15,margin:15}}
                value={content}
                onChangeText={(newcon)=>{setcontent(newcon);}}
            />
            <Button
                title="Add Blog"
                onPress={()=>{
                        addblog(title,content,()=>{navigation.navigate('Home')});
                        
                    }                
                }
                
            />
            
        </View>
    )
};

export default Create;