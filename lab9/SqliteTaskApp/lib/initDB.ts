export async function initializeDatabase(db: any) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      completed INTEGER DEFAULT 0
    );
  `);
}
