/**
 * 
 */
Ext.define('Zero.model.install.Node',
		{
			extend : 'Ext.data.Model',
			requires : [ 'Zero.model.install.NodeApp' ],
			fields : [ 'node_id', 'node_name', 'node_addr', 'node_user',
					'node_password', 'node_home', 'bhadoop', 'bhive', 'bhbase',
					'bzk'],
			hasMany: [
			          {
		        	  name:'node_Apps',
		        	  model : 'Zero.model.install.NodeApp',
						associationKey : 'node_Apps',
			          }
			],
			hasOne : [ {
				instanceName : 'hadoop',
				name : 'hadoop', //  Record에서 접근할때 사용되는 Field
				model : 'Zero.model.install.NodeApp', // 해당 관계키데이터가 Mapping 될 모델
				associationKey : 'hadoop',	// 수신한 데이터로부터 모델을 추출할 필드명.
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