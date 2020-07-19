import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Converter from './src/components/Converter'

export default function App() {
  return (
    <View style={styles.container}>
      <Converter coinA='USD' coinB='BRL' />
      <Converter coinA='EUR' coinB='BRL' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
