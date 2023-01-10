var vskip;
var vtop;
sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox",
    "../model/PersoService",
    "sap/m/TablePersoController",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet"
], function (BaseController, JSONModel, formatter, Filter, FilterOperator, MessageBox, PersoService, TablePersoController, exportLibrary, Spreadsheet) {
    "use strict";

    var EdmType = exportLibrary.EdmType;
    return BaseController.extend("com.Techbol.techbol.controller.Worklist", {

        formatter: formatter,

        onInit: function() {
            var that = this;
              // var oModel = new JSONModel("model/Sample.json");
              // that.getView().setModel(oModel, "oModel1");
              var dataModel = that.getOwnerComponent().getModel("tableData");
              that.getView().setModel(dataModel, "oModel1");
              dataModel.attachRequestCompleted(function(oEvent) {

            });
            //   var sTableModel = new JSONModel(jQuery.sap.getModulePath("com.Techbol.techbol", "/model/Sample.json"));
            //   that.getView().setModel(sTableModel, "oModel1");

              var oCorrectionIdModel = new JSONModel(jQuery.sap.getModulePath("com.Techbol.techbol", "/model/CorrectionId.json"));
              that.getView().setModel(oCorrectionIdModel, "CorrectionIdModel");

              var oPlantModel = new JSONModel(jQuery.sap.getModulePath("com.Techbol.techbol", "/model/Plant.json"));
              that.getView().setModel(oPlantModel, "PlantModel");

              var oCreatedByModel = new JSONModel(jQuery.sap.getModulePath("com.Techbol.techbol", "/model/CreatedBy.json"));
              that.getView().setModel(oCreatedByModel, "CreatedByModel");


              var obj = {
                "CorrectionId1": "",
                "CreateDateRange": "",
                "CreatedBy1": "",
                "Plant1": "",
                "Status": [],
                "submitEnabled": false
            }
            var oBindingModel = new JSONModel(obj);
            that.getView().setModel(oBindingModel, "BindingModel");
  
          },
          onCreate: function () {
              var that = this;
              // sap.ui.core.BusyIndicator.show(0);
              var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
              oRouter.navTo("Object",{
                  "objectId": "12245"
              });
          },
           //CorrectionId Value Help
        //    getCorrectionIdDialog: function () {
        //     var that = this;
        //     var oView = that.getView();
        //     if (!that.dialog1) {
        //         that.dialog1 = sap.ui.xmlfragment("com.Techbol.techbol.fragments.CorrectionId", that);
        //     }
        //     oView.addDependent(that.dialog1);
        //     return that.dialog1;
        // },
        onCorrectionIdValueHelpRequest: function (oEvent) {
          var that = this;
            if (!that._valueHelpDialog1) {
                that._valueHelpDialog1 = sap.ui.xmlfragment(
                    "com.Techbol.techbol.fragments.CorrectionId", that.getView().getController()

                );
                that.getView().addDependent(that._valueHelpDialog1);
            }


            that._valueHelpDialog1.open();
        },
       
        
        onCorrectionIdSearch: function (oEvent) {
            var sValue = evt.getParameter("value");
            var oFilter = new Filter(
                "correctionId",
                sap.ui.model.FilterOperator.Contains, sValue );
           
            evt.getSource().getBinding("items").filter([oFilter]);
        },
        onCorrectionIdCancel: function () {
            var that = this;
             that._valueHelpDialog1.close();
           
        },
        onCorrectionIdClose: function () {
            var that = this;
            that._valueHelpDialog1.destroy();
            that._valueHelpDialog1 = null;
            // that._valueHelpDialog1.close();
        },
        onCorrectionIdSelChange: function (oEvent) {
            var that = this;
            that._valueHelpDialog1.close();
            var oSelectedItem  = oEvent.getSource().getSelectedItem().getBindingContext("CorrectionIdModel").getObject().correctionId;
            that.getView().getModel("BindingModel").setProperty("/CorrectionId1", oSelectedItem);
        },

//Plant Value Help	
onPlantValueHelpRequest: function (oEvent) {

    var that = this;
    if (!that._valueHelpDialog2) {
        that._valueHelpDialog2 = sap.ui.xmlfragment(
            "com.Techbol.techbol.fragments.Plant", that.getView().getController()

        );
        that.getView().addDependent(that._valueHelpDialog2);
    }


    that._valueHelpDialog2.open();

},
onPlantSearch: function(oEvent){
    var sValue = evt.getParameter("value");
    var oFilter = new Filter(
        "plant",
        sap.ui.model.FilterOperator.Contains, sValue
    );
    evt.getSource().getBinding("items").filter([oFilter]);

},
onPlantSelChange: function(oEvent){
    var that = this;
    that._valueHelpDialog2.close();
    var oPlant1  = oEvent.getSource().getSelectedItem().getBindingContext("PlantModel").getObject().plant;
    that.getView().getModel("BindingModel").setProperty("/Plant1", oPlant1);

},
onPlantCancel: function(oEvent){
    var that = this;
    that._valueHelpDialog2.close();

},

//CreatedBY Value Help	
onCreatedByValueHelpRequest: function (oEvent) {

    var that = this;
    if (!that._valueHelpDialog3) {
        that._valueHelpDialog3 = sap.ui.xmlfragment(
            "com.Techbol.techbol.fragments.CreatedBy", that.getView().getController()

        );
        that.getView().addDependent(that._valueHelpDialog3);
    }


    that._valueHelpDialog3.open();

},
onCreatedBySearch: function(oEvent){
    var sValue = evt.getParameter("value");
    var oFilter = new Filter(
        "createdBy",
        sap.ui.model.FilterOperator.Contains, sValue
    );
    evt.getSource().getBinding("items").filter([oFilter]);

},
onCreatedBySelChange: function(oEvent){
    var that = this;
    that._valueHelpDialog3.close();
    var oCreatedBy1  = oEvent.getSource().getSelectedItem().getBindingContext("CreatedByModel").getObject().createdBy;
    that.getView().getModel("BindingModel").setProperty("/CreatedBy1", oCreatedBy1);

},
onCreatedByCancel: function(oEvent){
    var that = this;
    that._valueHelpDialog3.close();

},


// onSearch: function(oEvent){
// 	var that = this;
//     var newArray = [];
//     var filter = [];
//         var sCorrectionId = that.getView().byId("CorrectionId").getValue();
//         if(sCorrectionId){
//             filter.push(new Filter("CorId", FilterOperator.Contains, sCorrectionId));

//            }
//         var DateRange = that.getView().byId("DateRangeId").getValue();
//         var sCreatedBy = that.getView().byId("CreatedById").getValue();
//         if(sCreatedBy){
//             filter.push(new Filter("Cortype", FilterOperator.Contains, sCreatedBy));

//            }
//         var sPlant = that.getView().byId("PlantId").getValue();
//         if(sPlant){
//             filter.push(new Filter("Plant", FilterOperator.Contains, sPlant));

//            }
//         var items = that.getView().byId("StatusId").getSelectedItems();
//         if(items){
//             filter.push(new Filter("Shift", FilterOperator.Contains, items));

//            }

//            var oNewFilter = new Filter({
//             filters: filter,
//             and: false
//         });
//         var oTab = that.getView().byId("OverviewTable");
//         oTab.getBinding("items").filter(oNewFilter);

//         // that.getView().getModel("oModel1").setData({Sample :filter});
//         that.getView().getModel("oModel1").setData(filter);
           

// },


onSearch: function(){
    var that = this;
    var newArray = [];
    var sCorrectionId = that.getView().byId("CorrectionId").getValue();
    var DateRange = that.getView().byId("DateRangeId").getValue();
    var sCreatedBy = that.getView().byId("CreatedById").getValue();
    var sPlant = that.getView().byId("PlantId").getValue();
    var items = that.getView().byId("StatusId").getSelectedItems();
    var sModel = that.getView().getModel("oModel1").getData();
    //    for( var i = 0; i < sModel.Sample.length; i++){
    //     if(sCorrectionId !== ""){
    //         if(sModel.Sample[i].Corid === sCorrectionId){
    //             newArray.push(sModel.Sample[i]);
    //         }
    //    }
    // }
    //    that.getView().getModel("oModel1").setData({Sample :newArray});

    //    that.getView().getModel("oModel1").setData(newArray);

    var newArray = sModel.Sample.filter(function(item){
            

        return item.Corid === sCorrectionId && item.CreatedBy === sCreatedBy && item.Plant === sPlant ;
            
        });
        that.getView().getModel("oModel1").setData({Sample :newArray});

},
    
    onRowPress: function (oEvent) {
        var that = this;
        var sTableRowData = oEvent.getSource().getBindingContext("oModel1").getObject();
        var objectId = sTableRowData.Corid;
        // sap.ui.core.BusyIndicator.show(0);


        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("Object", {
            objectId: objectId
        });
        // var spath = oEvent.getSource().getBindingContext("oModel1").getPath();
        // var selectedPath = JSON.stringify(oEvent.getSource().getBindingContext("oModel1").getProperty(spath));
        // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 	oRouter.navTo("Object", {
		// 		"selectedobj": selectedPath
		// 	});
    }


    




    });
});

        // onInit: function () {
        //     jQuery.sap.require("jquery.sap.storage");
        //     var that = this;

        //     that.CreationTable = new TablePersoController({
        //         table: that.getView().byId("OverviewTable"),
        //         componentName: "oTableComp",
        //         persoService: PersoService
        //     }).activate();

        //     var obj = {
        //         "CorrectionId": "",
        //         "CreateDateRange": "",
        //         "CreatedBy": "",
        //         "Plant": "",
        //         "Status": [],
        //         "submitEnabled": false
        //     }
        //     var oBindingModel = new JSONModel(obj);
        //     that.getView().setModel(oBindingModel, "BindingModel");

        //     var DateRange = that.onCreateDate();
        //     that.getView().getModel("BindingModel").setProperty("/CreateDateRange", DateRange);

        //     that.getUserInfo();
        //     jQuery.sap.storage(jQuery.sap.storage.Type.local).put("AssignedPlant", "");

        //     var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
        //     oRouter.getRoute("worklist").attachMatched(that._onObjectMatched, that);

        // },
        // _onObjectMatched: function () {
        //     var that = this;

        //     var oCorrectionModel = new sap.ui.model.json.JSONModel({ "results": [] });
        //     that.getView().setModel(oCorrectionModel, "CorrectionModel");


        //     if (jQuery.sap.storage(jQuery.sap.storage.Type.local).get("AssignedPlant") !== "") {
        //         that.getView().getModel("BindingModel").setProperty("/Plant", jQuery.sap.storage(jQuery.sap.storage.Type.local).get("AssignedPlant"));
        //         that.onSearch();
        //     }

        // },
        // fnCreateBusyDialog: function (sImage, sBusy) {
        //     var that = this;
        //     if (sBusy === "true") {
        //         that.oInsCreateDailog = new sap.m.Dialog({
        //             showHeader: false
        //         }).addStyleClass("busyDialog sapUiTinyMargin");
        //         var sComponentName = that.getOwnerComponent().getMetadata().getComponentName();
        //         var imgUrl = $.sap.getModulePath(sComponentName, "/images/");
        //         var oImage = new sap.m.Image().addStyleClass("sapUiMediumMargin");
        //         oImage.setSrc(imgUrl + sImage);
        //         that.oInsCreateDailog.addContent(oImage);
        //         that.oInsCreateDailog.open();
        //     } else {
        //         that.oInsCreateDailog.close();
        //     }
        // },
        // realDateTimeClockBrowser: function () {
        //     var dateObject = new Date();
        //     var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({
        //         style: 'full',
        //         pattern: "yyyyMMdd HHmmss"
        //     });
        //     // Format the date
        //     var dateFormatted = dateFormat.format(dateObject);
        //     return dateFormatted;
        // },
        // onNavBack: function () {
        //     var oHistory = sap.ui.core.routing.History.getInstance(),
        //         sPreviousHash = oHistory.getPreviousHash();
        //     var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");

        //     // if (sPreviousHash !== undefined) {
        //     //  history.go(-1);
        //     // } else {
        //     // Navigate back to FLP home

        //     oCrossAppNavigator.toExternal({
        //         target: {
        //             shellHash: "#"
        //         }

        //     });

        //     // }

        // },
        // onCreateDate: function () {
        //     var CurrentDate = new Date();
        //     var day = CurrentDate.getDate();
        //     var month = CurrentDate.getMonth() + 1;
        //     if (month.toString().length > 1) {
        //         month = month;
        //     } else {
        //         month = "0" + month;
        //     }
        //     if (day.toString().length > 1) {
        //         day = day;
        //     } else {
        //         day = "0" + day;
        //     }
        //     var year1 = CurrentDate.getFullYear();
        //     var FormattedDate1 = month + "/" + day + "/" + year1;
        //     var year2 = CurrentDate.getFullYear() - 1;
        //     var FormattedDate2 = month + "/" + day + "/" + year2;

        //     var fullDate = FormattedDate2 + " - " + FormattedDate1;
        //     return fullDate;
        // },
        // getUserInfo: function () {
        //     var that = this;
        //     const url = that.getBaseURL() + "/user-api/currentUser";
        //     var oModel = new JSONModel();
        //     var mock = {
        //         firstname: "",
        //         lastname: "",
        //         email: "",
        //         name: "",
        //         displayName: ""
        //     };

        //     oModel.loadData(url);
        //     oModel.dataLoaded()
        //         .then(() => {
        //             //check if data has been loaded
        //             //for local testing, set mock data
        //             if (!oModel.getData().email) {
        //                 oModel.setData(mock);
        //             }
        //             that.getView().setModel(oModel, "userInfo");
        //             jQuery.sap.storage(jQuery.sap.storage.Type.local).put("UserName", that.getView().getModel("userInfo").getData().name.toUpperCase());
        //             that.onUserInfo();

        //         })
        //         .catch(() => {
        //             oModel.setData(mock);
        //             that.getView().setModel(oModel, "userInfo");

        //         });
        // },
        // getBaseURL: function () {
        //     var that = this;
        //     var appId = that.getOwnerComponent().getManifestEntry("/sap.app/id");
        //     var appPath = appId.replaceAll(".", "/");
        //     var appModulePath = jQuery.sap.getModulePath(appPath);
        //     return appModulePath;
        // },
        // onUserInfo: function () {
        //     var that = this;
        //     var UserName = that.getView().getModel("userInfo").getData().name;
        //     var oFilter = [];
        //     var Filter1 = new sap.ui.model.Filter("User", sap.ui.model.FilterOperator.EQ, UserName.toUpperCase());
        //     oFilter.push(Filter1);
        //     var Filter2 = new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, "");
        //     oFilter.push(Filter2);


        //     that.getOwnerComponent().getModel("BOLModel").read("/PlantSet", {
        //         filters: oFilter,
        //         success: function (oData, oResponse) {

        //             if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {                     

        //                 var oPlantModel = new sap.ui.model.json.JSONModel(oData);
        //                 oPlantModel.setSizeLimit(oData.results.length);
        //                 that.getView().setModel(oPlantModel, "PlantModel");

        //                 for (var i = 0; i < oData.results.length; i++) {
        //                     if (oData.results[i].Default === "X") {
        //                         var Plant = oData.results[i].Werks;
        //                     }
        //                 }

        //                 that.getView().getModel("BindingModel").setProperty("/Plant", Plant);
        //                 jQuery.sap.storage(jQuery.sap.storage.Type.local).put("AssignedPlant", Plant);
        //                 that.onSearch();

        //             }

        //         },
        //         error: function (oError) {                  
        //             var oMessage;
        //             if (oMessage === undefined) {
        //                 oMessage = JSON.parse(oError.responseText).error.message.value;
        //             }
        //             sap.m.MessageBox.show(
        //                 oMessage, {
        //                 icon: sap.m.MessageBox.Icon.ERROR,
        //                 title: "Error"
        //             });

        //         }
        //     });



        // },
        // onPerso: function () {
        //     var that = this;
        //     that.CreationTable.openDialog();
        // },
        // onExit: function () {
        //     var that = this;
        //     that.CreationTable.destroy();
        // },
        // onCreate: function () {
        //     var that = this;
        //     sap.ui.core.BusyIndicator.show(0);
        //     var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
        //     oRouter.navTo("object", {
        //         "objectId": "Create"
        //     });
        // },
        // onRowPress: function (oEvent) {
        //     var that = this;
        //     var sTableRowData = oEvent.getSource().getBindingContext("CorrectionModel").getObject();
        //     var objectId = sTableRowData.Corid;
        //     sap.ui.core.BusyIndicator.show(0);
        //     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        //     oRouter.navTo("object", {
        //         objectId: objectId
        //     });
        // },
        // onUpdateFinished: function () {
        //     var that = this;

        //     var Table = that.getView().byId("OverviewTable");
        //     var Items = Table.getItems();

        //     if (Items.length > 0) {

        //         Items.forEach(function (rowData) {

        //             var obj = rowData.getBindingContext("CorrectionModel").getObject();

        //             if (obj.Status !== "DRAFT") {
        //                 rowData.getMultiSelectControl().setEnabled(false);
        //             } else {
        //                 rowData.getMultiSelectControl().setEnabled(true);
        //             }


        //         });

        //     }
        // },
        // onItemSelChange: function (oEvent) {
        //     var that = this;

        //     var Table = that.getView().byId("OverviewTable");
        //     var Items = Table.getItems();

        //     Items.forEach(function (rowData) {
        //         if (rowData.getMultiSelectControl().getEnabled() === true) {
        //             if (rowData.getSelected() === true) {
        //                 rowData.setSelected(true);
        //             } else {
        //                 rowData.setSelected(false);
        //             }

        //         } else {
        //             rowData.getMultiSelectControl().setSelected(false);
        //         }

        //     });


        //     for (var i = 0; i < Items.length; i++) {
        //         var rowData = Items[i];
        //         if (rowData.getSelected() === true) {
        //             that.getView().getModel("BindingModel").setProperty("/submitEnabled", true);
        //             break;
        //         } else {
        //             that.getView().getModel("BindingModel").setProperty("/submitEnabled", false);
        //         }
        //     }

        // },
        // onSubmit: function () {
        //     var that = this;
        //     var SubUser, SubDate, SubTime;
        //     var DateTime = that.realDateTimeClockBrowser();
        //     var FinalDateTime = DateTime.split(" ");
        //     SubUser = jQuery.sap.storage(jQuery.sap.storage.Type.local).get("UserName");
        //     SubDate = FinalDateTime[0];
        //     SubTime = FinalDateTime[1];

        //     var SelItems = [];
        //     var Items = that.getView().byId("OverviewTable").getSelectedItems();
        //     Items.forEach(function (sItem, sIndex) {
        //         if (sItem.getMultiSelectControl().getEnabled() === true) {
        //             SelItems.push(sItem.getBindingContext("CorrectionModel").getObject());
        //         }
        //     });


        //     var sConfirmMsg = that.getView().getModel("i18n").getProperty("sConfirmSubmitMsg");
        //     var sConfirmTitle = that.getView().getModel("i18n").getProperty("sConfirmTitle");

        //     MessageBox.show(
        //         sConfirmMsg, {
        //         icon: MessageBox.Icon.INFORMATION,
        //         title: sConfirmTitle,
        //         actions: [MessageBox.Action.YES, MessageBox.Action.NO],
        //         onClose: function (oAction) {
        //             if (oAction === "YES") {

        //                 var SelArray = [];

        //                 for (var i = 0; i < SelItems.length; i++) {
        //                     var SelObj = {
        //                         "Flagx": "",
        //                         "Corid": SelItems[i].Corid,
        //                         "Subdat": SubDate,
        //                         "Subtim": SubTime,
        //                         "Subnam": SubUser,
        //                         "Comments": ""
        //                     };
        //                     SelArray.push(SelObj);
        //                 }
        //                 var obj = {
        //                     "Flagx": "A",
        //                     "SubmitItemSet": SelArray
        //                 };


        //                 that.fnCreateBusyDialog("pallet.svg", "true");

        //                 that.getOwnerComponent().getModel("BOLModel").create("/SubmitHeaderSet", obj, {
        //                     success: function (oData, oResponse) {
        //                         if (oResponse.statusCode === 201 || oResponse.statusCode === "201") {
                         
        //                             that.fnCreateBusyDialog("pallet.svg", "false");

        //                             var sSuccessMsg = that.getView().getModel("i18n").getProperty("sSuccessSubmitMsg");
        //                             var sSuccessTitle = that.getView().getModel("i18n").getProperty("sSuccessTitle");
        //                             MessageBox.show(
        //                                 sSuccessMsg, {
        //                                 icon: MessageBox.Icon.SUCCESS,
        //                                 title: sSuccessTitle,
        //                                 actions: [MessageBox.Action.YES, MessageBox.Action.NO],
        //                                 onClose: function (oAction) {
        //                                     if (oAction === "YES") {
        //                                         that.onSearch();
        //                                     }
        //                                 }
        //                             }
        //                             );

        //                         }

        //                     },
        //                     error: function (oError) {
                             
        //                         that.fnCreateBusyDialog("pallet.svg", "false");

        //                         var oMessage;
        //                         if (oMessage === undefined) {
        //                             oMessage = JSON.parse(oError.responseText).error.message.value;
        //                         }
        //                         sap.m.MessageBox.show(
        //                             oMessage, {
        //                             icon: sap.m.MessageBox.Icon.ERROR,
        //                             title: "Error"
        //                         });
        //                     }
        //                 });
        //             }
        //         }
        //     }
        //     );
        // },
        // onSearch: function () {
        //     var that = this;

        //     var sCorrectionId = that.getView().byId("CorrectionId").getValue();
        //     if (sCorrectionId === undefined) {
        //         sCorrectionId = "";
        //     }

        //     var DateRange = that.getView().byId("DateRangeId").getValue();
        //     var Datevalue = DateRange.split(" ");
        //     var ValidFrom = Datevalue[0];
        //     var ValidTo = Datevalue[2];

        //     if (ValidFrom === undefined || ValidFrom === "") {
        //         ValidFrom = "";
        //     } else {
        //         ValidFrom = ValidFrom.substring(6, 10) + ValidFrom.substring(0, 2) + ValidFrom.substring(3, 5);
        //     }
        //     if (ValidTo === undefined || ValidTo === "") {
        //         ValidTo = "";
        //     } else {
        //         ValidTo = ValidTo.substring(6, 10) + ValidTo.substring(0, 2) + ValidTo.substring(3, 5);
        //     }

        //     var sCreatedBy = that.getView().byId("CreatedById").getValue();
        //     if (sCreatedBy === undefined || sCreatedBy === "") {
        //         sCreatedBy = "";
        //     }

        //     var sPlant = that.getView().byId("PlantId").getValue();
        //     if (sPlant === undefined || sPlant === "") {
        //         sPlant = "";
        //     }

        //     if (sPlant === "") {
        //         var sErrorPlant = that.getView().getModel("i18n").getProperty("sErrorPlant");
        //         sap.m.MessageBox.show(
        //             sErrorPlant, {
        //             icon: sap.m.MessageBox.Icon.ERROR,
        //             title: "Error"
        //         });
        //     } else {


        //         var filters = [];

        //         if (sCorrectionId !== "") {
        //             var filter1 = new sap.ui.model.Filter("Corid", sap.ui.model.FilterOperator.EQ, sCorrectionId);
        //             filters.push(filter1);
        //         }

        //         if (ValidFrom !== "" && ValidTo !== "") {
        //             var filter2 = new sap.ui.model.Filter("Erdat", sap.ui.model.FilterOperator.BT, ValidFrom, ValidTo);
        //             filters.push(filter2);
        //         }

        //         if (sCreatedBy !== "") {
        //             var filter3 = new sap.ui.model.Filter("Ernam", sap.ui.model.FilterOperator.EQ, sCreatedBy);
        //             filters.push(filter3);
        //         }

        //         if (sPlant !== "") {
        //             var filter4 = new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, sPlant);
        //             filters.push(filter4);
        //         }

        //         var items = that.getView().byId("StatusId").getSelectedItems();
        //         var len = items.length;
        //         if (len > 0) {
        //             for (var i = 0; i < len; i++) {
        //                 var word = items[i].getProperty("text");
        //                 var filter5 = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, word);
        //                 filters.push(filter5);
        //             }
        //         }

        //         var filter6 = new sap.ui.model.Filter("Flagx", sap.ui.model.FilterOperator.EQ, "O");
        //         filters.push(filter6);

        //         vtop = 20;
        //         vskip = 0;

        //         that.onOverviewServiceCall(filters);
        //     }

        // },
        // onOverviewServiceCall: function (oFilter) {
        //     var that = this;
        //     vtop = 20;
        //     vskip = 0;

        //     that.fnCreateBusyDialog("pallet.svg", "true");

        //     that.getOwnerComponent().getModel("BOLModel").read("/BolOverviewSet", {
        //         filters: oFilter,
        //         urlParameters: {
        //             "$top": vtop,
        //             "$skip": vskip,
        //             "$expand": "BolItemMasterSet"
        //         },
        //         success: function (oData, oResponse) {

        //             if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {
                
        //                 that.fnCreateBusyDialog("pallet.svg", "false");

        //                 var oCorrectionModel = new sap.ui.model.json.JSONModel(oData);
        //                 oCorrectionModel.setSizeLimit(oData.results.length);
        //                 that.getView().setModel(oCorrectionModel, "CorrectionModel");

        //                 if (oData.results.length < 20) {
        //                     that.getView().byId("SeeMoreBar").setVisible(false);
        //                 } else {
        //                     that.getView().byId("SeeMoreBar").setVisible(true);
        //                 }

        //             }

        //         },
        //         error: function (oError) {
          
        //             that.fnCreateBusyDialog("pallet.svg", "false");
        //             var oMessage;
        //             if (oMessage === undefined) {
        //                 oMessage = JSON.parse(oError.responseText).error.message.value;
        //             }
        //             sap.m.MessageBox.show(
        //                 oMessage, {
        //                 icon: sap.m.MessageBox.Icon.ERROR,
        //                 title: "Error"
        //             });

        //         }
        //     });

        // },
        // onSeeMore: function () {
        //     var that = this;

        //     var sCorrectionId = that.getView().byId("CorrectionId").getValue();
        //     if (sCorrectionId === undefined) {
        //         sCorrectionId = "";
        //     }

        //     var DateRange = that.getView().byId("DateRangeId").getValue();
        //     var Datevalue = DateRange.split(" ");
        //     var ValidFrom = Datevalue[0];
        //     var ValidTo = Datevalue[2];

        //     if (ValidFrom === undefined || ValidFrom === "") {
        //         ValidFrom = "";
        //     } else {
        //         ValidFrom = ValidFrom.substring(6, 10) + ValidFrom.substring(0, 2) + ValidFrom.substring(3, 5);
        //     }
        //     if (ValidTo === undefined || ValidTo === "") {
        //         ValidTo = "";
        //     } else {
        //         ValidTo = ValidTo.substring(6, 10) + ValidTo.substring(0, 2) + ValidTo.substring(3, 5);
        //     }

        //     var sCreatedBy = that.getView().byId("CreatedById").getValue();
        //     if (sCreatedBy === undefined || sCreatedBy === "") {
        //         sCreatedBy = "";
        //     }

        //     var sPlant = that.getView().byId("PlantId").getValue();
        //     if (sPlant === undefined || sPlant === "") {
        //         sPlant = "";
        //     }

        //     if (sPlant === "") {
        //         var sErrorPlant = that.getView().getModel("i18n").getProperty("sErrorPlant");
        //         sap.m.MessageBox.show(
        //             sErrorPlant, {
        //             icon: sap.m.MessageBox.Icon.ERROR,
        //             title: "Error"
        //         });
        //     } else {


        //         var filters = [];

        //         if (sCorrectionId !== "") {
        //             var filter1 = new sap.ui.model.Filter("Corid", sap.ui.model.FilterOperator.EQ, sCorrectionId);
        //             filters.push(filter1);
        //         }

        //         if (ValidFrom !== "" && ValidTo !== "") {
        //             var filter2 = new sap.ui.model.Filter("Erdat", sap.ui.model.FilterOperator.BT, ValidFrom, ValidTo);
        //             filters.push(filter2);
        //         }

        //         if (sCreatedBy !== "") {
        //             var filter3 = new sap.ui.model.Filter("Ernam", sap.ui.model.FilterOperator.EQ, sCreatedBy);
        //             filters.push(filter3);
        //         }

        //         if (sPlant !== "") {
        //             var filter4 = new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, sPlant);
        //             filters.push(filter4);
        //         }



        //         var items = that.getView().byId("StatusId").getSelectedItems();
        //         var len = items.length;
        //         if (len > 0) {
        //             for (var i = 0; i < len; i++) {
        //                 var word = items[i].getProperty("text");
        //                 var filter5 = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, word);
        //                 filters.push(filter5);
        //             }
        //         }

        //         var filter6 = new sap.ui.model.Filter("Flagx", sap.ui.model.FilterOperator.EQ, "O");
        //         filters.push(filter6);

        //         that.onLoadsSeeMore(filters);
        //     }


        // },
        // onLoadsSeeMore: function (oFilter) {
        //     var that = this;
        //     vskip = vskip + vtop;
        //     var LoadsData = that.getView().getModel("CorrectionModel").getData().results;
   
        //     that.fnCreateBusyDialog("pallet.svg", "true");

        //     that.getOwnerComponent().getModel("BOLModel").read("/BolOverviewSet", {
        //         filters: oFilter,
        //         urlParameters: {
        //             "$top": vtop,
        //             "$skip": vskip,
        //             "$expand": "BolItemMasterSet"
        //         },
        //         success: function (oData, oResponse) {

        //             if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {
              
        //                 that.fnCreateBusyDialog("pallet.svg", "false");

        //                 for (var i = 0; i < oData.results.length; i++) {
        //                     LoadsData.push(oData.results[i]);
        //                 }

        //                 that.getView().getModel("CorrectionModel").setSizeLimit(LoadsData.length);

        //                 that.getView().getModel("CorrectionModel").refresh(true);

        //                 if (oData.results.length < 20) {
        //                     that.getView().byId("SeeMoreBar").setVisible(false);
        //                     // that.getView().byId("scrollID").setHeight('330px');
        //                 } else {
        //                     that.getView().byId("SeeMoreBar").setVisible(true);
        //                 }

        //             }

        //         },
        //         error: function (oError) {
             
        //             that.fnCreateBusyDialog("pallet.svg", "false");

        //             var oMessage;
        //             if (oMessage === undefined) {
        //                 oMessage = JSON.parse(oError.responseText).error.message.value;
        //             }
        //             sap.m.MessageBox.show(
        //                 oMessage, {
        //                 icon: sap.m.MessageBox.Icon.ERROR,
        //                 title: "Error"
        //             });

        //         }
        //     });

        // },

        // onClear: function () {
        //     var that = this;
        //     that.getView().byId("CorrectionId").setValue();
        //     that.getView().byId("DateRangeId").setValue();
        //     that.getView().byId("CreatedById").setValue();
        //     that.getView().byId("StatusId").setSelectedItems();
        //     that.onSearch();
        // },
        // onDateFormat: function (date) {
        //     var newDate;
        //     if (date !== "" && date !== undefined && date !== null && date !== "00000000") {
        //         newDate = date.substring(4, 6) + "/" + date.substring(6, 8) + "/" + date.substring(0, 4);
        //     } else {
        //         newDate = "";
        //     }
        //     return newDate;
        // },
        // onTimeFormat: function (Time) {
        //     var newTime;
        //     if (Time !== "" && Time !== undefined && Time !== null && Time !== "000000") {
        //         newTime = Time.substring(0, 2) + ":" + Time.substring(2, 4) + ":" + Time.substring(4, 6);
        //     } else {
        //         newTime = "";
        //     }
        //     return newTime;
        // },
        // onFlagFormat: function (Flag) {
        //     var newFlag;
        //     if (Flag === false) {
        //         newFlag = "";
        //     } else {
        //         newFlag = "X";
        //     }
        //     return newFlag;
        // },
        // onYearFormat: function (val) {
        //     var newVal;
        //     if (val === "0000") {
        //         newVal = "";
        //     } else {
        //         newVal = val;
        //     }
        //     return newVal;
        // },
        // onExport: function (str) {
        //     var that = this;
        //     var aCols, oSettings, oSheet;

        //     if (!that._oTable) {
        //         that._oTable = that.byId("OverviewTable");
        //     }

        //     aCols = that.createColumnConfig();
        //     var aProducts = that.getView().getModel("CorrectionModel").getProperty('/');            
        //     aProducts.results.forEach(function (item) {
        //         Object.keys(item).forEach(function (key) {
        //             if (key === "Actdat" || key === "Logdat" || key === "Erdat" || key === "Subdat" || key === "AprdatRep" || key === "AprdatTm" || key === "Rejdat" || key === "Prodat") {
        //                 item[key] = that.onDateFormat(item[key]);                        
        //             }
        //             if(key === "Logtim" || key === "Erzet" || key === "Subtim" || key === "AprtimRep" || key === "AprtimTm" || key === "Rejtim" || key === "Protim"){
        //                 item[key] = that.onTimeFormat(item[key]);  
        //             }
        //             if(key === "Flag"){
        //                 item[key] = that.onFlagFormat(item[key]); 
        //             }
        //             if(key === "Mjahr" || key === "Rjahr" || key === "Njahr"){
        //                 item[key] = that.onYearFormat(item[key]); 
        //             }
        //         })
        //     });

        //     oSettings = {
        //         workbook: {
        //             columns: aCols
        //         },
        //         dataSource: aProducts.results,
        //         worker: false
        //     };

        //     oSheet = new Spreadsheet(oSettings);
        //     oSheet.build().finally(function () {
        //         oSheet.destroy();
        //     });
        // },
        // createColumnConfig: function () {
        //     var that = this;
        //     var cols = that.CreationTable._oPersonalizations.aColumns;
        //     var TotalCols = that.CreationTable.getAggregation("persoService").oData.aColumns;

        //     var aCols = [];
        //     var obj;

        //     for (var i = 0; i < cols.length; i++) {

        //         obj = {
        //             label: TotalCols[i].text,
        //             property: TotalCols[i].property,
        //             type: EdmType.String
        //         };
        //         aCols.push(obj);

        //     }

        //     return aCols;

        // },


        // // CorrectionId Value Help
        // getCorrectionIdDialog: function () {
        //     var that = this;
        //     var oView = that.getView();
        //     if (!that.dialog1) {
        //         that.dialog1 = sap.ui.xmlfragment("com.bol.zespbol.fragments.CorrectionId", that);
        //     }
        //     oView.addDependent(that.dialog1);
        //     return that.dialog1;
        // },
        // onCorrectionIdValueHelpRequest: function (oEvent) {
        //     var that = this;
        //     var oFilter = new Filter("Corid", FilterOperator.EQ, "");
        //     that.onCorrectionIdServicecall([oFilter], "VH");
        // },
        // onCorrectionIdServicecall: function (Filter, ValueHelp) {
        //     var that = this;
        //     var oBusyDialog = new sap.m.BusyDialog({});
        //     oBusyDialog.open();

        //     that.getOwnerComponent().getModel("BOLModel").read("/CorrectionIDSet", {
        //         filters: Filter,
        //         success: function (oData, oResponse) {

        //             if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {
        //                 oBusyDialog.close();

        //                 var oCorrectionIdModel = new sap.ui.model.json.JSONModel(oData);
        //                 oCorrectionIdModel.setSizeLimit(oData.results.length);
        //                 that.getView().setModel(oCorrectionIdModel, "CorrectionIdModel");
        //                 if (ValueHelp === "VH") {
        //                     that.getCorrectionIdDialog().open();
        //                 }
        //             }

        //         },
        //         error: function (oError) {
        //             oBusyDialog.close();
        //             var oMessage;
        //             if (oMessage === undefined) {
        //                 oMessage = JSON.parse(oError.responseText).error.message.value;
        //             }
        //             sap.m.MessageBox.show(
        //                 oMessage, {
        //                 icon: sap.m.MessageBox.Icon.ERROR,
        //                 title: "Error"
        //             });

        //         }
        //     });

        // },
        // onCorrectionIdSearch: function (oEvent) {
        //     var that = this;
        //     var sValue = oEvent.getParameters("query").query.toUpperCase();
        //     var oFilter = new Filter("Corid", FilterOperator.EQ, sValue);
        //     that.onCorrectionIdServicecall([oFilter], "");
        // },
        // onCorrectionIdCancel: function () {
        //     var that = this;
        //     that.getCorrectionIdDialog().close();
        // },
        // onCorrectionIdSuggest: function (oEvent) {
        //     var that = this;
        //     var sValue = oEvent.getParameter("suggestValue").toUpperCase();
        //     var oFilter = new Filter("Corid", FilterOperator.EQ, sValue);
        //     var filter = [oFilter];
        //     that.getOwnerComponent().getModel("BOLModel").read("/CorrectionIDSet", {
        //         filters: filter,
        //         success: function (oData, oResponse) {

        //             if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {

        //                 var oCorrectionIdSuggestModel = new sap.ui.model.json.JSONModel(oData);
        //                 oCorrectionIdSuggestModel.setSizeLimit(oData.results.length);
        //                 that.getView().setModel(oCorrectionIdSuggestModel, "CorrectionIdSuggestModel");
        //             }

        //         },
        //         error: function (oError) {
        //             var oMessage;
        //             if (oMessage === undefined) {
        //                 oMessage = JSON.parse(oError.responseText).error.message.value;
        //             }
        //             sap.m.MessageBox.show(
        //                 oMessage, {
        //                 icon: sap.m.MessageBox.Icon.ERROR,
        //                 title: "Error"
        //             });

        //         }
        //     });
        // },
        // onCorrectionIdClose: function () {
        //     var that = this;
        //     that.dialog1.destroy();
        //     that.dialog1 = null;
        // },
        // onCorrectionIdSuggestSelected: function (oEvent) {
        //     var that = this;
        //     var SelCorrectionId = oEvent.getParameter("selectedItem").getProperty("text").toUpperCase();
        //     that.getView().getModel("BindingModel").setProperty("/CorrectionId", SelCorrectionId);
        // },
        // onCorrectionIdSelChange: function (oEvent) {
        //     var that = this;
        //     that.getCorrectionIdDialog().close();
        //     var SelCorrectionId = oEvent.getSource().getSelectedItem().getBindingContext("CorrectionIdModel").getObject().Corid.toUpperCase();
        //     that.getView().getModel("BindingModel").setProperty("/CorrectionId", SelCorrectionId);
        // },.



        // // CreatedBy Value Help
        // getCreatedByDialog: function () {
        //     var that = this;
        //     var oView = that.getView();
        //     if (!that.dialog2) {
        //         that.dialog2 = sap.ui.xmlfragment("com.bol.zespbol.fragments.CreatedBy", that);
        //     }
        //     oView.addDependent(that.dialog2);
        //     return that.dialog2;
        // },
        // onCreatedByValueHelpRequest: function (oEvent) {
        //     var that = this;
        //     var oFilter = new Filter("Ernam", FilterOperator.EQ, "");
        //     that.onCreatedByServicecall([oFilter], "VH");
        // },
        // onCreatedByServicecall: function (Filter, ValueHelp) {
        //     var that = this;
        //     var oBusyDialog = new sap.m.BusyDialog({});
        //     oBusyDialog.open();

        //     that.getOwnerComponent().getModel("BOLModel").read("/CreatedBySet", {
        //         filters: Filter,
        //         success: function (oData, oResponse) {

        //             if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {
        //                 oBusyDialog.close();

        //                 var oCreatedByModel = new sap.ui.model.json.JSONModel(oData);
        //                 oCreatedByModel.setSizeLimit(oData.results.length);
        //                 that.getView().setModel(oCreatedByModel, "CreatedByModel");
        //                 if (ValueHelp === "VH") {
        //                     that.getCreatedByDialog().open();
        //                 }
        //             }

        //         },
        //         error: function (oError) {
        //             oBusyDialog.close();
        //             var oMessage;
        //             if (oMessage === undefined) {
        //                 oMessage = JSON.parse(oError.responseText).error.message.value;
        //             }
        //             sap.m.MessageBox.show(
        //                 oMessage, {
        //                 icon: sap.m.MessageBox.Icon.ERROR,
        //                 title: "Error"
        //             });

        //         }
        //     });

        // },
        // onCreatedBySearch: function (oEvent) {
        //     var that = this;
        //     var sValue = oEvent.getParameters("query").query.toUpperCase();
        //     var oFilter = new Filter("Ernam", FilterOperator.EQ, sValue);
        //     that.onCreatedByServicecall([oFilter], "");
        // },
        // onCreatedByCancel: function () {
        //     var that = this;
        //     that.getCreatedByDialog().close();
        // },
        // onCreatedBySuggest: function (oEvent) {
        //     var that = this;
        //     var sValue = oEvent.getParameter("suggestValue").toUpperCase();
        //     var oFilter = new Filter("Ernam", FilterOperator.EQ, sValue);
        //     var filter = [oFilter];
        //     that.getOwnerComponent().getModel("BOLModel").read("/CreatedBySet", {
        //         filters: filter,
        //         success: function (oData, oResponse) {

        //             if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {

        //                 var oCreatedBySuggestModel = new sap.ui.model.json.JSONModel(oData);
        //                 oCreatedBySuggestModel.setSizeLimit(oData.results.length);
        //                 that.getView().setModel(oCreatedBySuggestModel, "CreatedBySuggestModel");
        //             }

        //         },
        //         error: function (oError) {
        //             var oMessage;
        //             if (oMessage === undefined) {
        //                 oMessage = JSON.parse(oError.responseText).error.message.value;
        //             }
        //             sap.m.MessageBox.show(
        //                 oMessage, {
        //                 icon: sap.m.MessageBox.Icon.ERROR,
        //                 title: "Error"
        //             });

        //         }
        //     });
        // },
        // onCreatedByClose: function () {
        //     var that = this;
        //     that.dialog2.destroy();
        //     that.dialog2 = null;
        // },
        // onCreatedBySuggestSelected: function (oEvent) {
        //     var that = this;
        //     var SelCreatedBy = oEvent.getParameter("selectedItem").getProperty("text").toUpperCase();
        //     that.getView().getModel("BindingModel").setProperty("/CreatedBy", SelCreatedBy);
        // },
        // onCreatedBySelChange: function (oEvent) {
        //     var that = this;
        //     that.getCreatedByDialog().close();
        //     var SelCreatedBy = oEvent.getSource().getSelectedItem().getBindingContext("CreatedByModel").getObject().Ernam.toUpperCase();
        //     that.getView().getModel("BindingModel").setProperty("/CreatedBy", SelCreatedBy);
        // },


        // // Plant Value Help	
        // getPlantDialog: function () {
        //     var that = this;
        //     var oView = that.getView();
        //     if (!that.dialog3) {
        //         that.dialog3 = sap.ui.xmlfragment("com.bol.zespbol.fragments.Plant", that);
        //     }
        //     oView.addDependent(that.dialog3);
        //     return that.dialog3;
        // },
        // onPlantValueHelpRequest: function (oEvent) {
        //     var that = this;
        //     var userName = that.getView().getModel("userInfo").getData().name;
        //     var oFilter = [];
        //     var Filter1 = new sap.ui.model.Filter("User", sap.ui.model.FilterOperator.EQ, userName.toUpperCase());
        //     oFilter.push(Filter1);
        //     var Filter2 = new Filter("Werks", FilterOperator.EQ, "");
        //     oFilter.push(Filter2);
        //     that.onPlantServicecall(oFilter, "VH");
        // },
        // onPlantServicecall: function (Filter, ValueHelp) {
        //     var that = this;
        //     var oBusyDialog = new sap.m.BusyDialog({});
        //     oBusyDialog.open();

        //     that.getOwnerComponent().getModel("BOLModel").read("/PlantSet", {
        //         filters: Filter,
        //         success: function (oData, oResponse) {

        //             if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {
        //                 oBusyDialog.close();

        //                 var oPlantModel = new sap.ui.model.json.JSONModel(oData);
        //                 oPlantModel.setSizeLimit(oData.results.length);
        //                 that.getView().setModel(oPlantModel, "PlantModel");
        //                 if (ValueHelp === "VH") {
        //                     that.getPlantDialog().open();
        //                 }
        //             }

        //         },
        //         error: function (oError) {
        //             oBusyDialog.close();
        //             var oMessage;
        //             if (oMessage === undefined) {
        //                 oMessage = JSON.parse(oError.responseText).error.message.value;
        //             }
        //             sap.m.MessageBox.show(
        //                 oMessage, {
        //                 icon: sap.m.MessageBox.Icon.ERROR,
        //                 title: "Error"
        //             });

        //         }
        //     });

        // },
        // onPlantSearch: function (oEvent) {
        //     var that = this;
        //     var sValue = oEvent.getParameters("query").query.toUpperCase();
        //     var userName = that.getView().getModel("userInfo").getData().name;
        //     var oFilter = [];
        //     var Filter1 = new sap.ui.model.Filter("User", sap.ui.model.FilterOperator.EQ, userName.toUpperCase());
        //     oFilter.push(Filter1);
        //     var Filter2 = new Filter("Werks", FilterOperator.EQ, sValue);
        //     oFilter.push(Filter2);
        //     that.onPlantServicecall(oFilter, "");
        // },
        // onPlantCancel: function () {
        //     var that = this;
        //     that.getPlantDialog().close();
        // },
        // onPlantClose: function () {
        //     var that = this;
        //     that.dialog3.destroy();
        //     that.dialog3 = null;
        // },
        // onPlantSelChange: function (oEvent) {
        //     var that = this;
        //     that.getPlantDialog().close();
        //     var SelPlant = oEvent.getSource().getSelectedItem().getBindingContext("PlantModel").getObject().Werks.toUpperCase();
        //     that.getView().getModel("BindingModel").setProperty("/Plant", SelPlant);
        //     jQuery.sap.storage(jQuery.sap.storage.Type.local).put("AssignedPlant", SelPlant);
        //     vskip = 0;
        //     vtop = 20;
        // }

//     });
// });
