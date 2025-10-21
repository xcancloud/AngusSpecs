/**
 * Angus Script 命名空间
 * 提供统一的命名空间访问所有类型和枚举
 */

import { ScriptType, ActionWhenError, StartMode, Languages } from './core/enums.js';
import { AngusScriptDefaults } from './types.js';

/**
 * <p>
 * Angus Script 命名空间
 * 提供统一的访问点来使用所有类型、枚举和常量
 * </p>
 */
export const AngusScriptNamespace = {
  // 导出所有枚举
  ScriptType,
  ActionWhenError,
  StartMode,
  Languages,

  // 导出常量
  Defaults: AngusScriptDefaults
} as const;

// 默认导出命名空间
export default AngusScriptNamespace;