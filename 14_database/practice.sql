CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

SHOW databases;

USE kdt;

CREATE TABLE member (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT(2),
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) NOT NULL DEFAULT 'x'
);

SHOW tables;

DESC member;

ALTER TABLE user ADD new_column VARCHAR(10);

ALTER TABLE user MODIFY new_column INT;

ALTER TABLE user DROP new_column;