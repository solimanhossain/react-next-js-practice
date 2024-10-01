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

    const chapter = await db.all("SELECT * FROM chapter");

    return new Response(JSON.stringify(chapter), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
