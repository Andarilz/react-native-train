import React, {useState, useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import Navbar from './components/Navbar'
import {THEME} from '../src/theme'
import { MainScreen } from '../src/Screens/mainScreen';
import { TodoScreen } from '../src/Screens/todoScreen';
import { TodoContext } from './context/todo/TodoContext';


export const MainLayout = () => {

    const todoContext = useContext(TodoContext)

    const [state, setState] = useState([])
  
    const [todoId, setTodoId] = useState(null)

    let content = <MainScreen handleText={handleText} state={todoContext.todos} removeTodo={removeTodo} openTodo={(id) => setTodoId(id)} />


    if(todoId){
      const todo = state.find(todo => todo.id === todoId)
      content = <TodoScreen goBack={() => setTodoId(null)} todo={todo} removeTodo={removeTodo} changeTitle={changeTitle} />
    }

    const handleText = (title) => {
        if(title){
          setState(prev => [...prev, {
            title, id: Date.now().toString()
          }
        ])
        }
      }
    
      const removeTodo = id => {
    
        const todo = state.find(to => to.id === id)
    
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
              setTodoId(null)
              setState(prev => prev.filter(todo => todo.id !== id))
            }
          }
          ],
          {cancelable: false}
        );
      }
    
      const changeTitle = (id, title) => {
    
        setState(old => old.map(todo => {
          if(todo.id === id){
            todo.title = title
          }
          return todo
        }))
      }

        return (
                <View>
                <Navbar title={'Список дел'} />
                <View style={styles.container}>{content}</View>
                </View>
        )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.paddingHorizontal,
      paddingVertical: 20
    }
  });