/**
 * <p>
 * Test suite for type definitions.
 * </p>
 */

import { describe, expect, it } from "vitest";
import type {
	AngusMeterConfig,
	TestCase,
	TestResult,
	TestSuite,
} from "../src/types.js";

describe("Type Definitions", () => {
	it("should create valid AngusMeterConfig", () => {
		const config: AngusMeterConfig = {
			name: "Test Config",
			version: "1.0.0",
			enabled: true,
		};

		expect(config.name).toBe("Test Config");
		expect(config.version).toBe("1.0.0");
		expect(config.enabled).toBe(true);
	});

	it("should create valid TestResult", () => {
		const result: TestResult = {
			name: "Test Case",
			status: "passed",
			duration: 100,
		};

		expect(result.name).toBe("Test Case");
		expect(result.status).toBe("passed");
		expect(result.duration).toBe(100);
	});

	it("should create valid TestSuite", () => {
		const testCase: TestCase = {
			name: "API Test",
			type: "api",
			config: { url: "https://api.example.com" },
		};

		const suite: TestSuite = {
			name: "API Tests",
			description: "API test suite",
			tests: [testCase],
		};

		expect(suite.name).toBe("API Tests");
		expect(suite.tests).toHaveLength(1);
		expect(suite.tests[0].type).toBe("api");
	});
});
