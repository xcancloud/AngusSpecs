/**
 * @fileoverview Response type definitions
 * <p>
 * Contains types and interfaces for API responses and result handling
 * in the Angus ecosystem.
 * </p>
 */

// ID type is not used in this file

/**
 * <p>
 * Represents the status of an operation or request.
 * Used to indicate success or failure states.
 * </p>
 */
export enum OperationStatus {
  /** Operation completed successfully */
  SUCCESS = 'success',
  
  /** Operation failed */
  FAILED = 'failed',
  
  /** Operation is in progress */
  PENDING = 'pending',
  
  /** Operation was cancelled */
  CANCELLED = 'cancelled'
}

/**
 * <p>
 * Base interface for all API responses.
 * Provides common structure for all response types.
 * </p>
 */
export interface BaseResponse {
  /** Response status */
  readonly status: OperationStatus;
  
  /** Response message */
  readonly message: string;
  
  /** Response timestamp */
  readonly timestamp: string;
  
  /** Request ID for tracking */
  readonly requestId: string;
}

/**
 * <p>
 * Represents a successful API response with data.
 * Used for operations that return data.
 * </p>
 */
export interface SuccessResponse<T = unknown> extends BaseResponse {
  /** Response status is always SUCCESS */
  readonly status: OperationStatus.SUCCESS;
  
  /** Response data */
  readonly data: T;
  
  /** Pagination information if applicable */
  readonly pagination?: PaginationInfo;
}

/**
 * <p>
 * Represents an error API response.
 * Used for operations that fail or encounter errors.
 * </p>
 */
export interface ErrorResponse extends BaseResponse {
  /** Response status is always FAILED */
  readonly status: OperationStatus.FAILED;
  
  /** Error code */
  readonly errorCode: string;
  
  /** Error details */
  readonly errorDetails?: Record<string, unknown>;
  
  /** Stack trace for debugging (only in development) */
  readonly stackTrace?: string;
}

/**
 * <p>
 * Represents pagination information for paginated responses.
 * Used to provide navigation and metadata for paginated data.
 * </p>
 */
export interface PaginationInfo {
  /** Current page number (1-based) */
  readonly currentPage: number;
  
  /** Number of items per page */
  readonly pageSize: number;
  
  /** Total number of items */
  readonly totalItems: number;
  
  /** Total number of pages */
  readonly totalPages: number;
  
  /** Whether there is a next page */
  readonly hasNext: boolean;
  
  /** Whether there is a previous page */
  readonly hasPrevious: boolean;
}

/**
 * <p>
 * Represents a list response with pagination.
 * Used for endpoints that return collections of data.
 * </p>
 */
export interface ListResponse<T> extends SuccessResponse<T[]> {
  /** Pagination information */
  readonly pagination: PaginationInfo;
}

/**
 * <p>
 * Represents a single item response.
 * Used for endpoints that return a single entity.
 * </p>
 */
export interface ItemResponse<T> extends SuccessResponse<T> {
  /** No pagination for single items */
  readonly pagination?: never;
}

/**
 * <p>
 * Union type for all possible API response types.
 * Used for type-safe response handling.
 * </p>
 */
export type ApiResponse<T = unknown> = SuccessResponse<T> | ErrorResponse;

/**
 * <p>
 * Represents a result that can be either a success value or an error.
 * Used for operations that may fail and need to return either data or error information.
 * </p>
 */
export type Result<T, E = Error> = 
  | { success: true; data: T; error?: never }
  | { success: false; data?: never; error: E };
