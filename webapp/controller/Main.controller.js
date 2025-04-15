sap.ui.define([
	"./BaseController",
	"sap/m/MessageBox"
], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("test.fagprove.controller.Main", {
		sayHello: function () {
			// MessageBox.show("Hello World!");
			this.getRouter().navTo("lanuchpad")
		}
	});
});
