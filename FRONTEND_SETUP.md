# Luxury Sunlit - Frontend Setup Guide

## 📋 Project Overview

The frontend is built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **Framer Motion** to create a premium, modern eCommerce experience.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Yarn 3.0+

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Run development server
yarn dev
```

Visit `http://localhost:3000` in your browser.

## 📁 Project Structure

```
frontend/
├── app/                              # Next.js App Router
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Homepage
│   ├── products/                    # Products pages
│   ├── categories/                  # Categories pages
│   ├── checkout/                    # Checkout flow
│   └── account/                     # User account
│
├── components/
│   ├── sections/                    # Page sections
│   │   ├── Hero.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── TrendingCollections.tsx
│   │   ├── LimitedOffers.tsx
│   │   ├── Testimonials.tsx
│   │   └── Newsletter.tsx
│   ├── common/                      # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Modal.tsx
│   └── product/                     # Product-specific components
│       ├── ProductCard.tsx
│       ├── ProductImage.tsx
│       ├── ProductReviews.tsx
│       └── RelatedProducts.tsx
│
├── lib/
│   ├── api.ts                       # API client and services
│   ├── store.ts                     # Zustand global state
│   └── utils.ts                     # Utility functions
│
├── types/
│   └── index.ts                     # TypeScript interfaces
│
├── styles/
│   └── globals.css                  # Global styles
│
├── public/                          # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── .env.example
```

## 🎨 Design System

### Color Palette
- **Gold**: `#D4AF37` - Primary brand color
- **Black**: `#1A1A1A` - Premium dark
- **White**: `#FFFFFF` - Clean background
- **Silver**: `#C0C0C0` - Accents
- **Light Gray**: `#F5F5F5` - Backgrounds
- **Dark Gray**: `#333333` - Text

### Typography
- **Headings**: Playfair Display (Serif)
- **Subheadings**: Montserrat (Sans-serif)
- **Body**: Inter or Roboto (Sans-serif)
- **Accents**: Cormorant Garamond (Serif)

### Spacing
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

## 📦 Key Dependencies

### Framework & Styling
- `next`: ^14.0.0 - React framework
- `react`: ^18.2.0 - UI library
- `tailwindcss`: ^3.3.0 - Utility-first CSS
- `postcss`: ^8.4.0 - CSS processing

### State Management
- `zustand`: ^4.4.0 - Global state management
- Persist middleware for localStorage

### Animations
- `framer-motion`: ^10.16.0 - Smooth animations

### API & Data
- `axios`: ^1.4.0 - HTTP client
- `@apollo/client`: ^3.8.0 - GraphQL client
- `graphql`: ^16.8.0 - GraphQL

### Forms
- `react-hook-form`: ^7.45.0 - Form management

### UI Components
- `@headlessui/react`: ^1.7.15 - Headless UI
- `react-icons`: ^4.11.0 - Icon library

### Payment
- `stripe`: ^12.15.0 - Payment processing

## 🔧 Configuration Files

### next.config.js
Optimized for performance with:
- Image optimization (AVIF, WebP)
- Shopify CDN domains
- SWC minification
- Response compression

### tailwind.config.js
Extended Tailwind with:
- Custom colors (gold, luxury-black, etc.)
- Premium font families
- Custom spacing scale
- Shadow utilities
- Animation keyframes

### tsconfig.json
TypeScript configuration with:
- ES2020 target
- Strict mode enabled
- Path aliases (@/*)

## 🛍️ Pages to Build

### Core Pages
- **Home** (/) - Hero, featured products, trending collections
- **Products** (/products) - Product listing with filters
- **Product Detail** (/products/[id]) - Individual product page
- **Categories** (/categories) - Category pages
- **Cart** (/cart) - Shopping cart
- **Checkout** (/checkout) - Order creation
- **Account** (/account) - User profile, orders, wishlist
- **Search** (/search) - Product search results

### Authentication Pages
- **Login** (/auth/login)
- **Register** (/auth/register)
- **Password Reset** (/auth/reset-password)

## 🔌 API Integration

The `lib/api.ts` provides services for:

### Authentication
```typescript
authService.register()
authService.login()
authService.logout()
authService.getCurrentUser()
```

### Products
```typescript
productService.getAll()
productService.getById()
productService.getCategories()
productService.getTrending()
productService.search()
```

### Orders
```typescript
orderService.getAll()
orderService.getById()
orderService.create()
orderService.getTracking()
```

### User
```typescript
userService.getProfile()
userService.updateProfile()
userService.getAddresses()
userService.addAddress()
userService.getWishlist()
userService.addToWishlist()
userService.removeFromWishlist()
```

## 🌙 Dark Mode

Dark mode is supported with Tailwind's `prefers-color-scheme` media query. Customize in `styles/globals.css`.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px - 1440px
- **Wide**: 1441px+

## 🚀 Build & Deploy

### Development
```bash
yarn dev
```

### Production Build
```bash
yarn build
yarn start
```

### Linting
```bash
yarn lint
```

## 🔐 Environment Variables

Create `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SHOPIFY_STORE=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN=your-token
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_your_key
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=UA_000000_00
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

## 🤝 Contributing

1. Create feature branch from `develop`
2. Make changes and test locally
3. Submit pull request for review
4. Merge after approval

## ❓ Troubleshooting

### Port 3000 Already in Use
```bash
lsof -i :3000
kill -9 <PID>
```

### Node Modules Issues
```bash
rm -rf node_modules yarn.lock
yarn install
```

### Tailwind Styles Not Working
```bash
yarn build
yarn dev
```
