import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password
      });
      // token uložený do pamäte / storage
      navigation.navigate('Chat');
    } catch (error) {
      alert('Prihlásenie zlyhalo');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} />
      <Text>Heslo:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Prihlásiť sa" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 100 },
  input: { borderWidth: 1, padding: 8, marginVertical: 10 }
});