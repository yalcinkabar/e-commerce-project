# Full-Stack E-Commerce Application

A full-stack e-commerce application built with React, Spring Boot and PostgreSQL.

## Technologies

### Frontend
- React
- JavaScript
- Redux
- Redux Thunk
- React Router
- Axios
- Tailwind CSS
- React Hook Form
- React Toastify

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Spring Security
- JWT Authentication
- BCrypt
- Maven

### Database
- PostgreSQL

## Features

- User registration and login
- JWT-based authentication
- Persistent login with token verification
- Product listing
- Product detail pages
- Category filtering
- Product search
- Price and rating sorting
- Pagination
- Shopping cart
- Address management
- Credit card management
- Order creation
- Previous orders
- User-specific addresses, cards and orders

## Project Structure

```text
e-commerce-project/
├── e-commerce/          # React frontend
└── e-commerce-backend/  # Spring Boot backend

Backend API

Main endpoints:

GET /products
GET /products/{id}
GET /categories
POST /login
POST /signup
GET /verify
GET /user/address
POST /user/address
PUT /user/address
DELETE /user/address/{id}
GET /user/card
POST /user/card
PUT /user/card
DELETE /user/card/{id}
POST /order
GET /order
Authentication

The application uses JWT-based authentication.

After login, the backend generates a JWT containing the user's authentication information. The frontend stores the token and sends it with protected API requests.

Passwords are stored using BCrypt hashing.

Database

PostgreSQL is used as the relational database.

The backend uses Spring Data JPA and Hibernate to manage entities and relationships.

Main entities include:

User
Product
Category
Address
Card
Order
OrderItem
ProductImage
Running the Project
Backend

Open the e-commerce-backend directory and run the Spring Boot application.

The backend runs on:

http://localhost:8080

Set the PostgreSQL password as the DB_PASSWORD environment variable before running the application.

Frontend

Open the e-commerce directory and run:

npm install
npm run dev

The frontend runs on the Vite development server.