/**
 * Mail 协议测试类型定义
 * 包含 Mail 服务器、请求、响应等类型
 */

import type { ExtensionArgument, TestTargetType, TimeValue } from '../core/common.js';
import type { DefaultExtraction } from '../core/extraction.js';
import type { PipelineElementKind, ActionOnEOF, SharingMode, MailProtocol, SecurityUse } from '../core/enums.js';

/**
 * <p>
 * Mail 服务器安全配置接口
 * </p>
 */
export interface MailServerSecurity extends ExtensionArgument {
  /** 安全使用设置，默认值为 NONE（必填） */
  use: SecurityUse;
  /** 信任所有证书 */
  trustAllCerts?: boolean;
  /** 强制使用 STARTTLS */
  enforceStartTLS?: boolean;
  /** 使用本地信任存储 */
  useLocalTrustStore?: boolean;
  /** 信任存储路径 */
  trustStorePath?: string;
  /** 信任存储 Base64 内容 */
  trustStoreBase64Content?: string;
  /** TLS 协议 */
  tlsProtocols?: string;
}

/**
 * <p>
 * Mail 服务器配置接口
 * </p>
 */
export interface MailServer extends ExtensionArgument {
  /** Mail 服务器 IP 或主机名（必填） */
  server: string;
  /** Mail 服务器端口（必填） */
  port: number;
  /** Mail 服务器安全配置（必填） */
  security: MailServerSecurity;
  /** 是否使用认证 */
  useAuth?: boolean;
  /** 用户名 */
  username?: string;
  /** 密码 */
  password?: string;
  /** 服务器超时值（毫秒），默认 60 秒 */
  serverTimeout?: TimeValue;
  /** 服务器连接超时值（毫秒），默认 6 秒 */
  serverConnectionTimeout?: TimeValue;
}

/**
 * <p>
 * Mail 邮箱设置接口
 * </p>
 */
export interface MailBoxSetting extends ExtensionArgument {
  /** 收件箱文件夹，默认 INBOX */
  folder?: string;
  /** 从服务器删除邮件 */
  deleteMessage?: boolean;
  /** 使用 MIME（原始）存储邮件 */
  storeMimeMessage?: boolean;
  /** 要检索的邮件数量 */
  numMessages?: number;
  /** 仅头信息，默认 false */
  headerOnly?: boolean;
}

/**
 * <p>
 * Mail 响应接口
 * </p>
 */
export interface MailResponse {
  /** 邮件响应头字符串 */
  headers?: string;
  /** 响应二进制数据编码后的字符串 */
  data?: string;
  /** 下载后保存的邮件路径 */
  saveMailPath?: string;
  /** 邮件内容数据 */
  contentData?: string;
  /** 邮件内容数据编码 */
  contentDataEncoding?: string;
  /** 邮件内容数据大小 */
  dataSize?: number;
  
  // 只读字段（@JsonIgnore 注解）
  /** 恢复的响应二进制数据（字节）（只读） */
  readonly dataBytes?: number[];
}

/**
 * <p>
 * Mail 响应集合接口
 * </p>
 */
export interface MailResponses {
  /** 邮件响应列表 */
  responses?: MailResponse[];
  /** 总邮件数量 */
  totalCount?: number;
  /** 成功处理的邮件数量 */
  successCount?: number;
  /** 失败的邮件数量 */
  failureCount?: number;
}

/**
 * <p>
 * 实际 Mail 请求接口
 * </p>
 */
export interface MailRequest0 {
  /** 采样器使用的邮件请求数据 */
  data?: string;
  /** 邮件请求数据大小（字节） */
  size?: number;
  /** 邮件请求头字符串 */
  headers?: string;
}

/**
 * <p>
 * Mail 测试目标接口
 * 实现 TestTargetType 接口，用于 Mail 协议测试
 * </p>
 */
export interface Mail extends TestTargetType {
  /** Mail 名称，不区分大小写 */
  name?: string;
  /** 前置测试 Mail 名称，用于编排顺序控制 */
  beforeName?: string;
  /** Mail 描述 */
  description?: string;
  /** 是否启用，默认 true */
  enabled?: boolean;
  /** 邮件协议（必填） */
  protocol: MailProtocol;
  /** Mail 服务器配置（必填） */
  server: MailServer;
  /** Mail 请求邮箱配置（必填） */
  mail: MailBoxSetting;
  /** Mail 客户端接收的邮件（只读） */
  readonly response?: MailResponses;
  
  // 只读字段（@SpecIgnore 和 @JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind?: PipelineElementKind;
  /** 实际 Mail 请求参数（只读） */
  readonly request0?: MailRequest0;
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
}

/**
 * <p>
 * Mail 构建器接口
 * </p>
 */
export interface MailBuilder {
  name(name: string): MailBuilder;
  beforeName(beforeName: string): MailBuilder;
  description(description: string): MailBuilder;
  enabled(enabled: boolean): MailBuilder;
  protocol(protocol: MailProtocol): MailBuilder;
  server(server: MailServer): MailBuilder;
  mail(mail: MailBoxSetting): MailBuilder;
  extensions(extensions: Record<string, any>): MailBuilder;
  build(): Mail;
}
