# AngusSpecs

[English](README.md) | [中文](README_zh.md)

Angus is a modular and type-safe application development kit. This project is a collection of its core components, providing the foundational pillars for building complex applications.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🏗 Core Libraries

This repository is a Monorepo containing the following independently published packages:

| Package | Version | Description |
| :--- | :--- | :--- |
| [`@angus/types`](./packages/types) | [![npm version](https://img.shields.io/npm/v/@angus/types.svg)](https://www.npmjs.com/package/@angus/types) | **Core Type Definitions**. Provides unified type contracts and data structure definitions for the entire Angus ecosystem. |
| [`@angus/parser`](./packages/parser) | [![npm version](https://img.shields.io/npm/v/@angus/parser.svg)](https://www.npmjs.com/package/@angus/parser) | **Configuration/Protocol Parser**. Parses and validates configuration files or communication protocols, converting data into type-safe JavaScript objects. |
| [`@angus/sdk`](./packages/sdk) | [![npm version](https://img.shields.io/npm/v/@angus/sdk.svg)](https://www.npmjs.com/package/@angus/sdk) | **Chained Invocation Client**. Provides a fluent API for chained calls, enabling convenient and efficient interaction with the server. |

## 🚀 Installation

You can install all or specific packages as needed:

```bash
# Install the full core suite
npm install @angus/types @angus/parser @angus/sdk

# Or install only the parts you need
npm install @angus/types @angus/sdk
```

## 💡 What is it?

*   **Separation of Concerns**: Each package has a single, clear responsibility and can be used independently or seamlessly together.
*   **Type Safety**: Built upon `@angus/types`, it provides full TypeScript support and type constraints throughout the development lifecycle.
*   **Developer Experience**: The chained call design of `@angus/sdk` makes code more intuitive; `@angus/parser` ensures the safety of external configuration input.

## 📖 Quick Start

The following example demonstrates how these packages work together:

```typescript
// 1. Import packages (In a real project, typically import from their respective modules)
import { User, ConfigSchema } from '@angus/types';
import { ConfigParser } from '@angus/parser';
import { AngusAPIClient } from '@angus/sdk';

// 2. Use the Parser to parse and validate external configuration
const rawConfig = { apiEndpoint: 'https://api.example.com', timeout: 5000 };
const config = ConfigParser.parse(rawConfig, ConfigSchema); // Returns a safe object conforming to the ConfigSchema type

// 3. Initialize the chained call SDK client
const client = new AngusAPIClient().configure(config);

// 4. Enjoy full type hints and the chained call experience
//    The `User` type here comes from `@angus/types`, ensuring type safety
const userList: User[] = await client
    .resource('users')
    .filter({ active: true })
    .select(['id', 'name', 'email'])
    .get();
```

## 📄 License

This project is open source under the [MIT License](LICENSE).