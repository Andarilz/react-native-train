import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, FlatList } from 'react-native';
import Navbar from './src/components/Navbar';
import { MainScreen } from './src/Screens/mainScreen';
import { TodoScreen } from './src/Screens/todoScreen';

const App = () => {

  const [state, setState] = useState([
    // {id: '1', title: 'Выучить react'}
  ])

  const [todoId, setTodoId] = useState(null)

  const handleText = (title) => {
    if(title){
      console.log(2)
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

    console.log(state)

    setState(old => old.map(todo => {
      if(todo.id === id){
        console.log('inf')
        todo.title = title
      }
      return todo
    }))

    console.log(state)
  }


  let content = <MainScreen handleText={handleText} state={state} removeTodo={removeTodo} openTodo={(id) => setTodoId(id)} />


  if(todoId){
    const todo = state.find(todo => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} todo={todo} removeTodo={removeTodo} changeTitle={changeTitle} />
  }

  return (
    <View>
      <Navbar title={'Todo'} />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});

export default App


{/* <FlatList
data={state}
renderItem={({item}) => <Todo todo={item} />}
keyExtractor={item => item.id.toString()}
/> */}