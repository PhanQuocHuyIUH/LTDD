import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from '../lib/initDB';

export default function Layout() {
  // Chạy khi provider mở DB lần đầu
  const onInit = async (db: any) => {
    await initializeDatabase(db);
  };

  return (
    <SQLiteProvider databaseName="tasks.db" onInit={onInit}>
      <Stack screenOptions={{ headerShown: false }} />
    </SQLiteProvider>
  );
}
