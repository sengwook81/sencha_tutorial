	Ext.define('Zero.main.leftframe.SubMenuTree',{
		extend:'Ext.tree.Panel',
	    title: 'Simple Tree',
	    store: Ext.create('Ext.data.TreeStore', {
	        root: {
	            expanded: true,
	            children: [
	                { text: "detention", leaf: true },
	                { text: "homework", expanded: true, children: [
	                    { text: "book report", leaf: true },
	                    { text: "algebra", leaf: true}
	                ] },
	                { text: "buy lottery tickets", leaf: true }
	            ]
	        }
	    }),
	    rootVisible: false,
	});