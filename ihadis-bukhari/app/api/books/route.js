import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = null;

export async function GET(req, res) {
    if (!db) {
        db = await open({
            filename: "./database/hadith_db.db",
            driver: sqlite3.Database,
        });
    }

    const books = await db.all("SELECT * FROM books");

    return new Response(JSON.stringify(books), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
