/**
 * @fileoverview Configuration validation definitions
 * <p>
 * Contains types and interfaces for configuration validation,
 * including validation results and error handling.
 * </p>
 */

import type { ConfigSchema, PropertySchema } from './schema';

/**
 * <p>
 * Represents a validation result.
 * Contains the result of configuration validation.
 * </p>
 */
export interface ValidationResult {
  /** Whether the validation passed */
  readonly valid: boolean;
  
  /** Validation errors */
  readonly errors: ValidationError[];
  
  /** Validation warnings */
  readonly warnings: ValidationWarning[];
  
  /** Validated data */
  readonly data?: unknown;
}

/**
 * <p>
 * Represents a validation error.
 * Contains information about validation failures.
 * </p>
 */
export interface ValidationError {
  /** Error code */
  readonly code: string;
  
  /** Error message */
  readonly message: string;
  
  /** Property path */
  readonly path: string;
  
  /** Error value */
  readonly value?: unknown;
  
  /** Expected value or constraint */
  readonly expected?: unknown;
  
  /** Error severity */
  readonly severity: ErrorSeverity;
}

/**
 * <p>
 * Represents a validation warning.
 * Contains information about validation warnings.
 * </p>
 */
export interface ValidationWarning {
  /** Warning code */
  readonly code: string;
  
  /** Warning message */
  readonly message: string;
  
  /** Property path */
  readonly path: string;
  
  /** Warning value */
  readonly value?: unknown;
  
  /** Suggested value */
  readonly suggestion?: unknown;
}

/**
 * <p>
 * Represents error severity levels.
 * Used to categorize validation errors by importance.
 * </p>
 */
export enum ErrorSeverity {
  /** Low severity - warnings */
  LOW = 'low',
  
  /** Medium severity - errors that can be fixed */
  MEDIUM = 'medium',
  
  /** High severity - critical errors */
  HIGH = 'high',
  
  /** Critical severity - blocking errors */
  CRITICAL = 'critical'
}

/**
 * <p>
 * Represents validation error codes.
 * Used to identify specific types of validation errors.
 * </p>
 */
export enum ValidationErrorCode {
  /** Required property is missing */
  REQUIRED_PROPERTY_MISSING = 'REQUIRED_PROPERTY_MISSING',
  
  /** Property type mismatch */
  TYPE_MISMATCH = 'TYPE_MISMATCH',
  
  /** Value is too small */
  VALUE_TOO_SMALL = 'VALUE_TOO_SMALL',
  
  /** Value is too large */
  VALUE_TOO_LARGE = 'VALUE_TOO_LARGE',
  
  /** String is too short */
  STRING_TOO_SHORT = 'STRING_TOO_SHORT',
  
  /** String is too long */
  STRING_TOO_LONG = 'STRING_TOO_LONG',
  
  /** String doesn't match pattern */
  PATTERN_MISMATCH = 'PATTERN_MISMATCH',
  
  /** Value not in allowed enum */
  ENUM_MISMATCH = 'ENUM_MISMATCH',
  
  /** Custom validation failed */
  CUSTOM_VALIDATION_FAILED = 'CUSTOM_VALIDATION_FAILED',
  
  /** Invalid schema */
  INVALID_SCHEMA = 'INVALID_SCHEMA'
}

/**
 * <p>
 * Represents a validator function.
 * Used to implement custom validation logic.
 * </p>
 */
export type Validator<T = unknown> = (value: T, schema: PropertySchema) => ValidationResult;

/**
 * <p>
 * Represents a validation context.
 * Contains context information for validation operations.
 * </p>
 */
export interface ValidationContext {
  /** Schema being validated against */
  readonly schema: ConfigSchema;
  
  /** Validation options */
  readonly options: ValidationOptions;
  
  /** Current validation path */
  readonly path: string[];
  
  /** Validation metadata */
  readonly metadata?: Record<string, unknown>;
}

/**
 * <p>
 * Represents validation options.
 * Contains settings for validation behavior.
 * </p>
 */
export interface ValidationOptions {
  /** Whether to stop on first error */
  readonly stopOnFirstError?: boolean;
  
  /** Whether to include warnings */
  readonly includeWarnings?: boolean;
  
  /** Whether to validate additional properties */
  readonly validateAdditionalProperties?: boolean;
  
  /** Custom validators */
  readonly customValidators?: Record<string, Validator>;
  
  /** Validation strictness */
  readonly strict?: boolean;
}
