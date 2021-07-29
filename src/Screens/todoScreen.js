import React, {useState} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import { Todo } from '../components/Todo'
import {THEME} from '../theme'
import { AppCard } from '../components/UI/AppCard'
import { EditModal } from '../components/editModal'


export const TodoScreen = ({goBack, todo, removeTodo, changeTitle}) => {

    const [modal, setModal] = useState(false)

    const {id, title} = todo

    const saveHandler = titleInf => {
        changeTitle(id, titleInf)
        setModal(false)
    }

    return (
        <View>

            <EditModal value={todo.title} visible={modal} onCancel={() => setModal(false)} id={todo.id} changeTitle={saveHandler}  />

           <AppCard style={styles.card}>
            <Text style={styles.text}>{title}</Text>
            <Button title='Ред.' onPress={() => setModal(true)} />
           </AppCard>
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
                    onPress={() => removeTodo(id)} 
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
    },
    text: {
        marginRight: 20,
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})