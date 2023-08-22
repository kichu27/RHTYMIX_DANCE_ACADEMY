import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const { name, email, number, message } = req.body;

  // Create a MySQL connection
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

  try {
    // Insert data into the database
    const insertQuery = `INSERT INTO contacts (name, email, number, message) VALUES (?, ?, ?, ?)`;
    await dbConnection.execute(insertQuery, [name, email, number, message]);

    res.status(200).json({ message: "Data saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving data." });
  } finally {
    dbConnection.end();
  }
}
