/**
 * TCP 协议测试类型定义
 * 包含 TCP 服务器、设置、请求、响应等类型
 */

import type { ExtensionArgument, TestTargetType, TimeValue } from '../core/common.js';
import type { DefaultExtraction } from '../core/extraction.js';
import type { PipelineElementKind, ActionOnEOF, SharingMode } from '../core/enums.js';

/**
 * <p>
 * TCP 服务器配置接口
 * </p>
 */
export interface TcpServer extends ExtensionArgument {
  /** TCP 服务器 IP 或主机名（必填） */
  server: string;
  /** TCP 服务器端口（必填） */
  port: number;
  /** 连接超时，指定客户端和服务器建立连接的最大等待时间，默认 6 秒 */
  connectTimeout?: TimeValue;
  /** 响应超时，指定客户端未收到响应消息的最大等待时间，默认 60 秒 */
  responseTimeout?: TimeValue;
}

/**
 * <p>
 * TCP 协议配置接口
 * </p>
 */
export interface TcpSetting extends ExtensionArgument {
  /** TCP 客户端实现类（必填） */
  tcpClientImplClass: string;
  /** 是否重用连接，默认 true */
  reUseConnection?: boolean;
  /** 是否设置无延迟，默认 true */
  setNoDelay?: boolean;
  /** SO_LINGER 值，默认 -1 */
  soLinger?: number;
  /** 行结束字节，默认 10（\n） */
  eolByte?: number;
  /** 消息结束字节，默认 13（\r） */
  eomByte?: number;
  /** 二进制前缀长度，默认 0 */
  binaryPrefixLength?: number;
  
  // 只读字段（@JsonIgnore 注解）
  /** TCP 字符集（只读） */
  readonly tcpCharset?: string;
  /** 是否使用二进制模式（只读） */
  readonly isBinaryMode?: boolean;
  /** 是否使用长度前缀模式（只读） */
  readonly isLengthPrefixedMode?: boolean;
}

/**
 * <p>
 * TCP 响应接口
 * </p>
 */
export interface TcpResponse {
  /** 响应二进制数据编码后的字符串 */
  data?: string;
  /** 响应二进制数据大小 */
  size?: number;
  /** 请求和响应持续时间时间线 */
  timeline?: {
    /** 开始时间 */
    startTime?: number;
    /** 结束时间 */
    endTime?: number;
    /** 持续时间 */
    duration?: number;
  };
  
  // 只读字段（@JsonIgnore 注解）
  /** 恢复的响应二进制数据（字节）（只读） */
  readonly dataBytes?: number[];
}

/**
 * <p>
 * 实际 TCP 请求接口
 * </p>
 */
export interface TcpRequest0 {
  /** 采样器使用的请求数据 */
  data?: string;
  /** 请求数据大小（字节） */
  size?: number;
}

/**
 * <p>
 * TCP 测试目标接口
 * 实现 TestTargetType 接口，用于 TCP 协议测试
 * </p>
 */
export interface Tcp extends TestTargetType {
  /** TCP 名称，不区分大小写 */
  name?: string;
  /** 前置测试 TCP 名称，用于编排顺序控制 */
  beforeName?: string;
  /** TCP 描述 */
  description?: string;
  /** 是否启用，默认 true */
  enabled?: boolean;
  /** TCP 服务器配置（必填） */
  server: TcpServer;
  /** TCP 客户端发送的数据 */
  data?: string;
  /** TCP 数据编码，仅支持 none（默认）、base64 或 gzip_base64 */
  dataEncoding?: string;
  /** TCP 协议配置 */
  setting?: TcpSetting;
  /** TCP 客户端接收的数据（只读） */
  readonly response?: TcpResponse;
  
  // 只读字段（@SpecIgnore 和 @JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind?: PipelineElementKind;
  /** 实际请求数据，当有动态值且替换后的内容（只读） */
  readonly actualData?: string;
  /** 实际请求二进制数据，当有动态值且替换后的内容（只读） */
  readonly binaryData?: number[];
  /** 模拟令牌（只读） */
  readonly mockTokens?: Record<string, string>;
  /** 模拟函数令牌（只读） */
  readonly mockFunctionTokens?: Record<string, any[]>;
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
  /** 是否持久化（只读） */
  readonly isPersistent?: boolean;
  /** 是否代理请求（只读） */
  readonly isProxyRequest?: boolean;
  /** 代理请求变量（只读） */
  readonly proxyRequestVariables?: Record<string, string>;
  /** 最终启用的断言标志（只读） */
  readonly finalEnabledAssertFlag?: boolean;
  /** 最终启用的动态值标志（只读） */
  readonly finalEnabledDynamicValueFlag?: boolean;
  /** 是否在事务中（只读） */
  readonly isInTransaction?: boolean;
  /** 操作 ID（只读） */
  readonly operationId?: string;
  /** 是否需要数据集（只读） */
  readonly needDataset?: boolean;
  /** 实际动作（只读） */
  readonly actualActionOnEOF?: ActionOnEOF;
  /** 实际共享模式（只读） */
  readonly actualSharingMode?: SharingMode;
  /** 是否为原始文本数据（只读） */
  readonly isRawTextData?: boolean;
}

/**
 * <p>
 * TCP 构建器接口
 * </p>
 */
export interface TcpBuilder {
  name(name: string): TcpBuilder;
  beforeName(beforeName: string): TcpBuilder;
  description(description: string): TcpBuilder;
  enabled(enabled: boolean): TcpBuilder;
  server(server: TcpServer): TcpBuilder;
  data(data: string): TcpBuilder;
  dataEncoding(dataEncoding: string): TcpBuilder;
  setting(setting: TcpSetting): TcpBuilder;
  extensions(extensions: Record<string, any>): TcpBuilder;
  build(): Tcp;
}
