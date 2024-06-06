create table users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    password VARCHAR(255) NOT NULL
);


INSERT INTO USERS (ID, NAME,EMAIL,PASSWORD) VALUES('1','Fernando','fernando@gmail.com','admin123');