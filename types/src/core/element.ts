/**
 * Pipeline 元素类型定义
 * 包含管道元素、事务元素、集合点、吞吐量、等待时间等类型
 */

import type { ExtensionArgument, TestTargetType } from './common.js';
import type { PipelineElementKind } from './enums.js';

/**
 * <p>
 * 管道元素接口
 * 标记管道中的编排对象
 * </p>
 */
export interface PipelineElement<T extends PipelineElement<T>> extends TestTargetType {
  /** 管道元素类型 */
  kind: PipelineElementKind;
  /** 前置测试任务名称，用于编排顺序控制 */
  beforeName?: string;
  /** 是否为测试目标 */
  isTarget(): boolean;
  /** 是否在事务中 */
  isInTransaction(): boolean;
}

/**
 * <p>
 * 管道事务元素接口
 * 标记管道中的编排对象
 * </p>
 */
export interface PipelineTransactionElement<T extends PipelineTransactionElement<T>> extends PipelineElement<T> {
  /** 事务名称 */
  transactionName?: string;
}

/**
 * <p>
 * 开始事务元素接口
 * 标记事务的开始，必须与相应的结束标记配对
 * </p>
 */
export interface TransStartElement extends ExtensionArgument, PipelineTransactionElement<TransStartElement> {
  /** 开始事务名称，不区分大小写 */
  name?: string;
  /** 开始事务描述 */
  description?: string;
  /** 是否启用，默认 true */
  enabled?: boolean;
  /** 前置测试任务名称，用于编排顺序控制 */
  beforeName?: string;
  /** 事务名称 */
  transactionName?: string;
  
  // 只读字段（@JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind: PipelineElementKind;
  /** 是否在事务中（只读） */
  isInTransaction(): boolean;
}

/**
 * <p>
 * 结束事务元素接口
 * 表示事务的终止，必须与前面的开始标记配对
 * </p>
 */
export interface TransEndElement extends ExtensionArgument, PipelineTransactionElement<TransEndElement> {
  /** 结束事务名称，不区分大小写 */
  name?: string;
  /** 结束事务描述 */
  description?: string;
  /** 是否启用，默认 true */
  enabled?: boolean;
  /** 前置测试任务名称，用于编排顺序控制 */
  beforeName?: string;
  /** 事务名称 */
  transactionName?: string;
  
  // 只读字段（@JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind: PipelineElementKind;
  /** 是否在事务中（只读） */
  isInTransaction(): boolean;
}

/**
 * <p>
 * 集合点元素接口
 * 此机制在发送请求之前累积和同步待处理的用户请求，
 * 使能够验证系统在处理突然流量峰值或大规模并发用户请求时的效率
 * </p>
 */
export interface RendezvousElement extends ExtensionArgument, PipelineTransactionElement<RendezvousElement> {
  /** 集合点名称，不区分大小写 */
  name?: string;
  /** 集合点描述 */
  description?: string;
  /** 是否启用，默认 true */
  enabled?: boolean;
  /** 前置测试任务名称，用于编排顺序控制 */
  beforeName?: string;
  /** 事务名称 */
  transactionName?: string;
  /** 线程数（必填） */
  threads: number;
  /** 超时时间（毫秒），默认 30000 */
  timeoutInMs?: number;
  
  // 只读字段（@JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind: PipelineElementKind;
  /** 是否在事务中（只读） */
  isInTransaction(): boolean;
}

/**
 * <p>
 * 吞吐量元素接口
 * 强制并发限制（每个测试节点的请求/秒）以精确控制系统负载并基准吞吐量阈值
 * </p>
 */
export interface ThroughputElement extends ExtensionArgument, PipelineTransactionElement<ThroughputElement> {
  /** 吞吐量名称，不区分大小写 */
  name?: string;
  /** 吞吐量描述 */
  description?: string;
  /** 是否启用，默认 true */
  enabled?: boolean;
  /** 前置测试任务名称，用于编排顺序控制 */
  beforeName?: string;
  /** 事务名称 */
  transactionName?: string;
  /** 每秒许可数（必填） */
  permitsPerSecond: number;
  /** 超时时间（毫秒），默认 30000 */
  timeoutInMs?: number;
  
  // 只读字段（@JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind: PipelineElementKind;
  /** 是否在事务中（只读） */
  isInTransaction(): boolean;
}

/**
 * <p>
 * 等待时间元素接口
 * 在连续请求之间引入可编程延迟以模拟真实世界的用户交互模式，增强测试环境保真度
 * </p>
 */
export interface WaitingTimeElement extends ExtensionArgument, PipelineTransactionElement<WaitingTimeElement> {
  /** 等待时间名称，不区分大小写 */
  name?: string;
  /** 等待时间描述 */
  description?: string;
  /** 是否启用，默认 true */
  enabled?: boolean;
  /** 前置测试任务名称，用于编排顺序控制 */
  beforeName?: string;
  /** 事务名称 */
  transactionName?: string;
  /** 最小等待时间（毫秒）（必填） */
  minWaitTimeInMs: number;
  /** 最大等待时间（毫秒）（必填） */
  maxWaitTimeInMs: number;
  
  // 只读字段（@JsonIgnore 注解）
  /** 管道元素类型（只读） */
  readonly kind: PipelineElementKind;
  /** 是否在事务中（只读） */
  isInTransaction(): boolean;
}

/**
 * <p>
 * 开始事务元素构建器接口
 * </p>
 */
export interface TransStartElementBuilder {
  name(name: string): TransStartElementBuilder;
  description(description: string): TransStartElementBuilder;
  enabled(enabled: boolean): TransStartElementBuilder;
  beforeName(beforeName: string): TransStartElementBuilder;
  transactionName(transactionName: string): TransStartElementBuilder;
  extensions(extensions: Record<string, any>): TransStartElementBuilder;
  build(): TransStartElement;
}

/**
 * <p>
 * 结束事务元素构建器接口
 * </p>
 */
export interface TransEndElementBuilder {
  name(name: string): TransEndElementBuilder;
  description(description: string): TransEndElementBuilder;
  enabled(enabled: boolean): TransEndElementBuilder;
  beforeName(beforeName: string): TransEndElementBuilder;
  transactionName(transactionName: string): TransEndElementBuilder;
  extensions(extensions: Record<string, any>): TransEndElementBuilder;
  build(): TransEndElement;
}

/**
 * <p>
 * 集合点元素构建器接口
 * </p>
 */
export interface RendezvousElementBuilder {
  name(name: string): RendezvousElementBuilder;
  description(description: string): RendezvousElementBuilder;
  enabled(enabled: boolean): RendezvousElementBuilder;
  beforeName(beforeName: string): RendezvousElementBuilder;
  transactionName(transactionName: string): RendezvousElementBuilder;
  threads(threads: number): RendezvousElementBuilder;
  timeoutInMs(timeoutInMs: number): RendezvousElementBuilder;
  extensions(extensions: Record<string, any>): RendezvousElementBuilder;
  build(): RendezvousElement;
}

/**
 * <p>
 * 吞吐量元素构建器接口
 * </p>
 */
export interface ThroughputElementBuilder {
  name(name: string): ThroughputElementBuilder;
  description(description: string): ThroughputElementBuilder;
  enabled(enabled: boolean): ThroughputElementBuilder;
  beforeName(beforeName: string): ThroughputElementBuilder;
  transactionName(transactionName: string): ThroughputElementBuilder;
  permitsPerSecond(permitsPerSecond: number): ThroughputElementBuilder;
  timeoutInMs(timeoutInMs: number): ThroughputElementBuilder;
  extensions(extensions: Record<string, any>): ThroughputElementBuilder;
  build(): ThroughputElement;
}

/**
 * <p>
 * 等待时间元素构建器接口
 * </p>
 */
export interface WaitingTimeElementBuilder {
  name(name: string): WaitingTimeElementBuilder;
  description(description: string): WaitingTimeElementBuilder;
  enabled(enabled: boolean): WaitingTimeElementBuilder;
  beforeName(beforeName: string): WaitingTimeElementBuilder;
  transactionName(transactionName: string): WaitingTimeElementBuilder;
  minWaitTimeInMs(minWaitTimeInMs: number): WaitingTimeElementBuilder;
  maxWaitTimeInMs(maxWaitTimeInMs: number): WaitingTimeElementBuilder;
  extensions(extensions: Record<string, any>): WaitingTimeElementBuilder;
  build(): WaitingTimeElement;
}
