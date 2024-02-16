/*
INSERT INTO `words` (`deutsch`, `englisch`) VALUES (?, ?) RETURNING rowid as rowid, ['gut', 'good']
CREATE TABLE `words` (`id` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, `deutsch` TEXT NOT NULL, `englisch` TEXT NOT NULL), []
*/