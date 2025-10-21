/**
 * @fileoverview Entity type definitions
 * <p>
 * Contains core entity types and interfaces that represent
 * business objects in the Angus ecosystem.
 * </p>
 */

import type { ID, Timestamp } from './base';

/**
 * <p>
 * Base interface for all entities in the system.
 * Provides common properties that all entities should have.
 * </p>
 */
export interface BaseEntity {
  /** Unique identifier for the entity */
  readonly id: ID;
  
  /** Timestamp when the entity was created */
  readonly createdAt: Timestamp;
  
  /** Timestamp when the entity was last updated */
  readonly updatedAt: Timestamp;
  
  /** Version number for optimistic locking */
  readonly version: number;
}

/**
 * <p>
 * Represents a user entity in the system.
 * Contains user-specific information and authentication data.
 * </p>
 */
export interface User extends BaseEntity {
  /** User's unique username */
  readonly username: string;
  
  /** User's email address */
  readonly email: string;
  
  /** User's display name */
  readonly displayName: string;
  
  /** Whether the user account is active */
  readonly isActive: boolean;
  
  /** User's role in the system */
  readonly role: UserRole;
  
  /** Additional user metadata */
  readonly metadata?: Record<string, unknown>;
}

/**
 * <p>
 * Represents different user roles in the system.
 * Used for authorization and access control.
 * </p>
 */
export enum UserRole {
  /** Administrator with full system access */
  ADMIN = 'admin',
  
  /** Regular user with standard permissions */
  USER = 'user',
  
  /** Guest user with limited permissions */
  GUEST = 'guest',
  
  /** Moderator with elevated permissions */
  MODERATOR = 'moderator'
}

/**
 * <p>
 * Represents a configuration entity.
 * Contains system configuration settings and parameters.
 * </p>
 */
export interface Config extends BaseEntity {
  /** Configuration key */
  readonly key: string;
  
  /** Configuration value */
  readonly value: unknown;
  
  /** Configuration category for organization */
  readonly category: string;
  
  /** Whether the configuration is sensitive */
  readonly isSensitive: boolean;
  
  /** Configuration description */
  readonly description?: string;
}

/**
 * <p>
 * Represents a resource entity.
 * Contains information about system resources.
 * </p>
 */
export interface Resource extends BaseEntity {
  /** Resource name */
  readonly name: string;
  
  /** Resource type */
  readonly type: string;
  
  /** Resource description */
  readonly description?: string;
  
  /** Resource status */
  readonly status: ResourceStatus;
  
  /** Resource metadata */
  readonly metadata?: Record<string, unknown>;
}

/**
 * <p>
 * Represents different resource statuses.
 * Used to track the current state of resources.
 * </p>
 */
export enum ResourceStatus {
  /** Resource is active and available */
  ACTIVE = 'active',
  
  /** Resource is inactive */
  INACTIVE = 'inactive',
  
  /** Resource is being processed */
  PROCESSING = 'processing',
  
  /** Resource has an error */
  ERROR = 'error',
  
  /** Resource is pending */
  PENDING = 'pending'
}
