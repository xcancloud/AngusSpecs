# TypeScript Types Library Setup Guide

## 项目配置概览

本文档描述了 `@angus/sdk` TypeScript 类型库的完整配置。

## 📁 项目结构

```
sdk/
├── src/                        # 源代码目录
│   ├── api/                    # API相关类型定义
│   │   ├── client.ts          # 客户端配置类型
│   │   ├── endpoints.ts       # 端点配置类型
│   │   ├── request.ts         # 请求类型
│   │   └── index.ts
│   ├── config/                 # 配置相关类型定义
│   │   ├── options.ts         # 配置选项类型
│   │   ├── schema.ts          # 配置模式类型
│   │   ├── validation.ts      # 验证类型
│   │   └── index.ts
│   ├── core/                   # 核心类型定义
│   │   ├── base.ts            # 基础类型
│   │   ├── entity.ts          # 实体类型
│   │   ├── response.ts        # 响应类型
│   │   └── index.ts
│   ├── utils/                  # 工具类型定义
│   │   ├── common.ts          # 通用工具类型
│   │   ├── guards.ts          # 类型守卫
│   │   ├── transform.ts       # 转换类型
│   │   └── index.ts
│   ├── test/                   # 测试相关
│   │   ├── setup.ts           # 测试设置
│   │   └── base.test.ts       # 基础类型测试
│   └── index.ts               # 主入口文件
├── dist/                       # 编译输出目录
├── coverage/                   # 测试覆盖率报告
├── node_modules/              # 依赖包
├── .eslintrc.js              # ESLint配置
├── .gitignore                # Git忽略文件
├── jest.config.js            # Jest测试配置
├── tsconfig.json             # TypeScript配置
├── package.json              # 项目配置
├── LICENSE                   # 许可证
└── README.md                 # 项目说明

```

## ⚙️ 配置文件说明

### 1. package.json
- **作用**: 定义项目元数据、依赖和脚本
- **关键配置**:
  - `main`: 指向编译后的入口文件 `dist/index.js`
  - `types`: 指向类型定义文件 `dist/index.d.ts`
  - `files`: 指定发布到npm的文件
  - `scripts`: 定义构建、测试、lint等脚本

### 2. tsconfig.json
- **作用**: TypeScript编译器配置
- **关键配置**:
  - `target`: ES2020
  - `module`: CommonJS
  - `strict`: true (启用所有严格类型检查)
  - `declaration`: true (生成.d.ts文件)
  - `sourceMap`: true (生成源映射)
  - `outDir`: ./dist (输出目录)
  - `rootDir`: ./src (源代码根目录)

### 3. jest.config.js
- **作用**: Jest测试框架配置
- **关键配置**:
  - `preset`: 'ts-jest' (使用ts-jest预设)
  - `testEnvironment`: 'node'
  - `coverageThreshold`: 80% (代码覆盖率阈值)
  - `setupFilesAfterEnv`: 测试设置文件

### 4. .eslintrc.js
- **作用**: ESLint代码规范配置
- **关键配置**:
  - `parser`: '@typescript-eslint/parser'
  - 启用TypeScript推荐规则
  - 自定义代码风格规则

## 🔧 可用脚本

```bash
# 构建项目
npm run build

# 监听模式构建
npm run build:watch

# 清理构建输出
npm run clean

# 运行测试
npm test

# 监听模式测试
npm run test:watch

# 生成测试覆盖率报告
npm run test:coverage

# 代码检查
npm run lint

# 自动修复代码问题
npm run lint:fix

# 类型检查（不生成文件）
npm run type-check

# 开发模式（监听构建）
npm run dev
```

## 📦 依赖说明

### 开发依赖
- **TypeScript**: 类型系统和编译器
- **ts-jest**: TypeScript的Jest转换器
- **jest**: 测试框架
- **eslint**: 代码检查工具
- **@typescript-eslint/**: TypeScript的ESLint插件
- **rimraf**: 跨平台删除工具

## 🏗️ 类型定义组织

### Core Types (核心类型)
- **base.ts**: 基础类型定义 (ID, Timestamp, Nullable, etc.)
- **entity.ts**: 实体类型 (User, Config, Resource, etc.)
- **response.ts**: 响应类型 (ApiResponse, SuccessResponse, ErrorResponse, etc.)

### API Types (API类型)
- **request.ts**: 请求类型 (HttpMethod, ApiRequest, RequestOptions, etc.)
- **client.ts**: 客户端类型 (ClientConfig, AuthConfig, ClientSession, etc.)
- **endpoints.ts**: 端点类型 (ResourceEndpoint, EndpointConfig, etc.)

### Config Types (配置类型)
- **schema.ts**: 配置模式 (ConfigSchema, PropertySchema, ValidationRules, etc.)
- **validation.ts**: 验证类型 (ValidationResult, ValidationError, etc.)
- **options.ts**: 配置选项 (AppConfig, DatabaseConfig, SecurityConfig, etc.)

### Utility Types (工具类型)
- **common.ts**: 通用工具类型 (Partial, Pick, Omit, DeepPartial, etc.)
- **transform.ts**: 转换类型 (Transform, MapValues, Filter, etc.)
- **guards.ts**: 类型守卫 (TypeGuard, TypePredicate, TypeAssertion, etc.)

## 🧪 测试

- 测试文件位于 `src/test/` 目录
- 使用Jest作为测试框架
- 使用ts-jest进行TypeScript转换
- 设置了80%的代码覆盖率阈值

## 📝 代码规范

- 使用ESLint进行代码检查
- 启用TypeScript严格模式
- 注释使用英文编写
- 多行注释使用`<p>`标签分行

## 🚀 发布配置

- 设置为公共包 (`publishConfig.access: "public"`)
- 发布到npm官方仓库
- 最低Node.js版本: 16.0.0
- 最低npm版本: 8.0.0

## ✅ 验证步骤

1. **安装依赖**: `npm install`
2. **构建项目**: `npm run build`
3. **运行测试**: `npm test`
4. **代码检查**: `npm run lint`
5. **类型检查**: `npm run type-check`

所有步骤都应该成功完成，没有错误。
