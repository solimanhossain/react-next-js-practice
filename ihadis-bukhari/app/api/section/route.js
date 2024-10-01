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

    const section = await db.all("SELECT * FROM section");

    return new Response(JSON.stringify(section), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
