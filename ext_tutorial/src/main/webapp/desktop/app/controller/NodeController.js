/**
 * 
 */
function printStore (store) {
	store.each(function (row) {
		rowData = [];
		row.fields.each(function (col) {
			rowData.push(row.get(col.name));
		});
		console.log(rowData);
	},this);
}

Ext.define("Dooby.controller.NodeController",{
	 extend: 'Ext.app.Controller',
	 refs: [
	       { ref: 'form', selector: 'nodemanager' }
	 ],
	 stores:['Nodes'],
	 init:function () {
		var me = this;
		me.control({
			'nodemanager':{
				render:function () {
					me.getNodesStore().load(function () {
						me.getForm().loadRecord(me.getNodesStore().getAt(0));
						printStore(me.getNodesStore());
						console.log(me.getNodesStore().getAt(0));
					});
				}
			}
		});
	}
});