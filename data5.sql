CREATE DATABASE IF NOT EXISTS tourism;

USE tourism;

CREATE TABLE IF NOT EXISTS registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    agree_terms TINYINT(1) NOT NULL,
    trip_type VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    passport_number VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from registrations;