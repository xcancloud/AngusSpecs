/**
 * JDBC相关类型定义
 * 包含JDBC请求、响应、参数等类型
 */

import type { ExtensionArgument, TestTargetType } from '../core/common.js';
import type { 
  QueryType,
  InputOutputType,
  ColumnType,
  ActionOnEOF,
  SharingMode,
  PipelineElementKind
} from '../core/enums.js';
import type { JdbcExtraction, DefaultExtraction } from '../core/extraction.js';

/**
 * <p>
 * JDBC参数接口
 * </p>
 */
export interface JdbcArgument extends ExtensionArgument {
  /** 数据库表列类型，默认为VARCHAR */
  type?: ColumnType;
  /** 参数输入输出类型 */
  inout: InputOutputType;
  /** 参数值 */
  value?: string;
  
  // 只读字段（@SpecIgnore 注解）
  /** 参数实际值（只读） */
  readonly actualValue?: string;
  /** 是否包含模拟值（只读） */
  readonly hasMockValue?: boolean;
  /** 是否包含变量值（只读） */
  readonly hasVariableValue?: boolean;
}

/**
 * <p>
 * 时间线接口
 * </p>
 */
export interface TimeLine extends ExtensionArgument {
  /** 开始时间（毫秒） */
  startTime?: number;
  /** 结束时间（毫秒） */
  endTime?: number;
  /** 持续时间（毫秒） */
  duration?: number;
}

/**
 * <p>
 * JDBC响应接口
 * </p>
 */
export interface JdbcResponse extends ExtensionArgument {
  /** 执行JDBC语句的成功标志 */
  success?: boolean;
  /** 受影响记录数 */
  updateCount?: number;
  /** 查询结果数据 */
  rows?: Record<string, any>[];
  /** 查询结果列名 */
  columnLabels?: string[];
  /** 响应大小（字节） */
  size?: number;
  /** 请求和响应持续时间时间线 */
  timeline?: TimeLine;
  
  // 只读字段（@JsonIgnore 注解）
  /** 结果字符串格式（只读） */
  readonly rowsAsString?: string;
  /** 列名字符串格式（只读） */
  readonly columnLabelAsString?: string;
}

/**
 * <p>
 * 实际JDBC请求参数接口
 * </p>
 */
export interface JdbcRequest0 extends ExtensionArgument {
  /** 实际SQL语句 */
  sql?: string;
  /** 实际参数 */
  arguments?: JdbcArgument[];
  /** 请求大小（字节） */
  size?: number;
}

/**
 * <p>
 * JDBC测试目标接口
 * 实现TestTargetType接口，用于JDBC协议测试
 * </p>
 */
export interface Jdbc extends TestTargetType {
  /** JDBC名称，不区分大小写 */
  name?: string;
  /** JDBC描述 */
  description?: string;
  /** 是否启用，默认true */
  enabled?: boolean;
  /** 测试JDBC启用条件表达式 */
  condition?: string;
  /** 前置测试JDBC名称，用于编排顺序控制 */
  beforeName?: string;
  /** 测试JDBC所在的事务 */
  transactionName?: string;
  /** JDBC查询语句类型（必填） */
  type: QueryType;
  /** JDBC查询SQL（必填） */
  sql: string;
  /** 最大结果行数 */
  maxResultRows?: number;
  /** 请求超时时间（秒） */
  timeoutInSecond?: number;
  /** JDBC参数，当类型为CALLABLE、PREPARED_SELECT、PREPARED_UPDATE时必需 */
  arguments?: JdbcArgument[];
  /** JDBC响应数据 */
  response?: JdbcResponse;
  /** JDBC响应断言 */
  assertions?: any[]; // Assertion<JdbcExtraction>类型
  /** 采样提取变量 */
  variables?: DefaultExtraction[];
  /** 依赖的数据集 */
  datasets?: any[]; // Dataset类型
  /** 数据集读取结束时的处理动作，默认RECYCLE */
  actionOnEOF?: ActionOnEOF;
  /** 多线程时数据集共享模式，默认ALL_THREAD */
  sharingMode?: SharingMode;
  
  // 只读字段（@SpecIgnore 和 @JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind?: PipelineElementKind;
  /** 实际SQL语句（只读） */
  readonly actualSql?: string;
  /** 实际JDBC请求参数（只读） */
  readonly request0?: JdbcRequest0;
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
  /** SQL中是否包含模拟值（只读） */
  readonly hasMockValueInSql?: boolean;
  /** 参数中是否包含模拟值（只读） */
  readonly hasMockValueInArgument?: boolean;
  /** 是否包含变量值（只读） */
  readonly hasVariableValue?: boolean;
  /** SQL中是否包含变量值（只读） */
  readonly hasVariableValueInSql?: boolean;
  /** 参数中是否包含变量值（只读） */
  readonly hasVariableValueInArgument?: boolean;
  /** 最终启用的断言标志（只读） */
  readonly finalEnabledAssertFlag?: boolean;
  /** 最终启用的动态值标志（只读） */
  readonly finalEnabledDynamicValueFlag?: boolean;
  /** 是否在事务中（只读） */
  readonly isInTransaction?: boolean;
  /** 是否需要数据集（只读） */
  readonly needDataset?: boolean;
  /** 实际动作（只读） */
  readonly actualActionOnEOF?: ActionOnEOF;
  /** 实际共享模式（只读） */
  readonly actualSharingMode?: SharingMode;
}

/**
 * <p>
 * JDBC构建器接口
 * </p>
 */
export interface JdbcBuilder {
  name(name: string): JdbcBuilder;
  description(description: string): JdbcBuilder;
  enabled(enabled: boolean): JdbcBuilder;
  condition(condition: string): JdbcBuilder;
  beforeName(beforeName: string): JdbcBuilder;
  transactionName(transactionName: string): JdbcBuilder;
  type(type: QueryType): JdbcBuilder;
  sql(sql: string): JdbcBuilder;
  maxResultRows(maxResultRows: number): JdbcBuilder;
  timeoutInSecond(timeoutInSecond: number): JdbcBuilder;
  arguments(args: JdbcArgument[]): JdbcBuilder;
  response(response: JdbcResponse): JdbcBuilder;
  assertions(assertions: any[]): JdbcBuilder;
  variables(variables: DefaultExtraction[]): JdbcBuilder;
  datasets(datasets: any[]): JdbcBuilder;
  actionOnEOF(actionOnEOF: ActionOnEOF): JdbcBuilder;
  sharingMode(sharingMode: SharingMode): JdbcBuilder;
  request0(request0: JdbcRequest0): JdbcBuilder;
  extensions(extensions: Record<string, any>): JdbcBuilder;
  build(): Jdbc;
}
