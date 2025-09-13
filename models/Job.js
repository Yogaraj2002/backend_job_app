const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Job = sequelize.define("Job", {
  jobTitle: { type: DataTypes.STRING, allowNull: false },
  companyName: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  jobType: { type: DataTypes.STRING, allowNull: false },
  requirements: { type: DataTypes.TEXT },
  responsibilities: { type: DataTypes.TEXT },
  applicationDeadline: { type: DataTypes.DATE },
  salaryMin: { type: DataTypes.INTEGER },
  salaryMax: { type: DataTypes.INTEGER },
  experience: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
}, {
  timestamps: true,
  createdAt: "postedAt",
  updatedAt: false,
});

module.exports = Job;
