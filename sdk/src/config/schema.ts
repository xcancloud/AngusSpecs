/**
 * @fileoverview Configuration schema definitions
 * <p>
 * Contains types and interfaces for configuration schemas,
 * including validation rules and schema definitions.
 * </p>
 */

import type { StringRecord } from '../core/base';

/**
 * <p>
 * Represents a configuration schema.
 * Defines the structure and validation rules for configuration objects.
 * </p>
 */
export interface ConfigSchema {
  /** Schema name */
  readonly name: string;
  
  /** Schema version */
  readonly version: string;
  
  /** Schema description */
  readonly description?: string;
  
  /** Schema properties */
  readonly properties: StringRecord<PropertySchema>;
  
  /** Required properties */
  readonly required?: string[];
  
  /** Additional properties allowed */
  readonly additionalProperties?: boolean;
}

/**
 * <p>
 * Represents a property schema.
 * Defines the structure and validation rules for individual properties.
 * </p>
 */
export interface PropertySchema {
  /** Property type */
  readonly type: PropertyType;
  
  /** Property description */
  readonly description?: string;
  
  /** Whether the property is required */
  readonly required?: boolean;
  
  /** Default value */
  readonly default?: unknown;
  
  /** Validation rules */
  readonly validation?: ValidationRules;
  
  /** Nested schema for object types */
  readonly schema?: ConfigSchema;
  
  /** Array item schema for array types */
  readonly items?: PropertySchema;
}

/**
 * <p>
 * Represents property types.
 * Used to specify the expected type of configuration properties.
 * </p>
 */
export enum PropertyType {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  OBJECT = 'object',
  ARRAY = 'array',
  NULL = 'null'
}

/**
 * <p>
 * Represents validation rules for properties.
 * Contains constraints and validation logic for property values.
 * </p>
 */
export interface ValidationRules {
  /** Minimum value for numbers */
  readonly min?: number;
  
  /** Maximum value for numbers */
  readonly max?: number;
  
  /** Minimum length for strings */
  readonly minLength?: number;
  
  /** Maximum length for strings */
  readonly maxLength?: number;
  
  /** Regular expression pattern for strings */
  readonly pattern?: string;
  
  /** Allowed values */
  readonly enum?: unknown[];
  
  /** Custom validation function */
  readonly validator?: (value: unknown) => boolean | string;
}

/**
 * <p>
 * Represents a configuration value.
 * Contains the actual configuration data and metadata.
 * </p>
 */
export interface ConfigValue {
  /** Configuration key */
  readonly key: string;
  
  /** Configuration value */
  readonly value: unknown;
  
  /** Value type */
  readonly type: PropertyType;
  
  /** Whether the value is sensitive */
  readonly sensitive?: boolean;
  
  /** Value source */
  readonly source?: ConfigSource;
  
  /** Value timestamp */
  readonly timestamp?: string;
}

/**
 * <p>
 * Represents configuration sources.
 * Used to track where configuration values come from.
 * </p>
 */
export enum ConfigSource {
  /** Environment variables */
  ENVIRONMENT = 'environment',
  
  /** Configuration files */
  FILE = 'file',
  
  /** Command line arguments */
  COMMAND_LINE = 'command_line',
  
  /** Default values */
  DEFAULT = 'default',
  
  /** Database */
  DATABASE = 'database',
  
  /** Remote configuration service */
  REMOTE = 'remote'
}

/**
 * <p>
 * Represents a configuration section.
 * Groups related configuration properties together.
 * </p>
 */
export interface ConfigSection {
  /** Section name */
  readonly name: string;
  
  /** Section description */
  readonly description?: string;
  
  /** Section properties */
  readonly properties: StringRecord<ConfigValue>;
  
  /** Nested sections */
  readonly sections?: StringRecord<ConfigSection>;
}
