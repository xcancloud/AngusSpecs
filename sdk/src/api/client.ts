/**
 * @fileoverview Client type definitions
 * <p>
 * Contains types and interfaces for API client configuration
 * and client-side operations.
 * </p>
 */

import type { ID } from '../core/base';
import type { ApiRequest } from './request';

/**
 * <p>
 * Represents API client configuration.
 * Contains settings for client initialization and behavior.
 * </p>
 */
export interface ClientConfig {
  /** Base URL for the API */
  readonly baseUrl: string;
  
  /** API version */
  readonly version?: string;
  
  /** Default request timeout in milliseconds */
  readonly timeout?: number;
  
  /** Default request headers */
  readonly defaultHeaders?: Record<string, string>;
  
  /** Authentication configuration */
  readonly auth?: AuthConfig;
  
  /** Request retry configuration */
  readonly retry?: RetryConfig;
  
  /** Whether to enable request/response logging */
  readonly enableLogging?: boolean;
}

/**
 * <p>
 * Represents authentication configuration.
 * Contains settings for API authentication.
 * </p>
 */
export interface AuthConfig {
  /** Authentication type */
  readonly type: AuthType;
  
  /** API key for key-based authentication */
  readonly apiKey?: string;
  
  /** Bearer token for token-based authentication */
  readonly token?: string;
  
  /** Username for basic authentication */
  readonly username?: string;
  
  /** Password for basic authentication */
  readonly password?: string;
  
  /** Token refresh function */
  readonly refreshToken?: () => Promise<string>;
}

/**
 * <p>
 * Represents different authentication types.
 * Used to specify the authentication method.
 * </p>
 */
export enum AuthType {
  /** No authentication */
  NONE = 'none',
  
  /** API key authentication */
  API_KEY = 'api_key',
  
  /** Bearer token authentication */
  BEARER = 'bearer',
  
  /** Basic authentication */
  BASIC = 'basic',
  
  /** OAuth 2.0 authentication */
  OAUTH2 = 'oauth2'
}

/**
 * <p>
 * Represents retry configuration for the client.
 * Contains settings for automatic retry behavior.
 * </p>
 */
export interface RetryConfig {
  /** Maximum number of retry attempts */
  readonly maxAttempts: number;
  
  /** Base delay between retries in milliseconds */
  readonly baseDelay: number;
  
  /** Maximum delay between retries in milliseconds */
  readonly maxDelay?: number;
  
  /** Whether to use exponential backoff */
  readonly exponentialBackoff?: boolean;
  
  /** HTTP status codes that should trigger a retry */
  readonly retryableStatuses?: number[];
}

/**
 * <p>
 * Represents a client session.
 * Contains session-specific information and state.
 * </p>
 */
export interface ClientSession {
  /** Session ID */
  readonly sessionId: string;
  
  /** User ID associated with the session */
  readonly userId?: ID;
  
  /** Session creation timestamp */
  readonly createdAt: string;
  
  /** Session expiration timestamp */
  readonly expiresAt: string;
  
  /** Session metadata */
  readonly metadata?: Record<string, unknown>;
}

/**
 * <p>
 * Represents a client request interceptor.
 * Used to modify requests before they are sent.
 * </p>
 */
export type RequestInterceptor = (request: ApiRequest) => ApiRequest | Promise<ApiRequest>;

/**
 * <p>
 * Represents a client response interceptor.
 * Used to modify responses after they are received.
 * </p>
 */
export type ResponseInterceptor = (response: unknown) => unknown | Promise<unknown>;

/**
 * <p>
 * Represents client event types.
 * Used for client event handling and monitoring.
 * </p>
 */
export enum ClientEventType {
  /** Request started */
  REQUEST_START = 'request_start',
  
  /** Request completed successfully */
  REQUEST_SUCCESS = 'request_success',
  
  /** Request failed */
  REQUEST_ERROR = 'request_error',
  
  /** Request retry */
  REQUEST_RETRY = 'request_retry',
  
  /** Session created */
  SESSION_CREATED = 'session_created',
  
  /** Session expired */
  SESSION_EXPIRED = 'session_expired',
  
  /** Authentication required */
  AUTH_REQUIRED = 'auth_required'
}

/**
 * <p>
 * Represents a client event.
 * Contains event-specific information and data.
 * </p>
 */
export interface ClientEvent {
  /** Event type */
  readonly type: ClientEventType;
  
  /** Event timestamp */
  readonly timestamp: string;
  
  /** Event data */
  readonly data?: Record<string, unknown>;
  
  /** Request ID if applicable */
  readonly requestId?: string;
}
