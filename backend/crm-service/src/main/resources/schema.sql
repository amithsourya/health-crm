CREATE TABLE IF NOT EXISTS patients (
    pid BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    dob DATE,
    contact VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    last_visit DATE,
    status VARCHAR(10)
);

