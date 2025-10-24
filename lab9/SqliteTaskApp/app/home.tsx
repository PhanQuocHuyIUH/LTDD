import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Task = { id: number; name: string; completed: number };

export default function HomeScreen() {
    const { name } = useLocalSearchParams<{ name: string }>();
    const [tasks, setTasks] = useState<Task[]>([]);
    const router = useRouter();
    const db = useSQLiteContext();

    const loadTasks = async () => {
        const result = await db.getAllAsync<Task>('SELECT * FROM tasks');
        setTasks(result);
    };

    const toggleTask = async (id: number, completed: number) => {
        await db.runAsync('UPDATE tasks SET completed = ? WHERE id = ?', [completed ? 0 : 1, id]);
        loadTasks();
    };

    const deleteTask = async (id: number) => {
        await db.runAsync('DELETE FROM tasks WHERE id = ?', [id]);
        loadTasks();
    };

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hi {name || 'User'} 👋</Text>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <TouchableOpacity onPress={() => toggleTask(item.id, item.completed)}>
                            <Text
                                style={[
                                    styles.text,
                                    item.completed ? { textDecorationLine: 'line-through' } : undefined,
                                ]}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteTask(item.id)}>
                            <Text style={styles.delete}>🗑️</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <View style={styles.bottomButtons}>
                <Button title="➕ Add" onPress={() => router.push('/add')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginVertical: 5,
    },
    text: { fontSize: 16 },
    delete: { color: 'red', fontSize: 18 },
    bottomButtons: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
});
