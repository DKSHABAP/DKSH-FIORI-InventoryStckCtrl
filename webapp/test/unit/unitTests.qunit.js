QUnit.config.autostart = false;
sap.ui.getCore().attachInit(function () {
	"use strict";
	sap.ui.require(["dksh/connectclient/InventoryStck/test/unit/AllTests"], function () {
		QUnit.start()
	})
});