/**
 * 
 */
Ext.define('Zero.model.install.Node',
		{
			extend : 'Ext.data.Model',
			requires : [ 'Zero.model.install.NodeApp' ],
			fields : [ 'node_id', 'node_name', 'node_addr', 'node_user',
					'node_password', 'node_home', 'bhadoop', 'bhive', 'bhbase',
					'bzk' ],
			hasOne : [ {
				name : 'hadoop',
				model : 'Zero.model.install.NodeApp',
				associationKey : 'hadoop',
				instanceName : 'hadoop',
				getterName : 'getHadoop',
				setterName : 'setHadoop'
			}, {
				name : 'hive',
				model : 'Zero.model.install.NodeApp',
				associationKey : 'hive',
				instanceName : 'hive',
				getterName : 'getHive',
				setterName : 'setHive'
			}, {
				name : 'hbase',
				model : 'Zero.model.install.NodeApp',
				associationKey : 'hbase',
				instanceName : 'hbase',
				getterName : 'getHbase',
				setterName : 'setHbase'
			}, {
				name : 'zk',
				model : 'Zero.model.install.NodeApp',
				associationKey : 'zk',
				instanceName : 'zk',
				getterName : 'getZk',
				setterName : 'setZk'
			}, ]
		});