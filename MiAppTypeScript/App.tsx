import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Image, 
  TextInput, 
  Switch, 
  TouchableOpacity, 
  ScrollView, 
  Alert 
} from 'react-native';

export default function App() {
  // Estados para manejar el Switch y el TextInput
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('');

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    // Se reemplaza el View principal por un ScrollView para permitir desplazamiento vertical
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>¡Hola!</Text>
      <Text style={styles.subtitle}>Esta es mi primera app en TypeScript</Text>
      <Text style={styles.textStyle}>Texto con estilo</Text>

      {/* Segundo bloque original del ejercicio */}
      <View style={styles.segundoBloque}>
        <Text style={styles.textSecundario}>Este es otro bloque</Text>
        <Button 
          title="PRESIÓNAME" 
          onPress={() => Alert.alert("¡Hola!", "Has presionado el botón estándar.")} 
        />
        {/* Asegúrate de tener una imagen en la carpeta assets, o usa una URI externa para probar */}
        <Image 
          source={require('./assets/icon.png')} 
          style={styles.logo} 
        />
      </View>

      {/* Tercer bloque: Reto con nuevos componentes del anexo */}
      <View style={styles.tercerBloque}>
        <Text style={styles.textSecundario}>Nuevos Componentes</Text>

        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre aquí..."
          onChangeText={setText}
          value={text}
        />

        {/* Contenedor flexible con dirección de fila para el Switch[cite: 1] */}
        <View style={styles.switchContainer}>
          <Text style={{ fontWeight: 'bold' }}>¿Activar modo oscuro?</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* Botón personalizado con opacidad al tocarlo[cite: 1] */}
        <TouchableOpacity 
          style={styles.customButton} 
          onPress={() => Alert.alert("Mensaje", text ? `Hola ${text}` : "No escribiste nada")}
        >
          <Text style={styles.customButtonText}>Saludar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

// Implementación de nuevos estilos basados en los anexos[cite: 1]
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que el ScrollView crezca y ocupe la pantalla
    backgroundColor: '#add8e6', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60, // Espacio superior para evitar la barra de estado[cite: 1]
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold', // Define el grosor del texto[cite: 1]
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 24,
    color: 'blue',
    marginBottom: 20,
  },
  segundoBloque: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '85%', // Establece el ancho del componente[cite: 1]
  },
  textSecundario: {
    fontSize: 16,
    color: 'black',
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
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '85%',
    // Configuración de sombra para iOS[cite: 1]
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevación para Android (sombra)
    elevation: 5,
  },
  input: {
    height: 45,
    borderColor: 'gray', // Establece el color del borde[cite: 1]
    borderWidth: 1, // Define el grosor del borde[cite: 1]
    width: '100%',
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  switchContainer: {
    flexDirection: 'row', // Eje principal en contenedor flexible[cite: 1]
    justifyContent: 'space-between', // Alinea los componentes a lo largo del eje principal[cite: 1]
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: '#0000ff',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  customButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});