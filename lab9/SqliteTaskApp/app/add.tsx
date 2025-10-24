import { useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function AddScreen() {
  const [job, setJob] = useState('');
  const router = useRouter();
  const db = useSQLiteContext();

  const handleAdd = async () => {
    if (!job.trim()) return;
    await db.runAsync('INSERT INTO tasks (name) VALUES (?)', [job]);
    router.back();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Input your job"
        value={job}
        onChangeText={setJob}
        style={styles.input}
      />
      <Button title="FINISH →" color="#1E90FF" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
});
