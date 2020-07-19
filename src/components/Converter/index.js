import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import api from '../../services/index'
export default function Converter(props) {
  const [convertedValue, setConvertedValue] = useState(0)
  const [totalCoin, setTotalCoin] = useState(0)

  let { coinA, coinB } = props

  const toConvert = async () => {
    let coins = `${coinA}_${coinB}`
    const resp = await api.get(`convert?q=${coins}&compact=ultra&apiKey=e7ab1182bfa6fabc321b`);

    console.log('RESp', resp.data);

    const price = resp.data[coins]

    const result = (price * parseFloat(coinB))

    setConvertedValue(result)

    Keyboard.dismiss();

  }


  return (
    <View>
      <Text style={styles.title}>{coinA} para {coinB}</Text>

      <TextInput
        placeholder='Valor a ser convertido'
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(value) => { setTotalCoin(value) }} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => toConvert()}
      >
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>

      <Text style={styles.value}>Convertido: {convertedValue === 0 ? '' : convertedValue}</Text>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    width: 280,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 5,
    marginBottom: 20
  },
  button: {
    width: 280,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'darkblue',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  value: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30
  }
});