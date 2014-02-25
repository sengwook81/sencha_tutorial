/**
 * 
 */
// 노드 목록 조회 뷰 정의.
Ext.define('Zero.view.install.Node',{
	extend:'Ext.panel.Panel',
	layout:{
		type:'vbox',
		align:'stretch'
	},
	mixins:['Zero.util.ex.StructureFormData'],
	alias:'widget.installNodeView',
	id:'installnode',
	controllers:['Zero.controller.install.NodeCTR'],
	requires: [
	    'Zero.store.install.Nodes',
    ],
    initComponent:function () {
    	var me = this;
    	var masterGrid = me.masterGrid();
    	var detailform = me.formView();
    	
    	me.getMasterGrid = function () {
    		return masterGrid;
    	};
    	me.getDetailForm = function () {
    		return detailform;
    	};
    	Ext.apply(me, {
    		items:[
    		   masterGrid,
    		   detailform
    		],
    	});
    	console.log("POS 1 ");
    	me.callParent(arguments);
    	me.on('afterrender', me.registControllers, me);
    },
	masterGrid:function () {
		//console.log("SET GRID STORE ",Ext.StoreManager.lookup('Zero.store.install.Nodes'));
		return Ext.create('Ext.grid.Panel',{
			id:'nodegrid',
			store:Ext.data.StoreManager.lookup('install_nodes'),
			flex:0.5,
    		columns:[
			{
				text:'', width:30 ,  renderer : function(value, metaData, record, rowIdx, colIdx, store, view){
					console.log(record.associations);
                    return record['dirty'];
                }
			} , {
    			text:'ID',dataIndex:'node_id',width:30
    		}, {
    			text:'HOST',dataIndex:'node_addr',width:80
    		}, {
    			text:'NAME',dataIndex:'node_name',width:80
    		}, {
    			text:'USER',dataIndex:'node_user',width:80
    		}, {
    			text:'PASSWORD',dataIndex:'node_password',renderer:function () {
    				return "*****";
    			}
    		}, {
    			text:'HOME',dataIndex:'node_home',width:300
    		}
	        ],
		});
	},formView:function () {
		// Hadoop Node 정보를 표기하기 위한 Form 구성.
		return  Ext.create('Zero.view.install.NodeForm');
	},
	registControllers: function(){
	        //Instanciate the controllers into the global Applications controllers array
	     Ext.each(this.controllers, function(control){
	    	 	console.log(Zero.app.controllers);
	            var controller = Zero.app.controllers.get(control);
	            if (!controller) {
	                controller = Ext.create(control, {
	                    application: Zero.app,
	                    id: control
	                });
	                Zero.app.controllers.put(control, controller);
					controller.init(); // Run init on the controller
					console.log("Register Controller");
	            }
	       		//controller.init(); //Run init on the controller         
	        });
	    }
	
});