import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import styles from '../styles/LoginScreenStyles';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al iniciar sesión');
      }

      Alert.alert('Éxito', data.message);
      navigation.navigate('Pantalla2');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/login1.jpg')}
        style={styles.backgroundImage}>
        <Image
          source={require('../assets/images/icon2.jpg')}
          style={styles.logo}
        />
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/images/user.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="NOMBRE DE USUARIO"
            style={styles.input}
            placeholderTextColor="#000"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/images/lock.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="CONTRASEÑA"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#000"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ACCEDER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => navigation.navigate('RecuperarContra')}>
          <Text style={styles.forgotPasswordText}>
            ¿OLVIDASTE LA CONTRASEÑA?
          </Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.secondaryText}>¿NO TIENES CUENTA?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
