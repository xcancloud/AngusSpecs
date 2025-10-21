/**
 * 脚本配置类型定义
 * 包含主脚本、配置、任务等核心类型
 */

import type { ExtensionArgument, TimeValue, Arguments, TestTargetType } from './common.js';
import type { 
  ScriptType, 
  ActionWhenError, 
  StartMode, 
  Languages 
} from './enums.js';

/**
 * <p>
 * 联系信息接口
 * </p>
 */
export interface Contact extends ExtensionArgument {
  /** 联系人姓名 */
  name?: string;
  /** 联系人邮箱 */
  email?: string;
  /** 联系人URL */
  url?: string;
}

/**
 * <p>
 * 许可证信息接口
 * </p>
 */
export interface License extends ExtensionArgument {
  /** 许可证名称 */
  name?: string;
  /** 许可证URL */
  url?: string;
}

/**
 * <p>
 * 脚本信息接口
 * </p>
 */
export interface Info extends ExtensionArgument {
  /** 脚本标题 */
  title?: string;
  /** 脚本描述 */
  description?: string;
  /** 脚本版本 */
  version?: string;
  /** 联系信息 */
  contact?: Contact;
  /** 许可证信息 */
  license?: License;
}

/**
 * <p>
 * 配置接口
 * </p>
 */
export interface Configuration extends ExtensionArgument {
  /** 线程配置 */
  threads?: Threads;
  /** 错误处理配置 */
  onError?: OnError;
  /** 节点选择器 */
  nodeSelector?: NodeSelector;
  /** 数据源配置 */
  datasources?: Datasource[];
  /** 变量定义 */
  variables?: Variable[];
  /** 设置接口 */
  setup?: Setup;
  /** 清理接口 */
  tearDown?: TearDown;
  /** 模拟数据配置 */
  mockData?: MockData;
  /** 模拟API配置 */
  mockApis?: MockApis[];
  /** 测试目标类型 */
  testTargetType?: TestTargetType;
}

/**
 * <p>
 * 线程配置
 * </p>
 */
export interface Threads extends ExtensionArgument {
  /** 最大线程数 */
  max?: number;
  /** 最小线程数 */
  min?: number;
  /** 线程增长步长 */
  step?: number;
  /** 线程增长间隔时间 */
  stepTime?: TimeValue;
  /** 线程保持时间 */
  holdTime?: TimeValue;
}

/**
 * <p>
 * 错误处理配置
 * </p>
 */
export interface OnError extends ExtensionArgument {
  /** 错误处理动作 */
  action: ActionWhenError;
  /** 是否采样错误内容 */
  sampleError: boolean;
  /** 错误内容采样数量 */
  sampleErrorNum?: number;
}

/**
 * <p>
 * 节点选择策略接口
 * 执行节点选择策略配置
 * </p>
 */
export interface NodeSelectorStrategy extends ExtensionArgument {
  /** 是否启用自动节点选择策略。启用时，调度器将选择满足以下条件的节点来执行任务，默认禁用 */
  enabled?: boolean;
  /** 执行节点允许的最大其他任务数，超过将被忽略，最大1000。注意：如果值为0，表示只允许同时执行一个任务，即每个节点只能执行一个任务。这适用于性能测试 */
  maxTaskNum?: number;
  /** 当前脚本最后执行的节点，首次执行时忽略匹配 */
  lastExecuted?: boolean;
  /** 是否启用按规格选择节点，默认false */
  specEnabled?: boolean;
  /** 最小CPU规格，最大64 */
  cpuSpec?: number;
  /** 最小内存规格，最大512GB */
  memorySpec?: string;
  /** 最小磁盘规格，最大2000GB */
  diskSpec?: string;
  /** 是否启用按空闲率选择节点，默认false */
  idleRateEnabled?: boolean;
  /** CPU空闲率，最大100% */
  cpuIdleRate?: string;
  /** 内存空闲率，最大100% */
  memoryIdleRate?: string;
  /** 磁盘空闲率，最大100% */
  diskIdleRate?: string;
}

/**
 * <p>
 * 节点选择器配置
 * </p>
 */
export interface NodeSelector extends ExtensionArgument {
  /** 执行节点数量 */
  num?: number;
  /** 可用节点ID列表 */
  availableNodeIds?: number[];
  /** 节点选择策略 */
  strategy?: NodeSelectorStrategy;
}

/**
 * <p>
 * 设置接口
 * </p>
 */
export interface Setup extends ExtensionArgument {
  /** 设置名称 */
  name?: string;
  /** 设置描述 */
  description?: string;
  /** 设置脚本 */
  script?: string;
}

/**
 * <p>
 * 清理接口
 * </p>
 */
export interface TearDown extends ExtensionArgument {
  /** 清理名称 */
  name?: string;
  /** 清理描述 */
  description?: string;
  /** 清理脚本 */
  script?: string;
}



/**
 * <p>
 * 任务接口
 * 脚本执行任务配置
 * </p>
 */
export interface Task extends ExtensionArgument {
  /** 配置参数，插件可能因特定插件而异 */
  arguments?: Arguments;
  /** 脚本执行前的设置操作 */
  setup?: Setup;
  /** 基于场景的测试编排任务，如Http、WebSocket、Jdbc等 */
  pipelines?: TestTargetType[];
  /** 模拟数据任务 */
  mockData?: MockData;
  /** 模拟API，注意：仅支持导入和导出的脚本格式 */
  mockApis?: MockApis[];
  /** 任务完成后的清理操作 */
  tearDown?: TearDown;
  
  // 只读字段（@JsonIgnore 注解）
  /** 是否为管道单目标测试（只读） */
  readonly isPipelineSingleTargetTest?: boolean;
  /** 是否为测试任务（只读） */
  readonly isTestTask?: boolean;
  /** 是否为模拟数据任务（只读） */
  readonly isMockDataTask?: boolean;
  /** 是否为模拟API任务（只读） */
  readonly isMockApisTask?: boolean;
  /** 是否需要上传结果（只读） */
  readonly needsUploadResult?: boolean;
  /** HTTP设置（只读） */
  readonly httpSetting?: any;
  /** JDBC设置（只读） */
  readonly jdbcSetting?: any;
  /** 扩展属性（只读） */
  readonly extentionProperties?: Record<string, string>;
}

/**
 * <p>
 * Angus脚本接口
 * </p>
 */
export interface AngusScript extends ExtensionArgument {
  /** 脚本规范版本 */
  specification?: string;
  /** API版本 */
  apiVersion?: string;
  /** 脚本信息 */
  info?: Info;
  /** 脚本标签 */
  tags?: string[];
  /** 脚本类型 */
  type?: ScriptType;
  /** 插件配置 */
  plugin?: string;
  /** 脚本配置 */
  configuration?: Configuration;
  /** 任务配置 */
  task?: Task;
  /** 扩展配置 */
  extensions?: Record<string, any>;
}

/**
 * <p>
 * Angus脚本构建器接口
 * </p>
 */
export interface AngusScriptBuilder {
  /** 设置规范版本 */
  specification(version: string): AngusScriptBuilder;
  /** 设置API版本 */
  apiVersion(version: string): AngusScriptBuilder;
  /** 设置脚本信息 */
  info(info: Info): AngusScriptBuilder;
  /** 设置脚本标签 */
  tags(tags: string[]): AngusScriptBuilder;
  /** 设置脚本类型 */
  type(type: ScriptType): AngusScriptBuilder;
  /** 设置插件配置 */
  plugin(plugin: string): AngusScriptBuilder;
  /** 设置脚本配置 */
  configuration(config: Configuration): AngusScriptBuilder;
  /** 设置任务配置 */
  task(task: Task): AngusScriptBuilder;
  /** 设置扩展配置 */
  extensions(extensions: Record<string, any>): AngusScriptBuilder;
  /** 构建脚本 */
  build(): AngusScript;
}

// 重新导出需要的类型（避免循环依赖）
import type { Datasource, Variable } from './parameterization.js';
import type { MockData } from '../mock/data.js';
import type { MockApis } from '../mock/apis.js';
