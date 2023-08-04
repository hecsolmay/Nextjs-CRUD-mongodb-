import { mongoUri } from "@/config";
import {ConnectionStates, connect, connection} from "mongoose";

const conn = {
  isConnected: false
}

export async function connectDB() {
  if (conn.isConnected) return

  const db = await connect(mongoUri)
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState === ConnectionStates.connected
} 

connection.on('connected', () => {
  console.log('Mongoose Is Connected');
})

connection.on('error', (err) => {
  console.log('Mongoose Connection Error', err);
})