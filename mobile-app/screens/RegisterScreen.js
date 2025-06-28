// mobile-app/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import API from '../api/client';

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await API.post('/register', { email, password });
            alert('Registrácia úspešná. Prihlás sa.');
            navigation.navigate('Login');
        } catch (e) {
            alert('Chyba pri registrácii.');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Email:</Text>
            <TextInput value={email} onChangeText={setEmail} style={styles.input} />
            <Text>Heslo:</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            <Button title="Registrovať" onPress={handleRegister} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 100 },
    input: { borderWidth: 1, padding: 8, marginVertical: 10 }
});
