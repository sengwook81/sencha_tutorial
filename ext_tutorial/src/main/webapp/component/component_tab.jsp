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
<!-- 
Component Class Hierarchy
http://docs.sencha.com/extjs/4.2.2/guides/components/component_hierarchy.png


 -->
</head>
<body>
</body>
<script type="text/javascript">
Ext.onReady(function () {
	
	var childPanel1 = Ext.create('Ext.panel.Panel', {
	    title: 'Child Panel 1',
	    html: 'A Panel',
	    listeners: {
            render: function() {
                Ext.MessageBox.alert('Rendered One', 'Tab One was rendered.');
            }
        }
	    
	});

	var childPanel2 = Ext.create('Ext.panel.Panel', {
	    title: 'Child Panel 2',
	    html: 'Another Panel',
   	   listeners: {
               render: function() {
                   Ext.MessageBox.alert('Rendered Two', 'Tab two was rendered.');
               }
           }
	});
	
	var main = Ext.create('Ext.tab.Panel', {
	    renderTo: Ext.getBody(),
	    height: 100,
	    width: 200,
	    items: [
			childPanel1,childPanel2
	    ]
	});

});
</script>
</html>