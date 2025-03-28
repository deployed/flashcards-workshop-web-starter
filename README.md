# Flashcards Workshop Web - Starter

Starter repository for **_Flashcards Workshop Web_**

## 🚀 Getting Started

### Prerequisites

- Node.js v22.14.0 or newer
- Yarn package manager (v4.6.0)

Yarn package manager can be installed via `corepack` which is build in Node.js feature.
Run the following commands

```
corepack enable
corepack install
```

Fill `.env`

```
cp .env-sample .env
```

Fill your backend number instead of `{}` like below

```
VITE_API_URL=http://backend-5.w2025.deployed.space/api
```

### Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

```

## 🎯 Overview

This application allows users to:

- Create custom flashcard sets
- Study and test their knowledge using flashcards
- Navigate through an intuitive, responsive interface
- Access content in multiple languages (i18n support)

## 🛠️ Tech Stack

### Core Technologies

- **React 19** - Frontend framework
- **TypeScript** - Type-safe programming
- **Vite** - Build tool and development server

### Routing & State Management

- **TanStack Router** - Type-safe routing
- **TanStack Query** - Data fetching and caching

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **CVA (Class Variance Authority)** - Component variants management

### Internationalization

- **i18next** - Internationalization framework

### API Integration

- **Axios** - HTTP client

### Form Handling

- **React Hook Form** - Form management
- **Zod** - Schema validation

### Development & Build Tools

- **Docker** - Containerization
- **GitHub Actions** - CI/CD
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks

This will run the image and expose frontend on `http://localhost:8080`

## 📦 Environment Variables

- `VITE_API_URL` - Backend API URL

## 🌐 Deployment

The application is configured for deployment using GitHub Container Registry (ghcr.io) with both local and production builds available.
