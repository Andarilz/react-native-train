import React, {useState, useContext} from 'react'
import {StyleSheet, View, Text, Button, Dimensions} from 'react-native'
import { Todo } from '../components/Todo'
import {THEME} from '../theme'
import { AppCard } from '../components/UI/AppCard'
import { EditModal } from '../components/editModal'
import {AppTextBold} from '../components/UI/AppTextBold'
import {AppButton} from '../components/UI/AppButton'
import {AntDesign, FontAwesome} from '@expo/vector-icons'
import { TodoContext } from '../context/todo/TodoContext'
import { ScreenContext } from '../context/screen/ScreenContext'


export const TodoScreen = () => {

    const {todos, updateTodo, removeTodo} = useContext(TodoContext)

    const {todoId, changeScreen} = useContext(ScreenContext)

    const [modal, setModal] = useState(false)

    const todo = todos.find(t => t.id === todoId)

    const {id, title} = todo

    const saveHandler = titleInf => {
        updateTodo(id, titleInf)
        setModal(false)
    }

    return (
        <View>

            <EditModal 
                value={todo.title} 
                visible={modal} 
                onCancel={() => setModal(false)} 
                id={todo.id} 
                changeTitle={saveHandler}  
            />

           <AppCard 
            style={styles.card}
           >

            <AppTextBold 
            style={styles.text}>{title}</AppTextBold>

            {/* <Button title='Ред.' onPress={() => setModal(true)} /> */}
            <AppButton 
            onPress={() => setModal(true)}
            >

                <FontAwesome name='edit' size={20} color='#fff' />

            </AppButton>

           </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton 
                    onPress={() => changeScreen(null)} 
                    color={THEME.grayColor}
                    >
                        <AntDesign name='back' size={20} color='#fff' />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton 
                    color='red' 
                    onPress={() => removeTodo(id)} 
                    color={THEME.dangerColor}
                    >
                        <FontAwesome name='remove' size={20} color='#fff' />
                    </AppButton>
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
        width: Dimensions.get('window').width / 3
    },
    text: {
        marginRight: 20,
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15,
        justifyContent: 'space-between'
    }
})