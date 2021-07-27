import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Text, Alert} from 'react-native'
import {THEME} from '../theme'

export const AddToDo = ({handleText}) => {

    const [value, setValue] = useState('')

    const handleData = () => {
        if(value.trim()){
            handleText(value)
            setValue('')
        } else {
            Alert.alert('Введите название дела')
        }
    }

    return (
            <View style={styles.block}>
                <TextInput 
                style={styles.input} 
                onChangeText={setValue} 
                value={value} 
                placeholder='Введите название дела'
                autoCorrect={false}
                autoCapitalize='none'
                // keyboardType='number-pad'
                />
                <Button title='Добавить' onPress={handleData} />
            </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 3,
        borderBottomColor: THEME.mainColor
    }
})