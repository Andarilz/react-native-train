import React, {useState, useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import Navbar from './components/Navbar'
import {THEME} from '../src/theme'
import { MainScreen } from '../src/Screens/mainScreen';
import { TodoScreen } from '../src/Screens/todoScreen';
import { TodoContext } from './context/todo/TodoContext';
import { ScreenContext } from './context/screen/ScreenContext';


export const MainLayout = () => {

    const {todoId}= useContext(ScreenContext)

        return (
                <View>
                  <Navbar title={'Список дел'} />
                  <View style={styles.container}> 
                  { todoId ? <TodoScreen /> : <MainScreen /> }
                  </View>
                </View>
        )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.paddingHorizontal,
      paddingVertical: 20
    }
  });