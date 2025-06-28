import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import API from '../api/client';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    API.get('/chats/1/messages') // ← ID chatu môže byť dynamické neskôr
      .then((res) => setMessages(res.data))
      .catch(() => alert('Nepodarilo sa načítať správy'));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.message}>
            {item.user.name}: {item.content}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  message: { marginBottom: 10 }
});