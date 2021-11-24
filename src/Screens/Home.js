import React, { useContext, createContext, Children, useState, useEffect } from 'react';
import {Text, View, Button,FlatList,StyleSheet} from 'react-native';
import BlogContext from '../Context/BlogContext';

import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Home=({navigation,route})=>{
    const {data,deleteblog,getblog}=useContext(BlogContext);
    

    useEffect(()=>{
        getblog();

        const listener=navigation.addListener('didFocus',()=>{
            getblog();
        });

        return listener;   
    },[navigation])
    
    return (
        
        <View>
            
            <FlatList
                
                data={data}
                
                keyExtractor={post=>{return `${post.id}`}}
                key={posts=>{`${posts.id}`}}
                renderItem={({item})=>{
                    
                    return (
                        
                        <View style={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal:20, paddingVertical:20}}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("Screen",{id:item.id})}}><Text>{item.title}-{item.id}</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=>deleteblog(item.id)}><Icon name="trash" size={20}></Icon></TouchableOpacity>
                        </View>
                    )
                }}

            />
            
        </View>
        
    );
};


        
    



export default Home;