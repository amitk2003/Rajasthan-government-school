import express from "express";
import mongoose from "mongoose";

const admission_route = express.Router();

// Schema for Admission
const admissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Admission = mongoose.model("Admission", admissionSchema);

// POST route to handle admission form
admission_route.post("/admission", async (req, res) => {
  try {
    const { name, class: studentClass, email, phone, address } = req.body;

    // validation check
    if (!name || !studentClass || !email || !phone || !address) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newAdmission = new Admission({
      name,
      class: studentClass,
      email,
      phone,
      address
    });

    await newAdmission.save();

    res.status(201).json({ message: "Admission form submitted successfully" });
  } catch (error) {
    console.error("Error submitting admission form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default admission_route;
