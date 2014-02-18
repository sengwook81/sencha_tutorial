/**
 * 메뉴처리 처리를 위한 모델.
 * 메뉴명 , 메뉴코드 , 상위 메뉴코드 , Content정보를 갖는다.
 */
Ext.define('Common.model.msg.Message',{
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'msgCode',		// 메뉴
		type : 'string'
	}, {
		name : 'msgName',		// 메뉴코
		type : 'string'
	}, {
		name : 'msg',		// 부모메뉴코
		type : 'string'
	}, {
		name : 'useYn',		// 메뉴 Content
		type : 'boolean'
	}
	]
});