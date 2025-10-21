/**
 * @fileoverview Type guard utility types
 * <p>
 * Contains utility types for type guards and runtime type checking.
 * </p>
 */

/**
 * <p>
 * Represents a type guard function.
 * Used for runtime type checking and narrowing.
 * </p>
 */
export type TypeGuard<T> = (value: unknown) => value is T;

/**
 * <p>
 * Represents a type predicate function.
 * Used for type narrowing in conditional statements.
 * </p>
 */
export type TypePredicate<T> = (value: unknown) => value is T;

/**
 * <p>
 * Represents a type assertion function.
 * Used for asserting types at runtime.
 * </p>
 */
export type TypeAssertion<T> = (value: unknown) => asserts value is T;

/**
 * <p>
 * Represents a type checker function.
 * Used for validating types at runtime.
 * </p>
 */
export type TypeChecker = (value: unknown) => boolean;

/**
 * <p>
 * Represents a type validator function.
 * Used for validating and transforming types.
 * </p>
 */
export type TypeValidator<T> = (value: unknown) => T;

/**
 * <p>
 * Represents a type converter function.
 * Used for converting between types.
 * </p>
 */
export type TypeConverter<T, R> = (value: T) => R;

/**
 * <p>
 * Represents a type mapper function.
 * Used for mapping between types.
 * </p>
 */
export type TypeMapper<T, R> = (value: T) => R;

/**
 * <p>
 * Represents a type filter function.
 * Used for filtering types.
 * </p>
 */
export type TypeFilter<T> = (value: T) => boolean;

/**
 * <p>
 * Represents a type selector function.
 * Used for selecting specific types.
 * </p>
 */
export type TypeSelector<T, R> = (value: T) => R;

/**
 * <p>
 * Represents a type extractor function.
 * Used for extracting specific types.
 * </p>
 */
export type TypeExtractor<T, R> = (value: T) => R;

/**
 * <p>
 * Represents a type transformer function.
 * Used for transforming types.
 * </p>
 */
export type TypeTransformer<T, R> = (value: T) => R;

/**
 * <p>
 * Represents a type reducer function.
 * Used for reducing types.
 * </p>
 */
export type TypeReducer<T, R> = (accumulator: R, current: T) => R;

/**
 * <p>
 * Represents a type combiner function.
 * Used for combining types.
 * </p>
 */
export type TypeCombiner<T, R> = (a: T, b: T) => R;

/**
 * <p>
 * Represents a type splitter function.
 * Used for splitting types.
 * </p>
 */
export type TypeSplitter<T, R> = (value: T) => R;

/**
 * <p>
 * Represents a type merger function.
 * Used for merging types.
 * </p>
 */
export type TypeMerger<T, R> = (a: T, b: T) => R;

/**
 * <p>
 * Represents a type divider function.
 * Used for dividing types.
 * </p>
 */
export type TypeDivider<T, R> = (a: T, b: T) => R;
