/**
 * @fileoverview Base type definitions
 * <p>
 * Contains fundamental base types and utility types used throughout
 * the Angus ecosystem.
 * </p>
 */

/**
 * <p>
 * Represents a unique identifier that can be either a string or number.
 * Used for entity identification across the system.
 * </p>
 */
export type ID = string | number;

/**
 * <p>
 * Represents a timestamp as either a Date object or ISO 8601 string.
 * Used for time-based operations and data serialization.
 * </p>
 */
export type Timestamp = Date | string;

/**
 * <p>
 * Represents a generic key-value pair where the key is always a string
 * and the value can be any type.
 * </p>
 */
export type KeyValuePair<T = unknown> = {
  readonly key: string;
  readonly value: T;
};

/**
 * <p>
 * Represents a generic object with string keys and values of any type.
 * Used for flexible data structures and configuration objects.
 * </p>
 */
export type StringRecord<T = unknown> = Record<string, T>;

/**
 * <p>
 * Represents a nullable type that can be either the specified type T
 * or null. This is more explicit than using T | null.
 * </p>
 */
export type Nullable<T> = T | null;

/**
 * <p>
 * Represents an optional type that can be either the specified type T
 * or undefined. This is more explicit than using T | undefined.
 * </p>
 */
export type Optional<T> = T | undefined;

/**
 * <p>
 * Represents a type that can be either the specified type T, null, or undefined.
 * This is a combination of Nullable and Optional.
 * </p>
 */
export type Maybe<T> = T | null | undefined;

/**
 * <p>
 * Represents a function that takes no arguments and returns a value of type T.
 * Used for lazy evaluation and factory patterns.
 * </p>
 */
export type Factory<T> = () => T;

/**
 * <p>
 * Represents a function that takes an argument of type T and returns a value of type R.
 * Used for transformation and mapping operations.
 * </p>
 */
export type Mapper<T, R> = (value: T) => R;

/**
 * <p>
 * Represents a function that takes an argument of type T and returns a boolean.
 * Used for filtering and validation operations.
 * </p>
 */
export type Predicate<T> = (value: T) => boolean;

/**
 * <p>
 * Represents a function that takes two arguments of type T and returns a boolean.
 * Used for comparison operations.
 * </p>
 */
export type Comparator<T> = (a: T, b: T) => boolean;
