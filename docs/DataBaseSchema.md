# ReUseX - Database Schema

## Overview

This document defines the database structure for the ReUseX MVP.

Database:

* PostgreSQL
* Prisma ORM

---

# User

Represents all platform users.

Fields:

* id (UUID)
* clerkId (String)
* name (String)
* email (String)
* phone (String)
* profileImage (String)
* verified (Boolean)
* rating (Float)
* createdAt (DateTime)
* updatedAt (DateTime)

Relationships:

* One User → Many Listings
* One User → Many Orders
* One User → Many Reviews
* One User → Many Messages

---

# Listing

Represents products available for sale.

Fields:

* id (UUID)
* title (String)
* description (Text)
* price (Decimal)
* category (Enum)
* condition (Enum)
* status (Enum)
* sellerId (UUID)
* createdAt
* updatedAt

Relationships:

* Belongs to User
* Has Many Images
* Has Many Orders

---

# ListingImage

Stores listing photos.

Fields:

* id
* listingId
* imageUrl
* createdAt

Relationships:

* Belongs to Listing

---

# RentalListing

Represents rentable products.

Fields:

* id
* listingId
* dailyRate
* weeklyRate
* securityDeposit
* available
* createdAt

Relationships:

* Belongs to Listing

---

# Order

Represents purchase transactions.

Fields:

* id
* buyerId
* listingId
* status
* totalAmount
* createdAt
* updatedAt

Status Values:

* PENDING
* CONFIRMED
* SHIPPED
* DELIVERED
* COMPLETED
* CANCELLED

Relationships:

* Belongs to User
* Belongs to Listing

---

# RentalRequest

Represents rental requests.

Fields:

* id
* renterId
* rentalListingId
* startDate
* endDate
* status
* createdAt

Status Values:

* PENDING
* APPROVED
* REJECTED
* COMPLETED

Relationships:

* Belongs to User
* Belongs to RentalListing

---

# Review

Represents user reviews.

Fields:

* id
* reviewerId
* reviewedUserId
* rating
* comment
* createdAt

Relationships:

* Belongs to User

---

# Conversation

Stores chat conversations.

Fields:

* id
* buyerId
* sellerId
* listingId
* createdAt

Relationships:

* Has Many Messages

---

# Message

Stores chat messages.

Fields:

* id
* conversationId
* senderId
* content
* createdAt

Relationships:

* Belongs to Conversation

---

# Report

Used for reporting fraudulent listings.

Fields:

* id
* listingId
* reporterId
* reason
* status
* createdAt

Status Values:

* OPEN
* REVIEWED
* RESOLVED

---

# Admin

Stores admin accounts.

Fields:

* id
* email
* role
* createdAt

Roles:

* SUPER_ADMIN
* MODERATOR

---

# Enums

Category

* ELECTRONICS
* FASHION
* BOOKS
* FURNITURE
* SPORTS
* MISC

Condition

* NEW
* LIKE_NEW
* GOOD
* FAIR
* POOR

ListingStatus

* ACTIVE
* SOLD
* RENTED
* INACTIVE
