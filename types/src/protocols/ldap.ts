/**
 * LDAP 协议测试类型定义
 * 包含 LDAP 服务器、请求、响应等类型
 */

import type { ExtensionArgument, TestTargetType } from '../core/common.js';
import type { DefaultExtraction } from '../core/extraction.js';
import type { PipelineElementKind, ActionOnEOF, SharingMode, LdapTestType } from '../core/enums.js';

/**
 * <p>
 * LDAP 服务器配置接口
 * </p>
 */
export interface LdapServer extends ExtensionArgument {
  /** LDAP 服务器地址（必填） */
  server: string;
  /** LDAP 服务器端口（必填） */
  port: number;
  /** 用于绑定的用户名 */
  username?: string;
  /** 用于绑定的密码 */
  password?: string;
  /** 根 DN */
  rootDn?: string;
}

/**
 * <p>
 * LDAP 响应接口
 * </p>
 */
export interface LdapResponse {
  /** 响应代码 */
  code?: string;
  /** 响应大小（字节） */
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
  readonly data?: number[];
}

/**
 * <p>
 * 实际 LDAP 请求参数接口
 * </p>
 */
export interface LdapRequest0 {
  /** 采样器使用的请求数据 */
  data?: string;
  /** 请求数据大小（字节） */
  size?: number;
}

/**
 * <p>
 * LDAP 测试目标接口
 * 实现 TestTargetType 接口，用于 LDAP 协议测试
 * </p>
 */
export interface Ldap extends TestTargetType {
  /** LDAP 名称，不区分大小写 */
  name?: string;
  /** 前置测试 LDAP 名称，用于编排顺序控制 */
  beforeName?: string;
  /** LDAP 描述 */
  description?: string;
  /** 是否启用，默认 true */
  enabled?: boolean;
  /** LDAP 服务器配置（必填） */
  server: LdapServer;
  /** LDAP 测试操作类型（必填） */
  testType: LdapTestType;
  /** 是否使用用户自定义操作测试，默认 false */
  userDefined?: boolean;
  /** 目录服务条目命名空间 */
  entryDn?: string;
  /** 自定义添加或修改时的字段 */
  arguments?: Record<string, string>;
  /** 搜索目录服务条目基础命名空间 */
  searchBase?: string;
  /** 自定义搜索时的条目过滤器 */
  searchFilter?: string;
  /** 自定义删除时的条目 */
  deleteEntry?: string;
  /** LDAP 客户端接收的响应数据（只读） */
  readonly response?: LdapResponse;
  
  // 只读字段（@SpecIgnore 和 @JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind?: PipelineElementKind;
  /** 实际 LDAP 请求参数（只读） */
  readonly request0?: LdapRequest0;
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
  /** 用户自定义（只读） */
  readonly userDefined0?: boolean;
}

/**
 * <p>
 * LDAP 构建器接口
 * </p>
 */
export interface LdapBuilder {
  name(name: string): LdapBuilder;
  beforeName(beforeName: string): LdapBuilder;
  description(description: string): LdapBuilder;
  enabled(enabled: boolean): LdapBuilder;
  server(server: LdapServer): LdapBuilder;
  testType(testType: LdapTestType): LdapBuilder;
  userDefined(userDefined: boolean): LdapBuilder;
  entryDn(entryDn: string): LdapBuilder;
  arguments(arguments: Record<string, string>): LdapBuilder;
  searchBase(searchBase: string): LdapBuilder;
  searchFilter(searchFilter: string): LdapBuilder;
  deleteEntry(deleteEntry: string): LdapBuilder;
  extensions(extensions: Record<string, any>): LdapBuilder;
  build(): Ldap;
}
