import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Post } from './Post';

export const PostList = ({data, onOpen}) => {
    if(!data.length){
        return(
            <View style={styles.wrapper} >
                <Text style={styles.text}>No posts</Text>
            </View>
        );
    };
    return(
        <View style={styles.wrapper} >
            <FlatList 
                data={data} 
                keyExtractor={ post => post.id.toString() } 
                renderItem={ ({ item }) => <Post onOpen={onOpen} post={ item } />} 
            />
        </View>

    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    text: {
        fontFamily: 'open-regular',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 18
    }    
});