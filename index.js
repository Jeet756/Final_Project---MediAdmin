import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { fileURLToPath } from "url";
import {router} from './route.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));//imp for post req
app.use('/', router)
mongoose.connect("mongodb://localhost:27017/candidateDetails")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const medicalStaffSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true,
    enum: [
      "Doctor",
      "Nurse",
      "Lab Technician",
      "Pharmacist",
      "Emergency Staff",
      "Receptionist",
    ]
  },
  qualification: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true,
    min: 0
  },
  licenseNumber: {
    type: String,
    default: null
  },

  appliedAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("Candidate", medicalStaffSchema);
app.post("/submit", async (req, res) => {
  try {
    const userdata = req.body;
    const newUser = new User(userdata);
    await newUser.save();
    res.send(`<h1>done click <a href='/'>here</a> to go back</h1>`);
  } catch (error) {
    res.status(500).send("<h2>wrong detail filled</h2>");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
