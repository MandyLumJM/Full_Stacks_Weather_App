CREATE DATABASE IF NOT EXISTS weather_app;

USE weather_app;

CREATE TABLE search_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO search_history (city, country) VALUES ('London', 'UK');
INSERT INTO search_history (city, country) VALUES ('Singapore', 'SG');