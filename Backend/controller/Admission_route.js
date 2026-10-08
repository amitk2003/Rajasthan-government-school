import express from "express";
import mongoose from "mongoose";
import authToken from "../AuthToken/AuthToken.js";

const admission_route = express.Router();

// Schema for Admission with compound index for fast lookups (Point 3)
const admissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, enum: ["pending", "reviewed", "approved", "enrolled"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

// Index to optimize administrative query scans and phone/email verification
admissionSchema.index({ email: 1, class: 1, createdAt: -1 });

const Admission = mongoose.models.Admission || mongoose.model("Admission", admissionSchema);

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

    res.status(201).json({
      message: "Admission form submitted successfully! Reference ID: GSS-" + newAdmission._id.toString().slice(-6).toUpperCase(),
      admissionId: newAdmission._id,
    });
  } catch (error) {
    console.error("Error submitting admission form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route for ERP Admin to review submissions (Protected via JWT & RBAC)
admission_route.get("/admissions-list", authToken, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const admissions = await Admission.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const totalCount = await Admission.countDocuments();

    res.json({
      data: admissions,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalCount,
      }
    });
  } catch (error) {
    console.error("Error fetching admissions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default admission_route;
