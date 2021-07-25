import React from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'

export const AddToDo = props => {
    return (
        <View style={styles.block}>
            <TextInput style={styles.input} />
            <Button title='Добавить' />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 3,
        borderBottomColor: '#3949ab'
    }
})