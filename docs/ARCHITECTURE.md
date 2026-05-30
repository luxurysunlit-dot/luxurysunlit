# Luxury Sunlit - Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  (Next.js Frontend - React, Tailwind, Animations)            │
└──────────────────────────┬──────────────────────────────────┘
                           │ GraphQL/REST API
┌──────────────────────────▼──────────────────────────────────┐
│                        API Layer                             │
│  (Express.js Backend - Auth, Business Logic)                 │
└──────────────────────────┬──────────────────────────────────┘
                           │
       ┌───────────────────┼───────────────────┐
       │                   │                   │
       ▼                   ▼                   ▼
┌─────────────┐   ┌──────────────┐   ┌──────────────────┐
│  MongoDB    │   │  Shopify API │   │  Payment Gateway │
│  Database   │   │  (Products,  │   │  (Stripe, etc)   │
│             │   │   Orders)    │   │                  │
└─────────────┘   └──────────────┘   └──────────────────┘
```

## Technology Stack

### Frontend
- **Framework**: Next.js 14+ (React)
- **Styling**: Tailwind CSS + CSS Modules
- **State Management**: Redux/Zustand
- **API Client**: Apollo Client (GraphQL) / Fetch (REST)
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **UI Components**: Custom + Headless UI

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ORM**: Mongoose
- **Authentication**: JWT + bcrypt
- **File Storage**: AWS S3 / Cloudinary
- **Payment**: Stripe integration

### Shopify Integration
- **API**: Shopify REST + GraphQL APIs
- **Webhooks**: Real-time event handling
- **Product Sync**: Automated synchronization
- **Checkout**: Shopify Secure Checkout

## Database Schema

### Collections
- **Users**: Customer accounts and authentication
- **Products**: Product catalog (synced from Shopify)
- **Orders**: Order history and tracking
- **Wishlist**: Saved items per user
- **Reviews**: Product ratings and comments
- **Categories**: Product categorization
- **Coupons**: Discount codes and campaigns
- **Cart**: Temporary cart storage

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### Products
- `GET /api/products` - List products (with filters)
- `GET /api/products/:id` - Get product details
- `GET /api/categories` - List categories
- `GET /api/products/trending` - Trending products

### Orders
- `GET /api/orders` - User's orders
- `GET /api/orders/:id` - Order details
- `POST /api/orders` - Create order
- `GET /api/orders/:id/tracking` - Tracking info

### User Account
- `GET /api/user/profile` - User profile
- `PUT /api/user/profile` - Update profile
- `GET /api/user/addresses` - Saved addresses
- `POST /api/user/addresses` - Add address
- `GET /api/user/wishlist` - Wishlist items

## Security Considerations

- HTTPS only in production
- JWT token expiration and refresh
- Password hashing with bcrypt
- CORS configuration
- Rate limiting on API endpoints
- XSS and CSRF protection
- SQL injection prevention via ORM
- Input validation on all endpoints

## Performance Optimization

- Image optimization and lazy loading
- Code splitting and dynamic imports
- Caching strategies (Redis for sessions)
- CDN for static assets
- Database indexing on frequently queried fields
- API response compression
- Pagination for large datasets

## Scalability

- Microservices-ready architecture
- Horizontal scaling via load balancing
- Message queue for async operations (RabbitMQ/Bull)
- Database replication and sharding
- Containerization with Docker
- Kubernetes orchestration ready
