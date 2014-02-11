<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css"
	href="../lib/ext-4.2.1.883/resources/css/ext-all.css">
<script type="text/javascript"
	src="../lib/ext-4.2.1.883/ext-all-debug-w-comments.js">
</script>
</head>
<body>

</body>
<script type="text/javascript">

Ext.onReady(function (){
	
	// Panel 은 중첩된 자식 컴포넌트를 가질수 있다.
	Ext.create('Ext.panel.Panel', {
	    renderTo: Ext.getBody(), // 현 패널을 표시할 위치.
	    width: 1024,
	    height: 600,
	    title: 'Container Panel',
	    items: [
	        {
	            xtype: 'panel',
	            title: 'Child Panel 1',
	            height: 300,
	            width: '75%',
	            items: [
	        	        {
	        	            xtype: 'panel',
	        	            title: 'Sub Child Panel 1',
	        	            height: 100,
	        	            width: '75%'
	        	        },
	        	        {
	        	            xtype: 'panel',
	        	            title: 'Sub Child Panel 2',
	        	            height: 100,
	        	            width: '25%'
	        	        }
	        	    ]
	        },
	        {
	            xtype: 'panel',
	            title: 'Child Panel 2',
	            height: 100,
	            width: '25%'
	        }
	    ]
	});
});
</script>
</html>