/**
 * <p>
 * Core type definitions for AngusMeter.
 * </p>
 *
 * <p>
 * This file contains the fundamental TypeScript types used throughout the AngusMeter project.
 * </p>
 */

/**
 * <p>
 * Main configuration interface for AngusMeter.
 * </p>
 */
export interface AngusMeterConfig {
	/** The name of the test configuration */
	name: string;
	/** Optional description of the configuration */
	description?: string;
	/** Configuration version */
	version: string;
	/** Whether the configuration is enabled */
	enabled: boolean;
}

/**
 * <p>
 * Test execution result interface.
 * </p>
 */
export interface TestResult {
	/** Test name */
	name: string;
	/** Test status */
	status: "passed" | "failed" | "skipped";
	/** Test duration in milliseconds */
	duration: number;
	/** Optional error message if test failed */
	error?: string;
}

/**
 * <p>
 * Test suite configuration interface.
 * </p>
 */
export interface TestSuite {
	/** Suite name */
	name: string;
	/** Suite description */
	description?: string;
	/** Test cases in this suite */
	tests: TestCase[];
}

/**
 * <p>
 * Individual test case interface.
 * </p>
 */
export interface TestCase {
	/** Test case name */
	name: string;
	/** Test case description */
	description?: string;
	/** Test case type */
	type: "api" | "ui" | "performance" | "integration";
	/** Test case configuration */
	config: Record<string, unknown>;
}
