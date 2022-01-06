
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
    FOREIGN KEY(id) REFERENCES items(id) 
);

CREATE TABLE "items" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (80) NOT NULL,
     "description" VARCHAR(1000) NOT NULL,
     FOREIGN KEY(id) REFERENCES categories(id) 
);


CREATE TABLE "bag" (
    "bag_id" SERIAL PRIMARY KEY,
     "id" INTEGER NOT NULL,
    "title" VARCHAR (80) NOT NULL,
     "description" VARCHAR(1000) NOT NULL,
      "category" VARCHAR(1000) NOT NULL,
       "user_id" INTEGER NOT NULL
)

