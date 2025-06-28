import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vitaj v chate!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 100 },
  text: { fontSize: 20 }
});