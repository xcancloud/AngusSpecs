/**
 * WebSocket 协议测试类型定义
 * 包含 WebSocket 服务器、设置、请求、响应等类型
 */

import type { ExtensionArgument, TestTargetType, TimeValue } from '../core/common.js';
import type { DefaultExtraction } from '../core/extraction.js';
import type { PipelineElementKind, ActionOnEOF, SharingMode, WebSocketMessageMode } from '../core/enums.js';
import type { Server, Parameter } from './http.js';
import type { Assertion } from '../core/assertion.js';
import type { Dataset } from '../core/parameterization.js';

/**
 * <p>
 * WebSocket 设置接口
 * </p>
 */
export interface WebSocketSetting extends ExtensionArgument {
  /** 连接超时，指定客户端和服务器建立连接的最大等待时间，默认 6 秒 */
  connectTimeout?: TimeValue;
  /** 响应超时，指定客户端未收到响应消息的最大等待时间，默认 60 秒 */
  responseTimeout?: TimeValue;
  /** 最大重连次数，当连接突然关闭时的最大重连尝试次数，默认 0 */
  maxReconnections?: number;
  /** 重连间隔，请求失败时的重试间隔，默认 200 毫秒，最大允许 30 分钟 */
  reconnectionInterval?: TimeValue;
}

/**
 * <p>
 * WebSocket 响应接口
 * </p>
 */
export interface WebSocketResponse {
  /** 请求二进制数据编码后的字符串 */
  data?: string;
  /** 响应二进制大小（字节） */
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
  /** 响应二进制数据（只读） */
  readonly dataBytes?: number[];
}

/**
 * <p>
 * 实际 WebSocket 请求接口
 * </p>
 */
export interface WebSocketRequest0 {
  /** 采样器使用的数据 */
  data?: string;
  /** 请求大小（字节） */
  size?: number;
}

/**
 * <p>
 * WebSocket 测试目标接口
 * 实现 TestTargetType 接口，用于 WebSocket 协议测试
 * </p>
 */
export interface WebSocket extends TestTargetType {
  /** WebSocket 名称，不区分大小写 */
  name?: string;
  /** 前置测试 WebSocket 名称，用于编排顺序控制 */
  beforeName?: string;
  /** WebSocket 描述 */
  description?: string;
  /** 是否启用，默认 true */
  enabled?: boolean;
  /** 在 AngusTester 中测试的 WebSocket apis ID */
  apisId?: number;
  /** 完整请求 URL，相当于 server、endpoint 和 parameter 的组合，但优先级更高 */
  url?: string;
  /** WebSocket 请求服务器，API 端点相对于基础 URL */
  server?: Server;
  /** WebSocket 请求端点 */
  endpoint?: string;
  /** 适用于 WebSocket 连接请求的参数列表，支持的参数位置类型：QUERY、PATH、HEADER 和 COOKIE */
  parameters?: Parameter[];
  /** 同时发送和接收消息，默认值为 SEND_AND_RECEIVE（必填） */
  mode: WebSocketMessageMode;
  /** WebSocket 客户端发送的消息 */
  message?: string;
  /** WebSocket 消息编码，仅支持 none（默认）、base64 或 gzip_base64 */
  messageEncoding?: string;
  /** WebSocket 响应断言 */
  assertions?: Assertion[];
  /** 依赖的数据集 */
  datasets?: Dataset[];
  /** 数据集读取结束时的处理动作，默认 RECYCLE */
  actionOnEOF?: ActionOnEOF;
  /** 多线程时数据集共享模式，默认 ALL_THREAD */
  sharingMode?: SharingMode;
  /** WebSocket 设置 */
  setting?: WebSocketSetting;
  /** WebSocket 客户端接收的数据（只读） */
  readonly response?: WebSocketResponse;
  
  // 只读字段（@SpecIgnore 和 @JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind?: PipelineElementKind;
  /** 实际 WebSocket 请求参数（只读） */
  readonly request0?: WebSocketRequest0;
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
  /** 实际消息，当有动态值且替换后的内容（只读） */
  readonly actualMessage?: string;
  /** 实际消息二进制数据，当有动态值且替换后的内容（只读） */
  readonly actualMessageBytes?: number[];
  /** 是否仅接收（只读） */
  readonly isOnlyReceived?: boolean;
  /** 是否需要接收（只读） */
  readonly needReceived?: boolean;
  /** 是否需要发送（只读） */
  readonly needSent?: boolean;
}

/**
 * <p>
 * WebSocket 构建器接口
 * </p>
 */
export interface WebSocketBuilder {
  name(name: string): WebSocketBuilder;
  beforeName(beforeName: string): WebSocketBuilder;
  description(description: string): WebSocketBuilder;
  enabled(enabled: boolean): WebSocketBuilder;
  apisId(apisId: number): WebSocketBuilder;
  url(url: string): WebSocketBuilder;
  server(server: Server): WebSocketBuilder;
  endpoint(endpoint: string): WebSocketBuilder;
  parameters(parameters: Parameter[]): WebSocketBuilder;
  mode(mode: WebSocketMessageMode): WebSocketBuilder;
  message(message: string): WebSocketBuilder;
  messageEncoding(messageEncoding: string): WebSocketBuilder;
  assertions(assertions: Assertion[]): WebSocketBuilder;
  datasets(datasets: Dataset[]): WebSocketBuilder;
  actionOnEOF(actionOnEOF: ActionOnEOF): WebSocketBuilder;
  sharingMode(sharingMode: SharingMode): WebSocketBuilder;
  setting(setting: WebSocketSetting): WebSocketBuilder;
  extensions(extensions: Record<string, any>): WebSocketBuilder;
  build(): WebSocket;
}
