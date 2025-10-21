/**
 * @fileoverview Transform utility types
 * <p>
 * Contains utility types for data transformation and mapping operations.
 * </p>
 */

/**
 * <p>
 * Transforms all properties of T using the provided transformer function.
 * Useful for creating mapped types with transformations.
 * </p>
 */
export type Transform<T, F> = {
  [K in keyof T]: F extends (value: T[K]) => infer R ? R : T[K];
};

/**
 * <p>
 * Creates a type that maps over the values of T.
 * Useful for transforming object values.
 * </p>
 */
export type MapValues<T, F> = {
  [K in keyof T]: F extends (value: T[K]) => infer R ? R : T[K];
};

/**
 * <p>
 * Creates a type that maps over the keys of T.
 * Useful for transforming object keys.
 * </p>
 */
export type MapKeys<T, F> = {
  [K in keyof T as F extends (key: K) => infer R ? (R extends string | number | symbol ? R : K) : K]: T[K];
};

/**
 * <p>
 * Creates a type that filters properties based on a condition.
 * Useful for creating conditional types.
 * </p>
 */
export type Filter<T, F> = {
  [K in keyof T as T[K] extends F ? K : never]: T[K];
};

/**
 * <p>
 * Creates a type that excludes properties based on a condition.
 * Useful for creating conditional exclusions.
 * </p>
 */
export type Exclude<T, F> = {
  [K in keyof T as T[K] extends F ? never : K]: T[K];
};

/**
 * <p>
 * Creates a type that flattens nested objects.
 * Useful for creating flat object structures.
 * </p>
 */
export type Flatten<T> = {
  [K in keyof T]: T[K] extends object ? Flatten<T[K]> : T[K];
};

/**
 * <p>
 * Creates a type that creates a union of all possible combinations.
 * Useful for creating exhaustive type unions.
 * </p>
 */
export type Unionize<T> = {
  [K in keyof T]: T[K];
}[keyof T];

/**
 * <p>
 * Creates a type that represents a tuple of all possible values.
 * Useful for creating value tuples.
 * </p>
 */
export type Tupleize<T> = T extends any ? [T] : never;

/**
 * <p>
 * Creates a type that represents a mapped tuple.
 * Useful for transforming tuple types.
 * </p>
 */
export type MapTuple<T, F> = T extends readonly [infer First, ...infer Rest]
  ? [F extends (value: First) => infer R ? R : First, ...MapTuple<Rest, F>]
  : [];

/**
 * <p>
 * Creates a type that represents a filtered tuple.
 * Useful for filtering tuple types.
 * </p>
 */
export type FilterTuple<T, F> = T extends readonly [infer First, ...infer Rest]
  ? First extends F
    ? [First, ...FilterTuple<Rest, F>]
    : FilterTuple<Rest, F>
  : [];

/**
 * <p>
 * Creates a type that represents a mapped array.
 * Useful for transforming array types.
 * </p>
 */
export type MapArray<T, F> = T extends readonly (infer U)[]
  ? (F extends (value: U) => infer R ? R : U)[]
  : never;

/**
 * <p>
 * Creates a type that represents a filtered array.
 * Useful for filtering array types.
 * </p>
 */
export type FilterArray<T, F> = T extends readonly (infer U)[]
  ? U extends F ? U[] : never
  : never;
