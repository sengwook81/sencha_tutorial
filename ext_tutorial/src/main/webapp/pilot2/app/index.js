/**
 * 
 */
Ext.namespace("Zero.ext.settings");
Ext.namespace("Zero.ext.apps");
Ext.namespace("Zero.ext.views");
Ext.namespace("Zero.ext.util");

Zero.ext.util.findKey = function(string, array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === string) {
			return i;
		}
	}

	return -1;
}

Zero.ext.apps.appNames   = [];
Zero.ext.apps.appStrings = [];