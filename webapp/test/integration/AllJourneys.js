sap.ui.define(["sap/ui/test/Opa5", "./arrangements/Startup", "./NavigationJourney"], function (e, t) {
	"use strict";
	e.extendConfig({
		arrangements: new t,
		viewNamespace: "dksh.connectclient.InventoryStck.view.",
		autoWait: true
	})
});