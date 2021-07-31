import React from 'react'
import {StyleSheet, View, FlatList, Text, Image} from 'react-native'
import { AddToDo } from '../components/AddToDo'
import { Todo } from '../components/Todo'


export const MainScreen = ({handleText, state, removeTodo, openTodo}) => {

    let content = (<FlatList
        data={state}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
            return (
            <Todo todo={item} removeTodo={removeTodo} onOpen={openTodo} />)
    }}
    />)

    if(state.length === 0){
        content = <View style={styles.imageWrap}>
            {/* <Image style={styles.image} source={require('../img/Kakashi_Hatake.png')} /> */}
            <Image style={styles.image} source={{uri: 'https://c4.wallpaperflare.com/wallpaper/334/432/15/anime-naruto-hokage-naruto-minato-namikaze-wallpaper-preview.jpg'}} />
        </View>
    }

    return (
        <View>
            <AddToDo handleText={handleText} />
            
            {content}

        </View>
    )
}


const styles = StyleSheet.create({
    imageWrap: {
        alignItems: 'center',
        height: 300,
        justifyContent: 'center',
        padding: 10
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})
