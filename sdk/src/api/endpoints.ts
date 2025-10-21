/**
 * @fileoverview Endpoint type definitions
 * <p>
 * Contains types and interfaces for API endpoints,
 * including resource paths and endpoint configurations.
 * </p>
 */

import type { ID } from '../core/base';

/**
 * <p>
 * Represents a resource endpoint.
 * Contains information about API resource endpoints.
 * </p>
 */
export interface ResourceEndpoint {
  /** Resource name */
  readonly resource: string;
  
  /** Base path for the resource */
  readonly basePath: string;
  
  /** Supported HTTP methods */
  readonly methods: string[];
  
  /** Whether the endpoint requires authentication */
  readonly requiresAuth: boolean;
  
  /** Endpoint description */
  readonly description?: string;
}

/**
 * <p>
 * Represents common API endpoints.
 * Contains standard endpoint paths for common operations.
 * </p>
 */
export const API_ENDPOINTS = {
  /** Authentication endpoints */
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password'
  },
  
  /** User management endpoints */
  USERS: {
    BASE: '/users',
    BY_ID: (id: ID) => `/users/${id}`,
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
    CHANGE_PASSWORD: '/users/change-password'
  },
  
  /** Configuration endpoints */
  CONFIG: {
    BASE: '/config',
    BY_KEY: (key: string) => `/config/${key}`,
    BY_CATEGORY: (category: string) => `/config/category/${category}`
  },
  
  /** Resource endpoints */
  RESOURCES: {
    BASE: '/resources',
    BY_ID: (id: ID) => `/resources/${id}`,
    BY_TYPE: (type: string) => `/resources/type/${type}`
  },
  
  /** Health check endpoints */
  HEALTH: {
    BASE: '/health',
    READY: '/health/ready',
    LIVE: '/health/live'
  }
} as const;

/**
 * <p>
 * Represents endpoint parameter types.
 * Used for type-safe endpoint parameter handling.
 * </p>
 */
export interface EndpointParams {
  /** Path parameters */
  readonly path?: Record<string, string | number>;
  
  /** Query parameters */
  readonly query?: Record<string, string | number | boolean>;
  
  /** Request body */
  readonly body?: unknown;
  
  /** Request headers */
  readonly headers?: Record<string, string>;
}

/**
 * <p>
 * Represents endpoint response types.
 * Used for type-safe endpoint response handling.
 * </p>
 */
export interface EndpointResponse<T = unknown> {
  /** Response data */
  readonly data: T;
  
  /** Response status */
  readonly status: number;
  
  /** Response headers */
  readonly headers: Record<string, string>;
  
  /** Response timestamp */
  readonly timestamp: string;
}

/**
 * <p>
 * Represents endpoint configuration.
 * Contains settings for specific endpoints.
 * </p>
 */
export interface EndpointConfig {
  /** Endpoint path */
  readonly path: string;
  
  /** HTTP method */
  readonly method: string;
  
  /** Whether the endpoint requires authentication */
  readonly requiresAuth: boolean;
  
  /** Request timeout in milliseconds */
  readonly timeout?: number;
  
  /** Retry configuration */
  readonly retry?: {
    maxAttempts: number;
    delay: number;
  };
  
  /** Rate limiting configuration */
  readonly rateLimit?: {
    requests: number;
    window: number; // in milliseconds
  };
}
