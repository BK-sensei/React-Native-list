import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native';
import List from './components/List';

const styles = StyleSheet.create ({
  container: {
    margin: 40,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900'
  }
})

const App = () => {
  return (
    <ScrollView>
      <Text style={styles.container}>Countries</Text>
      <List />
    </ScrollView>
  );
};

export default App;