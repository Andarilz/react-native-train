import React from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import { AddToDo } from '../components/AddToDo'
import { Todo } from '../components/Todo'


export const MainScreen = ({handleText, state, removeTodo, openTodo}) => {

    return (
        <View>
            <AddToDo handleText={handleText} />

            <FlatList
            data={state}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
                console.log()
                return (
                <Todo todo={item} removeTodo={removeTodo} onOpen={openTodo} />)
            }}
            />

        </View>
    )
}

