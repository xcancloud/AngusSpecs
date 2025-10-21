/**
 * @fileoverview Common utility types
 * <p>
 * Contains commonly used utility types and helper interfaces
 * for everyday programming tasks.
 * </p>
 */

/**
 * <p>
 * Makes all properties of T optional.
 * Useful for creating partial update objects.
 * </p>
 */
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * <p>
 * Makes all properties of T required.
 * Useful for ensuring all properties are present.
 * </p>
 */
export type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * <p>
 * Makes all properties of T readonly.
 * Useful for creating immutable objects.
 * </p>
 */
export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * <p>
 * Picks specific properties from T.
 * Useful for creating subsets of objects.
 * </p>
 */
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * <p>
 * Omits specific properties from T.
 * Useful for creating objects without certain properties.
 * </p>
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * <p>
 * Creates a new type with K as keys and T as values.
 * Useful for creating key-value mappings.
 * </p>
 */
export type Record<K extends keyof any, T> = {
  [P in K]: T;
};

/**
 * <p>
 * Extracts the type of array elements.
 * Useful for getting element types from arrays.
 * </p>
 */
export type ArrayElement<T> = T extends (infer U)[] ? U : never;

/**
 * <p>
 * Extracts the return type of a function.
 * Useful for getting return types from functions.
 * </p>
 */
export type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

/**
 * <p>
 * Extracts the parameter types of a function.
 * Useful for getting parameter types from functions.
 * </p>
 */
export type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * <p>
 * Creates a union type from the values of T.
 * Useful for creating union types from object values.
 * </p>
 */
export type ValueOf<T> = T[keyof T];

/**
 * <p>
 * Creates a union type from the keys of T.
 * Useful for creating union types from object keys.
 * </p>
 */
export type KeyOf<T> = keyof T;

/**
 * <p>
 * Creates a type that represents a non-nullable version of T.
 * Useful for removing null and undefined from types.
 * </p>
 */
export type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * <p>
 * Creates a type that represents a non-undefined version of T.
 * Useful for removing undefined from types.
 * </p>
 */
export type NonUndefined<T> = T extends undefined ? never : T;

/**
 * <p>
 * Creates a type that represents a non-null version of T.
 * Useful for removing null from types.
 * </p>
 */
export type NonNull<T> = T extends null ? never : T;

/**
 * <p>
 * Creates a type that represents a deep partial version of T.
 * Useful for creating deeply partial objects.
 * </p>
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * <p>
 * Creates a type that represents a deep readonly version of T.
 * Useful for creating deeply immutable objects.
 * </p>
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

/**
 * <p>
 * Creates a type that represents a deep required version of T.
 * Useful for creating deeply required objects.
 * </p>
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};
