sap.ui.define([
	"./BaseController",
	"sap/m/MessageBox"
], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("test.fagprove.controller.Main", {
		sayHello: function () {
			// MessageBox.show("Hello World!");
			this.getRouter().navTo("lanuchpad")
		},
		onLogin: function () {
			const rootModel = this.getView().getModel();
			const logInName = rootModel.getProperty("/userName");
			const pw = rootModel.getProperty("/password");
			if (logInName == "te" && pw == "te") {
				 this.getRouter().navTo("lanuchpad")
			 }
		},
	});
});
