import React,{useContext, useState, useEffect} from 'react';
import {Text,StyleSheet,Button,View}from 'react-native';
import context from '../Context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';
import { cos } from 'react-native-reanimated';


const ShowScreen=({route})=>{
    const {data}=useContext(context);
    global.id=route.params.id;
    const edar=data.filter((blogs)=>{return blogs.id===global.id});
   
    return (
        
        <View>
            <FlatList
                data={edar}
                keyExtractor={(posts)=>{return `${posts.id}`}}
                key={(post)=>{`${post.id}`}}
                renderItem={({item})=>{
                    return(
                        <View >
                            <Text>{item.title}</Text>
                            <Text>{item.content}</Text>
                        </View>
                    )

                }}
            />
        </View>
    )
};

export default ShowScreen;