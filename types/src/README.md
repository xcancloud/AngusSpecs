# Angus Script TypeScript 类型声明

基于 Java 模型类生成的严格对应的 TypeScript 类型定义，提供完整的类型安全和智能提示支持。

## 📁 文件结构

为了便于维护和管理，类型定义按功能模块分类：

- **`index.ts`** - 主入口文件，重新导出所有类型和枚举
- **`types.ts`** - 重新导出所有分类的类型定义，便于统一访问
- **`enums.ts`** - 所有枚举类型定义
- **`namespace.ts`** - 命名空间对象，提供统一的访问方式
- **`core.ts`** - 核心基础类型
- **`script.ts`** - 脚本配置类型
- **`extraction.ts`** - 提取相关类型
- **`http.ts`** - HTTP相关类型
- **`data.ts`** - 数据源和变量类型
- **`mock-data.ts`** - 模拟数据相关类型
- **`mock-apis.ts`** - 模拟API相关类型

详细的架构说明请参考 [ARCHITECTURE.md](./ARCHITECTURE.md)。

## 文件结构

```
src/
├── enums.ts           # 枚举定义
├── types.ts           # 类型定义
├── namespace.ts        # 命名空间
├── index.ts           # 主导出文件
├── usage-example.ts   # 使用示例
└── README.md          # 说明文档
```

## 使用方式

### 1. 命名空间访问（推荐）

```typescript
import { AngusScript } from './namespace.js';

// 访问枚举
const scriptType = AngusScript.ScriptType.TEST_PERFORMANCE;
const errorAction = AngusScript.ActionWhenError.CONTINUE;
const startMode = AngusScript.StartMode.IMMEDIATELY;
const language = AngusScript.Languages.zh_CN;

// 访问常量
const defaults = AngusScript.Defaults;
```

### 2. 直接导入

```typescript
import { ScriptType, ActionWhenError, StartMode, Languages } from './enums.js';
import type { AngusScript, Configuration, Task } from './types.js';

const scriptType = ScriptType.TEST_PERFORMANCE;
const errorAction = ActionWhenError.CONTINUE;
```

### 3. 从主入口导入

```typescript
import { 
  AngusScript, 
  ScriptType, 
  ActionWhenError, 
  StartMode, 
  Languages,
  type AngusScript as ScriptType,
  type Configuration,
  type Task
} from './index.js';
```

## 主要类型

### 核心类型
- `AngusScript` - 主脚本接口
- `Configuration` - 配置参数
- `Task` - 任务配置（脚本执行任务配置）
- `Info` - 脚本信息

### 枚举类型
- `ScriptType` - 脚本类型
- `ActionWhenError` - 错误处理动作
- `StartMode` - 启动模式
- `Languages` - 语言设置
- `ExtractionMethod` - 提取方法
- `ExtractionSource` - 提取源
- `ExtractionFileType` - 提取文件类型
- `HttpExtractionLocation` - HTTP提取位置
- `HttpMethod` - HTTP请求方法
- `ParameterIn` - 参数位置
- `SecurityType` - 安全类型
- `SecurityIn` - 安全位置
- `ClientIn` - 客户端认证方法

### 支持类型
- `Threads` - 线程配置
- `OnError` - 错误处理配置
- `NodeSelector` - 节点选择器
- `NodeSelectorStrategy` - 节点选择策略（执行节点选择策略配置）
- `Contact` - 联系信息
- `License` - 许可证信息
- `Variable` - 变量定义（支持密码类型、所有提取类型配置、只读字段）
- `DefaultExtraction` - 默认提取配置
- `FileExtraction` - 文件提取配置
- `HttpExtraction` - HTTP提取配置
- `HttpSamplingExtraction` - HTTP采样提取配置
- `JdbcExtraction` - JDBC提取配置
- `Extraction` - 提取接口
- `Request` - HTTP请求接口（完整的HTTP请求参数配置）
- `Parameter` - 参数接口
- `FormParameter` - 表单参数接口
- `RequestBody` - 请求体接口（HTTP请求体配置）
- `Server` - 服务器接口
- `ServerVariable` - 服务器变量接口
- `Security` - 安全认证接口
- `ApiKey` - API密钥接口
- `OAuth2Flow` - OAuth2流程接口
- `OAuth2Flows` - OAuth2流程配置接口
- `HttpSetting` - HTTP设置接口
- `Datasource` - 数据源接口
- `TimeValue` - 时间值类型

## 使用示例

```typescript
import AngusScript from './namespace.js';
import type { 
  AngusScript as ScriptType, 
  Variable,
  DefaultExtraction,
  FileExtraction,
  HttpExtraction,
  JdbcExtraction
} from './types.js';
import { 
  ExtractionMethod, 
  ExtractionSource, 
  ExtractionFileType, 
  HttpExtractionLocation 
} from './enums.js';

// 创建变量 - 使用默认提取
const variable1: Variable = {
  name: 'apiUrl',
  description: 'API 基础URL',
  value: 'https://api.example.com',
  passwordValue: false,
  extraction: {
    name: 'tokenExtraction',
    method: ExtractionMethod.REGEX,
    source: ExtractionSource.VALUE,
    expression: 'token=([^&]+)',
    matchItem: 0,
    defaultValue: 'default-token'
  }
};

// 创建变量 - 使用文件提取
const variable2: Variable = {
  name: 'userToken',
  description: '用户令牌',
  passwordValue: true,
  extraction: {
    name: 'csvExtraction',
    method: ExtractionMethod.EXACT_VALUE,
    source: ExtractionSource.FILE,
    fileType: ExtractionFileType.CSV,
    path: '/data/users.csv',
    encoding: 'UTF-8',
    rowIndex: 1,
    columnIndex: 0
  }
};

// 创建变量 - 使用HTTP提取
const variable3: Variable = {
  name: 'sessionId',
  description: '会话ID',
  passwordValue: false,
  extraction: {
    name: 'responseExtraction',
    method: ExtractionMethod.JSON_PATH,
    source: ExtractionSource.HTTP,
    expression: '$.data.token',
    location: HttpExtractionLocation.RESPONSE_BODY,
    request: {
      method: 'GET',
      url: 'https://api.example.com/auth'
    }
  }
};

// 创建脚本
const script: ScriptType = {
  specification: AngusScript.Defaults.DEFAULT_SPECIFICATION,
  type: AngusScript.ScriptType.TEST_PERFORMANCE,
  plugin: 'http',
  configuration: {
    thread: {
      threads: 10,
      resetAfterRamp: true
    },
    onError: {
      action: AngusScript.ActionWhenError.CONTINUE,
      sampleError: true,
      sampleErrorNum: 20
    },
    priority: 1000,
    startMode: AngusScript.StartMode.IMMEDIATELY,
    lang: AngusScript.Languages.zh_CN,
    variables: [variable]
  },
  task: {
    arguments: {},
    pipelines: []
  }
};
```

## 特性

- ✅ **完整的类型安全**：所有 Java 字段都有对应的 TypeScript 类型
- ✅ **JSDoc 注释**：保留了原始的 JavaDoc 注释
- ✅ **默认值支持**：提供了 `AngusScriptDefaults` 常量对象
- ✅ **枚举映射**：Java 枚举完美映射为 TypeScript 枚举
- ✅ **扩展支持**：通过 `ExtensionArgument` 接口支持扩展字段
- ✅ **命名空间访问**：统一的 `AngusScript` 命名空间访问所有类型和枚举
- ✅ **构建器模式**：支持链式调用的构建器接口

## 注意事项

1. 使用命名空间访问时，所有枚举和常量都通过 `AngusScript` 对象访问
2. 类型定义需要单独导入，不能通过命名空间访问
3. 所有导入路径都需要包含 `.js` 扩展名（ES 模块要求）
4. 建议使用命名空间方式访问枚举和常量，使用直接导入方式访问类型
