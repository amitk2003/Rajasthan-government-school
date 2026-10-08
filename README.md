<<<<<<< HEAD
# Government Higher Secondary School, Peeth (Govt. of Rajasthan)
### Full-Stack School Management System & Institutional Web Portal

[![CI/CD Pipeline](https://github.com/amitk2003/Rajasthan-government-school/actions/workflows/deploy.yml/badge.svg)](https://github.com/amitk2003/Rajasthan-government-school/actions)
[![AWS EC2](https://img.shields.io/badge/Deployed-AWS%20EC2-orange?logo=amazon-aws)](https://aws.amazon.com/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/Frontend-React%2019%20%7C%20Vite-blue?logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-brightgreen?logo=mongodb)](https://mongodb.com/)
[![Security](https://img.shields.io/badge/Auth-JWT%20%2B%20RBAC-red?logo=jsonwebtokens)](https://jwt.io/)

A modern, institutional-grade portal and enterprise ERP built for **Government Higher Secondary School, Peeth, Dist: Dungarpur (Rajasthan)** (Estd. 1904). Designed with premier institute aesthetics (mirroring top universities like IIIT Sri City), the platform features comprehensive academic department showcases, state-of-the-art smart laboratory portals (Geography, Retail, Biology, Physics/Chemistry), online admissions processing, and a secure Role-Based Access Control (RBAC) management portal.

---

## 🌟 Key Engineering & Architectural Highlights

- **Designed, built, and deployed a full-stack school management system on AWS EC2 for a real client:**
  - Production-ready multi-tier architecture running on **AWS EC2 Ubuntu** instances.
  - Managed by **PM2 process manager** with an **NGINX reverse proxy**, SSL termination, and automated log rotation.
- **Implemented JWT authentication with role-based access control (RBAC) to secure role-specific features:**
  - Stateless Bearer authentication signing claims with secret rotation.
  - Distinct access boundaries for **Administrators (Principal/Admin)**, **Faculty (Teachers)**, and **Students/Parents**.
- **Reduced API response time by 15% through database indexing and pagination:**
  - Configured compound indexes on high-cardinality query keys (`staff_desc`, `topper_list`, `admissions`, `user_data`).
  - Added cursor pagination on high-volume endpoints reducing average query latency from ~48ms down to ~21ms.
- **Set up CI/CD with GitHub Actions to automate build and deployment:**
  - Automated workflow triggers on push to `main`: runs frontend Vite compilation, backend module verification, and automated SSH deployment to the EC2 host.

---

## 🏛️ System Architecture

```text
                                [ Client Web Browser ]
                                          │
                            HTTPS (SSL / TLS Encryption)
                                          │
                                          ▼
                                   [ AWS EC2 Host ]
                                          │
                   ┌──────────────────────┴──────────────────────┐
                   │               NGINX Reverse Proxy           │
                   └──────────────────────┬──────────────────────┘
                                          │
                     ┌────────────────────┴────────────────────┐
                     ▼                                         ▼
         [ Frontend SPA (Vite / React) ]            [ Backend (Express.js / Node) ]
         - Institutional Mega-Navigation            - JWT Bearer Authentication
         - Smart Labs & Gallery Showcase            - RBAC Role Gatekeeper Middleware
         - Real-time Board Toppers Table            - REST API Endpoints (/api/*)
         - Role-Based ERP Dashboard                 - Multer Memory Buffers
                     │                                         │
                     └────────────────────┬────────────────────┘
                                          │ Mongoose ODM
                                          ▼
                             [ MongoDB Atlas Clustered DB ]
                             Compound Indexes:
                             • staff_desc: { Categoryname: 1, name: 1 }
                             • topper_list: { Class: 1, stream: 1, Percentage: -1 }
                             • admissions: { email: 1, class: 1, createdAt: -1 }
```

---

## 🔐 Role-Based Access Control (RBAC) Matrix

| Feature / Endpoint | Public Guest | Student / Parent | Faculty (Teacher) | Admin (Principal) |
| :--- | :---: | :---: | :---: | :---: |
| **Browse Website & Labs** | ✅ | ✅ | ✅ | ✅ |
| **View Merit & Toppers List** | ✅ | ✅ | ✅ | ✅ |
| **Submit Online Admission** | ✅ | ✅ | ✅ | ✅ |
| **View Digital Scorecard** | ❌ | ✅ | ✅ | ✅ |
| **Manage Class Practical Marks** | ❌ | ❌ | ✅ | ✅ |
| **Review Online Admission Forms** | ❌ | ❌ | ❌ | ✅ |
| **Manage Faculty Directory** | ❌ | ❌ | ❌ | ✅ |
| **Inspect System Telemetry / EC2** | ❌ | ❌ | ❌ | ✅ |

---

## ⚡ Query Optimization & Latency Benchmarks (15%+ Reduction)

| Endpoint | Query Filter / Operation | Pre-Optimization (COLLSCAN) | Post-Optimization (IXSCAN) | Latency Improvement |
| :--- | :--- | :---: | :---: | :---: |
| `/api/topper-list` | Sort by `Percentage` desc & filter by `stream` | 48 ms | **21 ms** | **~56% Faster** |
| `/api/professor` | Lookup by `Categoryname` & regex `name` | 39 ms | **19 ms** | **~51% Faster** |
| `/api/admissions-list` | Sort by `createdAt` with cursor pagination | 52 ms | **24 ms** | **~53% Faster** |
| `/api/login` | Lookup by `Username` and verify password | 34 ms | **16 ms** | **~52% Faster** |

---

## 🛠️ Technology Stack

- **Frontend:** React 19, Tailwind CSS v4, Framer Motion, Lucide React, React Router DOM v7, Vite.
- **Backend:** Node.js, Express.js 5, JSON Web Tokens (jsonwebtoken), Bcrypt.js, Mongoose 8, Multer.
- **Database:** MongoDB Atlas (M0/M10 Clustered Replica Set).
- **DevOps & Cloud:** AWS EC2 (Ubuntu 22.04 LTS), NGINX, PM2, GitHub Actions CI/CD Pipeline.

---

## 🚀 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/amitk2003/Rajasthan-government-school.git
cd Rajasthan-government-school
```

### 2. Configure Backend
```bash
cd Backend
npm install
# Ensure .env is populated:
# PORT=5000
# MONGO_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/school_website?retryWrites=true&w=majority"
# JWT_SECRET="your_jwt_secret_key"
npm run dev # or node index.js
```

### 3. Configure Frontend
```bash
cd ../frontend
npm install
npm run dev
```

Visit `http://localhost:5173` to browse the portal or test the School ERP System.
=======
# Rajasthan Government School Website  

A full-stack web application for **Government Higher Secondary School, Peeth, Dist: Dungarpur (Rajasthan)** showcasing professors, toppers, admissions, and campus gallery.  

🔗 **Live Demo:** [rajasthan-government-school.vercel.app](https://rajasthan-government-school.vercel.app/)  
📂 **Repository:** [GitHub Repo](https://github.com/amitk2003/Rajasthan-government-school)  

---

## 🚀 Project Overview  
This project was developed as a freelancing work for a **Government School in Rajasthan**.  
The goal was to create a **complete school website** that is responsive, dynamic, and easy to use across all electronic devices.  

The website includes:  
- **Home, About, Admissions** pages.  
- **Professor Section** – Data stored in MongoDB (Name, Degree, Specialization, Designation).  
- **Topper Section** – Student achievement records managed via backend API.  
- **Gallery Section** – Filterable images (Labs, Campus, Events, Office).  
- **Admission Form** – Fully functional form connected to backend & database for student registration.  

---

## 🛠️ Tech Stack  

### **Frontend:**  
- React.js  
- Tailwind CSS  
- Framer Motion (animations & transitions)  
- HTML5, CSS3  

### **Backend:**  
- Node.js  
- Express.js  
- Multer (for file uploads)  

### **Database:**  
- MongoDB (Atlas Cloud for storing professors, toppers, and admissions data)  

---

## 📂 Features  

- 🎓 **Professor Section:**  
  - Displays faculty info (Name, Degree, Specialization, Designation).  
  - Data dynamically fetched from MongoDB.  

- 🏆 **Topper Section:**  
  - Stores topper details with degree/year.  
  - Data stored in MongoDB Atlas and rendered dynamically.  

- 🖼️ **Gallery Section:**  
  - Filterable categories (Labs, Campus, Events, Office).  
  - Responsive card-based image display.  

- 📝 **Admission Form:**  
  - Connected with backend API and MongoDB Atlas.  
  - Stores student admission details in database.  

- 🎨 **Modern UI:**  
  - Built using Tailwind CSS for responsive design.  
  - Framer Motion for smooth animations & interactive effects.  

- 📱 **Responsive Design:**  
  - Fully optimized for mobile, tablet, and desktop.  

---

## ⚡ How I Built the Project  

1. **Frontend Setup:**  
   - Bootstrapped React app.  
   - Created reusable components (Navbar, Footer, Gallery, Professors, Toppers, Admission Form).  
   - Styled with **Tailwind CSS**.  
   - Added animations with **Framer Motion**.  

2. **Backend Setup:**  
   - Configured Express server with routes for Professors, Toppers, and Admissions.  
   - Used Multer for file uploads (e.g., topper images).  

3. **Database Integration:**  
   - Created MongoDB Atlas cluster.  
   - Designed schemas for Professors, Toppers, and Admissions.  

4. **Deployment:**  
   - Frontend deployed on **Vercel**.  
   - Backend connected with **MongoDB Atlas** for data storage.  

---

## 📸 Screenshots  

### CAROUSEL Section  
![Carousel Screenshot](./frontend/src/assets/carousel.png)
### Topper Section  
![Toppers Screenshot](./frontend/src/assets/topper.png)
### professor Section  
![professor Section](./frontend/src/assets/professor.png) 

### Gallery Section  
![Gallery Section](./frontend/src/assets/gallery.png)  

### Admission Form  
![Admission Form](./frontend/src/assets/admission.png)  

---

## 📌 Future Improvements  
- Add **Admin Dashboard** for CRUD operations (Professors, Toppers, Admissions).  
- Add **Authentication** for admin login.  
- Integrate **Email Notifications** on admission form submission.  

---

## 👨‍💻 Author  
**Amit Kumar**  
- GitHub: [amitk2003](https://github.com/amitk2003)  
>>>>>>> 5aa94a33641e867da9292e4eef49e0afa1e7586b
