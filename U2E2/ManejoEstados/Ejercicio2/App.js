import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [saludo, setSaludo] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSaludar = () => {
    setSaludo(`¡Hola, ${nombre}!`);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#222' : '#f0f0f0' }]}>
      <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Escribe tu nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu nombre aquí"
        value={nombre}
        onChangeText={setNombre}
      />

      <Button title="Saludar" onPress={handleSaludar} />

      <Text style={[styles.result, { color: isDarkMode ? '#fff' : '#000' }]}>{saludo}</Text>

      <View style={styles.switchContainer}>
        <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Modo oscuro:</Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
        />
      </View>
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});