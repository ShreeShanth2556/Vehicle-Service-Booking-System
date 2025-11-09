# 🚗 Vehicle Service Booking System

## 📖 Overview
The **Vehicle Service Booking System** is a full-stack web application that allows users across **Karnataka** to book, track, and manage their vehicle service appointments online. It supports three main roles — **User**, **Garage**, and **Admin**, providing a seamless digital platform for automotive service management.

---

## 🧰 Technology Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend** | React.js, Tailwind CSS | User Interface and Routing |
| **Backend** | Node.js + Express.js | RESTful APIs and business logic |
| **Database** | MongoDB | Data storage for users, garages, bookings |
| **Authentication** | JWT | Secure login system |
| **Testing** | Postman | API testing |
| **Hosting (Optional)** | Render / Vercel / Railway | Cloud deployment |

---

## 🎯 Features

### 👨‍🔧 User Module (Customers)
- Signup / Login (Email, Phone, Google optional)
- Manage Profile & Vehicle Details
- Book Service by selecting City, Garage, Date, and Service Type
- Track Service Status (Pending / In Progress / Completed)
- View Booking History
- Provide Feedback / Ratings

### 🧰 Garage Module (Workshops)
- Register / Login as a Service Center
- Manage Offered Services and Pricing
- Handle Bookings (Accept / Reject / Complete)
- Update Booking Status
- View Customer Feedback
- Dashboard Summary (Bookings, Revenue, Completed Services)

### 🧑‍💼 Admin Module
- Admin Login and Dashboard
- Manage Users and Garages (Approve / Deactivate)
- Monitor State-wide Bookings
- Reports and Analytics (Bookings per City, Revenue, Active Garages)
- Add / Remove Cities in Karnataka

---

## 🗂 Database Collections (MongoDB)

| Collection | Example Fields |
|-------------|----------------|
| **users** | { name, email, password, city, phone } |
| **vehicles** | { user_id, reg_no, brand, model, fuel_type } |
| **garages** | { name, city, address, contact, services[] } |
| **bookings** | { user_id, garage_id, service_type, date, status } |
| **services** | { name, price, description } |
| **feedbacks** | { user_id, garage_id, rating, comments } |

---

## ⚙️ Setup & Installation

### 🔹 Clone the Repository
```bash
git clone https://github.com/yourusername/vehicle-service-booking-system.git
cd vehicle-service-booking-system
```

### 🔹 Backend Setup
```bash
cd backend
npm install
node server.js
```
Make sure MongoDB is running locally or on Atlas.

### 🔹 Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 🔹 Access
- Frontend → http://localhost:3000  
- Backend API → http://localhost:5000

---

## 🧪 API Testing with Postman
All backend routes have been tested using **Postman**, including:
- `/signup`, `/login`
- `/book-service`, `/my-bookings`
- `/garage/add-service`, `/update-status`
- `/admin/get-all-bookings`, `/get-stats`

---

## 📊 Future Enhancements
- Email/SMS Notifications for Bookings
- Real-time Status Update using WebSockets
- Payment Gateway Integration
- Admin Analytics with Charts
- Multi-language Support (English + Kannada)

---

## 🧑‍🏫 Presentation Summary
> This project demonstrates a **state-wide vehicle service management system** for users, workshops, and administrators.  
> Built with **React, Node.js, Express, and MongoDB**, it simplifies the vehicle servicing process through online booking, live tracking, and data-driven dashboards.

---

### 🏁 Developed By
**Team:** Shree Shanth P B - BSc (Hons) Data Science  
**Technologies:** React, Node.js, Express, MongoDB  
**Tested with:** Postman  
**Year:** 2025

