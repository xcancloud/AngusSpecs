# @angus/sdk

[![npm version](https://img.shields.io/npm/v/@angus/sdk.svg)](https://www.npmjs.com/package/@angus/sdk)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Core Type Definitions** for the Angus ecosystem. Provides unified type contracts and data structure definitions for building type-safe applications.

## 🚀 Installation

```bash
npm install @angus/sdk
# or
yarn add @angus/sdk
# or
pnpm add @angus/sdk
```

## 📖 Usage

```typescript
import { User, UserRole, ApiResponse, SuccessResponse } from '@angus/sdk';

// Type-safe user creation
const user: User = {
  id: 'user-123',
  username: 'john_doe',
  email: 'john@example.com',
  displayName: 'John Doe',
  isActive: true,
  role: UserRole.USER,
  createdAt: new Date(),
  updatedAt: new Date(),
  version: 1
};

// Type-safe API response handling
const response: ApiResponse<User> = {
  status: 'success',
  message: 'User retrieved successfully',
  timestamp: new Date().toISOString(),
  requestId: 'req-123',
  data: user
};
```

## 🏗 Core Types

### Base Types
- `ID` - Unique identifier (string | number)
- `Timestamp` - Time representation (Date | string)
- `KeyValuePair<T>` - Generic key-value pairs
- `StringRecord<T>` - Objects with string keys
- `Nullable<T>`, `Optional<T>`, `Maybe<T>` - Nullability types

### Entity Types
- `BaseEntity` - Base interface for all entities
- `User` - User entity with authentication data
- `Config` - Configuration entity
- `Resource` - Resource entity

### API Types
- `ApiRequest<T>` - HTTP request types
- `ApiResponse<T>` - HTTP response types
- `ClientConfig` - API client configuration
- `RequestOptions` - Request configuration options

### Configuration Types
- `ConfigSchema` - Configuration schema definitions
- `ValidationResult` - Configuration validation results
- `AppConfig` - Application configuration

### Utility Types
- `Partial<T>`, `Required<T>`, `Readonly<T>` - Object transformation types
- `Pick<T, K>`, `Omit<T, K>` - Property selection types
- `TypeGuard<T>` - Runtime type checking
- `Transform<T, F>` - Data transformation types

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Build in watch mode
npm run build:watch

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npm run type-check
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](../../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📚 Documentation

- [API Documentation](https://angus-org.github.io/angus-specs/types)
- [Type Reference](https://angus-org.github.io/angus-specs/types/reference)
- [Migration Guide](https://angus-org.github.io/angus-specs/types/migration)
