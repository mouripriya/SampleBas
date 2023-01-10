sap.ui.define(['jquery.sap.global'],
	function (jQuery) {
		"use strict";

		var poPersoService = {
			oData: {
				_persoSchemaVersion: "1.0",
				aColumns: [{
					id: "oTableComp-OverviewTable-col1",
					order: 1,
                    property: "Corid",
					text: "Correction",
					visible: true
				}, 
                // {
				// 	id: "oTableComp-OverviewTable-col2",
				// 	order: 2,
                //     property: "Bukrs",
				// 	text: "Company Code",
				// 	visible: true
				// },
                {
					id: "oTableComp-OverviewTable-col3",
					order: 3,
                    property: "Cortype",
					text: "Type",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col4",
					order: 4,
                    property: "Werks",
					text: "Plant",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col5",
					order: 5,
                    property: "Shift",
					text: "Shift",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col6",
					order: 6,
                    property: "Actdat",
					text: "Act Date",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col7",
					order: 7,
                    property: "Status",
					text: "Status",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col8",
					order: 8,
                    property: "Logdat",
					text: "Stat Date",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col9",
					order: 9,
                    property: "Logtim",
					text: "Stat Time",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col10",
					order: 10,
                    property: "Erdat",
					text: "Create Date",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col11",
					order: 11,
                    property: "Erzet",
					text: "Create Time",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col12",
					order: 12,
                    property: "Ernam",
					text: "Created By",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col13",
					order: 13,
                    property: "Accmonth",
					text: "Actual Month",
					visible: true
				},{
					id: "oTableComp-OverviewTable-col14",
					order: 14,
                    property: "Subdat",
					text: "Sub Date",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col15",
					order: 15,
                    property: "Subtim",
					text: "Sub Time",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col16",
					order: 16,
                    property: "Subnam",
					text: "Sub User",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col17",
					order: 17,
                    property: "EaprnamRep",
					text: "Expected Rep",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col18",
					order: 18,
                    property: "AprdatRep",
					text: "Rep Apr Date",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col19",
					order: 19,
                    property: "AprtimRep",
					text: "Rep Apr Time",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col20",
					order: 20,
                    property: "AprnamRep",
					text: "Rep Approver",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col21",
					order: 21,
                    property: "EaprnamTm",
					text: "Expected TM",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col22",
					order: 22,
                    property: "AprdatTm",
					text: "TM apr Date",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col23",
					order: 23,
                    property: "AprtimTm",
					text: "TM apr Time",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col24",
					order: 24,
                    property: "AprnamTm",
					text: "TM approver",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col25",
					order: 25,
                    property: "Rejdat",
					text: "Rej Date",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col26",
					order: 26,
                    property: "Rejtim",
					text: "Rej Time",
					visible: true
				},{
					id: "oTableComp-OverviewTable-col27",
					order: 27,
                    property: "Rejnam",
					text: "Rej User",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col28",
					order: 28,
                    property: "Rejreason",
					text: "Rejection Reason",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col29",
					order: 29,
                    property: "Flag",
					text: "Flag",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col30",
					order: 30,
                    property: "Prodat",
					text: "Process Date",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col31",
					order: 31,
                    property: "Protim",
					text: "Process Time",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col32",
					order: 32,
                    property: "Pronam",
					text: "Process User",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col33",
					order: 33,
                    property: "Vbeln",
					text: "Delivery",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col34",
					order: 34,
                    property: "Ebeln",
					text: "Purchase Doc",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col35",
					order: 35,
                    property: "Mblnr",
					text: "Material Doc",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col36",
					order: 36,
                    property: "Mjahr",
					text: "Mat Doc Year",
					visible: true
				},{
					id: "oTableComp-OverviewTable-col37",
					order: 37,
                    property: "Evntcd",
					text: "Event Type",
					visible: true
				},{
					id: "oTableComp-OverviewTable-col38",
					order: 38,
                    property: "Rblnr",
					text: "Material Doc",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col39",
					order: 39,
                    property: "Rjahr",
					text: "Mat Doc Year",
					visible: true
				},{
					id: "oTableComp-OverviewTable-col40",
					order: 40,
                    property: "Nblnr",
					text: "Material Doc",
					visible: true
				}, {
					id: "oTableComp-OverviewTable-col41",
					order: 41,
                    property: "Njahr",
					text: "Mat Doc Year",
					visible: true
				},]
			},
			getPersData: function () {
				var oDeferred = new jQuery.Deferred();
				if (!this._oBundle) {
					this._oBundle = this.oData;
				}
				var oBundle = this._oBundle;
				oDeferred.resolve(oBundle);
				return oDeferred.promise();
			},

			setPersData: function (oBundle) {
				var oDeferred = new jQuery.Deferred();
				this._oBundle = oBundle;
				oDeferred.resolve();
				return oDeferred.promise();
			},

			delPersData: function () {
				var oDeferred = new jQuery.Deferred();
				oDeferred.resolve();
				return oDeferred.promise();
			}
		};

		return poPersoService;

	}, true);