
CREATE DATABASE IF NOT EXISTS job_management_db;

USE job_management_db;

-- Create the 'jobs' table
CREATE TABLE jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jobTitle VARCHAR(255) NOT NULL,
    companyName VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    jobType VARCHAR(50) NOT NULL,
    requirements TEXT,
    responsibilities TEXT,
    applicationDeadline DATE,
    salaryMin INT,
    salaryMax INT,
    experience VARCHAR(50),
    description TEXT,
    postedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
