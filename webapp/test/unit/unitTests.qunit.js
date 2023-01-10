/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comTech_bol/tech_bol/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
