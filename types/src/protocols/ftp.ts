/**
 * FTP 协议测试类型定义
 * 包含 FTP 服务器、请求、响应等类型
 */

import type { ExtensionArgument, TestTargetType, TimeValue } from '../core/common.js';
import type { DefaultExtraction } from '../core/extraction.js';
import type { PipelineElementKind, ActionOnEOF, SharingMode, FtpFileSource } from '../core/enums.js';

/**
 * <p>
 * FTP 服务器配置接口
 * </p>
 */
export interface FtpServer extends ExtensionArgument {
  /** FTP 服务器地址（必填） */
  server: string;
  /** FTP 服务器端口（必填） */
  port: number;
  /** FTP 用户名 */
  username?: string;
  /** FTP 密码 */
  password?: string;
  /** Socket 读取超时值（毫秒），默认 60 秒 */
  readTimeout?: TimeValue;
  /** Socket 连接超时值（毫秒），默认 6 秒 */
  connectTimeout?: TimeValue;
}

/**
 * <p>
 * FTP 响应接口
 * </p>
 */
export interface FtpResponse {
  /** 响应代码 */
  code?: string;
  /** 响应数据大小（字节） */
  size?: number;
  /** 下载后保存的文件路径 */
  saveFilePath?: string;
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
  readonly data?: number[];
}

/**
 * <p>
 * 实际 FTP 请求参数接口
 * </p>
 */
export interface FtpRequest0 {
  /** 采样器使用的请求数据 */
  data?: string;
  /** 请求数据大小（字节） */
  size?: number;
}

/**
 * <p>
 * FTP 测试目标接口
 * 实现 TestTargetType 接口，用于 FTP 协议测试
 * </p>
 */
export interface Ftp extends TestTargetType {
  /** FTP 名称，不区分大小写 */
  name?: string;
  /** 前置测试 FTP 名称，用于编排顺序控制 */
  beforeName?: string;
  /** FTP 描述 */
  description?: string;
  /** 是否启用，默认 true */
  enabled?: boolean;
  /** FTP 服务器配置（必填） */
  server: FtpServer;
  /** 是否上传文件，默认 false 表示仅下载文件 */
  uploadFile?: boolean;
  /** 上传文件源 */
  uploadFileSource?: FtpFileSource;
  /** 远程文件名，当文件源为 REMOTE_FILE 或 uploadFile 为 false（下载）时必需 */
  remoteFileName?: string;
  /** 远程文件 URL，当文件源为 REMOTE_URL 时必需 */
  remoteFileUrl?: string;
  /** 本地文件名，当文件源为 LOCAL_FILE 或 uploadFile 为 false（下载保存文件名）时必需 */
  localFileName?: string;
  /** 本地文件内容，当文件源为 LOCAL_FILE 时必需 */
  localFileContent?: string;
  /** 本地文件内容编码，仅支持 none（默认 null）、base64 或 gzip_base64 */
  localFileContentEncoding?: string;
  /** 是否使用二进制模式文件传输 */
  binaryMode?: boolean;
  /** FTP 客户端接收的响应数据（只读） */
  readonly response?: FtpResponse;
  
  // 只读字段（@SpecIgnore 和 @JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind?: PipelineElementKind;
  /** 实际 FTP 请求参数（只读） */
  readonly request0?: FtpRequest0;
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
  /** 是否保存响应（只读） */
  readonly saveResponse?: boolean;
  /** 二进制模式（只读） */
  readonly binaryMode0?: boolean;
  /** 上传文件（只读） */
  readonly uploadFile0?: boolean;
  /** 上传文件源（只读） */
  readonly uploadFileSource0?: FtpFileSource;
  /** 保存响应（只读） */
  readonly saveResponse0?: boolean;
}

/**
 * <p>
 * FTP 构建器接口
 * </p>
 */
export interface FtpBuilder {
  name(name: string): FtpBuilder;
  beforeName(beforeName: string): FtpBuilder;
  description(description: string): FtpBuilder;
  enabled(enabled: boolean): FtpBuilder;
  server(server: FtpServer): FtpBuilder;
  uploadFile(uploadFile: boolean): FtpBuilder;
  uploadFileSource(uploadFileSource: FtpFileSource): FtpBuilder;
  remoteFileName(remoteFileName: string): FtpBuilder;
  remoteFileUrl(remoteFileUrl: string): FtpBuilder;
  localFileName(localFileName: string): FtpBuilder;
  localFileContent(localFileContent: string): FtpBuilder;
  localFileContentEncoding(localFileContentEncoding: string): FtpBuilder;
  binaryMode(binaryMode: boolean): FtpBuilder;
  extensions(extensions: Record<string, any>): FtpBuilder;
  build(): Ftp;
}
