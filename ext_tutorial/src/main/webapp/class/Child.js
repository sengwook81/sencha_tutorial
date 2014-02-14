Ext.define('Child', {
    extend: 'Parent',
    say: function(text) { this.callParent(["print "+text]); }
});