import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Index() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [operacion, setOperacion] = useState('');

  // Función para manejar las operaciones según el botón presionado
  const handleCalculate = (op) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      switch (op) {
        case 'suma':
          setResultado(num1 + num2);
          setOperacion('Suma');
          break;
        case 'resta':
          setResultado(num1 - num2);
          setOperacion('Resta');
          break;
        case 'multiplicacion':
          setResultado(num1 * num2);
          setOperacion('Multiplicación');
          break;
        case 'division':
          if (num2 !== 0) {
            setResultado(num1 / num2);
            setOperacion('División');
          } else {
            alert('No se puede dividir entre cero');
          }
          break;
        default:
          break;
      }
    } else {
      alert('Please enter valid numbers');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter the first number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />

      <Text style={styles.label}>Enter the second number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />

      {/* Botones para cada una de las operaciones */}
      <View style={styles.buttonContainer}>
        <Button title="Calcular Suma" onPress={() => handleCalculate('suma')} />
        <View style={styles.separator} />
        <Button title="Calcular Resta" onPress={() => handleCalculate('resta')} />
        <View style={styles.separator} />
        <Button title="Calcular Multiplicación" onPress={() => handleCalculate('multiplicacion')} />
        <View style={styles.separator} />
        <Button title="Calcular División" onPress={() => handleCalculate('division')} />
      </View>

      {resultado !== null && (
        <Text style={styles.result}>El resultado de la {operacion} es: {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fefefe',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
  },
  separator: {
    height: 10,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});