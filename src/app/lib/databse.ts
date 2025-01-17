import { neon } from '@neondatabase/serverless';
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';


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
    noStore();
    //noStore() is used to prevent caching of the data
    //Caching means storing the data in memory so that it can be accessed quickly
    //We need  to use this becausa we are using serverless functions
    //Serverless functions are stateless and do not store data in memory
    //This will be better for dynamic data and SEO purposes because the data will be fetched 
    //from the database every time the page is loaded
    const data = await sql`SELECT * FROM posts`;
    console.log(data.rows);
    return data.rows;
    
} catch (error) {
    console.error(error);
}

}