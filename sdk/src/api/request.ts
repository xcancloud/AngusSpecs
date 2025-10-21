/**
 * @fileoverview Request type definitions
 * <p>
 * Contains types and interfaces for API requests,
 * including HTTP methods, headers, and request bodies.
 * </p>
 */

import type { StringRecord } from '../core/base';

/**
 * <p>
 * Represents HTTP methods supported by the API.
 * Used for type-safe HTTP method specification.
 * </p>
 */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS'
}

/**
 * <p>
 * Represents HTTP status codes.
 * Used for response status validation and error handling.
 * </p>
 */
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503
}

/**
 * <p>
 * Base interface for all API requests.
 * Provides common structure for all request types.
 * </p>
 */
export interface BaseRequest {
  /** Request headers */
  readonly headers?: StringRecord<string>;
  
  /** Request query parameters */
  readonly query?: StringRecord<string | number | boolean>;
  
  /** Request timeout in milliseconds */
  readonly timeout?: number;
  
  /** Request ID for tracking */
  readonly requestId?: string;
}

/**
 * <p>
 * Represents a GET request.
 * Used for retrieving data from the API.
 * </p>
 */
export interface GetRequest extends BaseRequest {
  /** HTTP method is always GET */
  readonly method: HttpMethod.GET;
  
  /** Resource path */
  readonly path: string;
  
  /** Query parameters */
  readonly query?: StringRecord<string | number | boolean>;
}

/**
 * <p>
 * Represents a POST request with a body.
 * Used for creating new resources.
 * </p>
 */
export interface PostRequest<T = unknown> extends BaseRequest {
  /** HTTP method is always POST */
  readonly method: HttpMethod.POST;
  
  /** Resource path */
  readonly path: string;
  
  /** Request body */
  readonly body: T;
}

/**
 * <p>
 * Represents a PUT request with a body.
 * Used for updating existing resources.
 * </p>
 */
export interface PutRequest<T = unknown> extends BaseRequest {
  /** HTTP method is always PUT */
  readonly method: HttpMethod.PUT;
  
  /** Resource path */
  readonly path: string;
  
  /** Request body */
  readonly body: T;
}

/**
 * <p>
 * Represents a PATCH request with a body.
 * Used for partial updates to existing resources.
 * </p>
 */
export interface PatchRequest<T = unknown> extends BaseRequest {
  /** HTTP method is always PATCH */
  readonly method: HttpMethod.PATCH;
  
  /** Resource path */
  readonly path: string;
  
  /** Request body */
  readonly body: T;
}

/**
 * <p>
 * Represents a DELETE request.
 * Used for removing resources.
 * </p>
 */
export interface DeleteRequest extends BaseRequest {
  /** HTTP method is always DELETE */
  readonly method: HttpMethod.DELETE;
  
  /** Resource path */
  readonly path: string;
}

/**
 * <p>
 * Union type for all possible API request types.
 * Used for type-safe request handling.
 * </p>
 */
export type ApiRequest<T = unknown> = 
  | GetRequest 
  | PostRequest<T> 
  | PutRequest<T> 
  | PatchRequest<T> 
  | DeleteRequest;

/**
 * <p>
 * Represents request options for API calls.
 * Contains configuration and metadata for requests.
 * </p>
 */
export interface RequestOptions {
  /** Request timeout in milliseconds */
  readonly timeout?: number;
  
  /** Retry configuration */
  readonly retry?: RetryConfig;
  
  /** Request headers */
  readonly headers?: StringRecord<string>;
  
  /** Whether to include credentials */
  readonly withCredentials?: boolean;
  
  /** Request priority */
  readonly priority?: RequestPriority;
}

/**
 * <p>
 * Represents retry configuration for failed requests.
 * Used to configure automatic retry behavior.
 * </p>
 */
export interface RetryConfig {
  /** Maximum number of retry attempts */
  readonly maxAttempts: number;
  
  /** Delay between retries in milliseconds */
  readonly delay: number;
  
  /** Whether to use exponential backoff */
  readonly exponentialBackoff?: boolean;
  
  /** HTTP status codes that should trigger a retry */
  readonly retryableStatuses?: HttpStatus[];
}

/**
 * <p>
 * Represents request priority levels.
 * Used for request queuing and processing order.
 * </p>
 */
export enum RequestPriority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  URGENT = 'urgent'
}
