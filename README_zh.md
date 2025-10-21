# AngusSpecs

[English](README.md) | [中文](README_zh.md)

Angus 是一个模块化、类型安全的应用开发套件。本项目是其核心组件集合，提供构建复杂应用所需的基础支柱。

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🏗 核心库

本仓库是一个 Monorepo，包含以下独立发布的包：

| 包名 | 版本 | 描述 |
| :--- | :--- | :--- |
| [`@angus/types`](./packages/types) | [![npm version](https://img.shields.io/npm/v/@angus/types.svg)](https://www.npmjs.com/package/@angus/types) | **核心类型定义**。为整个 Angus 生态系统提供统一的类型契约和数据结构定义。 |
| [`@angus/parser`](./packages/parser) | [![npm version](https://img.shields.io/npm/v/@angus/parser.svg)](https://www.npmjs.com/package/@angus/parser) | **配置/协议解析器**。解析和验证配置文件或通信协议，将数据转换为类型安全的 JavaScript 对象。 |
| [`@angus/sdk`](./packages/sdk) | [![npm version](https://img.shields.io/npm/v/@angus/sdk.svg)](https://www.npmjs.com/package/@angus/sdk) | **链式调用客户端**。提供流畅的 API 链式调用，用于与服务端进行便捷、高效的交互。 |

## 🚀 安装

您可以根据需要安装全部或部分包：

```bash
# 安装全部核心套件
npm install @angus/types @angus/parser @angus/sdk

# 或仅安装您需要的部分
npm install @angus/types @angus/sdk
```

## 💡 是什么?

*   **职责分离**：每个包功能单一明确，既可独立使用，也能无缝协作。
*   **类型安全**：以 `@angus/types` 为基础，在整个开发链路中提供完整的 TypeScript 支持与类型约束。
*   **开发体验**：`@angus/sdk` 的链式调用设计让代码更直观；`@angus/parser` 确保了外部配置输入的安全性。

## 📖 快速开始

以下示例展示了这些包如何协同工作：

```typescript
// 1. 导入各包（在实际项目中，通常从各自模块导入）
import { User, ConfigSchema } from '@angus/types';
import { ConfigParser } from '@angus/parser';
import { AngusAPIClient } from '@angus/sdk';

// 2. 使用 Parser 解析并验证外部配置
const rawConfig = { apiEndpoint: 'https://api.example.com', timeout: 5000 };
const config = ConfigParser.parse(rawConfig, ConfigSchema); // 返回一个符合 ConfigSchema 类型的安全对象

// 3. 初始化链式调用 SDK 客户端
const client = new AngusAPIClient().configure(config);

// 4. 享受完整的类型提示和链式调用体验
//    这里的 `User` 类型来自 `@angus/types`，保证了类型安全
const userList: User[] = await client
    .resource('users')
    .filter({ active: true })
    .select(['id', 'name', 'email'])
    .get();
```

## 📄 License

本项目基于 [MIT 协议](LICENSE) 开源。