/**
 * @fileoverview Test setup configuration
 * <p>
 * Contains test setup and configuration for the types package.
 * </p>
 */

// Global test setup
beforeAll(() => {
  // Setup global test configuration
  console.log('Setting up tests for @angus/types package');
});

afterAll(() => {
  // Cleanup after all tests
  console.log('Cleaning up after tests');
});

// Global test utilities
(global as any).testUtils = {
  // Helper function to create test data
  createTestData: <T>(data: T): T => data,
  
  // Helper function to create mock objects
  createMock: <T>(overrides: Partial<T> = {}): T => ({
    ...overrides
  } as T)
};
