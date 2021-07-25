import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddToDo } from './src/AddToDo';
import Navbar from './src/Navbar';

const App = () => {
  return (
    <View>
      <Navbar title='Todo' />
      <View style={styles.container}>
      <AddToDo />
      </View>
      {/* <StatusBar style="auto" /> */}
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
