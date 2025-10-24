import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function StartScreen() {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push({ pathname: '/home', params: { name } })}
      >
        <Text style={styles.btnText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#7D5FFF', marginBottom: 30 },
  input: { borderWidth: 1, borderColor: '#ccc', width: '80%', padding: 10, borderRadius: 10 },
  button: { marginTop: 20, backgroundColor: '#1E90FF', padding: 15, borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: 'bold' },
});
