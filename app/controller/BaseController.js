sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller, History) {
	"use strict";

	return Controller.extend("com.uniorg.cf.mongodb.example.controller.BaseController", {

		getRouter: function() {
			return this.getOwnerComponent().getRouter();
		},

		getResourceBundle : function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		}	
	});

});