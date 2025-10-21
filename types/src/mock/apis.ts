/**
 * 模拟API相关类型定义
 * 包含模拟API、匹配规则、响应内容等类型
 */

import type { ExtensionArgument, TimeValue } from '../core/common.js';
import type { 
  FullMatchCondition,
  MatchParameterIn,
  ResponseDelayMode
} from '../core/enums.js';
import type { HttpMethod } from '../core/enums.js';
import type { Parameter, RequestBody } from '../protocols/http.js';

/**
 * <p>
 * 匹配路径接口
 * 用于根据请求路径匹配模拟响应
 * </p>
 */
export interface MatchPath {
  /** 匹配条件（必填） */
  condition: FullMatchCondition;
  /** 匹配正则表达式或提取表达式 */
  expression?: string;
  /** 匹配期望的路径值 */
  expected?: string;
}

/**
 * <p>
 * 匹配参数接口
 * 用于根据请求参数匹配模拟响应
 * </p>
 */
export interface MatchParameter {
  /** 匹配参数名称（必填） */
  name: string;
  /** 匹配参数位置（必填） */
  in: MatchParameterIn;
  /** 匹配条件（必填） */
  condition: FullMatchCondition;
  /** 匹配正则表达式或提取表达式 */
  expression?: string;
  /** 匹配期望的参数值 */
  expected?: string;
}

/**
 * <p>
 * 匹配请求体接口
 * 用于根据请求体内容匹配模拟响应
 * </p>
 */
export interface MatchBody {
  /** 匹配条件（必填） */
  condition: FullMatchCondition;
  /** 正则或提取表达式 */
  expression?: string;
  /** 匹配体值 */
  expected?: string;
}

/**
 * <p>
 * 匹配请求接口
 * 检查请求是否匹配模式
 * </p>
 */
export interface MatchRequest extends ExtensionArgument {
  /** 根据请求路径匹配 */
  path?: MatchPath;
  /** 根据请求参数匹配 */
  parameters?: MatchParameter[];
  /** 根据请求体内容匹配 */
  body?: MatchBody;
  /** 匹配优先级，当多个条件匹配时返回高优先级响应，默认值1000 */
  priority?: number;
}

/**
 * <p>
 * 响应延迟接口
 * 模拟响应延迟配置
 * </p>
 */
export interface ResponseDelay {
  /** 响应延迟模式（必填） */
  mode: ResponseDelayMode;
  /** 固定延迟推送时间 */
  fixedTime?: TimeValue;
  /** 最小随机延迟推送时间 */
  minRandomTime?: TimeValue;
  /** 最大随机延迟推送时间 */
  maxRandomTime?: TimeValue;
}

/**
 * <p>
 * 模拟响应内容接口
 * 设置响应内容模板
 * </p>
 */
export interface MockResponseContent extends ExtensionArgument {
  /** HTTP状态码（必填） */
  status: number;
  /** 模拟响应头 */
  headers?: any[];
  /** 内容编码，支持BASE64和base64url */
  contentEncoding?: string;
  /** 原始或二进制文件base64文本模拟响应体内容 */
  content?: string;
  /** 模拟服务处理时间或设置延迟时间 */
  delay?: ResponseDelay;
}

/**
 * <p>
 * 模拟响应推送接口
 * 设置模拟请求后的推送模板
 * </p>
 */
export interface MockResponsePushback extends ExtensionArgument {
  /** 是否自动推送响应 */
  autoPush: boolean;
  /** 推送请求方法（必填） */
  method: HttpMethod;
  /** 推送请求URL（必填） */
  url: string;
  /** 适用于HTTP请求的参数列表 */
  parameters?: Parameter[];
  /** 描述单个请求体 */
  body?: RequestBody;
  /** 模拟服务处理时间或设置延迟时间 */
  delay?: ResponseDelay;
}

/**
 * <p>
 * 模拟响应接口
 * 设计模拟API响应结构
 * </p>
 */
export interface MockResponse extends ExtensionArgument {
  /** 模拟响应名称，名称必须唯一（必填） */
  name: string;
  /** 指定需要满足的匹配请求条件以返回当前响应 */
  match?: MatchRequest;
  /** 接收模拟请求后返回的模拟响应内容（必填） */
  content: MockResponseContent;
  /** 接收请求后返回的推送请求内容 */
  pushback?: MockResponsePushback;
}

/**
 * <p>
 * 模拟API接口
 * 自定义API模式用于模拟
 * </p>
 */
export interface MockApis extends ExtensionArgument {
  /** 模拟API名称（必填） */
  name: string;
  /** 模拟API详细描述 */
  description?: string;
  /** 模拟API方法（必填） */
  method: HttpMethod;
  /** 模拟API端点（必填） */
  endpoint: string;
  /** 模拟API响应内容，对应AngusTester应用程序中的模拟服务ID（必填） */
  responses: MockResponse[];
  
  // 只读字段（@SpecIgnore 注解）
  /** 模拟服务ID（只读） */
  readonly mockServiceId?: string;
  /** 模拟服务URL，当未指定mockServiceId时需要（只读） */
  readonly mockServiceUrl?: string;
}

/**
 * <p>
 * 模拟API构建器接口
 * </p>
 */
export interface MockApisBuilder {
  name(name: string): MockApisBuilder;
  description(description: string): MockApisBuilder;
  method(method: HttpMethod): MockApisBuilder;
  endpoint(endpoint: string): MockApisBuilder;
  responses(responses: MockResponse[]): MockApisBuilder;
  mockServiceId(mockServiceId: string): MockApisBuilder;
  mockServiceUrl(mockServiceUrl: string): MockApisBuilder;
  extensions(extensions: Record<string, any>): MockApisBuilder;
  build(): MockApis;
}

/**
 * <p>
 * 模拟响应构建器接口
 * </p>
 */
export interface MockResponseBuilder {
  name(name: string): MockResponseBuilder;
  match(match: MatchRequest): MockResponseBuilder;
  content(content: MockResponseContent): MockResponseBuilder;
  pushback(pushback: MockResponsePushback): MockResponseBuilder;
  extensions(extensions: Record<string, any>): MockResponseBuilder;
  build(): MockResponse;
}

/**
 * <p>
 * 模拟响应内容构建器接口
 * </p>
 */
export interface MockResponseContentBuilder {
  status(status: number): MockResponseContentBuilder;
  headers(headers: any[]): MockResponseContentBuilder;
  contentEncoding(contentEncoding: string): MockResponseContentBuilder;
  content(content: string): MockResponseContentBuilder;
  delay(delay: ResponseDelay): MockResponseContentBuilder;
  extensions(extensions: Record<string, any>): MockResponseContentBuilder;
  build(): MockResponseContent;
}

/**
 * <p>
 * 匹配请求构建器接口
 * </p>
 */
export interface MatchRequestBuilder {
  path(path: MatchPath): MatchRequestBuilder;
  parameters(parameters: MatchParameter[]): MatchRequestBuilder;
  body(body: MatchBody): MatchRequestBuilder;
  priority(priority: number): MatchRequestBuilder;
  extensions(extensions: Record<string, any>): MatchRequestBuilder;
  build(): MatchRequest;
}
