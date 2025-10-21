/**
 * 数据源和变量类型定义
 * 包含数据源、变量、测试目标等类型
 */

import type { ExtensionArgument } from './common.js';
import type { 
  DefaultExtraction,
  FileExtraction,
  HttpExtraction,
  HttpSamplingExtraction,
  JdbcExtraction
} from './extraction.js';

/**
 * <p>
 * 数据源接口
 * </p>
 */
export interface Datasource extends ExtensionArgument {
  /** 数据源名称 */
  name: string;
  /** 数据源类型 */
  type?: string;
  /** 数据源URL */
  url?: string;
  /** 数据源配置 */
  config?: Record<string, any>;
  /** 数据源描述 */
  description?: string;
}

/**
 * <p>
 * 变量定义接口
 * </p>
 */
export interface Variable extends ExtensionArgument {
  /** 变量名称 */
  name: string;
  /** 变量描述 */
  description?: string;
  /** 变量值 */
  value?: string;
  /** 是否为密码值 */
  passwordValue?: boolean;
  /** 提取配置 */
  extraction?: DefaultExtraction | FileExtraction | HttpExtraction | HttpSamplingExtraction | JdbcExtraction;
  
  // 只读字段
  /** 实际值（只读） */
  readonly actualValue?: string;
  /** 是否包含模拟值（只读） */
  readonly hasMockValue?: boolean;
  /** 是否可提取（只读） */
  readonly extractable?: boolean;
}

/**
 * <p>
 * 数据集参数接口
 * </p>
 */
export interface DatasetParameter extends ExtensionArgument {
  /** 数据集参数名称（必填） */
  name: string;
  /** 数据集参数值 */
  value?: string;
  
  // 只读字段（@JsonIgnore 注解）
  /** 是否包含模拟值（只读） */
  readonly hasMockValue?: boolean;
}

/**
 * <p>
 * 数据集接口
 * 参数化数据集配置
 * </p>
 */
export interface Dataset extends ExtensionArgument {
  /** 数据集名称（必填） */
  name: string;
  /** 数据集描述 */
  description?: string;
  /** 参数定义（必填） */
  parameters: DatasetParameter[];
  /** 提取规则配置，当提取参数值时使用，仅支持jdbc和file提取 */
  extraction?: DefaultExtraction;
  
  // 只读字段（@SpecIgnore 和 @JsonIgnore 注解）
  /** 是否包含模拟值（只读） */
  readonly hasMockValue?: boolean;
  /** 模拟令牌（只读） */
  readonly mockTokens?: Record<string, string>;
  /** 模拟函数令牌（只读） */
  readonly mockFunctionTokens?: Record<string, any[]>;
  /** 参数名称和动态值（只读） */
  readonly finalValue?: Record<string, any>;
  /** 是否可提取（只读） */
  readonly isExtractable?: boolean;
}

