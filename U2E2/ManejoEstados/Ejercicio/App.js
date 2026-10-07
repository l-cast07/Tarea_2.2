import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet } from 'react-native';

export default function Index() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState(null);
  const [subtract, setSubtract] = useState(null);
  const [multiply, setMultiply] = useState(null);
  const [divide, setDivide] = useState(null);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledSubtract, setIsEnabledSubtract] = useState(false);
  const [isEnabledMultiply, setIsEnabledMultiply] = useState(false);
  const [isEnabledDivide, setIsEnabledDivide] = useState(false);

  const handleSwitchChange = (value) => {
    setIsEnabled(value);
    if (value) {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);

      if (!isNaN(num1) && !isNaN(num2)) {
        setSum(num1 + num2);
      } else {
        alert('Please enter valid numbers');
        setIsEnabled(false);
      }
    } else {
      setSum(null);
    }
  };

  const handleSubtractChange = (value) => {
    setIsEnabledSubtract(value);
    if (value) {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);

      if (!isNaN(num1) && !isNaN(num2)) {
        setSubtract(num1 - num2);
      } else {
        alert('Please enter valid numbers');
        setIsEnabledSubtract(false);
      }
    } else {
      setSubtract(null);
    }
  };

  const handleMultiplyChange = (value) => {
    setIsEnabledMultiply(value);
    if (value) {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);

      if (!isNaN(num1) && !isNaN(num2)) {
        setMultiply(num1 * num2);
      } else {
        alert('Please enter valid numbers');
        setIsEnabledMultiply(false);
      }
    } else {
      setMultiply(null);
    }
  };

  const handleDivideChange = (value) => {
    setIsEnabledDivide(value);
    if (value) {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);

      if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 === 0) {
          alert('Cannot divide by zero');
          setIsEnabledDivide(false);
          return;
        }
        setDivide(num1 / num2);
      } else {
        alert('Please enter valid numbers');
        setIsEnabledDivide(false);
      }
    } else {
      setDivide(null);
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

      <Text style={styles.label}>Activar para calcular la suma:</Text>
      <Switch
        value={isEnabled}
        onValueChange={handleSwitchChange}
      />
      {sum !== null && (
        <Text style={styles.result}>The sum is: {sum}</Text>
      )}

      <Text style={styles.label}>Activar para calcular la resta:</Text>
      <Switch
        value={isEnabledSubtract}
        onValueChange={handleSubtractChange}
      />
      {subtract !== null && (
        <Text style={styles.result}>The subtraction is: {subtract}</Text>
      )}

      <Text style={styles.label}>Activar para calcular la multiplicación:</Text>
      <Switch
        value={isEnabledMultiply}
        onValueChange={handleMultiplyChange}
      />
      {multiply !== null && (
        <Text style={styles.result}>The multiplication is: {multiply}</Text>
      )}

      <Text style={styles.label}>Activar para calcular la división:</Text>
      <Switch
        value={isEnabledDivide}
        onValueChange={handleDivideChange}
      />
      {divide !== null && (
        <Text style={styles.result}>The division is: {divide}</Text>
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
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: 'bold',
  },
});