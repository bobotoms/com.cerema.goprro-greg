App.view.define('VDate', {

    extend: "Ext.window.Window",
	alias : 'widget.VDate',
	border: false,
	width: 300,
	height: 80,
	closable: true,
    closeAction:'hide',
	layout: "border",
	//itemId : "VisiteWork", 
    bbar: [
            '->', {

            text: '<b>Ajouter</b>',
            itemId: "visitWorkDate"
        }
        ],
	
	items: [{
        fieldLabel: "Date visite",
        itemId: "dateVisitWork",
        xtype: "datefield",
        format: 'd m Y',
        dateFormat: 'c',
        width: 200
    }]
	
});