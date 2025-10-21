# @angusmeter/types

TypeScript type definitions for AngusMeter.

## Overview

This package provides TypeScript type definitions for the AngusMeter testing framework. It includes interfaces and types for configuration, test execution, and result handling.

## Installation

```bash
npm install @angusmeter/types
```

## Usage

```typescript
import { AngusMeterConfig, TestResult, TestSuite } from '@angusmeter/types';

const config: AngusMeterConfig = {
  name: 'My Test Config',
  version: '1.0.0',
  enabled: true
};

const testSuite: TestSuite = {
  name: 'API Tests',
  tests: []
};
```

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
pnpm install
```

### Build

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

### Test

```bash
pnpm test
```

## License

MIT
