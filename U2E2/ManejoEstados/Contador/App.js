import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [saludo, setSaludo] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        onChangeText={setNombre}
      />
      {/* Evento directo sin una funcion aparte */}
      <Button title="Saludar" onPress={() => setSaludo(`Hola, ${nombre}!`)} />
      <Text>{saludo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: { borderWidth: 1, padding: 8, width: 200, marginBottom: 10 }
});