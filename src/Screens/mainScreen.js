import React, {useState, useEffect, useContext, useCallback} from 'react'
import {StyleSheet, View, FlatList, Text, Image, Dimensions} from 'react-native'
import { AddToDo } from '../components/AddToDo'
import { Todo } from '../components/Todo'
import { ScreenContext } from '../context/screen/ScreenContext'
import { TodoContext } from '../context/todo/TodoContext'
import { THEME } from '../theme'


export const MainScreen = () => {

    const {addTodo, todos, removeTodo, fetchTodos, loading, error} = useContext(TodoContext)

    const {changeScreen} = useContext(ScreenContext)

    const [deviseWidth, setDeviceWIdth] = useState(Dimensions.get('window').width - (THEME.paddingHorizontal * 2))

    const loadToos = useCallback(async () => await fetchTodos(), [fetchTodos])

    useEffect(() => {
        loadToos()
    }, [])

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - (THEME.paddingHorizontal * 2)
                setDeviceWIdth(width)
        }

        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    }, [])

    let content = (
    <View style={{ width: deviseWidth}}>
        <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
            return (
            <Todo todo={item} removeTodo={removeTodo} onOpen={changeScreen} />)
        }}
        />
    </View>
    )

    if(todos.length === 0){
        content = <View style={styles.imageWrap}>
            {/* <Image style={styles.image} source={require('../img/Kakashi_Hatake.png')} /> */}
            <Image style={styles.image} source={{uri: 'https://c4.wallpaperflare.com/wallpaper/334/432/15/anime-naruto-hokage-naruto-minato-namikaze-wallpaper-preview.jpg'}} />
        </View>
    }

    return (
        <View>
            <AddToDo handleText={addTodo} />
            
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
