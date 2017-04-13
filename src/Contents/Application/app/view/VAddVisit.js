App.view.define('VAddVisit', {

    extend: 'Ext.Panel',
	alias : 'widget.VAddVisit',
	border: false,
	
	layout: "border",
    
	items: [
    {
        region: "west",
        width: "60%",
        padding: 5,
        border: false,
        itemId: "add_visit",
        layout: "fit",
        split:true,
        //width: 820,
        height: 430,

        tbar: [
        {
            fieldLabel: "Période visite début",
            itemId: "dateDebut",
            xtype: "datefield",
            format: 'd m Y',
            dateFormat: 'c',
            width: 200
        },
        {
            fieldLabel: "Période visite fin",
            itemId: "dateFin",
            xtype: "datefield",
            format: 'd m Y',
            dateFormat: 'c',
            width: 200
        }
        ],
       bbar: [
            '->', {

            text: '<b>Enregistrer</b>',
            itemId: "VisitRecord"
        }
        ],

        items: [
        {
            xtype: "grid",
            //hidden: true,
            itemId: "gridVisitAdd",
            width: "60%",
            plugins: [
                {
                    ptype: "cellediting",
                    clicksToEdit: 1
                }
            ],
            columns: 
            [
            {
                itemId: "idOuvrage",
                hidden: true,
                flex: 1,
                dataIndex: "idOuvrage"
            },
            {
                text: "Ouvrage disponible",
                itemId: "nomOuvrage",
                flex: 1,
                dataIndex: "nomOuvrage"
            },
            {
                text: 'Date',  dataIndex: 'date', xtype: 'datecolumn', format:'Y-m-d'
/*                xtype: 'datecolumn', 
                text: "Date visite",
                itemId: "dateVisite",*/
                //dataIndex: 'Date', 
 /*               renderer: {
                    xtype: "datefield",
                    format: 'd m Y',
                    dateFormat: 'c',
                }*/
 /*               editable: true,
                width: 200,
                editor: {
                    xtype: "datefield",
                    format: 'd m Y',
                    dateFormat: 'c',  
                },*/
                
            },
            {
                text: "Dpt",
                width: 150,
                dataIndex: "nomDepartement"
            },
            {
                text: "Longitude",
                width: 150,
                dataIndex: "oa_y"
            },
            {
                text: "Latitude",
                width: 150,
                dataIndex: "oa_x"
            },
            {
                xtype: 'checkcolumn',
                text: "Ajouter",
                dataIndex: "select",
                itemId: "select",
  /*              editor: {
                    xtype: "checkbox",
                    itemId: "select",
                    cls: 'x-grid-checkheader-editor',singleSelect: true,
                    
                },*/
                listeners: {                    
                        click: function(sm,index,record) {
                            console.log("listeners select");
                            var idVisiteOuvrage = sm.store.data.items[record].data.idVisiteOuvrage;
                            console.log("modif id viste ouvrage");
                            console.log(idVisiteOuvrage);

                        }
                    }
                
            }],
        }],
	},
    {
        region: "west",
        width: "40%",
        itemId: "addVisitMap",
        layout: "fit",
        split:true,
        items: [
        {
            id: "MyGMapPanel2",
            //id: "MyGMapPanel",
            itemId: "map",
            hidden: false,
            html: '<div id="TMapPanel2" style="width:100%;height:100%"></div>',
            padding: 0,
            flex: 1,
            border: false,
            width: "100%",
            border: false,
            split: true,
            
        }
        ]
    }]
});
