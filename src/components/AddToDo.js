import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Text, Alert, Keyboard} from 'react-native'
import {THEME} from '../theme'
import {AntDesign} from '@expo/vector-icons'

export const AddToDo = ({handleText}) => {

    const [value, setValue] = useState('')

    const handleData = () => {
        if(value.trim()){
            handleText(value)
            setValue('')
            Keyboard.dismiss() //скрываем клаву
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
                {/* <Button title='Добавить' onPress={handleData} /> */}
                <AntDesign.Button  onPress={handleData} name='pluscircleo'>Добавить</AntDesign.Button> 
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
        width: '60%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 3,
        borderBottomColor: THEME.mainColor
    }
})