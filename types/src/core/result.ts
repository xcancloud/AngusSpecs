/**
 * 测试结果相关类型定义
 * 包含各种协议的测试结果类型
 */

import type { SampleResult } from './common.js';
import type { DefaultExtraction } from './extraction.js';
import type { Assertion } from './assertion.js';

/**
 * <p>
 * 扩展协议测试结果接口
 * 扩展协议测试结果模式
 * </p>
 */
export interface SampleExtensionResult extends SampleResult<DefaultExtraction> {
  /** 任务元素名称（必填） */
  name: string;
  /** 采样成功标志 */
  success: boolean;
  /** 采样失败消息 */
  failMessage?: string;
  /** 测试结果数据 */
  result?: Record<string, any>;
  /** 断言列表 */
  assertions?: Assertion<DefaultExtraction>[];
  /** 目标类型，固定值EXTENSION（只读） */
  readonly target: 'EXTENSION';
}

/**
 * <p>
 * HTTP协议测试结果接口
 * HTTP协议测试结果模式
 * </p>
 */
export interface SampleHttpResult extends SampleResult {
  /** 任务元素名称（必填） */
  name: string;
  /** 采样成功标志 */
  success: boolean;
  /** 采样失败消息 */
  failMessage?: string;
  /** 实际发送的请求参数 */
  request0?: any;
  /** 客户端接收到的响应数据 */
  response?: any;
  /** 断言列表（只读） */
  readonly assertions?: any[];
  /** 目标类型，固定值HTTP（只读） */
  readonly target: 'HTTP';
}

/**
 * <p>
 * JDBC协议测试结果接口
 * JDBC协议测试结果模式
 * </p>
 */
export interface SampleJdbcResult extends SampleResult<DefaultExtraction> {
  /** 任务元素名称（必填） */
  name: string;
  /** 采样成功标志 */
  success: boolean;
  /** 采样失败消息 */
  failMessage?: string;
  /** 实际发送的请求参数 */
  request0?: any;
  /** 客户端接收到的响应数据 */
  response?: any;
  /** 断言列表 */
  assertions?: Assertion<DefaultExtraction>[];
  /** 目标类型，固定值JDBC（只读） */
  readonly target: 'JDBC';
}

/**
 * <p>
 * FTP协议测试结果接口
 * FTP协议测试结果模式
 * </p>
 */
export interface SampleFtpResult extends SampleResult<DefaultExtraction> {
  /** 任务元素名称（必填） */
  name: string;
  /** 采样成功标志 */
  success: boolean;
  /** 采样失败消息 */
  failMessage?: string;
  /** 实际发送的请求参数 */
  request0?: any;
  /** 客户端接收到的响应数据 */
  response?: any;
  /** 断言列表 */
  assertions?: Assertion<DefaultExtraction>[];
  /** 目标类型，固定值FTP（只读） */
  readonly target: 'FTP';
}

/**
 * <p>
 * WebSocket协议测试结果接口
 * WebSocket协议测试结果模式
 * </p>
 */
export interface SampleWebSocketResult extends SampleResult<DefaultExtraction> {
  /** 任务元素名称（必填） */
  name: string;
  /** 采样成功标志 */
  success: boolean;
  /** 采样失败消息 */
  failMessage?: string;
  /** 实际发送的请求参数 */
  request0?: any;
  /** 客户端接收到的响应数据 */
  response?: any;
  /** 断言列表 */
  assertions?: Assertion<DefaultExtraction>[];
  /** 目标类型，固定值WEBSOCKET（只读） */
  readonly target: 'WEBSOCKET';
}

/**
 * <p>
 * TCP协议测试结果接口
 * TCP协议测试结果模式
 * </p>
 */
export interface SampleTcpResult extends SampleResult<DefaultExtraction> {
  /** 任务元素名称（必填） */
  name: string;
  /** 采样成功标志 */
  success: boolean;
  /** 采样失败消息 */
  failMessage?: string;
  /** 实际发送的请求参数 */
  request0?: any;
  /** 客户端接收到的响应数据 */
  response?: any;
  /** 断言列表 */
  assertions?: Assertion<DefaultExtraction>[];
  /** 目标类型，固定值TCP（只读） */
  readonly target: 'TCP';
}

/**
 * <p>
 * SMTP协议测试结果接口
 * SMTP协议测试结果模式
 * </p>
 */
export interface SampleSmtpResult extends SampleResult<DefaultExtraction> {
  /** 任务元素名称（必填） */
  name: string;
  /** 采样成功标志 */
  success: boolean;
  /** 采样失败消息 */
  failMessage?: string;
  /** 实际发送的请求参数 */
  request0?: any;
  /** 客户端接收到的响应数据 */
  response?: any;
  /** 断言列表 */
  assertions?: Assertion<DefaultExtraction>[];
  /** 目标类型，固定值SMTP（只读） */
  readonly target: 'SMTP';
}

/**
 * <p>
 * Mail协议测试结果接口
 * Mail协议测试结果模式
 * </p>
 */
export interface SampleMailResult extends SampleResult<DefaultExtraction> {
  /** 任务元素名称（必填） */
  name: string;
  /** 采样成功标志 */
  success: boolean;
  /** 采样失败消息 */
  failMessage?: string;
  /** 邮件协议类型 */
  protocol?: string;
  /** 实际发送的请求参数 */
  request0?: any;
  /** 客户端接收到的响应数据 */
  response?: any;
  /** 断言列表（只读） */
  readonly assertions?: any[];
  /** 目标类型，固定值MAIL（只读） */
  readonly target: 'MAIL';
}

/**
 * <p>
 * LDAP协议测试结果接口
 * LDAP协议测试结果模式
 * </p>
 */
export interface SampleLdapResult extends SampleResult<DefaultExtraction> {
  /** 任务元素名称（必填） */
  name: string;
  /** 采样成功标志 */
  success: boolean;
  /** 采样失败消息 */
  failMessage?: string;
  /** 实际发送的请求参数 */
  request0?: any;
  /** 客户端接收到的响应数据 */
  response?: any;
  /** 断言列表 */
  assertions?: Assertion<DefaultExtraction>[];
  /** 目标类型，固定值LDAP（只读） */
  readonly target: 'LDAP';
}


/**
 * <p>
 * 测试结果联合类型
 * 所有可能的测试结果类型
 * </p>
 */
export type AnySampleResult = 
  | SampleExtensionResult
  | SampleHttpResult
  | SampleJdbcResult
  | SampleFtpResult
  | SampleWebSocketResult
  | SampleTcpResult
  | SampleSmtpResult
  | SampleMailResult
  | SampleLdapResult;
