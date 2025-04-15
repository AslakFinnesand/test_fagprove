sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: test.fagprove",
		defaults: {
			page: "ui5://test-resources/test/fagprove/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "test/fagprove/",
				never: "test-resources/test/fagprove/"
			},
			loader: {
				paths: {
					"test/fagprove": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for test.fagprove"
			},
			"integration/opaTests": {
				title: "Integration tests for test.fagprove"
			}
		}
	};
});
