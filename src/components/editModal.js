import React, {useState} from 'react'
import {Modal, Button, View, StyleSheet, TextInput, Alert} from 'react-native'
import { THEME } from '../theme'
import { AppButton } from './UI/AppButton'

export const EditModal = ({visible, onCancel, value, changeTitle}) => {

    const [title, setTitle] = useState(value)

    const savehandler = () => {
        if(title.trim().length < 3){
            Alert.alert('Ошибка!', `Минимальная длинна названия - 3 символа. Сейчас введено ${title.trim().length} символов`)
            console.log(0)
        } else {
            console.log(1)
            changeTitle(title)
        }
    }

    const cancelHandler = () => {
        setTitle(value)
        onCancel()
    }

    return (
        <Modal 
        visible={visible}
        animationType='slide'
        transparent={false}
        >
            <View style={styles.wrap}>
                <TextInput 
                value={title}
                onChangeText={setTitle}
                style={styles.input} 
                placeholder='Введите новое название' 
                autoCapitalize='none' 
                autoCorrect={false} 
                maxLength={64} 
                />
                <View style={styles.buttons}>
                    <AppButton  onPress={cancelHandler} color={THEME.dangerColor}>Отменить</AppButton>
                    <AppButton  onPress={savehandler}>Сохранить </AppButton>
                </View>
            </View>
        </Modal>
    )
}


const styles= StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.mainColor,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})