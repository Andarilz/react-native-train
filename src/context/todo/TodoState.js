import React, {useReducer} from 'react'
import { TodoContext } from './TodoContext'
import { todoReducer } from './todoReducer'

export const TodoState = ({ children }) => {

    const initialState = {
        todos: [
            {id: '1', title: 'Выучить react'}, 
            {id: '2', title: 'Пройти собеседование'}
        ]
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)


    return <TodoContext.Provider value={ {todos:state.todos} }>{children}</TodoContext.Provider>

}

