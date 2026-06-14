# ReUseX - System Architecture

## High-Level Architecture

```text
User
│
▼
Next.js Frontend
│
├── Authentication (Clerk)
├── Product Listings
├── Rentals
├── Messaging
├── Dashboard
│
▼
Next.js API Routes
│
▼
Prisma ORM
│
▼
PostgreSQL (Neon)
│
├── Users
├── Listings
├── Orders
├── Rentals
├── Reviews
├── Messages
│
▼
Cloudinary
(Product Images)
```

## Frontend

Framework:

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Shadcn UI

Responsibilities:

* User Interface
* Routing
* Forms
* State Management
* API Integration

---

## Backend

Framework:

* Next.js API Routes

Responsibilities:

* Business Logic
* Database Operations
* Authentication Checks
* Validation

---

## Database

* PostgreSQL
* Prisma ORM

Responsibilities:

* Store users
* Store listings
* Store rentals
* Store messages
* Store reviews

---

## Authentication

Provider:

* Clerk

Responsibilities:

* Sign Up
* Login
* Session Management
* User Verification

---

## Storage

Provider:

* Cloudinary

Responsibilities:

* Product Images
* User Avatars

---

## Deployment

Frontend:

* Vercel

Database:

* Neon PostgreSQL

Storage:

* Cloudinary

Authentication:

* Clerk

---

## Scalability Considerations

Future Architecture Support:

* AI Pricing Suggestions
* Product Verification
* Mobile Applications
* Payment Gateway Integration
* Auction Marketplace
* Product Swapping
* Recommendation Engine
