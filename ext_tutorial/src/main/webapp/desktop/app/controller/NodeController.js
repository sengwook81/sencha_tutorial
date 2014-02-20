/**
 * 
 */
function printStore (store) {
	console.log("Start Print #############");
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
					console.log("Render Form");
					this.getNodesStore().load();
					console.log("Store ",this.getNodesStore(),this.getForm());
					this.getForm().loadRecord(this.getNodesStore().getAt(0));
					printStore(this.getNodesStore());
					console.log(this.getNodesStore().getCount());
				}
			}
		});
		//me.callParent();
		
		var name = Ext.ClassManager.getAliasesByName("Dooby.view.NodeManager");
		console.log("Alias :" ,name);
		console.log("THIS " , this);
	}
});