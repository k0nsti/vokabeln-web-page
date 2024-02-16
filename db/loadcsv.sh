#!/bin/bash

cat << EOF | sqlite3 words.sqlite
drop table if exists load_csv;
CREATE TABLE load_csv (englisch text, deutsch text);
.mode csv
.separator "-"
.import vokabeln.csv load_csv
EOF