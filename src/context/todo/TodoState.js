import React, {useReducer, useContext, useCallback} from 'react'
import { ScreenContext } from '../screen/ScreenContext'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'
import { TodoContext } from './TodoContext'
import { todoReducer } from './todoReducer'
import { Alert } from 'react-native'

export const TodoState = ({ children }) => {

    const initialState = {
        todos: [
            {id: '1', title: 'Выучить react'}, 
            {id: '2', title: 'Пройти собеседование'}
        ]
    }

    const {changeScreen} = useContext(ScreenContext)

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = title => dispatch({type: ADD_TODO, title})

    const removeTodo = id => {

        const todo = state.todos.find(t => t.id === id)

            Alert.alert(
          "Удаление элемента",
          `Вы уверены, что хотите удалить ${todo.title}?`,
          [
            {
              text: "Отмена",
              style: "positive",
            },
            {
              text : 'Удалить', 
              style: 'negative',
            onPress: () => {
            //   setTodoId(null)
            //   setState(prev => prev.filter(todo => todo.id !== id))
              changeScreen(null)
              dispatch({type: REMOVE_TODO, id})
            }
          }
          ],
          {cancelable: false}
        );

    }

    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})


    return (
    <TodoContext.Provider 
        value={{
            todos:state.todos, 
            addTodo, 
            removeTodo, 
            updateTodo
        }}
    >
        {children}
        </TodoContext.Provider>
    )
}

