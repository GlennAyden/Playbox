# Tech Stack Documentation

## Project Overview
**Project Name:** playbox  
**Version:** 0.1.0  
**Description:** A Next.js-based web application with authentication, payment processing, and referral system

## Core Framework
- **Next.js 15.3.4** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5** - Type-safe JavaScript

## Database & ORM
- **PostgreSQL** - Primary database
- **Prisma 6.10.1** - Database ORM and migration tool
- **@prisma/client** - Prisma client for database operations

## Authentication & Security
- **NextAuth.js 4.24.11** - Authentication framework
- **@auth/prisma-adapter** - Prisma adapter for NextAuth
- **bcrypt 6.0.0** - Password hashing
- **@types/bcrypt** - TypeScript types for bcrypt

## Payment Processing
- **Midtrans Client 1.4.3** - Payment gateway integration
- **QRIS** - Payment method support

## Styling & UI
- **Tailwind CSS 4.1.10** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing
- **Framer Motion 12.18.1** - Animation library
- **Lucide React 0.518.0** - Icon library
- **Radix UI** - Headless UI components
  - **@radix-ui/react-slot 1.2.3** - Slot component

## State Management & Utilities
- **React Hot Toast 2.5.2** - Toast notifications
- **Class Variance Authority 0.7.1** - Component variant management
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 3.3.1** - Tailwind class merging utility

## Caching & Performance
- **Redis 5.5.6** - In-memory data store
- **@upstash/redis 1.35.0** - Redis client for serverless

## Monitoring & Error Tracking
- **Sentry Next.js 9.30.0** - Error monitoring and performance tracking

## Development Tools
- **ESLint 9** - Code linting
- **eslint-config-next** - Next.js ESLint configuration
- **@eslint/eslintrc** - ESLint configuration utilities
- **Webpack 5.99.9** - Module bundler

## Type Definitions
- **@types/node 20** - Node.js type definitions
- **@types/react 19** - React type definitions
- **@types/react-dom 19** - React DOM type definitions

## Database Schema Features
### Authentication & Users
- User model with OAuth support (Google)
- Admin user model with role-based access
- Session and account management
- Email verification system

### Payment System
- Order management with multiple statuses
- Payment transaction tracking
- QRIS payment method support
- Gateway integration

### Referral System
- Referral tracking and rewards
- User referral codes
- Referral status management

### Access Control
- Subscription status management (FREE, PREMIUM, EXPIRED)
- User blocking system
- Admin role management (SUPER_ADMIN, ADMIN)

## Project Structure

A new Next.js project has been initialized. The structure for the web pages is as follows:

```
src/
└── app/
    ├── page.tsx              # Homepage
    ├── auth/
    │   └── login/
    │       └── page.tsx      # Login page
    ├── dashboard/
    │   └── page.tsx          # Dashboard page
    ├── payment/
    │   └── page.tsx          # Payment page
    ├── history/
    │   └── page.tsx          # History page
    ├── referral/
    │   ├── page.tsx          # Referral page
    │   └── create/
    │       └── page.tsx      # Create referral page
    ├── blocked/
    │   └── page.tsx          # Blocked page
    └── extension/
        └── page.tsx          # Extension page
```

## Environment Variables Required
- `DATABASE_URL` - PostgreSQL connection string
- NextAuth configuration variables
- Redis connection details
- Sentry configuration
- Midtrans API credentials

## Build & Deployment
- **Build Command:** `npm run build`
- **Start Command:** `npm run start`
- **Development:** `npm run dev`
- **Linting:** `npm run lint` 