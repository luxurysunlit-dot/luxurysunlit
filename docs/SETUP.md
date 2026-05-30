# Luxury Sunlit - Setup Guide

## Prerequisites

- Node.js 18+
- Yarn 3.0+
- Git
- Shopify account with API credentials

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/luxurysunlit-dot/luxurysunlit.git
cd luxurysunlit
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Environment Setup

Create `.env.local` files in each workspace:

#### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SHOPIFY_STORE=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN=your-access-token
```

#### Backend (.env.local)
```
PORT=3001
DB_URL=mongodb://localhost:27017/luxury-sunlit
JWT_SECRET=your-secret-key
SHOPIFY_API_KEY=your-api-key
SHOPIFY_API_PASSWORD=your-api-password
```

### 4. Run Development Server

```bash
yarn dev
```

The frontend will be available at `http://localhost:3000`
The backend API will be available at `http://localhost:3001`

## Project Structure

### Frontend (React/Next.js)
- Pages: Home, Products, Categories, Account, Checkout
- Components: Reusable UI components
- Styles: Tailwind CSS with custom theming
- Integration: Shopify GraphQL API

### Backend (Express.js)
- API Routes: REST endpoints
- Authentication: JWT-based
- Database: MongoDB
- Shopify Integration: Product sync, order management

### Shopify Integration
- Real-time product synchronization
- Inventory management
- Order tracking
- Customer management

## Development Workflow

1. Create feature branch from `develop`
2. Make changes and test locally
3. Create pull request for review
4. Merge to `develop` after approval
5. Deploy to staging for testing
6. Merge to `main` for production release

## Deployment

See `docs/DEPLOYMENT.md` for detailed deployment instructions.

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000
# Kill process
kill -9 <PID>
```

### Shopify Connection Issues

- Verify API credentials in `.env.local`
- Check Shopify API rate limits
- Ensure store is active and accessible

## Support

For issues or questions, please create an issue on GitHub.
