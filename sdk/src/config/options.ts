/**
 * @fileoverview Configuration options definitions
 * <p>
 * Contains types and interfaces for configuration options,
 * including application settings and feature flags.
 * </p>
 */

import type { StringRecord } from '../core/base';

/**
 * <p>
 * Represents application configuration options.
 * Contains settings for application behavior and features.
 * </p>
 */
export interface AppConfig {
  /** Application name */
  readonly name: string;
  
  /** Application version */
  readonly version: string;
  
  /** Application environment */
  readonly environment: Environment;
  
  /** Debug mode */
  readonly debug: boolean;
  
  /** Log level */
  readonly logLevel: LogLevel;
  
  /** Feature flags */
  readonly features: FeatureFlags;
  
  /** Database configuration */
  readonly database: DatabaseConfig;
  
  /** API configuration */
  readonly api: ApiConfig;
  
  /** Security configuration */
  readonly security: SecurityConfig;
}

/**
 * <p>
 * Represents different application environments.
 * Used to configure application behavior based on environment.
 * </p>
 */
export enum Environment {
  DEVELOPMENT = 'development',
  TESTING = 'testing',
  STAGING = 'staging',
  PRODUCTION = 'production'
}

/**
 * <p>
 * Represents log levels.
 * Used to control logging verbosity.
 * </p>
 */
export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  TRACE = 'trace'
}

/**
 * <p>
 * Represents feature flags.
 * Used to enable or disable application features.
 * </p>
 */
export interface FeatureFlags {
  /** Enable user registration */
  readonly enableUserRegistration: boolean;
  
  /** Enable email notifications */
  readonly enableEmailNotifications: boolean;
  
  /** Enable file uploads */
  readonly enableFileUploads: boolean;
  
  /** Enable API rate limiting */
  readonly enableRateLimiting: boolean;
  
  /** Enable caching */
  readonly enableCaching: boolean;
  
  /** Enable metrics collection */
  readonly enableMetrics: boolean;
  
  /** Custom feature flags */
  readonly custom?: StringRecord<boolean>;
}

/**
 * <p>
 * Represents database configuration.
 * Contains settings for database connections and behavior.
 * </p>
 */
export interface DatabaseConfig {
  /** Database type */
  readonly type: DatabaseType;
  
  /** Database host */
  readonly host: string;
  
  /** Database port */
  readonly port: number;
  
  /** Database name */
  readonly name: string;
  
  /** Database username */
  readonly username: string;
  
  /** Database password */
  readonly password: string;
  
  /** Connection pool settings */
  readonly pool: ConnectionPoolConfig;
  
  /** SSL configuration */
  readonly ssl?: SslConfig;
}

/**
 * <p>
 * Represents database types.
 * Used to specify the type of database being used.
 * </p>
 */
export enum DatabaseType {
  MYSQL = 'mysql',
  POSTGRESQL = 'postgresql',
  SQLITE = 'sqlite',
  MONGODB = 'mongodb',
  REDIS = 'redis'
}

/**
 * <p>
 * Represents connection pool configuration.
 * Contains settings for database connection pooling.
 * </p>
 */
export interface ConnectionPoolConfig {
  /** Minimum number of connections */
  readonly min: number;
  
  /** Maximum number of connections */
  readonly max: number;
  
  /** Connection timeout in milliseconds */
  readonly timeout: number;
  
  /** Idle timeout in milliseconds */
  readonly idleTimeout: number;
}

/**
 * <p>
 * Represents SSL configuration.
 * Contains settings for SSL/TLS connections.
 * </p>
 */
export interface SslConfig {
  /** Whether SSL is enabled */
  readonly enabled: boolean;
  
  /** SSL certificate file path */
  readonly cert?: string;
  
  /** SSL key file path */
  readonly key?: string;
  
  /** SSL CA file path */
  readonly ca?: string;
  
  /** Whether to reject unauthorized certificates */
  readonly rejectUnauthorized?: boolean;
}

/**
 * <p>
 * Represents API configuration.
 * Contains settings for API behavior and endpoints.
 * </p>
 */
export interface ApiConfig {
  /** API base URL */
  readonly baseUrl: string;
  
  /** API version */
  readonly version: string;
  
  /** Request timeout in milliseconds */
  readonly timeout: number;
  
  /** Rate limiting configuration */
  readonly rateLimit: RateLimitConfig;
  
  /** CORS configuration */
  readonly cors: CorsConfig;
}

/**
 * <p>
 * Represents rate limiting configuration.
 * Contains settings for API rate limiting.
 * </p>
 */
export interface RateLimitConfig {
  /** Maximum requests per window */
  readonly maxRequests: number;
  
  /** Time window in milliseconds */
  readonly windowMs: number;
  
  /** Whether to skip successful requests */
  readonly skipSuccessfulRequests?: boolean;
  
  /** Whether to skip failed requests */
  readonly skipFailedRequests?: boolean;
}

/**
 * <p>
 * Represents CORS configuration.
 * Contains settings for Cross-Origin Resource Sharing.
 * </p>
 */
export interface CorsConfig {
  /** Allowed origins */
  readonly origins: string[];
  
  /** Allowed methods */
  readonly methods: string[];
  
  /** Allowed headers */
  readonly headers: string[];
  
  /** Whether to allow credentials */
  readonly credentials: boolean;
}

/**
 * <p>
 * Represents security configuration.
 * Contains settings for application security.
 * </p>
 */
export interface SecurityConfig {
  /** JWT secret key */
  readonly jwtSecret: string;
  
  /** JWT expiration time in seconds */
  readonly jwtExpiration: number;
  
  /** Password hashing rounds */
  readonly passwordRounds: number;
  
  /** Session timeout in milliseconds */
  readonly sessionTimeout: number;
  
  /** Maximum login attempts */
  readonly maxLoginAttempts: number;
  
  /** Account lockout duration in milliseconds */
  readonly lockoutDuration: number;
}
