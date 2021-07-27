import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, FlatList } from 'react-native';
import Navbar from './src/components/Navbar';
import { MainScreen } from './src/Screens/mainScreen';
import { TodoScreen } from './src/Screens/todoScreen';

const App = () => {

  const [state, setState] = useState([
    {id: '1', data: 'Выучить react-native'},
    {id: '2', data: 'Стать синьором в вебе'}
  ])

  const [todoId, setTodoId] = useState('1')

  const handleText = (data) => {
    if(data){
      setState([...state, {
        data, id: Date.now().toString()
      }
    ])
    }
  }

  const removeTodo = id => {
    setState(prev => prev.filter(todo => todo.id !== id))
  }


  let content = <MainScreen handleText={handleText} state={state} removeTodo={removeTodo} openTodo={(id) => setTodoId(id)} />


  if(todoId){
    const todo = state.find(todo => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} todo={todo} removeTodo={removeTodo} />
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