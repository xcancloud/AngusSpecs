/**
 * 提取相关类型定义
 * 包含各种提取配置类型
 */

import type { ExtensionArgument } from './common.js';
import type { 
  ExtractionMethod,
  ExtractionSource,
  ExtractionFileType,
  HttpExtractionLocation
} from './enums.js';

/**
 * <p>
 * 提取接口
 * </p>
 */
export interface Extraction {
  /** 提取名称 */
  name?: string;
  /** 提取方法 */
  method?: ExtractionMethod;
  /** 提取源 */
  source?: ExtractionSource;
}

/**
 * <p>
 * 默认提取配置接口
 * </p>
 */
export interface DefaultExtraction extends ExtensionArgument, Extraction {
  /** 提取表达式 */
  expression?: string;
  /** 匹配项 */
  matchItem?: number;
  /** 默认值 */
  defaultValue?: string;
  
  // 只读字段
  /** 提取值（只读） */
  readonly value?: string;
  /** 最终值（只读） */
  readonly finalValue?: string;
  /** 失败消息（只读） */
  readonly failureMessage?: string;
}

/**
 * <p>
 * 文件提取配置接口
 * </p>
 */
export interface FileExtraction extends DefaultExtraction {
  /** 文件类型 */
  fileType?: ExtractionFileType;
  /** 文件路径 */
  path?: string;
  /** 文件编码 */
  encoding?: string;
  /** 引号字符 */
  quoteChar?: string;
  /** 转义字符 */
  escapeChar?: string;
  /** 分隔符字符 */
  separatorChar?: string;
  /** 行索引 */
  rowIndex?: number;
  /** 列索引 */
  columnIndex?: number;
  
  // 只读字段
  /** 提取值（只读） */
  readonly value?: string;
  /** 失败消息（只读） */
  readonly failureMessage?: string;
  /** 提取源（只读） */
  readonly source?: ExtractionSource;
  /** 提取名称（只读） */
  readonly name?: string;
  /** 最终值（只读） */
  readonly finalValue?: string;
}

/**
 * <p>
 * HTTP提取配置接口
 * </p>
 */
export interface HttpExtraction extends DefaultExtraction {
  /** HTTP请求配置 */
  request?: Request;
  /** 提取位置 */
  location?: HttpExtractionLocation;
  /** 参数名称 */
  parameterName?: string;
  
  // 只读字段
  /** 提取值（只读） */
  readonly value?: string;
  /** 失败消息（只读） */
  readonly failureMessage?: string;
  /** 提取源（只读） */
  readonly source?: ExtractionSource;
  /** 提取名称（只读） */
  readonly name?: string;
  /** 最终值（只读） */
  readonly finalValue?: string;
}

/**
 * <p>
 * HTTP采样提取配置接口
 * </p>
 */
export interface HttpSamplingExtraction extends HttpExtraction {
  // 只读字段
  /** 提取值（只读） */
  readonly value?: string;
  /** 失败消息（只读） */
  readonly failureMessage?: string;
}

/**
 * <p>
 * JDBC提取配置接口
 * </p>
 */
export interface JdbcExtraction extends DefaultExtraction {
  /** 数据源配置 */
  datasource?: Datasource;
  /** SQL查询语句 */
  select?: string;
  /** 行索引 */
  rowIndex?: number;
  /** 列索引 */
  columnIndex?: number;
  
  // 只读字段
  /** 提取值（只读） */
  readonly value?: string;
  /** 失败消息（只读） */
  readonly failureMessage?: string;
  /** 提取源（只读） */
  readonly source?: ExtractionSource;
  /** 提取名称（只读） */
  readonly name?: string;
  /** 最终值（只读） */
  readonly finalValue?: string;
}

// 重新导出需要的类型（避免循环依赖）
import type { Request } from '../protocols/http.js';
import type { Datasource } from './parameterization.js';
