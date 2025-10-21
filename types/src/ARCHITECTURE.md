# 类型定义架构说明

## 📁 文件结构

为了便于维护和管理，我们将类型定义按功能模块分类到不同的文件中：

### 核心文件
- **`index.ts`** - 主入口文件，重新导出所有类型和枚举
- **`types.ts`** - 重新导出所有分类的类型定义，便于统一访问
- **`enums.ts`** - 所有枚举类型定义
- **`namespace.ts`** - 命名空间对象，提供统一的访问方式

### 分类文件
- **`core.ts`** - 核心基础类型（ExtensionArgument、TimeValue、Arguments、TestTargetType）
- **`script.ts`** - 脚本配置类型（AngusScript、Configuration、Task、Info等）
- **`extraction.ts`** - 提取相关类型（各种Extraction类型）
- **`http.ts`** - HTTP相关类型（Request、Parameter、Security等）
- **`data.ts`** - 数据源和变量类型（Datasource、Variable等）
- **`mock-data.ts`** - 模拟数据相关类型（MockData）
- **`mock-apis.ts`** - 模拟API相关类型（MockApis）

## 🔄 导入策略

### 推荐导入方式
```typescript
// 方式1：从主入口导入（推荐）
import { AngusScript, Request, Variable } from './types.js';

// 方式2：从分类文件导入（适合大型项目）
import { AngusScript, Configuration } from './script.js';
import { Request, Parameter } from './http.js';
import { Variable } from './core/parameterization.js';
import { DefaultExtraction, FileExtraction } from './extraction.js';
import { MockData } from './mock/data.js';
import { MockApis } from './mock/apis.js';
import { TestTargetType, TestTargetConstants } from './core.js';
```

### 避免循环依赖
- 各分类文件之间通过 `types.ts` 进行类型引用
- 使用 `import type` 进行类型导入，避免运行时依赖

## 📋 类型分类详情

### 1. 核心基础类型 (`core.ts`)
- `ExtensionArgument` - 扩展参数基类
- `TimeValue` - 时间值类型
- `Arguments` - 参数类型
- `TestTargetType` - 测试目标类型接口
- `TestTargetConstants` - 测试目标常量

### 2. 脚本配置类型 (`script.ts`)
- `AngusScript` - 主脚本接口
- `AngusScriptBuilder` - 脚本构建器
- `Configuration` - 配置接口
- `Task` - 任务接口
- `Info` - 信息接口
- `Contact` - 联系信息
- `License` - 许可证信息
- `Threads` - 线程配置
- `OnError` - 错误处理配置
- `NodeSelector` - 节点选择器
- `NodeSelectorStrategy` - 节点选择策略
- `Setup` - 设置接口
- `TearDown` - 清理接口
- `MockData` - 模拟数据接口
- `MockApis` - 模拟API接口
- `TestTargetType` - 测试目标类型接口

### 3. 提取相关类型 (`extraction.ts`)
- `Extraction` - 提取接口
- `DefaultExtraction` - 默认提取配置
- `FileExtraction` - 文件提取配置
- `HttpExtraction` - HTTP提取配置
- `HttpSamplingExtraction` - HTTP采样提取配置
- `JdbcExtraction` - JDBC提取配置

### 4. HTTP相关类型 (`http.ts`)
- `Request` - HTTP请求接口
- `Parameter` - 参数接口
- `FormParameter` - 表单参数接口
- `RequestBody` - 请求体接口
- `Server` - 服务器接口
- `ServerVariable` - 服务器变量接口
- `Security` - 安全认证接口
- `ApiKey` - API密钥接口
- `OAuth2Flow` - OAuth2流程接口
- `OAuth2Flows` - OAuth2流程配置接口
- `HttpSetting` - HTTP设置接口

### 5. 数据源和变量类型 (`data.ts`)
- `Datasource` - 数据源接口
- `Variable` - 变量定义

### 6. 模拟数据相关类型 (`mock-data.ts`)
- `MockData` - 模拟数据接口

### 7. 模拟API相关类型 (`mock-apis.ts`)
- `MockApis` - 模拟API接口

## 🎯 优势

1. **模块化**：按功能分类，便于维护和理解
2. **可扩展**：新增类型时只需在对应分类文件中添加
3. **避免循环依赖**：通过统一的导出策略避免循环引用
4. **类型安全**：保持完整的类型检查和智能提示
5. **易于重构**：修改某个模块时影响范围明确

## 📝 维护指南

1. **添加新类型**：在对应的分类文件中添加，然后在 `types.ts` 中重新导出
2. **修改现有类型**：直接修改对应分类文件中的定义
3. **避免循环依赖**：使用 `import type` 进行类型导入
4. **保持一致性**：确保所有类型都有完整的 JSDoc 注释
