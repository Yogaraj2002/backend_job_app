
const express = require("express");
const cors = require("cors");
const jobsRouter = require("./routes/jobs");

const app = express();

app.use(express.json());


const allowedOrigins = [
  "http://localhost:5173",              
  "https://job-frontend-app.onrender.com" 
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/jobs", jobsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
