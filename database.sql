
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (80) UNIQUE,
    "description" VARCHAR (256),
    "category_id" int
);

CREATE TABLE "items" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (80) UNIQUE,
    "item_id" int
);

