import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import { Todo } from '../components/Todo'
import {THEME} from '../theme'


export const TodoScreen = ({goBack, todo, removeTodo}) => {

    const {id, data} = todo

    return (
        <View>
            <Text>{data}</Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button 
                    title='Назад' 
                    onPress={goBack} 
                    color={THEME.grayColor}
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                    title='Удалить' 
                    color='red' 
                    onPress={() => removeTodo(id) } 
                    color={THEME.dangerColor}
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    }
})