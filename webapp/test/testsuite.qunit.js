window.suite = function () {
	"use strict";
	var t = new parent.jsUnitTestSuite,
		n = location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1);
	t.addTestPage(n + "unit/unitTests.qunit.html");
	t.addTestPage(n + "integration/opaTests.qunit.html");
	return t;
};