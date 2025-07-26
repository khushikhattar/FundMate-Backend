# 🏗️ FundMate – Crowdfunding Platform (Backend)

**FundMate** is a role-based crowdfunding backend built with **Node.js**, **Express**, and **Prisma ORM** using **PostgreSQL**. It supports three user roles — **Admin**, **CampaignCreator**, and **Donor** — and provides endpoints for authentication, campaign management, milestone voting, and donation processing via Razorpay.

---

## 🚀 Features

- 🔐 Secure authentication with **JWT (access + refresh tokens)**
- 🍪 Token storage via **HTTP-only cookies**
- 👥 Role-based access (Admin, Donor, CampaignCreator)
- 📋 Campaign creation, approval, and updates
- 🗳️ Milestone creation and donor voting
- 💳 Donation integration with **Razorpay**
- 🛡️ Protected routes with role validation middleware

---

## 🛠️ Tech Stack

- **Node.js** + **Express**
- **Prisma** ORM
- **PostgreSQL**
- **JWT** for auth
- **Cookie-parser**
- **Razorpay SDK**
- **Zod** for input validation
