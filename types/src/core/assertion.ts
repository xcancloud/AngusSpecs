/**
 * 断言相关类型定义
 * 包含断言、断言结果等类型
 */

import type { ExtensionArgument } from './common.js';
import type { 
  AssertionType,
  AssertionCondition
} from './enums.js';
import type { DefaultExtraction } from './extraction.js';

/**
 * <p>
 * 断言结果接口
 * </p>
 */
export interface AssertionResult extends ExtensionArgument {
  /** 断言是否失败 */
  failure?: boolean;
  /** 当执行条件不满足时是否忽略 */
  ignored?: boolean;
  /** 描述失败或成功的消息 */
  message?: string;
}

/**
 * <p>
 * 断言接口
 * 用于请求和响应的断言验证
 * </p>
 */
export interface Assertion<T extends DefaultExtraction = DefaultExtraction> extends ExtensionArgument {
  /** 断言名称（必填） */
  name: string;
  /** 断言描述 */
  description?: string;
  /** 断言启用状态，默认启用 */
  enabled?: boolean;
  /** 断言类型（必填） */
  type: AssertionType;
  /** 请求头参数名或JDBC列名，当类型为HEADER时必需 */
  parameterName?: string;
  /** 断言启用条件表达式 */
  condition?: string;
  /** 断言条件（必填） */
  assertionCondition: AssertionCondition;
  /** 断言表达式，支持JSONPath、XPath或正则表达式 */
  expression?: string;
  /** 匹配项位置，支持0到2000的位置 */
  matchItem?: number;
  /** 断言期望值，非空值条件时必需 */
  expected?: string;
  /** 断言值提取配置 */
  extraction?: T;
  
  // 只读字段（@SpecIgnore 和 @JsonIgnore 注解）
  /** 变量替换后的最终条件表达式（只读） */
  readonly actualCondition?: string;
  /** 变量替换后的最终期望内容值（只读） */
  readonly actualExpected?: string;
  /** 基于断言配置提取的最终值（只读） */
  readonly extractValue?: string;
  /** 断言检查结果（只读） */
  readonly result?: AssertionResult;
  /** 期望值中是否包含变量值（只读） */
  readonly hasVariableValueInExpected?: boolean;
  /** 是否为状态断言（只读） */
  readonly hasStatusAssertion?: boolean;
  /** 是否成功（只读） */
  readonly isSuccess?: boolean;
  /** 是否被忽略（只读） */
  readonly isIgnore?: boolean;
  /** 是否启用（只读） */
  readonly isEnabled?: boolean;
  /** 是否可提取（只读） */
  readonly isExtractable?: boolean;
  /** 是否包含变量值（只读） */
  readonly hasVariableValue?: boolean;
  /** 是否包含动态值（只读） */
  readonly hasDynamicValue?: boolean;
  /** 是否包含模拟值（只读） */
  readonly hasMockValue?: boolean;
  /** 是否为空值断言（只读） */
  readonly isEmptyValueAssertion?: boolean;
  /** 是否为可选期望值（只读） */
  readonly isOptionalExpected?: boolean;
}

/**
 * <p>
 * 断言构建器接口
 * </p>
 */
export interface AssertionBuilder<T extends DefaultExtraction = DefaultExtraction> {
  name(name: string): AssertionBuilder<T>;
  description(description: string): AssertionBuilder<T>;
  enabled(enabled: boolean): AssertionBuilder<T>;
  type(type: AssertionType): AssertionBuilder<T>;
  parameterName(parameterName: string): AssertionBuilder<T>;
  condition(condition: string): AssertionBuilder<T>;
  assertionCondition(assertionCondition: AssertionCondition): AssertionBuilder<T>;
  expression(expression: string): AssertionBuilder<T>;
  matchItem(matchItem: number): AssertionBuilder<T>;
  expected(expected: string): AssertionBuilder<T>;
  extraction(extraction: T): AssertionBuilder<T>;
  extensions(extensions: Record<string, any>): AssertionBuilder<T>;
  build(): Assertion<T>;
}

/**
 * <p>
 * 断言结果常量
 * </p>
 */
export const AssertionResultConstants = {
  /** 响应为空 */
  RESPONSE_IS_NULL: 'Response is null',
  /** 断言值为空 */
  ASSERTION_VALUE_IS_EMPTY: 'Assertion value is empty',
  /** 期望值为空 */
  EXPECTED_VALUE_IS_EMPTY: 'Expected value is empty',
  /** 期望正则表达式为空 */
  EXPECTED_REGEXP_IS_EMPTY: 'Expected regular expression is empty',
  /** 期望XPath表达式为空 */
  EXPECTED_XPATH_EXP_IS_EMPTY: 'Expected XPath expression is empty',
  /** 期望JSONPath表达式为空 */
  EXPECTED_JSONPATH_EXP_IS_EMPTY: 'Expected JSONPath expression is empty',
  /** 断言值不是数字 */
  ASSERTION_VALUE_IS_NOT_NUMBER: 'Assertion value is not number',
  /** 期望值不是数字 */
  EXPECTED_VALUE_IS_NOT_NUMBER: 'Expected value is not number',
  /** 响应头未找到 */
  RESPONSE_HEADER_NOT_FOUND: 'RequestHeader not found in response',
  /** 二进制断言不支持 */
  BINARY_ASSERTION_NOT_SUPPORTED: 'Binary assertion not supported',
  /** 断言异常 */
  ASSERTION_EXCEPTION: 'An exception occurred in the assertion: ',
  /** 断言成功 */
  ASSERTION_SUCCESS: 'Success',
  /** 断言失败 */
  ASSERTION_FAILED: 'Failed',
  /** 断言被忽略 */
  ASSERTION_IGNORED: 'Ignored'
} as const;
