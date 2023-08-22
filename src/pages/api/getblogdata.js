import mysql from "mysql2/promise";

export default async function handler(req, res) {
  try {
    // Create a connection pool
    const dbPool = await mysql.createPool({
      host: 'localhost',
      user: 'root',
      database: 'db',
      waitForConnections: true,
      connectionLimit: 10, // Adjust the limit as needed
      queueLimit: 0
    });

    // Acquire a connection from the pool
    const dbConnection = await dbPool.getConnection();

    const query = "SELECT * FROM blogdata";
    const [data] = await dbConnection.execute(query);
    
    // Release the acquired connection back to the pool
    dbConnection.release();

    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
