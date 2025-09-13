const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/jobs: Fetch all job listings
router.get('/', async (req, res) => {
  try {
    const query = `
      SELECT 
        id, 
        jobTitle, 
        companyName, 
        location, 
        jobType, 
        experience, 
        description, 
        applicationDeadline,
        salaryMin,
        salaryMax,
        CONCAT('₹', salaryMin, ' - ₹', salaryMax, ' /Month') AS salary
      FROM jobs
      ORDER BY postedAt DESC;
    `;
    const [jobs] = await db.query(query);
    res.json(jobs);
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).json({ error: "Internal server error. Check server logs for details." });
  }
});

// POST /api/jobs: Create a new job listing
router.post('/', async (req, res) => {
  const { 
    jobTitle, 
    companyName, 
    location, 
    jobType, 
    salaryMin,   
    salaryMax,   
    applicationDeadline, 
    description,
    experience 
  } = req.body;

  if (!jobTitle || !companyName || !location) {
    return res.status(400).json({ error: 'Job title, company name, and location are required.' });
  }

  try {
    const query = `
      INSERT INTO jobs (
        jobTitle, companyName, location, jobType, description, 
        salaryMin, salaryMax, experience, applicationDeadline
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    const values = [
      jobTitle, companyName, location, jobType, description, 
      salaryMin, salaryMax, experience, applicationDeadline
    ];
    
    await db.query(query, values);
    res.status(201).json({ message: 'Job created successfully' });
  } catch (err) {
    console.error("Database insert error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
