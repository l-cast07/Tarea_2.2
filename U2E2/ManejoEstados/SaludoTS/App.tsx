import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  // Tipado implícito o explícito de los estados (en este caso infiere string)
  const [nombre, setNombre] = useState<string>("");
  const [saludo, setSaludo] = useState<string>("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        placeholderTextColor="#888"
        value={nombre}
        onChangeText={setNombre}
      />
      {/* Evento directo sin una función aparte */}
      <Button title="Saludar" onPress={() => setSaludo(`Hola, ${nombre}!`)} />
      <Text style={styles.texto}>{saludo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10, 
    width: 250, 
    marginBottom: 10 
  },
  texto: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "600"
  }
});