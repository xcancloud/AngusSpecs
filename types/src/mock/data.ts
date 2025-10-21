/**
 * 模拟数据相关类型定义
 * 包含模拟数据、字段、设置等类型
 */

import type { ExtensionArgument } from '../core/common.js';
import type { StorageLocation, LineEndingType } from '../core/enums.js';
import type { PostRequest } from '../protocols/http.js';

/**
 * <p>
 * 模拟字段接口
 * 定义数据字段的组成
 * </p>
 */
export interface MockField extends ExtensionArgument {
  /** 模拟字段名称（必填） */
  name: string;
  /** 模拟字段类型（必填） */
  type: string;
  /** 模拟字段值，可以是常量值或JMock函数 */
  value?: string;
  
  // 只读字段（@JsonIgnore 注解）
  /** 是否有动态值（只读） */
  readonly hasDynamicValue?: boolean;
  /** 是否有模拟值（只读） */
  readonly hasMockValue?: boolean;
}

/**
 * <p>
 * 模拟设置基类接口
 * 模拟数据的通用格式配置
 * </p>
 */
export interface MockSetting extends ExtensionArgument {
  /** 数据格式（只读） */
  readonly format: string;
  /** 生成的模拟数据数量，必须等于迭代次数且优先级高于迭代次数 */
  rows: number;
  /** 模拟数据的批处理行数，默认200 */
  batchRows: number;
  /** 生成数据的存储位置（必填） */
  location: StorageLocation;
  /** 网络和数据空间存储请求配置 */
  storeRequest?: PostRequest;
}

/**
 * <p>
 * CSV设置接口
 * 模拟CSV格式数据配置
 * </p>
 */
export interface CsvSetting extends MockSetting {
  /** 数据格式，固定值CSV（只读） */
  readonly format: 'CSV';
  /** 换行符，支持UNIT_LF和WINDOWS_CRLF（必填） */
  lineEnding: LineEndingType;
  /** 是否在头部包含字段名，默认true */
  includeHeader: boolean;
}

/**
 * <p>
 * JSON设置接口
 * 模拟JSON格式数据配置
 * </p>
 */
export interface JsonSetting extends MockSetting {
  /** 数据格式，固定值JSON（只读） */
  readonly format: 'JSON';
  /** 换行符，支持UNIT_LF和WINDOWS_CRLF（必填） */
  lineEnding: LineEndingType;
  /** 是否在JSON序列化期间包含空值字段，默认false */
  includeNull: boolean;
  /** 是否将多个JSON对象（行）转换为数组，默认false */
  rowsToArray: boolean;
}

/**
 * <p>
 * Excel设置接口
 * 模拟Excel格式数据配置
 * </p>
 */
export interface ExcelSetting extends MockSetting {
  /** 数据格式，固定值EXCEL（只读） */
  readonly format: 'EXCEL';
  /** 换行符，支持UNIT_LF和WINDOWS_CRLF（必填） */
  lineEnding: LineEndingType;
  /** 是否在头部包含字段名，默认true */
  includeHeader: boolean;
}

/**
 * <p>
 * SQL设置接口
 * 模拟SQL格式数据配置
 * </p>
 */
export interface SqlSetting extends MockSetting {
  /** 数据格式，固定值SQL（只读） */
  readonly format: 'SQL';
  /** 表名 */
  tableName?: string;
  /** 是否创建表，默认true */
  createTable: boolean;
}

/**
 * <p>
 * XML设置接口
 * 模拟XML格式数据配置
 * </p>
 */
export interface XmlSetting extends MockSetting {
  /** 数据格式，固定值XML（只读） */
  readonly format: 'XML';
  /** 根元素名称 */
  rootElement?: string;
  /** 行元素名称 */
  rowElement?: string;
  /** 换行符，支持UNIT_LF和WINDOWS_CRLF（必填） */
  lineEnding: LineEndingType;
}

/**
 * <p>
 * TAB设置接口
 * 模拟TAB分隔格式数据配置
 * </p>
 */
export interface TabSetting extends MockSetting {
  /** 数据格式，固定值TAB（只读） */
  readonly format: 'TAB';
  /** 换行符，支持UNIT_LF和WINDOWS_CRLF（必填） */
  lineEnding: LineEndingType;
  /** 是否在头部包含字段名，默认true */
  includeHeader: boolean;
}

/**
 * <p>
 * 自定义设置接口
 * 模拟自定义格式数据配置
 * </p>
 */
export interface CustomSetting extends MockSetting {
  /** 数据格式，固定值CUSTOM（只读） */
  readonly format: 'CUSTOM';
  /** 自定义模板 */
  template?: string;
  /** 换行符，支持UNIT_LF和WINDOWS_CRLF（必填） */
  lineEnding: LineEndingType;
}

/**
 * <p>
 * 扩展设置接口
 * 模拟扩展格式数据配置
 * </p>
 */
export interface ExtSetting extends MockSetting {
  /** 数据格式，固定值EXT（只读） */
  readonly format: 'EXT';
  /** 扩展配置 */
  extConfig?: Record<string, any>;
}

/**
 * <p>
 * 模拟数据接口
 * JMock数据模拟功能生成比随机值更真实的数据
 * </p>
 */
export interface MockData extends ExtensionArgument {
  /** 模拟数据脚本名称（必填） */
  name: string;
  /** 模拟数据脚本描述 */
  description?: string;
  /** 定义数据字段的组成（必填） */
  fields: MockField[];
  /** 数据生成格式和存储位置的配置（必填） */
  settings: MockSetting;
  
  // 只读字段（@JsonIgnore 注解）
  /** 是否有动态值（只读） */
  readonly hasDynamicValue?: boolean;
  /** 是否有模拟值（只读） */
  readonly hasMockValue?: boolean;
}

/**
 * <p>
 * 模拟字段构建器接口
 * </p>
 */
export interface MockFieldBuilder {
  name(name: string): MockFieldBuilder;
  type(type: string): MockFieldBuilder;
  value(value: string): MockFieldBuilder;
  extensions(extensions: Record<string, any>): MockFieldBuilder;
  build(): MockField;
}

/**
 * <p>
 * 模拟数据构建器接口
 * </p>
 */
export interface MockDataBuilder {
  name(name: string): MockDataBuilder;
  description(description: string): MockDataBuilder;
  fields(fields: MockField[]): MockDataBuilder;
  settings(settings: MockSetting): MockDataBuilder;
  extensions(extensions: Record<string, any>): MockDataBuilder;
  build(): MockData;
}

/**
 * <p>
 * CSV设置构建器接口
 * </p>
 */
export interface CsvSettingBuilder {
  rows(rows: number): CsvSettingBuilder;
  batchRows(batchRows: number): CsvSettingBuilder;
  location(location: StorageLocation): CsvSettingBuilder;
  storeRequest(storeRequest: PostRequest): CsvSettingBuilder;
  lineEnding(lineEnding: LineEndingType): CsvSettingBuilder;
  includeHeader(includeHeader: boolean): CsvSettingBuilder;
  extensions(extensions: Record<string, any>): CsvSettingBuilder;
  build(): CsvSetting;
}

/**
 * <p>
 * JSON设置构建器接口
 * </p>
 */
export interface JsonSettingBuilder {
  rows(rows: number): JsonSettingBuilder;
  batchRows(batchRows: number): JsonSettingBuilder;
  location(location: StorageLocation): JsonSettingBuilder;
  storeRequest(storeRequest: PostRequest): JsonSettingBuilder;
  lineEnding(lineEnding: LineEndingType): JsonSettingBuilder;
  includeNull(includeNull: boolean): JsonSettingBuilder;
  rowsToArray(rowsToArray: boolean): JsonSettingBuilder;
  extensions(extensions: Record<string, any>): JsonSettingBuilder;
  build(): JsonSetting;
}