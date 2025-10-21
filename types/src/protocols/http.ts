/**
 * HTTP相关类型定义
 * 包含HTTP请求、参数、安全认证等类型
 */

import type { ExtensionArgument, TestTargetType } from '../core/common.js';
import type { 
  HttpMethod,
  ParameterIn,
  SecurityType,
  SecurityIn,
  ClientIn,
  ApisCaseType,
  CaseTestMethod,
  ActionOnEOF,
  SharingMode,
  PipelineElementKind
} from '../core/enums.js';
import type { HttpExtraction, HttpSamplingExtraction } from '../core/extraction.js';

/**
 * <p>
 * 参数接口
 * </p>
 */
export interface Parameter extends ExtensionArgument {
  /** 参数名称 */
  name: string;
  /** 参数值 */
  value?: string;
  /** 参数位置 */
  in: ParameterIn;
  /** 是否必需 */
  required?: boolean;
  /** 参数描述 */
  description?: string;
  
  // 只读字段
  /** 实际值（只读） */
  readonly actualValue?: string;
}

/**
 * <p>
 * 表单参数接口
 * 实现x-www-form-urlencoded和form-data类型参数的类
 * </p>
 */
export interface FormParameter extends ExtensionArgument {
  /** 参数名（不是文件名）。不区分大小写 */
  name: string;
  /** 参数描述 */
  description?: string;
  /** 当参数启用时，请求参数将被处理。当禁用时，请求参数将被忽略。默认启用 */
  enabled?: boolean;
  /** 参数类型。例如：string（包括日期和文件）、number、integer、boolean、array、object */
  type?: string;
  /** 参数格式类型 */
  format?: string;
  /** 在form-data格式中，每个部分包含一个包含Content-Type字段的头部。此字段指定部分的媒体类型，即数据块的类型 */
  contentType?: string;
  /** 内容编码。支持RFC4648中定义的所有编码。例如：BASE64和base64url */
  contentEncoding?: string;
  /** Form-data上传文件名 */
  fileName?: string;
  /** 参数值。可能的格式：文件（上传文件时可以是文件base64文本）、原始值、对象（Json值字符串）、数组（Json值字符串） */
  value?: string;
  
  /** 当存在动态值时的替换后内容（只读） */
  readonly actualValue?: string;
}

/**
 * <p>
 * 请求体接口
 * HTTP请求体配置
 * </p>
 */
export interface RequestBody extends ExtensionArgument {
  /** 参数格式类型 */
  format?: string;
  /** 内容编码。支持RFC4648中定义的所有编码。例如：BASE64和base64url。注意：目前仅支持base64或gzip_base64 */
  contentEncoding?: string;
  /** 表单参数列表。用于上传多个文件时，必须使用multipart媒体类型 */
  forms?: FormParameter[];
  /** 请求体内容。可以是原始内容（如json、xml）或文件Base64 */
  rawContent?: string;
  /** 上传文件名。用于请求头参数。在请求体中传输文件的二进制数据时从请求头中检索 */
  fileName?: string;
  
  /** 实际请求体内容。当存在动态值时的替换后内容（只读） */
  readonly actualRawContent?: string;
}

/**
 * <p>
 * 服务器变量接口
 * </p>
 */
export interface ServerVariable extends ExtensionArgument {
  /** 允许的值列表。例如：prod, dev, beta */
  allowableValues: string[];
  /** 默认值 */
  defaultValue: string;
  /** 服务器变量描述 */
  description?: string;
}

/**
 * <p>
 * 服务器接口
 * API端点相对于基础URL
 * </p>
 */
export interface Server extends ExtensionArgument {
  /** API主机URL。必须是URL格式。例如：http://{env}-api.xcan.cloud:{port}/{basePath} */
  url: string;
  /** 可选字符串，描述URL指定的主机 */
  description?: string;
  /** 变量名和其值之间的映射。值用于服务器URL模板中的替换 */
  variables?: Record<string, ServerVariable>;
}

/**
 * <p>
 * API密钥接口
 * </p>
 */
export interface ApiKey extends ExtensionArgument {
  /** API密钥名称。例如：Authorization */
  name: string;
  /** API密钥值。例如：Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ== */
  value?: string;
}

/**
 * <p>
 * OAuth2流程接口
 * </p>
 */
export interface OAuth2Flow extends ExtensionArgument {
  /** 令牌URL */
  tokenUrl?: string;
  /** 刷新令牌URL */
  refreshUrl?: string;
  /** 可用范围 */
  scopes?: string[];
  /** OAuth2客户端标识符 */
  clientId?: string;
  /** OAuth2客户端密码 */
  clientSecret?: string;
  /** 客户端认证方法 */
  clientIn?: ClientIn;
  /** 认证用户名。适用于password流程 */
  username?: string;
  /** 认证密码 */
  password?: string;
}

/**
 * <p>
 * OAuth2流程配置接口
 * </p>
 */
export interface OAuth2Flows extends ExtensionArgument {
  /** 客户端凭据OAuth2认证流程 */
  clientCredentials?: OAuth2Flow;
  /** 资源所有者密码凭据OAuth2认证流程 */
  password?: OAuth2Flow;
  /** 当前使用的认证流程 */
  authFlow?: string;
  /** 是否使用OAuth2流程生成新令牌。false-使用现有令牌（默认），true-使用OAuth2流程生成新令牌 */
  newToken?: boolean;
  /** 现有令牌 */
  token?: string;
}

/**
 * <p>
 * 安全认证接口
 * </p>
 */
export interface Security extends ExtensionArgument {
  /** 安全模式类型。默认值为none */
  type?: SecurityType;
  /** API密钥的位置。适用于apiKey类型。有效值为query或header。默认值为HEADER */
  in?: SecurityIn;
  /** HTTP授权方案名称。适用于http类型。允许值为Basic或Bearer */
  scheme?: string;
  /** 安全模式名称 */
  name?: string;
  /** 安全模式描述 */
  description?: string;
  /** 安全模式的当前有效状态，仅在启用时生效。默认为true启用 */
  enabled?: boolean;
  /** 与安全模式对应的授权值。仅适用于HTTP类型模式 */
  value?: string;
  /** API密钥安全模式配置 */
  apiKeys?: ApiKey[];
  /** OAuth2安全模式配置 */
  oauth2?: OAuth2Flows;
}

/**
 * <p>
 * HTTP设置接口
 * </p>
 */
export interface HttpSetting extends ExtensionArgument {
  /** 连接超时时间（毫秒） */
  connectTimeout?: number;
  /** 读取超时时间（毫秒） */
  readTimeout?: number;
  /** 写入超时时间（毫秒） */
  writeTimeout?: number;
  /** 是否跟随重定向 */
  followRedirects?: boolean;
  /** 最大重定向次数 */
  maxRedirects?: number;
  /** 是否验证SSL证书 */
  verifySsl?: boolean;
  /** 用户代理字符串 */
  userAgent?: string;
  /** 是否保持连接 */
  keepAlive?: boolean;
  /** 最大连接数 */
  maxConnections?: number;
}

/**
 * <p>
 * HTTP请求接口
 * </p>
 */
export interface Request extends ExtensionArgument {
  /** HTTP请求方法 */
  method: HttpMethod;
  /** 完整的请求URL。相当于server、endpoint和parameter的组合，但优先级更高 */
  url?: string;
  /** HTTP请求服务器。API端点相对于基础URL */
  server?: Server;
  /** HTTP请求端点。注意：允许端点包含查询参数，但angus APIS在保存时不能包含服务器URL和查询参数 */
  endpoint?: string;
  /** 可用于HTTP请求的安全方案 */
  authentication?: Security;
  /** 适用于HTTP请求的参数列表。支持的参数位置类型：QUERY、PATH、HEADER和COOKIE */
  parameters?: Parameter[];
  /** 特定媒体类型或从请求头中检索 */
  contentType?: string;
  /** 请求体配置 */
  body?: RequestBody;
  /** HTTP请求配置 */
  setting?: HttpSetting;
  
  // 只读字段（@JsonIgnore 注解）
  /** 操作ID（只读） */
  readonly operationId?: string;
  /** 模拟令牌（只读） */
  readonly mockTokens?: Record<string, string>;
  /** 请求ID（只读） */
  readonly requestId?: string;
  /** 是否包含模拟值（只读） */
  readonly hasMockValue?: boolean;
  /** URI中是否包含模拟值（只读） */
  readonly hasMockValueInUri?: boolean;
  /** 参数中是否包含模拟值（只读） */
  readonly hasMockValueInParameter?: boolean;
  /** 请求体中是否包含模拟值（只读） */
  readonly hasMockValueInBody?: boolean;
  /** 是否包含变量值（只读） */
  readonly hasVariableValue?: boolean;
  /** 参数中是否包含变量值（只读） */
  readonly hasVariableValueInParameter?: boolean;
  /** 请求体中是否包含变量值（只读） */
  readonly hasVariableValueInBody?: boolean;
  /** 授权头中是否包含变量（只读） */
  readonly hasVariableInAuthorizationHeader?: boolean;
}

/**
 * <p>
 * HTTP响应接口
 * </p>
 */
export interface Response extends ExtensionArgument {
  /** 响应状态码 */
  statusCode?: number;
  /** 响应头 */
  headers?: Record<string, string>;
  /** 响应体 */
  body?: string;
  /** 响应时间（毫秒） */
  responseTime?: number;
  /** 响应大小（字节） */
  size?: number;
  /** 响应编码 */
  encoding?: string;
  /** 响应类型 */
  contentType?: string;
}

/**
 * <p>
 * 实际HTTP请求参数接口
 * </p>
 */
export interface Request0 extends ExtensionArgument {
  /** 实际请求方法 */
  method?: string;
  /** 实际请求URL */
  url?: string;
  /** 实际请求头 */
  headers?: Record<string, string>;
  /** 实际请求体 */
  body?: string;
  /** 实际请求参数 */
  parameters?: Parameter[];
  /** 实际表单参数 */
  forms?: FormParameter[];
}

/**
 * <p>
 * HTTP测试目标接口
 * 实现TestTargetType接口，用于HTTP协议测试
 * </p>
 */
export interface Http extends TestTargetType {
  /** HTTP名称，不区分大小写 */
  name?: string;
  /** HTTP描述 */
  description?: string;
  /** 是否启用，默认true */
  enabled?: boolean;
  /** 测试HTTP启用条件表达式 */
  condition?: string;
  /** 前置测试HTTP名称，用于编排顺序控制 */
  beforeName?: string;
  /** 测试HTTP所在的事务 */
  transactionName?: string;
  /** 在AngusTester中测试的apis ID */
  apisId?: number;
  /** 在AngusTester中HTTP功能测试用例ID */
  caseId?: number;
  /** HTTP功能测试用例测试类型 */
  caseType?: ApisCaseType;
  /** HTTP功能测试用例测试方法说明 */
  caseTestMethod?: CaseTestMethod;
  /** HTTP请求数据 */
  request: Request;
  /** HTTP响应数据 */
  response?: Response;
  /** HTTP响应断言 */
  assertions?: any[]; // Assertion<HttpExtraction>类型
  /** 采样提取变量 */
  variables?: HttpSamplingExtraction[];
  /** 依赖的数据集 */
  datasets?: any[]; // Dataset类型
  /** 数据集读取结束时的处理动作，默认RECYCLE */
  actionOnEOF?: ActionOnEOF;
  /** 多线程时数据集共享模式，默认ALL_THREAD */
  sharingMode?: SharingMode;
  
  // 只读字段（@SpecIgnore 和 @JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind?: PipelineElementKind;
  /** 实际HTTP请求参数（只读） */
  readonly request0?: Request0;
  /** 模拟令牌（只读） */
  readonly mockTokens?: Record<string, string>;
  /** 模拟函数令牌（只读） */
  readonly mockFunctionTokens?: Record<string, any[]>;
  /** 是否持久化（只读） */
  readonly isPersistent?: boolean;
  /** 是否代理请求（只读） */
  readonly isProxyRequest?: boolean;
  /** 代理请求变量（只读） */
  readonly proxyRequestVariables?: Record<string, string>;
  /** 是否为断言类型（只读） */
  readonly isAssertive?: boolean;
  /** 是否有可提取的断言（只读） */
  readonly hasExtractableAssertion?: boolean;
  /** 是否有可提取的采样变量（只读） */
  readonly hasExtractableSamplingVariable?: boolean;
  /** 是否包含动态值（只读） */
  readonly hasDynamicValue?: boolean;
  /** 是否包含模拟值（只读） */
  readonly hasMockValue?: boolean;
  /** 是否设置安全标志（只读） */
  readonly setSecurityFlag?: boolean;
  /** 最终启用的断言标志（只读） */
  readonly finalEnabledAssertFlag?: boolean;
  /** 是否有状态断言（只读） */
  readonly hasStatusAssertion?: boolean;
  /** 最终启用的动态值标志（只读） */
  readonly finalEnabledDynamicValueFlag?: boolean;
  /** 是否在事务中（只读） */
  readonly isInTransaction?: boolean;
  /** 操作ID（只读） */
  readonly operationId?: string;
  /** 是否有效安全（只读） */
  readonly isValidSecurity?: boolean;
  /** 实际动作（只读） */
  readonly actualActionOnEOF?: ActionOnEOF;
  /** 实际共享模式（只读） */
  readonly actualSharingMode?: SharingMode;
  /** 是否需要数据集（只读） */
  readonly needDataset?: boolean;
}

/**
 * <p>
 * HTTP构建器接口
 * </p>
 */
export interface HttpBuilder {
  name(name: string): HttpBuilder;
  description(description: string): HttpBuilder;
  enabled(enabled: boolean): HttpBuilder;
  condition(condition: string): HttpBuilder;
  beforeName(beforeName: string): HttpBuilder;
  transactionName(transactionName: string): HttpBuilder;
  apisId(apisId: number): HttpBuilder;
  caseId(caseId: number): HttpBuilder;
  caseType(caseType: ApisCaseType): HttpBuilder;
  caseTestMethod(caseTestMethod: CaseTestMethod): HttpBuilder;
  request(request: Request): HttpBuilder;
  response(response: Response): HttpBuilder;
  assertions(assertions: any[]): HttpBuilder;
  variables(variables: HttpSamplingExtraction[]): HttpBuilder;
  datasets(datasets: any[]): HttpBuilder;
  actionOnEOF(actionOnEOF: ActionOnEOF): HttpBuilder;
  sharingMode(sharingMode: SharingMode): HttpBuilder;
  request0(request0: Request0): HttpBuilder;
  extensions(extensions: Record<string, any>): HttpBuilder;
  build(): Http;
}

/**
 * <p>
 * HTTP POST请求配置接口
 * </p>
 */
export interface PostRequest extends ExtensionArgument {
  /** 完整请求URL（必填） */
  url: string;
  /** 可用于HTTP请求的安全方案 */
  authentication?: Security;
  /** 适用于HTTP请求的参数列表 */
  parameters?: Parameter[];
  /** 特定媒体类型或从请求头检索 */
  contentType?: string;
  /** 请求体配置 */
  body?: RequestBody;
  /** HTTP请求设置 */
  setting?: HttpSetting;
}

/**
 * <p>
 * POST请求构建器接口
 * </p>
 */
export interface PostRequestBuilder {
  url(url: string): PostRequestBuilder;
  authentication(authentication: Security): PostRequestBuilder;
  parameters(parameters: Parameter[]): PostRequestBuilder;
  contentType(contentType: string): PostRequestBuilder;
  body(body: RequestBody): PostRequestBuilder;
  setting(setting: HttpSetting): PostRequestBuilder;
  extensions(extensions: Record<string, any>): PostRequestBuilder;
  build(): PostRequest;
}
