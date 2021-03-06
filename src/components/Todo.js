import React, {useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {AppText} from '../components/UI/AppText'

export const Todo = ({todo, removeTodo, onOpen}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.5} 
            onPress={() => onOpen(todo.id)}
            onLongPress={() => removeTodo(todo.id)}
        >
            <View style={styles.todo}>
                <AppText>{todo.title}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        margin: 10
    },
    title: {
        color: 'red'
    }
})