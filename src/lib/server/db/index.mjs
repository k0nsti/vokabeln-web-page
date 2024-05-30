/*
INSERT INTO `words` (`deutsch`, `englisch`) VALUES (?, ?) RETURNING rowid as rowid, ['gut', 'good']
CREATE TABLE `words` (`id` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, `deutsch` TEXT NOT NULL, `englisch` TEXT NOT NULL), []
*/

import { fileURLToPath } from "node:url";
import Database from 'better-sqlite3';
function pn(path) {
    return fileURLToPath(new URL(path, import.meta.url));
}

const dbFile = pn("../../../../db/words.sqlite")
const db = new Database(dbFile);
const pre = db.prepare("select * from load_csv ORDER BY RANDOM() LIMIT 1;");

export function getWord() {
    return pre.get()
}