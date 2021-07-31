import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import Navbar from './src/components/Navbar';
import { MainScreen } from './src/Screens/mainScreen';
import { TodoScreen } from './src/Screens/todoScreen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'

async function loadApplication() {
  await Font.loadAsync({
    'roboto-bold': require('./assets/Roboto-Bold.ttf'),
    'roboto-regular': require('./assets/Roboto-Regular.ttf')
  })
}

const App = () => {

  const [state, setState] = useState([
    // {id: '1', title: 'Выучить react'}
  ])

  const [todoId, setTodoId] = useState(null)

  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
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


  let content = <MainScreen handleText={handleText} state={state} removeTodo={removeTodo} openTodo={(id) => setTodoId(id)} />


  if(todoId){
    const todo = state.find(todo => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} todo={todo} removeTodo={removeTodo} changeTitle={changeTitle} />
  }

  return (
    <View>
      <Navbar title={'Список дел'} />
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

