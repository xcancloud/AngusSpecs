/**
 * SMTP 协议测试类型定义
 * 包含 SMTP 服务器、邮件内容、响应等类型
 */

import type { ExtensionArgument, TestTargetType } from '../core/common.js';
import type { DefaultExtraction } from '../core/extraction.js';
import type { PipelineElementKind, ActionOnEOF, SharingMode } from '../core/enums.js';
import type { MailServer } from './mail.js';

/**
 * <p>
 * SMTP 邮件配置接口
 * </p>
 */
export interface SmtpMail extends ExtensionArgument {
  /** 发件人邮箱地址 */
  mailFrom?: string;
  /** 回复地址，当收件人点击回复按钮时，回复邮件将发送到此地址 */
  replyTo?: string;
  /** 主要收件人地址（必填） */
  receiverTo: string;
  /** 抄送地址，指定将收到邮件副本的额外收件人 */
  receiverCC?: string;
  /** 密送地址，指定将收到邮件副本的额外收件人，但其他收件人看不到 */
  receiverBCC?: string;
  /** 邮件内容配置（必填） */
  content: SmtpMailContent;
}

/**
 * <p>
 * 邮件内容配置接口
 * </p>
 */
export interface SmtpMailContent extends ExtensionArgument {
  /** 邮件主题 */
  subject?: string;
  /** 是否抑制邮件主题，如果设置为 true，邮件将没有主题行 */
  suppressSubject?: boolean;
  /** 邮件的主要内容或正文 */
  message?: string;
  /** 邮件正文是否为纯文本格式，如果设置为 true，正文将为纯文本；否则可能包含 HTML 或其他富文本格式 */
  plainBody?: boolean;
  /** 是否在邮件中包含时间戳 */
  includeTimestamp?: boolean;
  /** 本地附件文件列表，最多支持 100 个附件 */
  localAttachFiles?: string[];
  /** 本地附件 Base64 内容列表，最多支持 100 个附件 */
  localAttachBase64Contents?: string[];
  /** 是否包含消息大小统计 */
  messageSizeStatistics?: boolean;
  /** 邮件头字段，最多支持 200 个字段 */
  headerFields?: Record<string, string>;
  /** 是否发送 EML 消息 */
  sendEmlMessage?: boolean;
  /** 本地 EML 消息文件 */
  localEmlMessageFile?: string;
  /** 本地 EML 消息 Base64 内容 */
  localEmlMessageBase64Content?: string;
  /** 是否启用调试日志记录 */
  enableDebugLogging?: boolean;
  
  // 只读字段（@SpecIgnore 注解）
  /** 是否包含附件（只读） */
  readonly hasAttachments?: boolean;
  /** 附件数量（只读） */
  readonly attachmentCount?: number;
  /** 消息大小（只读） */
  readonly messageSize?: number;
  /** 是否包含 HTML 内容（只读） */
  readonly hasHtmlContent?: boolean;
  /** 是否包含纯文本内容（只读） */
  readonly hasPlainTextContent?: boolean;
}

/**
 * <p>
 * SMTP 响应接口
 * </p>
 */
export interface SmtpResponse {
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
  readonly responseBytes?: number[];
  /** 响应数据字符串（只读） */
  readonly data?: string;
}

/**
 * <p>
 * SMTP 测试目标接口
 * 实现 TestTargetType 接口，用于 SMTP 协议测试
 * </p>
 */
export interface Smtp extends TestTargetType {
  /** SMTP 名称，不区分大小写 */
  name?: string;
  /** 前置测试 SMTP 名称，用于编排顺序控制 */
  beforeName?: string;
  /** SMTP 描述 */
  description?: string;
  /** 是否启用，默认 true */
  enabled?: boolean;
  /** SMTP 服务器配置（必填） */
  server: MailServer;
  /** SMTP 邮件配置（必填） */
  mail: SmtpMail;
  /** SMTP 客户端接收的数据（只读） */
  readonly response?: SmtpResponse;
  
  // 只读字段（@SpecIgnore 和 @JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind?: PipelineElementKind;
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
 * SMTP 构建器接口
 * </p>
 */
export interface SmtpBuilder {
  name(name: string): SmtpBuilder;
  beforeName(beforeName: string): SmtpBuilder;
  description(description: string): SmtpBuilder;
  enabled(enabled: boolean): SmtpBuilder;
  server(server: MailServer): SmtpBuilder;
  mail(mail: SmtpMail): SmtpBuilder;
  extensions(extensions: Record<string, any>): SmtpBuilder;
  build(): Smtp;
}
