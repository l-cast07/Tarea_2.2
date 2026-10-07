import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Button, 
  ScrollView, 
  TextInput, 
  Switch, 
  TouchableOpacity 
} from 'react-native';

export default function App() {
  // Estados para manejar el TextInput y el Switch
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    // Se utiliza ScrollView en lugar de View como contenedor principal[cite: 1]
    <ScrollView contentContainerStyle={styles.container}>
      <Text>uech.hciddacduacxcdas.cug ac.cdiadc.as</Text>
      <Text style={styles.textStyles}>Texto con estilo</Text>
      <Text style={styles.textStyles2}>Texto con estilo</Text>
      
      {/* Bloque original[cite: 2] */}
      <View style={styles.segundoBloque}>
        <Text style={styles.textSecundario}>Este es otro bloque</Text>
        <Button title='Presioname' onPress={() => alert('Hola')} />
        <Image
          source={require('./assets/rocket-cat.jpg')}
          style={styles.logo}
        />
      </View>

      {/* Nuevo bloque con componentes adicionales[cite: 1] */}
      <View style={styles.tercerBloque}>
        <Text style={styles.textSecundario}>Nuevos Componentes</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Escribe algo aquí..."
          onChangeText={setText}
          value={text}
        />

        <View style={styles.switchContainer}>
          <Text style={{ fontWeight: 'bold' }}>¿Activar opción?</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <TouchableOpacity 
          style={styles.customButton} 
          onPress={() => alert(text ? `Escribiste: ${text}` : 'No has escrito nada')}
        >
          <Text style={styles.buttonText}>Botón Personalizado</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center', // Centrado para mejorar la presentación[cite: 2]
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  textStyles: {
    fontSize: 24,
    color: 'blue',
  },
  textStyles2: {
    fontSize: 24,
    color: 'green',
    fontStyle: 'italic', // Uso de fontStyle
  },
  segundoBloque: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20, // Espaciado externo[cite: 1]
  },
  textSecundario: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold', // Grosor de texto modificado[cite: 1]
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 15,
    marginTop: 15,
  },
  tercerBloque: {
    backgroundColor: '#e0f7fa',
    padding: 20,
    borderRadius: 15,
    width: '85%',
    alignItems: 'center',
    // Implementación de sombras para iOS[cite: 1]
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevación para Android
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray', // Color de borde[cite: 1]
    borderWidth: 1,      // Grosor del borde[cite: 1]
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row', // Dirección de flexión horizontal[cite: 1]
    alignItems: 'center', // Alineación en eje secundario[cite: 1]
    justifyContent: 'space-between', // Espaciado a lo largo del eje principal[cite: 1]
    width: '100%',
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: '#ff5722',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  }
});