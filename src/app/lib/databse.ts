import { neon } from '@neondatabase/serverless';
import { sql } from '@vercel/postgres';
const connectionString = process.env.POSTGRES_URL;

export async function connectToDB() {
    if (!connectionString) {
        throw new Error('Database connection string is not defined');
    }

    const db = neon(connectionString);
    try {
        if (db) {
            console.log('Connected to database');
            return db;
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getPosts() {
try {
    const data = await sql`SELECT * FROM posts`;
    console.log(data.rows);
    return data.rows;
    
} catch (error) {
    console.error(error);
}

}