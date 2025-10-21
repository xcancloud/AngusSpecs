/**
 * 核心基础类型定义
 * 提供基础的类型接口和通用类型
 */

/**
 * <p>
 * 扩展参数基类，提供扩展字段支持
 * </p>
 */
export interface ExtensionArgument {
  /** 扩展字段映射 */
  extensions?: Record<string, any>;
}

/**
 * <p>
 * 时间值类型，支持多种时间单位
 * </p>
 */
export interface TimeValue {
  /** 时间值 */
  value: number;
  /** 时间单位 */
  unit: 'ms' | 's' | 'm' | 'h' | 'd';
}

/**
 * <p>
 * 参数类型
 * </p>
 */
export interface Arguments extends Record<string, any> {
  // 可以添加特定的参数类型定义
}

/**
 * <p>
 * 测试目标类型接口
 * 支持多种测试目标类型和管道元素
 * </p>
 */
export interface TestTargetType extends ExtensionArgument {
  /** 目标类型标识符 */
  target: string;
  /** 目标名称 */
  name?: string;
  /** 是否启用 */
  enabled?: boolean;
  /** 目标描述 */
  description?: string;
  
  // 只读字段（@JsonIgnore 和 @SpecIgnore 注解）
  /** 目标类型（只读） */
  readonly getTarget?: string;
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
  /** 模拟令牌（只读） */
  readonly mockTokens?: Record<string, string>;
  /** 模拟函数令牌（只读） */
  readonly mockFunctionTokens?: Record<string, any[]>;
  /** 数据集列表（只读） */
  readonly datasets?: any[];
  /** 是否需要数据集（只读） */
  readonly needDataset?: boolean;
  /** EOF时的动作（只读） */
  readonly actionOnEOF?: string;
  /** 共享模式（只读） */
  readonly sharingMode?: string;
}

/**
 * <p>
 * 测试结果基接口
 * 测试结果的通用参数
 * </p>
 */
export interface SampleResult<T = any> {
  /** 任务元素名称（必填） */
  name: string;
  /** 采样成功标志 */
  success: boolean;
  /** 采样失败消息 */
  failMessage?: string;
  /** 断言列表 */
  assertions?: any[];
  /** 目标类型（只读） */
  readonly target: string;
}

/**
 * <p>
 * 测试目标常量
 * </p>
 */
export const TestTargetConstants = {
  // 目标类型
  TYPE_TARGET_HTTP: 'HTTP',
  TYPE_TARGET_WEBSOCKET: 'WEBSOCKET',
  TYPE_TARGET_JDBC: 'JDBC',
  TYPE_TARGET_TCP: 'TCP',
  TYPE_TARGET_SMTP: 'SMTP',
  TYPE_TARGET_MAIL: 'MAIL',
  TYPE_TARGET_FTP: 'FTP',
  TYPE_TARGET_LDAP: 'LDAP',
  
  // 管道类型
  TYPE_PIPELINE_RENDEZVOUS: 'RENDEZVOUS',
  TYPE_PIPELINE_THROUGHPUT: 'THROUGHPUT',
  TYPE_PIPELINE_TRANS_END: 'TRANS_END',
  TYPE_PIPELINE_TRANS_START: 'TRANS_START',
  TYPE_PIPELINE_WAITING_TIME: 'WAITING_TIME',
  
  // 插件名称
  PLUGIN_HTTP_NAME: 'Http',
  PLUGIN_WEBSOCKET_NAME: 'WebSocket',
  PLUGIN_JDBC_NAME: 'Jdbc',
  PLUGIN_TCP_NAME: 'Tcp',
  PLUGIN_SMTP_NAME: 'Smtp',
  PLUGIN_MAIL_NAME: 'Mail',
  PLUGIN_FTP_NAME: 'Ftp',
  PLUGIN_LDAP_NAME: 'Ldap'
} as const;

/**
 * <p>
 * 测试结果常量
 * </p>
 */
export const SampleResultConstants = {
  // 目标类型
  TYPE_TARGET_HTTP: 'HTTP',
  TYPE_TARGET_WEBSOCKET: 'WEBSOCKET',
  TYPE_TARGET_JDBC: 'JDBC',
  TYPE_TARGET_TCP: 'TCP',
  TYPE_TARGET_SMTP: 'SMTP',
  TYPE_TARGET_MAIL: 'MAIL',
  TYPE_TARGET_FTP: 'FTP',
  TYPE_TARGET_LDAP: 'LDAP',
  TYPE_TARGET_EXTENSION: 'EXTENSION'
} as const;
