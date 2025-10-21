/**
 * @fileoverview Tests for base types
 * <p>
 * Contains unit tests for base type definitions and utilities.
 * </p>
 */

import { ID, Timestamp, KeyValuePair, StringRecord, Nullable, Optional, Maybe } from '../core/base';

describe('Base Types', () => {
  describe('ID type', () => {
    it('should accept string IDs', () => {
      const stringId: ID = 'test-id';
      expect(typeof stringId).toBe('string');
    });

    it('should accept number IDs', () => {
      const numberId: ID = 123;
      expect(typeof numberId).toBe('number');
    });
  });

  describe('Timestamp type', () => {
    it('should accept Date objects', () => {
      const dateTimestamp: Timestamp = new Date();
      expect(dateTimestamp).toBeInstanceOf(Date);
    });

    it('should accept ISO string timestamps', () => {
      const stringTimestamp: Timestamp = '2023-01-01T00:00:00.000Z';
      expect(typeof stringTimestamp).toBe('string');
    });
  });

  describe('KeyValuePair type', () => {
    it('should create key-value pairs with string keys', () => {
      const pair: KeyValuePair<string> = {
        key: 'test-key',
        value: 'test-value'
      };
      
      expect(pair.key).toBe('test-key');
      expect(pair.value).toBe('test-value');
    });

    it('should create key-value pairs with different value types', () => {
      const numberPair: KeyValuePair<number> = {
        key: 'count',
        value: 42
      };
      
      expect(numberPair.value).toBe(42);
    });
  });

  describe('StringRecord type', () => {
    it('should create records with string keys', () => {
      const record: StringRecord<string> = {
        'key1': 'value1',
        'key2': 'value2'
      };
      
      expect(record['key1']).toBe('value1');
      expect(record['key2']).toBe('value2');
    });

    it('should create records with different value types', () => {
      const mixedRecord: StringRecord<unknown> = {
        'string': 'value',
        'number': 42,
        'boolean': true
      };
      
      expect(mixedRecord['string']).toBe('value');
      expect(mixedRecord['number']).toBe(42);
      expect(mixedRecord['boolean']).toBe(true);
    });
  });

  describe('Nullable type', () => {
    it('should accept null values', () => {
      const nullableValue: Nullable<string> = null;
      expect(nullableValue).toBeNull();
    });

    it('should accept non-null values', () => {
      const nullableValue: Nullable<string> = 'test';
      expect(nullableValue).toBe('test');
    });
  });

  describe('Optional type', () => {
    it('should accept undefined values', () => {
      const optionalValue: Optional<string> = undefined;
      expect(optionalValue).toBeUndefined();
    });

    it('should accept defined values', () => {
      const optionalValue: Optional<string> = 'test';
      expect(optionalValue).toBe('test');
    });
  });

  describe('Maybe type', () => {
    it('should accept null values', () => {
      const maybeValue: Maybe<string> = null;
      expect(maybeValue).toBeNull();
    });

    it('should accept undefined values', () => {
      const maybeValue: Maybe<string> = undefined;
      expect(maybeValue).toBeUndefined();
    });

    it('should accept defined values', () => {
      const maybeValue: Maybe<string> = 'test';
      expect(maybeValue).toBe('test');
    });
  });
});
