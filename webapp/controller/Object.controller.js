var Batchfinalindex;
var Materialfinalindex;
var oViewThis;
var sSuccessMsg;
var CorrectionIdNo;
sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox",
    'sap/ui/core/library'
], function (BaseController, JSONModel, History, formatter, Filter, FilterOperator,MessageBox,coreLibrary) {
    "use strict";
    var ValueState = coreLibrary.ValueState;

    return BaseController.extend("com.Techbol.techbol.controller.Object", {

        formatter: formatter,

        onInit: function () {
            jQuery.sap.require("jquery.sap.storage");
            var that = this;     
            
           

            var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
            oRouter.getRoute("Object").attachPatternMatched(that._onObjectMatched, that);
        },
        _onObjectMatched:function(oEvent){
           
        }
    });

    });

//         onInit: function () {
//             jQuery.sap.require("jquery.sap.storage");
//             var that = this;     
            
//             var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
//             oRouter.getRoute("object").attachPatternMatched(that._onObjectMatched, that);
//         },
//         _onObjectMatched: function (oEvent) {
//             var that = this;
//             sap.ui.core.BusyIndicator.hide();
        
//             var sObj = {             
//                 "Status": "INITIAL",
//                 "CorrectionType": "BOL",
//                 "FormVisible": false,
//                 "TableVisible": false,
//                 "DisplayButton": true,
//                 "View": "Correction Id",  
//                 "PlantEdit": true,
//                 "ShiftEdit": true,
//                 "ActDateEdit": true,
//                 "ReasonEdit": true,
//                 "BOLEdit": false,
//                 "BOLRequired":false,
//                 "GlidEdit": true,
//                 "ScacEdit": true,
//                 "TrailerEdit": true,
//                 "DateEdit": true,             
//                 "AddButton": true,
//                 "submitButton": true,
//                 "resubmitButton":true,
//                 "Title": "Bill of Lading Corrections"
//             };
//             var oModel = new sap.ui.model.json.JSONModel();
//             oModel.setData(sObj);
//             that.getView().setModel(oModel, "BindingModel");

//             if (that.byId("Attachment").getToolbar() !== undefined) {
//                 that.byId("Attachment").getToolbar().getContent()[2].setEnabled(true);
//             }

//             var resourcemodel = that.getOwnerComponent().getModel("BOLModel");
//             var oDataResource = {
//                 sServiceUrl: resourcemodel.sServiceUrl + "/AttachmentSet"
//             };

//             var jsonResource = new JSONModel(oDataResource);
//             that.getView().setModel(jsonResource, "ResourceModel");

//             that.getView().byId("GlidId").setValueState(ValueState.None);
//             that.getView().byId("ScacId").setValueState(ValueState.None);
//             that.getView().byId("TrailerId").setValueState(ValueState.None);
//             that.getView().byId("DateId").setValueState(ValueState.None);

//             var oUploadCollection = this._uploadCollection;
//             if (oUploadCollection !== undefined) {
//                 oUploadCollection.removeAllItems();
//             }

//             if (oEvent) {           
//                 if (oEvent.getParameter("arguments").objectId === "Create") {                
//                     that.View = "Create";
//                     that.CorrectionId = "";
//                     oViewThis = 0;
//                     var AssignedPlant = jQuery.sap.storage(jQuery.sap.storage.Type.local).get("AssignedPlant");

//                     var Create = {
//                         "CorrectionId": "New Correction",                    
//                         "CorrectionType": "BOL",
//                         "Status": "INITIAL",
//                         "Plant": AssignedPlant,
//                         "Shift": "",
//                         "ActDate": "",
//                         "Reason": "",
//                         "BOL": "",
//                         "OldGlid": "",
//                         "OldScac": "",
//                         "OldTrailer": "",
//                         "OldDate": "",
//                         "NewGlid": "",
//                         "NewScac": "",
//                         "NewTrailer": "",
//                         "NewDate": "",                 
//                         "Items": []
//                     };

//                     var oCreateModel = new JSONModel(Create);
//                     that.getView().setModel(oCreateModel, "CreateModel");

//                     that.getView().getModel("BindingModel").setProperty("/FormVisible", false);
//                     that.getView().getModel("BindingModel").setProperty("/TableVisible", false);
//                     that.getView().getModel("BindingModel").setProperty("/saveButton", true);
//                     that.getView().getModel("BindingModel").setProperty("/submitButton", true);
//                     that.getView().getModel("BindingModel").setProperty("/resubmitButton", false);
//                     that.getView().getModel("BindingModel").setProperty("/cancelButton", false);
//                     that.getView().getModel("BindingModel").setProperty("/backButton", true);                
                           

//                 } else {
//                     that.View = "Display";
//                     that.CorrectionId = oEvent.getParameter("arguments").objectId;

//                     var oFilter = [];
//                     var filter1 = new sap.ui.model.Filter("Corid", sap.ui.model.FilterOperator.EQ, that.CorrectionId);
//                     oFilter.push(filter1);
//                     var filter2 = new sap.ui.model.Filter("Flagx", sap.ui.model.FilterOperator.EQ, "");
//                     oFilter.push(filter2);
                 
                   
//                     that.fnCreateBusyDialog("pallet.svg", "true");
//                     that.getOwnerComponent().getModel("BOLModel").read("/BolOverviewSet", {
//                         filters: oFilter,			
//                         urlParameters: {
//                             "$expand": "BolItemMasterSet"                    
//                         },
//                         success: function (oData, oResponse) {
        
//                             if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {
                             
//                                 that.fnCreateBusyDialog("pallet.svg", "false");  
                            
//                                 var oDisplayModel = new JSONModel(oData.results[0]);
//                                 that.getView().setModel(oDisplayModel, "DisplayModel");
        
//                                 that.getView().getModel("BindingModel").setProperty("/FormVisible", true);
//                                 that.getView().getModel("BindingModel").setProperty("/TableVisible", true);
                           
//                                 var ItemsArray = [];
                          
//                                 var BolItemMasterSet = oData.results[0].BolItemMasterSet.results;                          
                       
//                                 that.getView().getModel("BindingModel").setProperty("/PlantEdit", false);
//                                 that.getView().getModel("BindingModel").setProperty("/ShiftEdit", false);
//                                 that.getView().getModel("BindingModel").setProperty("/ActDateEdit", false);
//                                 that.getView().getModel("BindingModel").setProperty("/ReasonEdit", false);
//                                 that.getView().getModel("BindingModel").setProperty("/BOLEdit", false);

//                                 if(oData.results[0].Reason === "01" || oData.results[0].Reason === "02" || oData.results[0].Reason === "03" ){
//                                     that.getView().getModel("BindingModel").setProperty("/BOLRequired", true);
//                                 }else{
//                                     that.getView().getModel("BindingModel").setProperty("/BOLRequired", false);
//                                 }
                                
//                                 if (oData.results[0].Status === "DRAFT" || oData.results[0].Status === "REJECTED TM" || oData.results[0].Status === "CANCELED") {
                                                                           
//                                     that.getView().getModel("BindingModel").setProperty("/backButton", true);
//                                     that.getView().getModel("BindingModel").setProperty("/AddButton", true);
//                                     that.getView().getModel("BindingModel").setProperty("/DisplayButton", true);                                   
//                                     that.getView().getModel("BindingModel").setProperty("/saveButton", true);

//                                     that.byId("Attachment").getToolbar().getContent()[2].setEnabled(true);

//                                     if(oData.results[0].Status === "DRAFT"){
//                                     that.getView().getModel("BindingModel").setProperty("/resubmitButton", false);                             
//                                     that.getView().getModel("BindingModel").setProperty("/submitButton", true);    
//                                     that.getView().getModel("BindingModel").setProperty("/cancelButton", true);                              
//                                     }else{
//                                     that.getView().getModel("BindingModel").setProperty("/resubmitButton", true);                                   
//                                     that.getView().getModel("BindingModel").setProperty("/submitButton", false);    
//                                     that.getView().getModel("BindingModel").setProperty("/cancelButton", false);                             
//                                     }
//                                     if(oData.results[0].Reason === "03"){
//                                         that.getView().getModel("BindingModel").setProperty("/GlidEdit", false);
//                                         that.getView().getModel("BindingModel").setProperty("/ScacEdit", false);
//                                         that.getView().getModel("BindingModel").setProperty("/TrailerEdit", false);
//                                         that.getView().getModel("BindingModel").setProperty("/DateEdit", false);   
//                                         that.getView().getModel("BindingModel").setProperty("/AddButton", false);                                     
//                                     }else {
//                                         that.getView().getModel("BindingModel").setProperty("/GlidEdit", true);
//                                         that.getView().getModel("BindingModel").setProperty("/ScacEdit", true);
//                                         that.getView().getModel("BindingModel").setProperty("/TrailerEdit", true);
//                                         that.getView().getModel("BindingModel").setProperty("/DateEdit", true);    
//                                         that.getView().getModel("BindingModel").setProperty("/AddButton", true);
//                                     }

//                                     for (var i = 0; i < BolItemMasterSet.length; i++) {
//                                      var   obj = {
//                                             "No": that.onParse(BolItemMasterSet[i].Posnr),
//                                             "Reason": BolItemMasterSet[i].Reason,
//                                             "ItemNo": that.onParse(BolItemMasterSet[i].PosnrVa),
//                                             "OldBatch": BolItemMasterSet[i].Charg,                                       
//                                             "OldMaterial": BolItemMasterSet[i].Matnr,
//                                             "OldQuantity": that.onParse(BolItemMasterSet[i].Quantity),
//                                             "NewBatch": BolItemMasterSet[i].Xcharg,                                  
//                                             "NewMaterial": BolItemMasterSet[i].Xmatnr,
//                                             "NewQuantity": that.onParse(BolItemMasterSet[i].Xquantity),
//                                             "Comments":BolItemMasterSet[i].Comments,
//                                             "ReasonEdit": true,
//                                             "NewBatchEdit": false,
//                                             "NewMaterialEdit": false,
//                                             "NewQuantityEdit": false,
//                                             "CommentsEdit":true,
//                                             "DeleteButton":false
//                                         };

//                                         if(oData.results[0].Reason !== "03"){

//                                         if(BolItemMasterSet[i].Reason === "01"){
//                                             obj.ReasonEdit = true,
//                                             obj.NewBatchEdit = false,
//                                             obj.NewMaterialEdit =  false,
//                                             obj.NewQuantityEdit = true,
//                                             obj.CommentsEdit = true                                            
//                                         }else if(BolItemMasterSet[i].Reason === "02"){
//                                             obj.ReasonEdit = true,
//                                             obj.NewBatchEdit = true,
//                                             obj.NewMaterialEdit =  true,
//                                             obj.NewQuantityEdit = false,
//                                             obj.CommentsEdit = true
//                                         }else if(BolItemMasterSet[i].Reason === "03"){
//                                             obj.ReasonEdit = false,
//                                             obj.NewBatchEdit = true,
//                                             obj.NewMaterialEdit =  true,
//                                             obj.NewQuantityEdit = true,
//                                             obj.CommentsEdit = true
//                                         }else if(BolItemMasterSet[i].Reason === ""){
//                                             obj.ReasonEdit = true,
//                                             obj.NewBatchEdit = false,
//                                             obj.NewMaterialEdit =  false,
//                                             obj.NewQuantityEdit = false,
//                                             obj.CommentsEdit = true
//                                         }

//                                         if(oData.results[0].Reason === "04" || oData.results[0].Reason === "05"){
//                                             if(i === 0){
//                                                 obj.DeleteButton = false;   
//                                             }else{
//                                                 obj.DeleteButton = true;   
//                                             }
                                          
//                                         }

//                                         }else{
//                                             obj.ReasonEdit = false,
//                                             obj.NewBatchEdit = false,
//                                             obj.NewMaterialEdit =  false,
//                                             obj.NewQuantityEdit = false,
//                                             obj.CommentsEdit = true
//                                         }
                                                                       

//                                         ItemsArray.push(obj);                                 
//                                     }
//                                 } else {
//                                     if(oData.results[0].Status === "PENDING TM APPROVAL"){
//                                         that.getView().getModel("BindingModel").setProperty("/cancelButton", true);
//                                     }else{
//                                         that.getView().getModel("BindingModel").setProperty("/cancelButton", false);
//                                     }
           
//                                     that.getView().getModel("BindingModel").setProperty("/saveButton", false);
//                                     that.getView().getModel("BindingModel").setProperty("/submitButton", false);
//                                     that.getView().getModel("BindingModel").setProperty("/resubmitButton", false);                                   
//                                     that.getView().getModel("BindingModel").setProperty("/backButton", true);
//                                     that.getView().getModel("BindingModel").setProperty("/AddButton", false);
//                                     that.getView().getModel("BindingModel").setProperty("/DisplayButton", false);     
                                    
//                                     that.byId("Attachment").getToolbar().getContent()[2].setEnabled(false);
                           
//                                     that.getView().getModel("BindingModel").setProperty("/GlidEdit", false);
//                                     that.getView().getModel("BindingModel").setProperty("/ScacEdit", false);
//                                     that.getView().getModel("BindingModel").setProperty("/TrailerEdit", false);
//                                     that.getView().getModel("BindingModel").setProperty("/DateEdit", false);
//                                     for (var i = 0; i < BolItemMasterSet.length; i++) {
//                                      var   obj = {
//                                             "No": that.onParse(BolItemMasterSet[i].Posnr),
//                                             "Reason": BolItemMasterSet[i].Reason,
//                                             "ItemNo": that.onParse(BolItemMasterSet[i].PosnrVa),
//                                             "OldBatch": BolItemMasterSet[i].Charg,
//                                             "OldMaterial": BolItemMasterSet[i].Matnr,
//                                             "OldQuantity": that.onParse(BolItemMasterSet[i].Quantity),
//                                             "NewBatch": BolItemMasterSet[i].Xcharg,
//                                             "NewMaterial": BolItemMasterSet[i].Xmatnr,
//                                             "NewQuantity": that.onParse(BolItemMasterSet[i].Xquantity),
//                                             "Comments": BolItemMasterSet[i].Comments,
//                                             "ReasonEdit": false,
//                                             "NewBatchEdit": false,
//                                             "NewMaterialEdit": false,
//                                             "NewQuantityEdit": false,
//                                             "CommentsEdit":false,
//                                             "DeleteButton":false
//                                         };  
//                                         ItemsArray.push(obj);                                                                    
//                                     }
                                     
//                                     }

//                                 var Create = {
//                                     "CorrectionId": oData.results[0].Corid,                    
//                                     "CorrectionType": oData.results[0].Cortype,
//                                     "Status": oData.results[0].Status,
//                                     "Plant": oData.results[0].Werks,
//                                     "Shift": oData.results[0].Shift,
//                                     "ActDate": that.onDateChange(oData.results[0].Actdat),
//                                     "Reason": oData.results[0].Reason,
//                                     "BOL": oData.results[0].Chepref,
//                                     "OldGlid": oData.results[0].Kunnr,
//                                     "OldScac": oData.results[0].Bolnr,
//                                     "OldTrailer": oData.results[0].Xabln,
//                                     "OldDate": that.onDateChange(oData.results[0].Lfdat),
//                                     "NewGlid": oData.results[0].KunnrN,
//                                     "NewScac": oData.results[0].BolnrN,
//                                     "NewTrailer": oData.results[0].XablnN,
//                                     "NewDate": that.onDateChange(oData.results[0].LfdatN),                 
//                                     "Items": ItemsArray
//                                 };
            
//                                 var oCreateModel = new JSONModel(Create);
//                                 that.getView().setModel(oCreateModel, "CreateModel"); 

//                                 if(that.CorrectionId !== ""){
//                                 that.onAttachmentData(that.CorrectionId);
//                                 }
                            
                          
        
//                             }
        
//                         },
//                         error: function (oError) {
                       
//                             that.fnCreateBusyDialog("pallet.svg", "false");   
//                             var oMessage;
//                             if (oMessage === undefined) {
//                                 oMessage = JSON.parse(oError.responseText).error.message.value;
//                             }
//                             sap.m.MessageBox.show(
//                                 oMessage, {
//                                     icon: sap.m.MessageBox.Icon.ERROR,
//                                     title: "Error"
//                                 });
        
//                         }
//                     });               
//                 }
//             }
 
//             var Reasonlist = [{
//                 "Key": "01",
//                 "TypeName": "DATA CORRECTION"
//             }, {
//                 "Key": "02",
//                 "TypeName": "GOODS ISSUE/RECEIPT"
//             }, {
//                 "Key": "03",
//                 "TypeName": "REVERSE GOODS ISSUE/RECEIPT"
//             }, {
//                 "Key": "04",
//                 "TypeName": "CREATE UNAUTHORIZED ISSUE"
//             }, {
//                 "Key": "05",
//                 "TypeName": "CREATE UNAUTHORIZED RETURN"
//             }];
//             var oReasonmodel = new JSONModel(Reasonlist);
//             that.getView().setModel(oReasonmodel, "Reasonmodel");


//             var r = new sap.ui.model.json.JSONModel({
//                 maxDate: new Date
//             });
//             that.getView().setModel(r, "oDateModel");
          
//             this._uploadCollection = that.getView().byId("Attachment");

//         },
//         fnCreateBusyDialog: function (sImage, sBusy) {
//             var that = this;
//             if (sBusy === "true") {
//                 that.oInsCreateDailog = new sap.m.Dialog({
//                     showHeader: false
//                 }).addStyleClass("busyDialog sapUiTinyMargin");
//                 var sComponentName = that.getOwnerComponent().getMetadata().getComponentName();
//                 var imgUrl = $.sap.getModulePath(sComponentName, "/images/");
//                 var oImage = new sap.m.Image().addStyleClass("sapUiMediumMargin");
//                 oImage.setSrc(imgUrl + sImage);
//                 that.oInsCreateDailog.addContent(oImage);
//                 that.oInsCreateDailog.open();
//             } else {
//                 that.oInsCreateDailog.close();
//             }
//         },
//         realDateTimeClockBrowser: function () {
//             var dateObject = new Date();
//             var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({
//                 style: 'full',            
//                 pattern: "yyyyMMdd HHmmss"
//             }); 
//             // Format the date
//             var dateFormatted = dateFormat.format(dateObject);     
//             return dateFormatted;
//         },

//         onBack: function () {               
//             var that = this;         
//             var sConfirmTitle = that.getView().getModel("i18n").getProperty("sConfirmTitle");
//             var sConfirmMsg = that.getView().getModel("i18n").getProperty("sConfirmBackMsg"); 
//             MessageBox.show(
//                 sConfirmMsg, {
//                     icon: MessageBox.Icon.INFORMATION,
//                     title: sConfirmTitle,
//                     actions: [MessageBox.Action.YES, MessageBox.Action.NO],
//                     onClose: function (oAction) {
//                         if (oAction === "YES") {               
//                             var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
//                             oRouter.navTo("worklist");                   
//                         }
//                     }
//                 }
//             );
//         },
//         onParse:function(value){
//             var finalValue;
//             if(value !== ""){
//                 finalValue = parseInt(value,0);
//             }else{
//                 finalValue = "";
//             }
//             return finalValue;
//         },
//         onPad:function(num, size){           
//             var s = "00000" + num;
//             return s.substr(s.length-size);                        
//         },            
//         onDateChange:function(date){
//             var newDate;
//             if(date !== "" && date !== undefined && date !== null && date !== "00000000"){
//                 newDate = date.substring(4, 6)+"/"+date.substring(6, 8)+"/"+date.substring(0, 4);               
//             }else{
//                 newDate = "";
//             }
//             return newDate;            
//         },
//         onChangeDateFormat:function(date){
//             var newDate;
//             if(date !== "" && date !== undefined && date !== null && date !== "00000000"){
//                 newDate = date.substring(6,10)+date.substring(0,2)+date.substring(3,5);               
//             }else{
//                 newDate = "";
//             }
//             return newDate;            
//         },
//         onAdd: function () {
//             var that = this;
//             var Items = that.getView().getModel("CreateModel").getData().Items;
//             var length = Items.length;

//             if(length > 0){
//                 var No = parseInt(that.getView().getModel("CreateModel").getData().Items[length - 1].No, 0) + 10; 
//                 var obj = {            
//                     "No": No,
//                     "Reason": "03",
//                     "ItemNo": 0,
//                     "OldBatch": "",
//                     "OldMaterial": "",
//                     "OldQuantity": "",
//                     "NewBatch": "",
//                     "NewMaterial": "",
//                     "NewQuantity": "",
//                     "Comments":"",
//                     "ReasonEdit": false,
//                     "NewBatchEdit": true,
//                     "NewMaterialEdit": true,
//                     "NewQuantityEdit": true,
//                     "CommentsEdit":true,
//                     "DeleteButton":true
//                 };
//             }else{               
//                 var obj = {
//                     "No": "10",
//                     "Reason": "03",
//                     "ItemNo": 0,
//                     "OldBatch": "",
//                     "OldMaterial": "",
//                     "OldQuantity": "",
//                     "NewBatch": "",
//                     "NewMaterial": "",
//                     "NewQuantity": "",
//                     "Comments":"",
//                     "ReasonEdit": false,
//                     "NewBatchEdit": true,
//                     "NewMaterialEdit": true,
//                     "NewQuantityEdit": true,
//                     "CommentsEdit":true,
//                     "DeleteButton":true
//                 };
//             }
    
//             Items.push(obj);
//             that.getView().getModel("CreateModel").getData().Items = Items;
//             that.getView().getModel("CreateModel").refresh(true);

//         },
//         onSelectType: function (oEvent) {
//             var that = this;
//             var oComboBox = oEvent.getSource();
//             var SelectedKey = oComboBox.getSelectedKey();

//             var Index = oEvent.getSource().getParent().getBindingContext("CreateModel").getPath().split("/");
//             var oModel = that.getView().getModel("CreateModel");
//             var sObj = oModel.getData().Items[parseInt(Index[2], 0)];
//             if (SelectedKey === "01") {
//                 sObj.NewQuantityEdit = true;
//                 sObj.NewBatchEdit = false;
//                 sObj.NewMaterialEdit = false;
//                 sObj.NewBatch = "";
//                 sObj.NewMaterial = "";
//                 sObj.NewQuantity = "";
//                 oComboBox.setValueState(ValueState.None);
//             } else if (SelectedKey === "02") {
//                 sObj.NewQuantityEdit = false;
//                 sObj.NewBatchEdit = true;
//                 sObj.NewMaterialEdit = true;
//                 sObj.NewBatch = "";
//                 sObj.NewMaterial = "";
//                 sObj.NewQuantity = "";
//                 oComboBox.setValueState(ValueState.None);
//             }else{
//                 sObj.NewQuantityEdit = false;
//                 sObj.NewBatchEdit = false;
//                 sObj.NewMaterialEdit = false;
//                 sObj.NewBatch = "";
//                 sObj.NewMaterial = "";
//                 sObj.NewQuantity = "";                
//                 oComboBox.setValueState(ValueState.Error);
//                 var sErrorReqLineItems = that.getView().getModel("i18n").getProperty("sErrorReqLineItems");
//                 oComboBox.setValueStateText(sErrorReqLineItems);                
//             }
//             oModel.updateBindings(true);
//             oModel.refresh(true);

//             // var oModel = oEvent.getSource().getParent().getBindingContext("CreateModel");
//             // var oContext = oModel.getModel("CreateModel").getData().Items;
//             // var sPath = oContext.getPath();
//             // var sObj = oContext.getObject();
//             // oModel.setProperty(sPath, sObj, oContext, true);

//         },  
     
//         onGlidChange:function(oEvent){
//             var that = this;
//             var oIP = oEvent.getSource();
//             var value = oEvent.getParameter("value");            
//             var OldGlid = that.getView().getModel("CreateModel").getProperty("/OldGlid");
//             if(OldGlid === value && value !== ""){
//                 oIP.setValueState(ValueState.Error);
//                 var sErrorDiffGlid = that.getView().getModel("i18n").getProperty("sErrorDiffGlid");
//                 oIP.setValueStateText(sErrorDiffGlid);

//                 MessageBox.show(
//                     sErrorDiffGlid, {
//                     icon: sap.m.MessageBox.Icon.ERROR,
//                     title: "Error"
//                     });
                
//             }else{
              
//                 var oFilter = [];
//                 var filter1 = new sap.ui.model.Filter("Kunnr", sap.ui.model.FilterOperator.EQ, value);                    
//                 var filter2 = new sap.ui.model.Filter("KunnrN", sap.ui.model.FilterOperator.EQ, OldGlid);             
               
//                 oFilter.push(filter1);
//                 oFilter.push(filter2);             
    
//                 var oBusyDialog = new sap.m.BusyDialog({});
//                 oBusyDialog.open();
    
//                 that.getOwnerComponent().getModel("BOLModel").read("/CustomerSet", {
//                     filters: oFilter,	
//                     success: function (oData, oResponse) {   
//                         if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {
//                             oBusyDialog.close(); 
//                             oIP.setValueState(ValueState.None);
//                             that.getView().getModel("CreateModel").setProperty("/NewGlid",value);                                                                  
//                         }     
//                     },
//                     error: function (oError) {
//                         oBusyDialog.close();              
//                         oIP.setValueState(ValueState.Error);
//                         var sErrorValidGlid = that.getView().getModel("i18n").getProperty("sErrorValidGlid");
//                         oIP.setValueStateText(sErrorValidGlid);
//                         that.getView().getModel("CreateModel").setProperty("/NewGlid","");                  
    
//                         var oMessage;               
//                         if (oMessage === undefined) {                       
//                             oMessage = JSON.parse(oError.responseText).error.message.value;                     
//                         }

//                         sap.m.MessageBox.show(
//                             oMessage, {
//                                 icon: sap.m.MessageBox.Icon.ERROR,
//                                 title: "Error"
//                             });
                   
//                     }
//                 });

//             }  
//         },
//         onScacChange:function(oEvent){
//             var that = this;      
//             var oIP = oEvent.getSource();
//             var value = oEvent.getSource().getProperty("value");            
//             var OldScac = that.getView().getModel("CreateModel").getProperty("/OldScac");
//             if(OldScac === value && value !== ""){
//                 oIP.setValueState(ValueState.Error);
//                 var sErrorDiffScac = that.getView().getModel("i18n").getProperty("sErrorDiffScac");
//                 oIP.setValueStateText(sErrorDiffScac);
            
//                 MessageBox.show(
//                     sErrorDiffScac, {
//                     icon: sap.m.MessageBox.Icon.ERROR,
//                     title: "Error"
//                     });
               
//             }else{
//                 oIP.setValueState(ValueState.None);
//                 that.getView().getModel("CreateModel").setProperty("/NewScac",value);
//             }   
//         },
//         onTrailerChange:function(oEvent){
//             var that = this;       
//             var oIP = oEvent.getSource();
//             var value = oEvent.getSource().getProperty("value");            
//             var OldTrailer = that.getView().getModel("CreateModel").getProperty("/OldTrailer");
//             if(OldTrailer === value && value !== ""){
//                 oIP.setValueState(ValueState.Error);
//                 var sErrorDiffTrailer = that.getView().getModel("i18n").getProperty("sErrorDiffTrailer");
//                 oIP.setValueStateText(sErrorDiffTrailer);
               
//                 MessageBox.show(
//                     sErrorDiffTrailer, {
//                     icon: sap.m.MessageBox.Icon.ERROR,
//                     title: "Error"
//                     });
               
//             }else{
//                 oIP.setValueState(ValueState.None);
//                 that.getView().getModel("CreateModel").setProperty("/NewTrailer",value);
//             }
//         },
//         onNewDateChange:function(oEvent){
//             var that = this;    
//             var oIP = oEvent.getSource();
//             var value = oEvent.getSource().getProperty("value");            
//             var OldDate = that.getView().getModel("CreateModel").getProperty("/OldDate");
//             if(OldDate === value && value !== ""){
//                 oIP.setValueState(ValueState.Error);
//                 var sErrorDiffDate = that.getView().getModel("i18n").getProperty("sErrorDiffDate");
//                 oIP.setValueStateText(sErrorDiffDate);
          
//                 MessageBox.show(
//                     sErrorDiffDate, {
//                     icon: sap.m.MessageBox.Icon.ERROR,
//                     title: "Error"
//                     });
   
//             }else{
//                 oIP.setValueState(ValueState.None);
//                 that.getView().getModel("CreateModel").setProperty("/NewDate",value);
//             }
//         },
//         onActDateChange:function(oEvent){
//             var that = this;
//             var oDP = oEvent.getSource();
//             var sValue = oEvent.getParameter("value");
//             var bValid = oEvent.getParameter("valid");                
        
//             var Plant = that.getView().getModel("CreateModel").getProperty("/Plant");
//             var Shift = that.getView().getModel("CreateModel").getProperty("/Shift"); 
//             var Reason = that.getView().getModel("CreateModel").getProperty("/Reason");
//             var BOL = that.getView().getModel("CreateModel").getProperty("/BOL");

//             if(Shift === ""){
//                 that.getView().byId("shiftId").setValueState("Error");
//                 var sErrorReqShift = that.getView().getModel("i18n").getProperty("sErrorReqShift");
//                 that.getView().byId("shiftId").setValueStateText(sErrorReqShift);

//                   MessageBox.show(
//                     sErrorReqShift, {
//                     icon: sap.m.MessageBox.Icon.ERROR,
//                     title: "Error"
//                     });

//                 oEvent.getSource().getBinding("value").getModel("CreateModel").getData().ActDate = "";
//             }else{
//                 if(sValue === ""){
//                     oDP.setValueState(ValueState.Error);
//                     var sErrorReqActDate = that.getView().getModel("i18n").getProperty("sErrorReqActDate");
//                     oDP.setValueStateText(sErrorReqActDate);
//                 }else{
//                     if (bValid) {
//                         oDP.setValueState(ValueState.None);
//                         var Actdat = that.onChangeDateFormat(sValue);  
//                     } else {
//                         oDP.setValueState(ValueState.Error);
//                         var sErrorValidDate = that.getView().getModel("i18n").getProperty("sErrorValidDate");
//                         oDP.setValueStateText(sErrorValidDate);                     
//                     }
//                 }
              
//                 if(Plant !== "" && Shift !== "" && Actdat !== "" && Reason !== "" && BOL !== ""){
//                     that.BOLServiceCall(Shift,Plant,Actdat,Reason,BOL);
//                 }   
//             }                

//         },
//         onShiftChange:function(oEvent){
//             var that = this;
//             var oValidatedComboBox = oEvent.getSource(),
//             sSelectedKey = oValidatedComboBox.getSelectedKey(),
//             sValue = oValidatedComboBox.getValue();
        
//             var Plant = that.getView().getModel("CreateModel").getProperty("/Plant");     
//             var Actdat = that.onChangeDateFormat(that.getView().getModel("CreateModel").getProperty("/ActDate"));
//             var Reason = that.getView().getModel("CreateModel").getProperty("/Reason"); 
//             var BOL = that.getView().getModel("CreateModel").getProperty("/BOL");

//             if(Plant === ""){
//                 that.getView().byId("PlantId").setValueState("Error");
//                 var sErrorReqPlant = that.getView().getModel("i18n").getProperty("sErrorReqPlant");
//                 that.getView().byId("PlantId").setValueStateText(sErrorReqPlant);

//                 MessageBox.show(
//                     sErrorReqPlant, {
//                         icon: MessageBox.Icon.ERROR,
//                         title: "Error",
//                         actions: [MessageBox.Action.OK],
//                         onClose: function (oAction) {
//                             if (oAction === "OK") {
//                                 oValidatedComboBox.setValue();        
//                                 oValidatedComboBox.setSelectedKey(null);                         
//                             }
//                         }
//                     });  
//             }else{
//                 if (!sSelectedKey && sValue) {
//                     oValidatedComboBox.setValueState(ValueState.Error);
//                     var sErrorValidShift = that.getView().getModel("i18n").getProperty("sErrorValidShift");
//                     oValidatedComboBox.setValueStateText(sErrorValidShift);          
//                 }else if (!sSelectedKey && sValue === "") {
//                     oValidatedComboBox.setValueState(ValueState.Error);
//                     var sErrorReqShift = that.getView().getModel("i18n").getProperty("sErrorReqShift");
//                     oValidatedComboBox.setValueStateText(sErrorReqShift);                
//                 } else {
//                     oValidatedComboBox.setValueState(ValueState.None);
//                     var Shift = sValue;
//                 }
              
//                 if(Plant !== "" && Shift !== "" && Actdat !== "" && Reason !== "" && BOL !== ""){
//                     that.BOLServiceCall(Shift,Plant,Actdat,Reason,BOL);
//                 }   
//             }     
//         },
//         onReasonChange:function(oEvent){
//             var that = this;
//             var oValidatedComboBox = oEvent.getSource(),
//             sSelectedKey = oValidatedComboBox.getSelectedKey(),
//             sValue = oValidatedComboBox.getValue();          
   
//             var Plant = that.getView().getModel("CreateModel").getProperty("/Plant");
//             var Shift = that.getView().getModel("CreateModel").getProperty("/Shift");
//             var Actdat = that.onChangeDateFormat(that.getView().getModel("CreateModel").getProperty("/ActDate"));
//             var BOL = that.getView().getModel("CreateModel").getProperty("/BOL");

//             if(Plant === ""){
//                 that.getView().byId("PlantId").setValueState("Error");
//                 var sErrorReqPlant = that.getView().getModel("i18n").getProperty("sErrorReqPlant");
//                 that.getView().byId("PlantId").setValueStateText(sErrorReqPlant);

//                 MessageBox.show(
//                     sErrorReqPlant, {
//                         icon: MessageBox.Icon.ERROR,
//                         title: "Error",
//                         actions: [MessageBox.Action.OK],
//                         onClose: function (oAction) {
//                             if (oAction === "OK") {
//                                 oValidatedComboBox.setValue(); 
//                                 oValidatedComboBox.setSelectedKey(null);                                
//                             }
//                         }
//                     });          
//             }else if(Shift === ""){
//                 that.getView().byId("shiftId").setValueState("Error");
//                 var sErrorReqShift = that.getView().getModel("i18n").getProperty("sErrorReqShift");                
//                 that.getView().byId("shiftId").setValueStateText(sErrorReqShift);
           
//                 MessageBox.show(
//                     sErrorReqShift, {
//                         icon: MessageBox.Icon.ERROR,
//                         title: "Error",
//                         actions: [MessageBox.Action.OK],
//                         onClose: function (oAction) {
//                             if (oAction === "OK") {
//                                 oValidatedComboBox.setValue();            
//                                 oValidatedComboBox.setSelectedKey(null);                     
//                             }
//                         }
//                     });                                    
//             }else if(Actdat === ""){
//                 that.getView().byId("actDateId").setValueState("Error");
//                 var sErrorReqActDate = that.getView().getModel("i18n").getProperty("sErrorReqActDate"); 
//                 that.getView().byId("actDateId").setValueStateText(sErrorReqActDate);
                       
//                 MessageBox.show(
//                         sErrorReqActDate, {
//                             icon: MessageBox.Icon.ERROR,
//                             title: "Error",
//                             actions: [MessageBox.Action.OK],
//                             onClose: function (oAction) {
//                                 if (oAction === "OK") {
//                                     oValidatedComboBox.setValue();     
//                                     oValidatedComboBox.setSelectedKey(null);                                                                  
//                                 }
//                             }
//                         });   
                
//             }else{
//                 if (!sSelectedKey && sValue) {
//                     oValidatedComboBox.setValueState(ValueState.Error);
//                     var sErrorValidReason = that.getView().getModel("i18n").getProperty("sErrorValidReason"); 
//                     oValidatedComboBox.setValueStateText(sErrorValidReason);
//                 }else if (!sSelectedKey && sValue === "") {
//                     oValidatedComboBox.setValueState(ValueState.Error);
//                     var sErrorReqReason = that.getView().getModel("i18n").getProperty("sErrorReqReason"); 
//                     oValidatedComboBox.setValueStateText(sErrorReqReason);
//                 } else {
//                     oValidatedComboBox.setValueState(ValueState.None);
//                 }
//                 that.getView().byId("GlidId").setValueState(ValueState.None);
//                 that.getView().byId("ScacId").setValueState(ValueState.None);
//                 that.getView().byId("TrailerId").setValueState(ValueState.None);
//                 that.getView().byId("DateId").setValueState(ValueState.None);  
               
               
//                 if(Plant !== "" && Shift !== "" && Actdat !== "" && sSelectedKey !== ""){
//                     that.getView().getModel("BindingModel").setProperty("/FormVisible", false);
//                     that.getView().getModel("BindingModel").setProperty("/TableVisible", false);
    
//                     if(sSelectedKey === "01" || sSelectedKey === "02"){                                  
//                         that.getView().getModel("BindingModel").setProperty("/BOLEdit",true);
//                         that.getView().getModel("BindingModel").setProperty("/BOLRequired",true);
//                         that.getView().getModel("BindingModel").setProperty("/GlidEdit",true);
//                         that.getView().getModel("BindingModel").setProperty("/ScacEdit",true);
//                         that.getView().getModel("BindingModel").setProperty("/TrailerEdit",true);
//                         that.getView().getModel("BindingModel").setProperty("/DateEdit",true);
//                         if(BOL !== ""){
//                             that.BOLServiceCall(Shift,Plant,Actdat,sSelectedKey,BOL);
//                         }                   
//                     }else if(sSelectedKey === "03"){        
//                         that.getView().getModel("BindingModel").setProperty("/BOLEdit",true);
//                         that.getView().getModel("BindingModel").setProperty("/BOLRequired",true);
//                         that.getView().getModel("BindingModel").setProperty("/GlidEdit",false);
//                         that.getView().getModel("BindingModel").setProperty("/ScacEdit",false);
//                         that.getView().getModel("BindingModel").setProperty("/TrailerEdit",false);
//                         that.getView().getModel("BindingModel").setProperty("/DateEdit",false);
//                         if(BOL !== ""){
//                             that.BOLServiceCall(Shift,Plant,Actdat,sSelectedKey,BOL);
//                         }
//                     }else if(sSelectedKey === "04" || sSelectedKey === "05"){
//                         that.getView().getModel("BindingModel").setProperty("/BOLEdit",false);
//                         that.getView().getModel("BindingModel").setProperty("/BOLRequired",false);
//                         that.getView().getModel("BindingModel").setProperty("/GlidEdit",true);
//                         that.getView().getModel("BindingModel").setProperty("/ScacEdit",true);
//                         that.getView().getModel("BindingModel").setProperty("/TrailerEdit",true);
//                         that.getView().getModel("BindingModel").setProperty("/DateEdit",true);
//                         var Items = [];
//                         var obj1 = {
//                             "No": "10",
//                             "Reason": "03",
//                             "ItemNo": 0,
//                             "OldBatch": "",
//                             "OldMaterial": "",
//                             "OldQuantity": "",
//                             "NewBatch": "",
//                             "NewMaterial": "",
//                             "NewQuantity": "",
//                             "Comments":"",
//                             "ReasonEdit": false,
//                             "NewBatchEdit": true,
//                             "NewMaterialEdit": true,
//                             "NewQuantityEdit": true,
//                             "CommentsEdit":true,
//                             "DeleteButton":false
//                         };               

//                         Items.push(obj1);              

//                         var obj = that.getView().getModel("CreateModel").getData();
//                         obj.BOL = "";
//                         obj.OldGlid = "";
//                         obj.OldScac = "";
//                         obj.OldTrailer = "";
//                         obj.OldDate = "";
//                         obj.NewGlid = "";
//                         obj.NewScac = "";
//                         obj.NewTrailer = "";
//                         obj.NewDate = "";
//                         obj.Items = Items;


//                         var oCreateModel = new JSONModel(obj);
//                         that.getView().setModel(oCreateModel, "CreateModel");

//                         that.getView().getModel("BindingModel").setProperty("/FormVisible", true);
//                         that.getView().getModel("BindingModel").setProperty("/TableVisible", true);
                    
//                     }
 
//                     }
                   
//                 }   
 
//         },

         
//         onBOLChange:function(oEvent){
//             var that = this;
//             var ChepRef = oEvent.getParameter("value");
//             var Plant = that.getView().getModel("CreateModel").getProperty("/Plant");
//             var Shift = that.getView().getModel("CreateModel").getProperty("/Shift");
//             var Actdat = that.onChangeDateFormat(that.getView().getModel("CreateModel").getProperty("/ActDate"));
//             var Reason = that.getView().getModel("CreateModel").getProperty("/Reason");
           
//                 if(ChepRef.length === 10){
//                     that.getView().byId("BOLId").setValueState("None");
//                     if(Plant !== "" && Shift !== "" && Actdat !== "" && Reason !== "" && ChepRef !== ""){
//                         that.BOLServiceCall(Shift,Plant,Actdat,Reason,ChepRef);
//                     }                    
    
//                 }else{
//                     that.getView().byId("BOLId").setValueState("Error");
//                     var sErrorBolDigits = that.getView().getModel("i18n").getProperty("sErrorBolDigits");
//                     that.getView().byId("BOLId").setValueStateText(sErrorBolDigits);
//                     var sErrorValidBol = that.getView().getModel("i18n").getProperty("sErrorValidBol");
//                     sap.m.MessageBox.show(
//                         sErrorValidBol, {
//                             icon: sap.m.MessageBox.Icon.ERROR,
//                             title: "Error"
//                         });  
//                     that.getView().getModel("BindingModel").setProperty("/FormVisible", false);
//                     that.getView().getModel("BindingModel").setProperty("/TableVisible", false);

//                 }
         
//         },
//         onBOLLiveChange:function(oEvent){
//             var that = this;
//             var ChepRef = oEvent.getParameters("newvalue").newValue;
//             var Plant = that.getView().getModel("CreateModel").getProperty("/Plant");
//             var Shift = that.getView().getModel("CreateModel").getProperty("/Shift");
//             var Actdat = that.onChangeDateFormat(that.getView().getModel("CreateModel").getProperty("/ActDate"));
//             var Reason = that.getView().getModel("CreateModel").getProperty("/Reason");
//             var errorMsg = "";
            
//             if(Shift === ""){
//                 that.getView().byId("shiftId").setValueState("Error");
//                 var sErrorReqShift = that.getView().getModel("i18n").getProperty("sErrorReqShift");
//                 that.getView().byId("shiftId").setValueStateText(sErrorReqShift);
//                 errorMsg = sErrorReqShift;            
//                 that.getView().byId("BOLId").setValue("");              
//             }else if(Actdat === ""){
//                 that.getView().byId("actDateId").setValueState("Error");
//                 var sErrorReqActDate = that.getView().getModel("i18n").getProperty("sErrorReqActDate");
//                 that.getView().byId("actDateId").setValueStateText(sErrorReqActDate);
//                 errorMsg = sErrorReqActDate;  
//                 that.getView().byId("BOLId").setValue("");                    
//             }else if(Reason === ""){
//                 that.getView().byId("ReasonId").setValueState("Error");
//                 var sErrorReqReason = that.getView().getModel("i18n").getProperty("sErrorReqReason");
//                 that.getView().byId("ReasonId").setValueStateText(sErrorReqReason);
//                 errorMsg = sErrorReqReason;    
//                 that.getView().byId("BOLId").setValue("");                   
//             }

//             if(errorMsg === ""){
//                 if (ChepRef.length > 10) {
//                     var deliverynum = ChepRef.substring(0, ChepRef.length - 1);
//                     this.getView().byId("BOLId").setValue(deliverynum);
//                 }else{
//                     if(ChepRef.length === 10){
//                         that.getView().byId("BOLId").setValueState("None");
//                     }else{
//                         that.getView().byId("BOLId").setValueState("Error");
//                         var sErrorBolDigits = that.getView().getModel("i18n").getProperty("sErrorBolDigits");
//                         that.getView().byId("BOLId").setValueStateText(sErrorBolDigits);          
//                     }
//                 }
//             }else{
//                 sap.m.MessageBox.show(
//                 errorMsg, {
//                     icon: sap.m.MessageBox.Icon.ERROR,
//                     title: "Error"
//                 });                            
//             }

            
//         },
//         BOLServiceCall:function(Shift,Plant,Actdat,Reason,ChepRef){
//             var that = this;
//             var oFilter = [];
//             var filter1 = new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, Plant);                    
//             var filter2 = new sap.ui.model.Filter("Chepref", sap.ui.model.FilterOperator.EQ, ChepRef);
//             var filter3 = new sap.ui.model.Filter("Actdat", sap.ui.model.FilterOperator.EQ, Actdat);
//             var filter4 = new sap.ui.model.Filter("Reason", sap.ui.model.FilterOperator.EQ, Reason);
           
//             oFilter.push(filter1);
//             oFilter.push(filter2);
//             oFilter.push(filter3);
//             oFilter.push(filter4);

//             var Reason = that.getView().getModel("CreateModel").getProperty("/Reason");
         

//             that.fnCreateBusyDialog("pallet.svg", "true");

//             that.getOwnerComponent().getModel("BOLModel").read("/BolOverviewSet", {
//                 filters: oFilter,			
//                 urlParameters: {
//                     "$expand": "BolItemMasterSet"                    
//                 },
//                 success: function (oData, oResponse) {

//                     if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {                                   
                       
//                             if(oData.results.length > 0){
//                             that.getView().getModel("BindingModel").setProperty("/FormVisible", true);
//                             that.getView().getModel("BindingModel").setProperty("/TableVisible", true);
//                             var ItemsArray= [];
//                             var BolItemMasterSet = oData.results[0].BolItemMasterSet.results;
//                             if(BolItemMasterSet.length > 0){
//                                 for (var i = 0; i < BolItemMasterSet.length; i++) {
//                                    var obj = {
//                                         "No": BolItemMasterSet[i].Posnr,
//                                         "Reason": BolItemMasterSet[i].Reason,
//                                         "ItemNo": BolItemMasterSet[i].PosnrVa,
//                                         "OldBatch": BolItemMasterSet[i].Charg,
//                                         "OldMaterial": BolItemMasterSet[i].Matnr,
//                                         "OldQuantity": that.onParse(BolItemMasterSet[i].Quantity),
//                                         "NewBatch": BolItemMasterSet[i].Xcharg,
//                                         "NewMaterial": BolItemMasterSet[i].Xmatnr,
//                                         "NewQuantity": that.onParse(BolItemMasterSet[i].Xquantity),
//                                         "Comments":BolItemMasterSet[i].Comments,
//                                         "ReasonEdit": false,
//                                         "NewBatchEdit": false,
//                                         "NewMaterialEdit": false,
//                                         "NewQuantityEdit": false,
//                                         "CommentsEdit":false,
//                                         "DeleteButton":false
//                                     };  

//                                     if(Reason !== "03"){                                    
//                                         if(BolItemMasterSet[i].Reason === "01"){
//                                             obj.ReasonEdit = false,
//                                             obj.NewBatchEdit = false,
//                                             obj.NewMaterialEdit =  false,
//                                             obj.NewQuantityEdit = true,
//                                             obj.CommentsEdit = true
//                                         }else if(BolItemMasterSet[i].Reason === "02"){
//                                             obj.ReasonEdit = false,
//                                             obj.NewBatchEdit = true,
//                                             obj.NewMaterialEdit =  true,
//                                             obj.NewQuantityEdit = false,
//                                             obj.CommentsEdit = true
//                                         }else if(BolItemMasterSet[i].Reason === "03"){
//                                             obj.ReasonEdit = false,
//                                             obj.NewBatchEdit = true,
//                                             obj.NewMaterialEdit =  true,
//                                             obj.NewQuantityEdit = true,
//                                             obj.CommentsEdit = true
//                                         }else{
//                                             obj.ReasonEdit = true,
//                                             obj.NewBatchEdit = false,
//                                             obj.NewMaterialEdit =  false,
//                                             obj.NewQuantityEdit = false,
//                                             obj.CommentsEdit = true
//                                         }
//                                     }else{
//                                         obj.ReasonEdit = false,
//                                         obj.NewBatchEdit = false,
//                                         obj.NewMaterialEdit =  false,
//                                         obj.NewQuantityEdit = false,
//                                         obj.CommentsEdit = true
//                                     }                                    

//                                     ItemsArray.push(obj);                                 
//                                 }
//                             }
//                             var obj = that.getView().getModel("CreateModel").getData();
//                             obj.OldGlid = oData.results[0].Kunnr;
//                             obj.OldScac = oData.results[0].Bolnr;
//                             obj.OldTrailer = oData.results[0].Xabln;
//                             obj.OldDate = that.onDateChange(oData.results[0].Lfdat);
//                             obj.NewGlid = oData.results[0].KunnrN;
//                             obj.NewScac = oData.results[0].BolnrN;
//                             obj.NewTrailer = oData.results[0].XablnN;
//                             obj.NewDate = that.onDateChange(oData.results[0].LfdatN);
//                             obj.Items = ItemsArray;

//                             var oCreateModel = new JSONModel(obj);
//                             that.getView().setModel(oCreateModel, "CreateModel");
                            
//                                 if(Reason === "01" || Reason === "02"){  
//                                     that.getView().getModel("BindingModel").setProperty("/BOLEdit",true);                              
//                                     that.getView().getModel("BindingModel").setProperty("/GlidEdit",true);
//                                     that.getView().getModel("BindingModel").setProperty("/ScacEdit",true);
//                                     that.getView().getModel("BindingModel").setProperty("/TrailerEdit",true);
//                                     that.getView().getModel("BindingModel").setProperty("/DateEdit",true);
//                                     that.getView().getModel("BindingModel").setProperty("/AddButton", true);
//                                 }else if(Reason === "03"){   
//                                     that.getView().getModel("BindingModel").setProperty("/BOLEdit",true);                        
//                                     that.getView().getModel("BindingModel").setProperty("/GlidEdit",false);
//                                     that.getView().getModel("BindingModel").setProperty("/ScacEdit",false);
//                                     that.getView().getModel("BindingModel").setProperty("/TrailerEdit",false);
//                                     that.getView().getModel("BindingModel").setProperty("/DateEdit",false);
//                                     that.getView().getModel("BindingModel").setProperty("/AddButton", false);
//                                 }else if(Reason === "04" || Reason === "05"){        
//                                     that.getView().getModel("BindingModel").setProperty("/BOLEdit",false);                   
//                                     that.getView().getModel("BindingModel").setProperty("/GlidEdit",true);
//                                     that.getView().getModel("BindingModel").setProperty("/ScacEdit",true);
//                                     that.getView().getModel("BindingModel").setProperty("/TrailerEdit",true);
//                                     that.getView().getModel("BindingModel").setProperty("/DateEdit",true);
//                                     that.getView().getModel("BindingModel").setProperty("/AddButton", true);
//                                 }

//                             }else{                                
//                                 var sErrorBOLNotFound = that.getView().getModel("i18n").getProperty("sErrorBOLNotFound");
//                                 sap.m.MessageBox.show(
//                                     sErrorBOLNotFound, {
//                                         icon: sap.m.MessageBox.Icon.ERROR,
//                                         title: "Error"
//                                     });
//                             } 
//                             that.fnCreateBusyDialog("pallet.svg", "false");                          

//                     }     
//                 },
//                 error: function (oError) {
                
//                     that.fnCreateBusyDialog("pallet.svg", "false");

//                     var obj = that.getView().getModel("CreateModel").getData();
//                     obj.BOL = "";
//                     obj.OldGlid = "";
//                     obj.OldScac = "";
//                     obj.OldTrailer = "";
//                     obj.OldDate = "";
//                     obj.NewGlid = "";
//                     obj.NewScac = "";
//                     obj.NewTrailer = "";
//                     obj.NewDate = "";
//                     obj.Items = [];


//                     var oCreateModel = new JSONModel(obj);
//                     that.getView().setModel(oCreateModel, "CreateModel");

//                     that.getView().getModel("BindingModel").setProperty("/FormVisible", false);
//                     that.getView().getModel("BindingModel").setProperty("/TableVisible", false);

//                     var oMessage;               
//                     if (oMessage === undefined) {                       
//                         oMessage = JSON.parse(oError.responseText).error.message.value;                     
//                     }
//                     sap.m.MessageBox.show(
//                         oMessage, {
//                             icon: sap.m.MessageBox.Icon.ERROR,
//                             title: "Error"
//                         });
               
//                 }
//             });
//         },

//         onBatchSubmit:function(oEvent){ 
//            var that = this;   
//            var oIP =   oEvent.getSource();       
//            var SelObj =  oIP.getBindingContext("CreateModel").getObject();
//            if(SelObj.OldBatch === SelObj.NewBatch){
//             oIP.setValueState(ValueState.Error);
//             var sErrorDiffBatch = that.getView().getModel("i18n").getProperty("sErrorDiffBatch");
//             oIP.setValueStateText(sErrorDiffBatch);

//             sap.m.MessageBox.show(
//                 sErrorDiffBatch, {
//                     icon: sap.m.MessageBox.Icon.ERROR,
//                     title: "Error"
//                 });   
//            }else{
//             oIP.setValueState(ValueState.None);  
//            }

//         },
//         onMaterialSubmit:function(oEvent){  
//            var that = this; 
//            var oIP =   oEvent.getSource();       
//            var SelObj =  oIP.getBindingContext("CreateModel").getObject();
//            if(SelObj.OldMaterial === SelObj.NewMaterial){
//             oIP.setValueState(ValueState.Error);
//             var sErrorDiffMaterial = that.getView().getModel("i18n").getProperty("sErrorDiffMaterial");
//             oIP.setValueStateText(sErrorDiffMaterial);

//             sap.m.MessageBox.show(
//                 sErrorDiffMaterial, {
//                     icon: sap.m.MessageBox.Icon.ERROR,
//                     title: "Error"
//                 });   
//            }else{
//             oIP.setValueState(ValueState.None);  
//            }

//         },
//         onQuantitySubmit:function(oEvent){  
//             var that = this;  
//             var oIP =   oEvent.getSource();       
//             var SelObj =  oIP.getBindingContext("CreateModel").getObject();
//             if(SelObj.OldQuantity === SelObj.NewQuantity){
//             oIP.setValueState(ValueState.Error);
//             var sErrorDiffQuantity = that.getView().getModel("i18n").getProperty("sErrorDiffQuantity");            
//             oIP.setValueStateText(sErrorDiffQuantity);

//             sap.m.MessageBox.show(
//                 sErrorDiffQuantity, {
//                     icon: sap.m.MessageBox.Icon.ERROR,
//                     title: "Error"
//                 });   
//            }else{
//             oIP.setValueState(ValueState.None);  
//            }

//         },

//         onValidationCheck:function(FlagCheck){           
//             var that = this;
//             var errorMsg = "",GlidMsg="",ScacMsg="",TrailerMsg="",DateMsg="";
//             var Flag = false,HeaderFlag = false;
//             var Shift = that.getView().getModel("CreateModel").getProperty("/Shift");
//             var Actdat = that.onChangeDateFormat(that.getView().getModel("CreateModel").getProperty("/ActDate"));
//             var Reason = that.getView().getModel("CreateModel").getProperty("/Reason");
//             var Chepref = that.getView().getModel("CreateModel").getProperty("/BOL");

//             var Glid = that.getView().getModel("CreateModel").getProperty("/OldGlid");
//             var Scac = that.getView().getModel("CreateModel").getProperty("/OldScac");
//             var Trailer = that.getView().getModel("CreateModel").getProperty("/OldTrailer");
//             var oldDate = that.onChangeDateFormat(that.getView().getModel("CreateModel").getProperty("/OldDate"));

//             var GlidN = that.getView().getModel("CreateModel").getProperty("/NewGlid");
//             var ScacN = that.getView().getModel("CreateModel").getProperty("/NewScac");
//             var TrailerN = that.getView().getModel("CreateModel").getProperty("/NewTrailer");
//             var DateN = that.onChangeDateFormat(that.getView().getModel("CreateModel").getProperty("/NewDate"));

           
//             if(Shift === ""){
//                 var sErrorReqShift = that.getView().getModel("i18n").getProperty("sErrorReqShift");
//                 errorMsg = sErrorReqShift;  

//                 sap.m.MessageBox.show(
//                     errorMsg, {
//                         icon: sap.m.MessageBox.Icon.ERROR,
//                         title: "Error"
//                     }); 

//                 Flag = false;
//                 return Flag;                  
//             }else if(Actdat === ""){
//                 var sErrorReqActDate = that.getView().getModel("i18n").getProperty("sErrorReqActDate");
//                 errorMsg = sErrorReqActDate;  
       
//                 sap.m.MessageBox.show(
//                     errorMsg, {
//                         icon: sap.m.MessageBox.Icon.ERROR,
//                         title: "Error"
//                     });

//                 Flag = false;
//                 return Flag;               
//             }else if(Reason === ""){
//                 var sErrorReqReason = that.getView().getModel("i18n").getProperty("sErrorReqReason");
//                 errorMsg = sErrorReqReason;  

//                 sap.m.MessageBox.show(
//                     errorMsg, {
//                         icon: sap.m.MessageBox.Icon.ERROR,
//                         title: "Error"
//                     });

//                 Flag = false;
//                 return Flag;                  
//             }else if((Chepref === "" || Chepref.length < 10) &&(Reason !== "04" && Reason !== "05")){  
//                 if(Chepref === ""){
//                     var sErrorBOLNotSaved = that.getView().getModel("i18n").getProperty("sErrorBOLNotSaved");
//                     errorMsg = sErrorBOLNotSaved;  
//                 }  else if(Chepref.length < 10){
//                     var sErrorValidBol = that.getView().getModel("i18n").getProperty("sErrorValidBol");
//                     errorMsg = sErrorValidBol;  
//                 }         
              
//                 sap.m.MessageBox.show(
//                     errorMsg, {
//                         icon: sap.m.MessageBox.Icon.ERROR,
//                         title: "Error"
//                     });  

//                 Flag = false;
//                 return Flag;        
//             }else{

                
//                 if(Reason === "01" || Reason === "02"){
                
//                     if(GlidN !== "" || ScacN !== "" || TrailerN !== "" || DateN !== ""){      
//                         if(GlidN !== ""){
//                             if(Glid !== GlidN){
//                                 GlidMsg = "";
//                             }else{
//                                 var sErrorDiffGlid = that.getView().getModel("i18n").getProperty("sErrorDiffGlid");
//                                 GlidMsg = sErrorDiffGlid;
//                             }
//                         }

//                         if(ScacN !== ""){
//                             if(Scac !== ScacN){
//                                 ScacMsg = "";
//                             }else{
//                                 var sErrorDiffScac = that.getView().getModel("i18n").getProperty("sErrorDiffScac");
//                                 ScacMsg = sErrorDiffScac; 
//                             }
//                         }

//                         if(TrailerN !== ""){
//                             if(Trailer !== TrailerN){
//                                 TrailerMsg = "";
//                             }else{
//                                 var sErrorDiffTrailer = that.getView().getModel("i18n").getProperty("sErrorDiffTrailer");
//                                 TrailerMsg = sErrorDiffTrailer; 
//                             }
//                         }

//                         if(DateN !== ""){
//                             if(oldDate !== DateN){
//                                 DateMsg = "";
//                             }else{
//                                 var sErrorDiffDate = that.getView().getModel("i18n").getProperty("sErrorDiffDate");
//                                 DateMsg = sErrorDiffDate; 
//                             }
//                         }


//                         if(GlidMsg !== "" || ScacMsg !== "" || TrailerMsg !== "" || DateMsg !== ""){
//                             if(GlidMsg !== ""){
//                                 errorMsg =  that.getView().getModel("i18n").getProperty("sErrorDiffGlid");                        
//                                 that.getView().byId("GlidId").setValueState(ValueState.Error);
//                                 that.getView().byId("GlidId").setValueStateText(errorMsg);
//                             }else{
//                                 if(ScacMsg !== ""){
//                                     errorMsg =  that.getView().getModel("i18n").getProperty("sErrorDiffScac");      
//                                     that.getView().byId("ScacId").setValueState(ValueState.Error);
//                                     that.getView().byId("ScacId").setValueStateText(errorMsg); 
//                                 }else{
//                                     if(TrailerMsg !== ""){
//                                         errorMsg =  that.getView().getModel("i18n").getProperty("sErrorDiffTrailer");   
//                                         that.getView().byId("TrailerId").setValueState(ValueState.Error);
//                                         that.getView().byId("TrailerId").setValueStateText(errorMsg);
//                                     }else{
//                                         if(DateMsg !== ""){
//                                             errorMsg =  that.getView().getModel("i18n").getProperty("sErrorDiffDate");   
//                                             that.getView().byId("DateId").setValueState(ValueState.Error);
//                                             that.getView().byId("DateId").setValueStateText(errorMsg);
//                                         }else{
//                                             errorMsg = "";
//                                             that.getView().byId("GlidId").setValueState(ValueState.None);
//                                             that.getView().byId("ScacId").setValueState(ValueState.None);
//                                             that.getView().byId("TrailerId").setValueState(ValueState.None);
//                                             that.getView().byId("DateId").setValueState(ValueState.None);                                     
//                                         }
//                                     }
//                                 }
//                             }
//                         }else{
//                             HeaderFlag = true;  
//                         }
   
//                     }else{          
//                         HeaderFlag = true;                                                         
//                     }

//                     if(HeaderFlag === true){  
//                     var Items = that.byId("TableId").getItems();
//                     var errorMsg = "";
//                     if (Items.length > 0) {                       
//                             for(var i=0;i<Items.length;i++){                      
//                                 if (Items[i].getCells()[1].getSelectedKey() === "01") {
//                                     if(Items[i].getCells()[8].getValue() === ""){
//                                         Items[i].getCells()[8].setValueState("Error");                                      
//                                         var sErrorReqQuantity01 = that.getView().getModel("i18n").getProperty("sErrorReqQuantity01");
//                                         Items[i].getCells()[8].setValueStateText(sErrorReqQuantity01);                                                                                                    
//                                         errorMsg = sErrorReqQuantity01;     
//                                         break;                       
//                                     }else{
//                                         if(Items[i].getCells()[5].getText() === Items[i].getCells()[8].getValue()){
//                                             Items[i].getCells()[8].setValueState("Error");
//                                             var sErrorDiffQuantity = that.getView().getModel("i18n").getProperty("sErrorDiffQuantity");
//                                             Items[i].getCells()[8].setValueStateText(sErrorDiffQuantity);                                                                                                     
//                                             errorMsg = sErrorDiffQuantity; 
//                                             break;                         
//                                         }else{
//                                             Items[i].getCells()[8].setValueState("None");
//                                         }                           
//                                     }
//                                 }else if (Items[i].getCells()[1].getSelectedKey() === "02") {
//                                     var BatchFlag = false;
//                                     if(Items[i].getCells()[6].getValue() === "" && Items[i].getCells()[7].getValue() === ""){
//                                         Items[i].getCells()[6].setValueState("Error");
//                                         Items[i].getCells()[7].setValueState("Error");
//                                         var sErrorReqBatchMat02 = that.getView().getModel("i18n").getProperty("sErrorReqBatchMat02");                                     
//                                         Items[i].getCells()[6].setValueStateText(sErrorReqBatchMat02); 
//                                         Items[i].getCells()[7].setValueStateText(sErrorReqBatchMat02);                                   
//                                         errorMsg = sErrorReqBatchMat02;
//                                         break;
//                                     }else if(Items[i].getCells()[6].getValue() !== "" && Items[i].getCells()[7].getValue() === ""){
//                                         if(Items[i].getCells()[3].getText() === Items[i].getCells()[6].getValue()){
//                                             Items[i].getCells()[6].setValueState("Error");
//                                             var sErrorDiffBatch = that.getView().getModel("i18n").getProperty("sErrorDiffBatch");                                      
//                                             Items[i].getCells()[6].setValueStateText(sErrorDiffBatch);                                     
//                                             errorMsg = sErrorDiffBatch; 
//                                             break;                          
//                                         }else{
//                                             Items[i].getCells()[6].setValueState("None");
//                                             Items[i].getCells()[7].setValueState("None");
//                                             BatchFlag = true;
//                                         }    
//                                     }else if(Items[i].getCells()[6].getValue() === "" && Items[i].getCells()[7].getValue() !== ""){
//                                         if(Items[i].getCells()[4].getText() === Items[i].getCells()[7].getValue()){
//                                             Items[i].getCells()[7].setValueState("Error");
//                                             var sErrorDiffMaterial = that.getView().getModel("i18n").getProperty("sErrorDiffMaterial");                                         
//                                             Items[i].getCells()[7].setValueStateText(sErrorDiffMaterial);                                      
//                                             errorMsg = sErrorDiffMaterial; 
//                                             break;                          
//                                         }else{
//                                             Items[i].getCells()[7].setValueState("None");
//                                             Items[i].getCells()[6].setValueState("None");
//                                             BatchFlag = true;
//                                         }     
//                                     }else if(Items[i].getCells()[6].getValue() !== "" && Items[i].getCells()[7].getValue() !== ""){
//                                         if(Items[i].getCells()[3].getText() === Items[i].getCells()[6].getValue()){
//                                             Items[i].getCells()[6].setValueState("Error");
//                                             var sErrorDiffBatch = that.getView().getModel("i18n").getProperty("sErrorDiffBatch");                                          
//                                             Items[i].getCells()[6].setValueStateText(sErrorDiffBatch);                                       
//                                             errorMsg = sErrorDiffBatch; 
//                                             break;                         
//                                         }else if(Items[i].getCells()[4].getText() === Items[i].getCells()[7].getValue()){
//                                             Items[i].getCells()[7].setValueState("Error");
//                                             var sErrorDiffMaterial = that.getView().getModel("i18n").getProperty("sErrorDiffMaterial");                                          
//                                             Items[i].getCells()[7].setValueStateText(sErrorDiffMaterial);                                       
//                                             errorMsg = sErrorDiffMaterial; 
//                                             break;                          
//                                         }else{
//                                         Items[i].getCells()[6].setValueState("None");
//                                         Items[i].getCells()[7].setValueState("None");
//                                         BatchFlag = true;
//                                         } 
//                                     }
                                  
//                                 }else if (Items[i].getCells()[1].getSelectedKey() === "03") {
//                                     var BatchFlag = false;
//                                     if(Items[i].getCells()[6].getValue() === ""){
//                                         Items[i].getCells()[6].setValueState("Error");
//                                         var sErrorReqBatch03 =  that.getView().getModel("i18n").getProperty("sErrorReqBatch03");                                
//                                         Items[i].getCells()[6].setValueStateText(sErrorReqBatch03);                                    
//                                         errorMsg = sErrorReqBatch03; 
//                                         break;                                                      
//                                     }else{
//                                         if(Items[i].getCells()[3].getText() === Items[i].getCells()[6].getValue()){
//                                             Items[i].getCells()[6].setValueState("Error");
//                                             var sErrorDiffBatch =  that.getView().getModel("i18n").getProperty("sErrorDiffBatch");                                            
//                                             Items[i].getCells()[6].setValueStateText(sErrorDiffBatch);                                   
//                                             errorMsg = sErrorDiffBatch;
//                                             break;  
//                                            }else{
//                                             Items[i].getCells()[6].setValueState("None");
//                                             BatchFlag = true;
//                                         }                               
//                                     }
    
//                                     if(BatchFlag === true){
//                                         var MaterialFlag = false;
//                                         if(Items[i].getCells()[7].getValue() === ""){
//                                             Items[i].getCells()[7].setValueState("Error");
//                                             var sErrorReqMaterial03 =  that.getView().getModel("i18n").getProperty("sErrorReqMaterial03");                                           
//                                             Items[i].getCells()[7].setValueStateText(sErrorReqMaterial03);                                  
//                                             errorMsg = sErrorReqMaterial03;  
//                                             break;                        
//                                         }else{
//                                             if(Items[i].getCells()[4].getText() === Items[i].getCells()[7].getValue()){
//                                                 Items[i].getCells()[7].setValueState("Error");
//                                                 var sErrorDiffMaterial =  that.getView().getModel("i18n").getProperty("sErrorDiffMaterial");                                   
//                                                 Items[i].getCells()[7].setValueStateText(sErrorDiffMaterial);                                      
//                                                 errorMsg = sErrorDiffMaterial;
//                                                 break;                           
//                                             }else{
//                                                 Items[i].getCells()[7].setValueState("None");
//                                                 MaterialFlag = true;
//                                             }                             
//                                         }
//                                     }
//                                     if(BatchFlag === true && MaterialFlag === true){
//                                         if(Items[i].getCells()[8].getValue() === ""){
//                                             Items[i].getCells()[8].setValueState("Error");
//                                             var sErrorReqQuantity03 =  that.getView().getModel("i18n").getProperty("sErrorReqQuantity03");                               
//                                             Items[i].getCells()[8].setValueStateText(sErrorReqQuantity03);                                       
//                                             errorMsg = sErrorReqQuantity03; 
//                                             break;                     
//                                         }else{
//                                             if(Items[i].getCells()[5].getText() === Items[i].getCells()[8].getValue()){
//                                                 Items[i].getCells()[8].setValueState("Error");
//                                                 var sErrorDiffQuantity =  that.getView().getModel("i18n").getProperty("sErrorDiffQuantity");                                         
//                                                 Items[i].getCells()[8].setValueStateText(sErrorDiffQuantity);                                                   
//                                                 errorMsg = sErrorDiffQuantity;   
//                                                 break;                   
//                                             }else{
//                                                 Items[i].getCells()[8].setValueState("None");                                            
//                                             }                                   
//                                         }
//                                     }                               
                                   
//                                 }  
//                             }                                    					
//                     } 
//                     if(errorMsg !== ""){
//                         sap.m.MessageBox.show(
//                             errorMsg, {
//                                 icon: sap.m.MessageBox.Icon.ERROR,
//                                 title: "Error"
//                             }); 

//                             Flag = false;
//                             return Flag;
//                     }else{
//                         Flag = true;
//                         return Flag;
//                     }         
//                 }else{
//                     sap.m.MessageBox.show(
//                         errorMsg, {
//                             icon: sap.m.MessageBox.Icon.ERROR,
//                             title: "Error"
//                         });       
//                         return false; 
//                 }

//                 } //end          

//                 if(Reason === "03"){
//                     Flag = true;
//                     return Flag;
//                 } //end 

//                 if(Reason === "04" || Reason === "05"){
//                     if(GlidN === ""){
//                         var sErrorReqCustomer =  that.getView().getModel("i18n").getProperty("sErrorReqCustomer");  
//                         errorMsg = sErrorReqCustomer + Reason;    
//                         that.getView().byId("GlidId").setValueState(ValueState.Error);
//                         that.getView().byId("GlidId").setValueStateText(errorMsg);
//                         sap.m.MessageBox.show(
//                             errorMsg, {
//                                 icon: sap.m.MessageBox.Icon.ERROR,
//                                 title: "Error"
//                             });                         
//                     }else if(DateN === ""){
//                         errorMsg =  that.getView().getModel("i18n").getProperty("sErrorReqPostingDate");                  
//                         that.getView().byId("DateId").setValueState(ValueState.Error);
//                         that.getView().byId("DateId").setValueStateText(errorMsg);
//                         sap.m.MessageBox.show(
//                             errorMsg, {
//                                 icon: sap.m.MessageBox.Icon.ERROR,
//                                 title: "Error"
//                             });                       
//                     }else{
//                         var Items = that.byId("TableId").getItems();
//                         var errorMsg = "";
//                         if (Items.length > 0) {                       
//                                 for(var i=0;i<Items.length;i++){
//                                     if (Items[i].getCells()[1].getSelectedKey() === "") {
//                                         Items[i].getCells()[1].setValueState("Error");                                
//                                         var sErrorReqLineItems =  that.getView().getModel("i18n").getProperty("sErrorReqLineItems"); 
//                                         Items[i].getCells()[1].setValueStateText(sErrorReqLineItems);                                    
//                                         errorMsg = sErrorReqLineItems;
//                                         break;                                     
//                                     }else if (Items[i].getCells()[1].getSelectedKey() === "01") {
//                                         if(Items[i].getCells()[8].getValue() === ""){
//                                             Items[i].getCells()[8].setValueState("Error");
//                                             var sErrorReqQuantity01 =  that.getView().getModel("i18n").getProperty("sErrorReqQuantity01");                                         
//                                             Items[i].getCells()[8].setValueStateText(sErrorReqQuantity01);                                
//                                             errorMsg = sErrorReqQuantity01;     
//                                             break;                       
//                                         }else{
//                                             if(Items[i].getCells()[5].getText() === Items[i].getCells()[8].getValue()){
//                                                 Items[i].getCells()[8].setValueState("Error");
//                                                 var sErrorDiffQuantity =  that.getView().getModel("i18n").getProperty("sErrorDiffQuantity");                                                
//                                                 Items[i].getCells()[8].setValueStateText(sErrorDiffQuantity);                                    
//                                                 errorMsg = sErrorDiffQuantity; 
//                                                 break;                         
//                                             }else{
//                                                 Items[i].getCells()[8].setValueState("None");
//                                             }                           
//                                         }
//                                     }else if (Items[i].getCells()[1].getSelectedKey() === "02") {
//                                         var BatchFlag = false;
//                                         if(Items[i].getCells()[6].getValue() === ""){
//                                             Items[i].getCells()[6].setValueState("Error");
//                                             var sErrorReqBatch02 =  that.getView().getModel("i18n").getProperty("sErrorReqBatch02");  
//                                             Items[i].getCells()[6].setValueStateText(sErrorReqBatch02);                                   
//                                             errorMsg = sErrorReqBatch02;  
//                                             break;                       
//                                         }else{
//                                             if(Items[i].getCells()[3].getText() === Items[i].getCells()[6].getValue()){
//                                                 Items[i].getCells()[6].setValueState("Error");
//                                                 var sErrorDiffBatch =  that.getView().getModel("i18n").getProperty("sErrorDiffBatch");  
//                                                 Items[i].getCells()[6].setValueStateText(sErrorDiffBatch);                                          
//                                                 errorMsg = sErrorDiffBatch; 
//                                                 break;                          
//                                             }else{
//                                                 Items[i].getCells()[6].setValueState("None");
//                                                 BatchFlag = true;
//                                             }                               
//                                         }
//                                         if(BatchFlag === true){
//                                             if(Items[i].getCells()[7].getValue() === ""){
//                                                 Items[i].getCells()[7].setValueState("Error");
//                                                 var sErrorReqMaterial02 =  that.getView().getModel("i18n").getProperty("sErrorReqMaterial02");  
//                                                 Items[i].getCells()[7].setValueStateText(sErrorReqMaterial02);                                   
//                                                 errorMsg = sErrorReqMaterial02;     
//                                                 break;                       
//                                             }else{
//                                                 if(Items[i].getCells()[4].getText() === Items[i].getCells()[7].getValue()){
//                                                     Items[i].getCells()[7].setValueState("Error");
//                                                     var sErrorDiffMaterial =  that.getView().getModel("i18n").getProperty("sErrorDiffMaterial");  
//                                                     Items[i].getCells()[7].setValueStateText(sErrorDiffMaterial);                                   
//                                                     errorMsg = sErrorDiffMaterial; 
//                                                     break;                          
//                                                 }else{
//                                                     Items[i].getCells()[7].setValueState("None");
//                                                 }                             
//                                             }
//                                         }
                                      
//                                     }else if (Items[i].getCells()[1].getSelectedKey() === "03") {
//                                         var BatchFlag = false;
//                                         if(Items[i].getCells()[6].getValue() === ""){
//                                             Items[i].getCells()[6].setValueState("Error");
//                                             var sErrorReqBatch03 =  that.getView().getModel("i18n").getProperty("sErrorReqBatch03");
//                                             Items[i].getCells()[6].setValueStateText(sErrorReqBatch03);                                 
//                                             errorMsg = sErrorReqBatch03; 
//                                             break;                                                      
//                                         }else{
//                                             if(Items[i].getCells()[3].getText() === Items[i].getCells()[6].getValue()){
//                                                 Items[i].getCells()[6].setValueState("Error");
//                                                 var sErrorDiffBatch =  that.getView().getModel("i18n").getProperty("sErrorDiffBatch");  
//                                                 Items[i].getCells()[6].setValueStateText(sErrorDiffBatch);                                       
//                                                 errorMsg = sErrorDiffBatch;
//                                                 break;  
//                                                }else{
//                                                 Items[i].getCells()[6].setValueState("None");
//                                                 BatchFlag = true;
//                                             }                               
//                                         }
        
//                                         if(BatchFlag === true){
//                                             var MaterialFlag = false;
//                                             if(Items[i].getCells()[7].getValue() === ""){
//                                                 Items[i].getCells()[7].setValueState("Error");
//                                                 var sErrorReqMaterial03 =  that.getView().getModel("i18n").getProperty("sErrorReqMaterial03"); 
//                                                 Items[i].getCells()[7].setValueStateText(sErrorReqMaterial03);                                     
//                                                 errorMsg = sErrorReqMaterial03;  
//                                                 break;                        
//                                             }else{
//                                                 if(Items[i].getCells()[4].getText() === Items[i].getCells()[7].getValue()){
//                                                     Items[i].getCells()[7].setValueState("Error");
//                                                     var sErrorDiffMaterial =  that.getView().getModel("i18n").getProperty("sErrorDiffMaterial");     
//                                                     Items[i].getCells()[7].setValueStateText(sErrorDiffMaterial);                             
//                                                     errorMsg = sErrorDiffMaterial;
//                                                     break;                           
//                                                 }else{
//                                                     Items[i].getCells()[7].setValueState("None");
//                                                     MaterialFlag = true;
//                                                 }                             
//                                             }
//                                         }
//                                         if(MaterialFlag === true){
//                                             if(Items[i].getCells()[8].getValue() === ""){
//                                                 Items[i].getCells()[8].setValueState("Error");
//                                                 var sErrorReqQuantity03 =  that.getView().getModel("i18n").getProperty("sErrorReqQuantity03");    
//                                                 Items[i].getCells()[8].setValueStateText(sErrorReqQuantity03);                                                
//                                                 errorMsg = sErrorReqQuantity03; 
//                                                 break;                     
//                                             }else{
//                                                 if(Items[i].getCells()[5].getText() === Items[i].getCells()[8].getValue()){
//                                                     Items[i].getCells()[8].setValueState("Error");
//                                                     var sErrorDiffQuantity =  that.getView().getModel("i18n").getProperty("sErrorDiffQuantity");  
//                                                     Items[i].getCells()[8].setValueStateText(sErrorDiffQuantity);                                                    
//                                                     errorMsg = sErrorDiffQuantity;   
//                                                     break;                   
//                                                 }else{
//                                                     Items[i].getCells()[8].setValueState("None");                                            
//                                                 }                                   
//                                             }
//                                         }                               
                                       
//                                     }  
//                                 }                                    					
//                         } else{
//                             if(FlagCheck === "Save"){
//                                 errorMsg = "";  
//                             }else{
//                                 errorMsg =  that.getView().getModel("i18n").getProperty("sErrorReqLineItems"); 

//                                 sap.m.MessageBox.show(
//                                     errorMsg, {
//                                         icon: sap.m.MessageBox.Icon.ERROR,
//                                         title: "Error"
//                                     });       
                                   
//                             } 
//                         }
//                         if(errorMsg !== ""){
//                             sap.m.MessageBox.show(
//                                 errorMsg, {
//                                     icon: sap.m.MessageBox.Icon.ERROR,
//                                     title: "Error"
//                                 });      
                         
//                                 Flag = false;
//                                 return Flag;
//                         }else{
//                             Flag = true;
//                             return Flag;
//                         }  
//                     }
//                 }  //end  
                
//             } 
            
            
           
//         },       
       
//         onSave:function(){
//             var that = this;
//             var Status = that .getView().getModel("CreateModel").getProperty("/Status");
//             var sConfirmMsg = that.getView().getModel("i18n").getProperty("sConfirmSaveMsg");  
//             sSuccessMsg = that.getView().getModel("i18n").getProperty("sSuccessSaveMsg");        
//             var sFlag = "S";
//             if( Status === "INITIAL" || Status === "DRAFT" || Status === "CANCELED" || Status === "REJECTED"){ 
//                 var FlagCheck = "Save";         

//                 if(that.onValidationCheck(FlagCheck)){
//                     that.onCallService(sConfirmMsg,sSuccessMsg,sFlag);
//                 }
//             }else{
//                 that.onCallService(sConfirmMsg,sSuccessMsg,sFlag);
//             }
//         },
//         onSubmit:function(){
//             var that = this;
//             var Status = that .getView().getModel("CreateModel").getProperty("/Status");
//             var sConfirmMsg = that.getView().getModel("i18n").getProperty("sConfirmSubmitMsg");
//             sSuccessMsg = that.getView().getModel("i18n").getProperty("sSuccessSubmitMsg");
//             var sFlag = "C";
//             if( Status === "INITIAL" || Status === "DRAFT"){
//                 var FlagCheck = "Submit";
//                 if(that.onValidationCheck(FlagCheck)){
//                     that.onCallService(sConfirmMsg,sSuccessMsg,sFlag);
//                 }
//             }else{
//                 that.onCallService(sConfirmMsg,sSuccessMsg,sFlag);
//             }
        
//         },
//         onCancel:function(){
//             var that = this;
//             var sConfirmMsg = that.getView().getModel("i18n").getProperty("sConfirmCancelMsg");
//             sSuccessMsg = that.getView().getModel("i18n").getProperty("sSuccessCancelMsg");
//             var sFlag = "E";
//             that.onCallService(sConfirmMsg,sSuccessMsg,sFlag);
//         },
//         onResubmit:function(){
//             var that = this;
//             var sConfirmMsg = that.getView().getModel("i18n").getProperty("sConfirmResubmitMsg");
//             sSuccessMsg = that.getView().getModel("i18n").getProperty("sSuccessResubmitMsg");   
//             var sFlag = "R";
//             if(that.onValidationCheck()){
//                 that.onCallService(sConfirmMsg,sSuccessMsg,sFlag);
//             }
//          },
//          onCallService:function(sConfirmMsg,sSuccessMsg,sFlag){  
//             var that = this;
//             var SubUser,SubDate,SubTime;      
//             var DateTime = that.realDateTimeClockBrowser();
//             var FinalDateTime = DateTime.split(" ");         

//             var sConfirmTitle = that.getView().getModel("i18n").getProperty("sConfirmTitle");
//             MessageBox.show(
//                 sConfirmMsg, {
//                     icon: MessageBox.Icon.INFORMATION,
//                     title: sConfirmTitle,
//                     actions: [MessageBox.Action.YES, MessageBox.Action.NO],
//                     onClose: function (oAction) {
//                         if (oAction === "YES") {                    
                                
//                             that.fnCreateBusyDialog("pallet.svg", "true");              

//                             if(that.View === "Create"){
//                                 var ItemArray = [];
//                                 var ItemData = that.getView().getModel("CreateModel").getData().Items;
//                                 for(var i=0;i<ItemData.length;i++){
//                                     var ItemObj = {
//                                         "Chepref" : that.getView().getModel("CreateModel").getData().BOL.toString(),
//                                         "Corid" : "",
//                                         "Werks" : that.getView().getModel("CreateModel").getData().Plant.toString(),
//                                         "Posnr" : ItemData[i].No.toString(),
//                                         "Reason" : ItemData[i].Reason,
//                                         "Vbeln" : that.getView().getModel("CreateModel").getData().BOL,
//                                         "PosnrVa" : ItemData[i].ItemNo.toString(),
//                                         "Matnr" : ItemData[i].OldMaterial.toString(),
//                                         "Charg" : ItemData[i].OldBatch.toString(),
//                                         "Lgort" : "",
//                                         "Quantity" : ItemData[i].OldQuantity.toString(),
//                                         "ChangedBy" : "",
//                                         "ChangedOn" : "",
//                                         "ChangedAt" : "",
//                                         "Comments" : ItemData[i].Comments,
//                                         "Uecha" : "",
//                                         "Xcharg" : ItemData[i].NewBatch.toString(),
//                                         "Xlgort" : "",
//                                         "Xmatnr" : ItemData[i].NewMaterial.toString(),
//                                         "Xquantity" : ItemData[i].NewQuantity.toString()
//                                     };
//                                     ItemArray.push(ItemObj);
    
//                                 }
//                                 if(sFlag === "C"){
//                                     SubUser = jQuery.sap.storage(jQuery.sap.storage.Type.local).get("UserName");
//                                     SubDate = FinalDateTime[0];
//                                     SubTime = FinalDateTime[1];
//                                 }else{
//                                     SubUser = "";
//                                     SubDate = "";
//                                     SubTime = ""; 
//                                 }
//                                 var obj = {
//                                     "Corid" : "",
//                                     "Flagx" : sFlag,
//                                     "Bukrs" : "",
//                                     "Cortype" : "BOL",
//                                     "Werks" : that.getView().getModel("CreateModel").getData().Plant,
//                                     "Shift" : that.getView().getModel("CreateModel").getData().Shift,
//                                     "Actdat" : that.onChangeDateFormat(that.getView().getModel("CreateModel").getData().ActDate),
//                                     "Status" : that.getView().getModel("CreateModel").getData().Status,
//                                     "Logdat" : "",
//                                     "Logtim" : "",
//                                     "Erdat" : "",
//                                     "Erzet" : "",
//                                     "Ernam" : "",
//                                     "Accmonth" : "",
//                                     "Subdat" : SubDate,
//                                     "Subtim" : SubTime,
//                                     "Subnam" : SubUser,
//                                     "EaprnamRep" : "",
//                                     "AprdatRep" : "",
//                                     "AprtimRep" : "",
//                                     "AprnamRep" : "",
//                                     "EaprnamTm" : "",
//                                     "AprdatTm" : "",
//                                     "AprtimTm" : "",
//                                     "AprnamTm" : "",
//                                     "Rejdat" : "",
//                                     "Rejtim" : "",
//                                     "Rejnam" : "",
//                                     "Rejreason" : "",
//                                     "Flag" : false,
//                                     "Prodat" : "",
//                                     "Protim" : "",
//                                     "Pronam" : "",
//                                     "Vbeln" : "",
//                                     "Ebeln" : "",
//                                     "Mblnr" : "",
//                                     "Mjahr" : "",
//                                     "Evntcd" : "",
//                                     "Rblnr" : "",
//                                     "Rjahr" : "",
//                                     "Nblnr" : "",
//                                     "Njahr" : "",
//                                     "Reason" :  that.getView().getModel("CreateModel").getData().Reason,
//                                     "VbelnH" : "",
//                                     "Chepref" :  that.getView().getModel("CreateModel").getData().BOL,
//                                     "Bolnr" :  that.getView().getModel("CreateModel").getData().OldScac,
//                                     "BolnrN" :  that.getView().getModel("CreateModel").getData().NewScac,
//                                     "Xabln" :  that.getView().getModel("CreateModel").getData().OldTrailer,
//                                     "XablnN" :  that.getView().getModel("CreateModel").getData().NewTrailer,
//                                     "Kunnr" :  that.getView().getModel("CreateModel").getData().OldGlid,
//                                     "KunnrN" :  that.getView().getModel("CreateModel").getData().NewGlid,
//                                     "Lfdat" :  that.onChangeDateFormat(that.getView().getModel("CreateModel").getData().OldDate),
//                                     "LfdatN" :  that.onChangeDateFormat(that.getView().getModel("CreateModel").getData().NewDate),
//                                     "ChangedBy" : "",
//                                     "ChangedOn" : "",
//                                     "ChangedAt" : "",
//                                     "Comments" : "",
//                                     "Lfart" : "",
//                                     "BolItemMasterSet" : ItemArray    
//                             };

//                             }else{
//                                 var ItemArray = [];
//                                 var ItemData = that.getView().getModel("CreateModel").getData().Items;
//                                 for(var i=0;i<ItemData.length;i++){
//                                     var ItemObj = {
//                                         "Chepref" : that.getView().getModel("CreateModel").getData().BOL.toString(),
//                                         "Corid" : that.CorrectionId.toString(),
//                                         "Werks" : that.getView().getModel("CreateModel").getData().Plant.toString(),
//                                         "Posnr" : ItemData[i].No.toString(),
//                                         "Reason" : ItemData[i].Reason,
//                                         "Vbeln" : that.getView().getModel("CreateModel").getData().BOL.toString(),
//                                         "PosnrVa" : ItemData[i].ItemNo.toString(),
//                                         "Matnr" : ItemData[i].OldMaterial.toString(),
//                                         "Charg" : ItemData[i].OldBatch.toString(),
//                                         "Lgort" : "",
//                                         "Quantity" : ItemData[i].OldQuantity.toString(),
//                                         "ChangedBy" : "",
//                                         "ChangedOn" : "",
//                                         "ChangedAt" : "",
//                                         "Comments" : ItemData[i].Comments,
//                                         "Uecha" : "",
//                                         "Xcharg" : ItemData[i].NewBatch.toString(),
//                                         "Xlgort" : "",
//                                         "Xmatnr" : ItemData[i].NewMaterial.toString(),
//                                         "Xquantity" : ItemData[i].NewQuantity.toString()
//                                     };
//                                     ItemArray.push(ItemObj);        
//                                 }

//                                 if(sFlag === "C" || sFlag === "R"){
//                                     SubUser = jQuery.sap.storage(jQuery.sap.storage.Type.local).get("UserName");
//                                     SubDate = FinalDateTime[0];
//                                     SubTime = FinalDateTime[1];
//                                 }else{
//                                     SubUser = that.getView().getModel("DisplayModel").getData().Subnam;
//                                     SubDate = that.getView().getModel("DisplayModel").getData().Subdat;
//                                     SubTime = that.getView().getModel("DisplayModel").getData().Subtim; 
//                                 }

//                                 var obj = {
//                                     "Corid" : that.CorrectionId,
//                                     "Flagx" : sFlag,
//                                     "Bukrs" : that.getView().getModel("DisplayModel").getData().Bukrs,
//                                     "Cortype" : that.getView().getModel("CreateModel").getData().CorrectionType,
//                                     "Werks" : that.getView().getModel("CreateModel").getData().Plant,
//                                     "Shift" : that.getView().getModel("CreateModel").getData().Shift,
//                                     "Actdat" : that.onChangeDateFormat(that.getView().getModel("CreateModel").getData().ActDate),
//                                     "Status" : that.getView().getModel("CreateModel").getData().Status,
//                                     "Logdat" : that.getView().getModel("DisplayModel").getData().Logdat,
//                                     "Logtim" : that.getView().getModel("DisplayModel").getData().Logtim,
//                                     "Erdat" : that.getView().getModel("DisplayModel").getData().Erdat,
//                                     "Erzet" : that.getView().getModel("DisplayModel").getData().Erzet,
//                                     "Ernam" : that.getView().getModel("DisplayModel").getData().Ernam,
//                                     "Accmonth" : that.getView().getModel("DisplayModel").getData().Accmonth,
//                                     "Subdat" : SubDate,
//                                     "Subtim" : SubTime,
//                                     "Subnam" : SubUser,
//                                     "EaprnamRep" : that.getView().getModel("DisplayModel").getData().EaprnamRep,
//                                     "AprdatRep" : that.getView().getModel("DisplayModel").getData().AprdatRep,
//                                     "AprtimRep" : that.getView().getModel("DisplayModel").getData().AprtimRep,
//                                     "AprnamRep" : that.getView().getModel("DisplayModel").getData().AprnamRep,
//                                     "EaprnamTm" : that.getView().getModel("DisplayModel").getData().EaprnamTm,
//                                     "AprdatTm" : that.getView().getModel("DisplayModel").getData().AprdatTm,
//                                     "AprtimTm" : that.getView().getModel("DisplayModel").getData().AprtimTm,
//                                     "AprnamTm" : that.getView().getModel("DisplayModel").getData().AprnamTm,
//                                     "Rejdat" : that.getView().getModel("DisplayModel").getData().Rejdat,
//                                     "Rejtim" : that.getView().getModel("DisplayModel").getData().Rejtim,
//                                     "Rejnam" : that.getView().getModel("DisplayModel").getData().Rejnam,
//                                     "Rejreason" : that.getView().getModel("DisplayModel").getData().Rejreason,
//                                     "Flag" : that.getView().getModel("DisplayModel").getData().Flag,
//                                     "Prodat" : that.getView().getModel("DisplayModel").getData().Prodat,
//                                     "Protim" : that.getView().getModel("DisplayModel").getData().Protim,
//                                     "Pronam" : that.getView().getModel("DisplayModel").getData().Pronam,
//                                     "Vbeln" : that.getView().getModel("DisplayModel").getData().Vbeln,
//                                     "Ebeln" : that.getView().getModel("DisplayModel").getData().Ebeln,
//                                     "Mblnr" : that.getView().getModel("DisplayModel").getData().Mblnr,
//                                     "Mjahr" : that.getView().getModel("DisplayModel").getData().Mjahr,
//                                     "Evntcd" : that.getView().getModel("DisplayModel").getData().Evntcd,
//                                     "Rblnr" : that.getView().getModel("DisplayModel").getData().Rblnr,
//                                     "Rjahr" : that.getView().getModel("DisplayModel").getData().Rjahr,
//                                     "Nblnr" : that.getView().getModel("DisplayModel").getData().Nblnr,
//                                     "Njahr" : that.getView().getModel("DisplayModel").getData().Njahr,
//                                     "Reason" :  that.getView().getModel("CreateModel").getData().Reason,
//                                     "VbelnH" : that.getView().getModel("DisplayModel").getData().Cortype,
//                                     "Chepref" :  that.getView().getModel("CreateModel").getData().BOL,
//                                     "Bolnr" :  that.getView().getModel("CreateModel").getData().OldScac,
//                                     "BolnrN" :  that.getView().getModel("CreateModel").getData().NewScac,
//                                     "Xabln" :  that.getView().getModel("CreateModel").getData().OldTrailer,
//                                     "XablnN" :  that.getView().getModel("CreateModel").getData().NewTrailer,
//                                     "Kunnr" :  that.getView().getModel("CreateModel").getData().OldGlid,
//                                     "KunnrN" :  that.getView().getModel("CreateModel").getData().NewGlid,
//                                     "Lfdat" :  that.onChangeDateFormat(that.getView().getModel("CreateModel").getData().OldDate),
//                                     "LfdatN" :  that.onChangeDateFormat(that.getView().getModel("CreateModel").getData().NewDate),
//                                     "ChangedBy" : that.getView().getModel("DisplayModel").getData().ChangedBy,
//                                     "ChangedOn" : that.getView().getModel("DisplayModel").getData().ChangedOn,
//                                     "ChangedAt" : that.getView().getModel("DisplayModel").getData().ChangedAt,
//                                     "Comments" : that.getView().getModel("DisplayModel").getData().Comments,
//                                     "Lfart" : that.getView().getModel("DisplayModel").getData().Lfart,
//                                     "BolItemMasterSet" : ItemArray    
//                             };

//                             }
                  

//                             that.getOwnerComponent().getModel("BOLModel").create("/BolOverviewSet", obj, {
//                                 success: function (oData, oResponse) {
//                                     if (oResponse.statusCode === 201 || oResponse.statusCode === "201") {
                                                                           
//                                         var No =  oResponse.data.Corid;                                      

//                                         if (No) {
//                                             if (that._uploadCollection.getItems().length !== 0) {
//                                                 that.CorrectionId = No;
//                                                 if(that._uploadCollection.getItems().length > oViewThis){
//                                                     that.onStartUpload(that._uploadCollection);
//                                                 }else{
//                                                     that.fnCreateBusyDialog("pallet.svg", "false");
//                                                     oViewThis = 0;
//                                                     var sSaveMsg = "Correction Id :"+" "+No+" "+sSuccessMsg;
//                                                     var sSaveTitle = that.getView().getModel("i18n").getProperty("sSuccessTitle");
                                                 
//                                                     MessageBox.show(
//                                                         sSaveMsg, {
//                                                             icon: MessageBox.Icon.SUCCESS,
//                                                             title: sSaveTitle,
//                                                             actions: [MessageBox.Action.OK],
//                                                             onClose: function (oAction) {
//                                                                 if (oAction === "OK") {
//                                                                     var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
//                                                                     oRouter.navTo("worklist"); 
//                                                                 }
//                                                             }
//                                                         });   
//                                                 }                                            
                                              
//                                             }else{
//                                                 that.fnCreateBusyDialog("pallet.svg", "false");
//                                                 oViewThis = 0;
//                                                 var sSaveMsg = "Correction Id :"+" "+No+" "+sSuccessMsg;
//                                                 var sSaveTitle = that.getView().getModel("i18n").getProperty("sSuccessTitle"); 
                                            
//                                                 MessageBox.show(
//                                                     sSaveMsg, {
//                                                         icon: MessageBox.Icon.SUCCESS,
//                                                         title: sSaveTitle,
//                                                         actions: [MessageBox.Action.OK],
//                                                         onClose: function (oAction) {
//                                                             if (oAction === "OK") {
//                                                                 var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
//                                                                 oRouter.navTo("worklist"); 
//                                                             }
//                                                         }
//                                                     });    

//                                             }                                            

//                                         } 
                                         
//                                     }                                    
//                                 },
//                                 error: function (oError) {
                                     
//                                     that.fnCreateBusyDialog("pallet.svg", "false");                             
                               
//                                     var oMessage;
//                                     if (oMessage === undefined) {
//                                         oMessage = JSON.parse(oError.responseText).error.message.value;
//                                     }
//                                     sap.m.MessageBox.show(
//                                         oMessage, {
//                                             icon: sap.m.MessageBox.Icon.ERROR,
//                                             title: "Error"
//                                         });               
//                                 }
//                             });
//                         }
//                     }
//                 }
//             );

//          },
        
           
//         onDelete: function (oEvent) {
//             var that = this;    
//             var idx = parseInt(oEvent.getSource().getBindingContext("CreateModel").getPath().split("/")[2], 0);
//             var oModel = that.getView().getModel("CreateModel");
//             var oData = oModel.getData();
//             oData.Items.splice(idx, 1);
//             oModel.setData(oData)
//             oModel.refresh(true);
//         },  

//         //Attachments 
    
//         onBeforeUploadStarts: function (oEvent) {
// 			// Header Slug
// 			var that = this;  

// 			//var oModelNew = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZGW_JAVA_GUI_ZPC_BOL_SRV/");
//             var oModelNew = that.getOwnerComponent().getModel("BOLModel");
//             var sectoken = oModelNew.getSecurityToken();
// 			var oCustomerHeaderToken = new sap.m.UploadCollectionParameter({
// 				name: "x-csrf-token",
// 				value: sectoken
// 			});
// 			oEvent.getParameters().addHeaderParameter(oCustomerHeaderToken);
// 			// get the selected component and line item number
// 			var FileNameMatDesc;
// 			// FileNameMatDesc = oEvent.getParameter("fileName") + "||" + this._cparNum + "||";
// 			FileNameMatDesc = that.CorrectionId + "/" + oEvent.getParameter("fileName");

// 			var oCustomerHeaderSlug = new sap.m.UploadCollectionParameter({
// 				name: "slug",
// 				value: FileNameMatDesc
// 			});
// 			oEvent.getParameters().addHeaderParameter(oCustomerHeaderSlug);
         
// 		},
// 		// onUploadComplete: function (oEvent) {
// 		// 	var oUploadCollection = this._uploadCollection;
// 		// 	oUploadCollection.removeAllItems();
// 		// },
//         onUploadComplete: function (oEvent) {            
//             var that = this;          

//             if (oEvent.getParameters().getParameters().status === 201 || oEvent.getParameters().getParameters().status === "201" ) {
//                 that.fnCreateBusyDialog("pallet.svg", "false");         

//                 var oUploadCollection = this._uploadCollection;
//                 if (oUploadCollection !== undefined) {
//                     oUploadCollection.removeAllItems();
//                 }

//                 var sCorrectionIDSuccess = that.getView().getModel("i18n").getProperty('sCorrectionIDSuccess');
//                 var sSaveMsg = sCorrectionIDSuccess.replace("{correctionID}", that.CorrectionId);

//                 var sFinalSaveMsg = sSaveMsg + " " + sSuccessMsg;

//                 var sSuccessTitle = that.getView().getModel("i18n").getProperty('sSuccessTitle');
//                 oViewThis = 0;

//                 MessageBox.show(
//                     sFinalSaveMsg, {
//                     icon: MessageBox.Icon.SUCCESS,
//                     title: sSuccessTitle,
//                     actions: [MessageBox.Action.OK],
//                     onClose: function (oAction) {
//                         if (oAction === "OK") {
//                             var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
//                             oRouter.navTo("worklist");
//                         }
//                     }
//                 });
//             } else {
//                 that.fnCreateBusyDialog("pallet.svg", "false");         
//                 // var oErrorAttachment = oEvent.getParameters().getParameters("ResponseRaw").ResponseRaw;
//                 var oErrorAttachment = that.getView().getModel("i18n").getProperty('oErrorAttachment');
//                 MessageBox.error(oErrorAttachment);
//             }          

//         },
// 		onStartUpload: function (uploadCollection) {
// 			var oUploadCollection = uploadCollection;
// 			oUploadCollection.upload();
// 		},
//         onAttachmentData: function (CorrectionId) {
// 			var that = this;
//             var resourcemodel = that.getOwnerComponent().getModel("BOLModel");
//             var Attachmenturl = resourcemodel.sServiceUrl + "/AttachmentSet";

//             var oItemTemplate = new sap.m.UploadCollectionItem({
// 				fileName: "{Filename}",
// 				documentId: "{documentId}",
// 				url: Attachmenturl+"(Corid='{Corid}',Filename='{Filename}')/$value",
// 				contributor: "{contributor}",
// 				uploadedDate: "{uploadedDate}",
// 				enableEdit: true,
// 				enableDelete: false,
// 				visibleDelete: false,
// 				visibleEdit: true
// 			});          

// 			var JModel = new sap.ui.model.json.JSONModel();          
// 			var afilter = [];
// 			var ofilter2 = new sap.ui.model.Filter("Corid", sap.ui.model.FilterOperator.EQ, CorrectionId);
// 			afilter.push(ofilter2);		

//             var oUploadCollection = this._uploadCollection;
//             if (oUploadCollection !== undefined) {
//                 oUploadCollection.removeAllItems();
//             }
//             oViewThis = 0;

//             that.fnCreateBusyDialog("pallet.svg", "true");

//             that.getOwnerComponent().getModel("BOLModel").read("/AttachmentSet", {
// 				filters: afilter,
// 				success: function (oData, oResponse) {

// 					if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {                  
				
// 					JModel.setData(oData);
// 					that.getView().byId("Attachment").unbindItems();
// 					that.getView().byId("Attachment").setModel(JModel);
// 					that.getView().byId("Attachment").bindItems({
// 						path: "/results",
// 						template: oItemTemplate
// 					});
// 					}
//                     oViewThis = oData.results.length;
               
//                     that.fnCreateBusyDialog("pallet.svg", "false");

// 				},
// 				error: function (oError) {
               
//                     that.fnCreateBusyDialog("pallet.svg", "false");
//                     oViewThis = 0;
// 					var oMessage;
// 					if (oMessage === undefined) {
// 						oMessage = JSON.parse(oError.responseText).error.message.value;
// 					}
// 					sap.m.MessageBox.show(
// 						oMessage, {
// 							icon: sap.m.MessageBox.Icon.ERROR,
// 							title: "Error"
// 						});

// 				}
// 			});

// 		},  


//         // Batch Value Help
// 		_getBatchDialog: function () {
// 			var that = this;
// 			var oView = that.getView();
// 			if (!that.dialog1) {
// 				that.dialog1 = sap.ui.xmlfragment("com.bol.zespbol.fragments.Batch", that);
// 			}
// 			oView.addDependent(that.dialog1);
// 			return that.dialog1;
// 		},
// 		onBatchCancel: function () {
// 			var that = this;
// 			that._getBatchDialog().close();
// 		},
// 		onBatchUpdateFinished: function () {
// 			sap.ui.getCore().byId("BatchTableID").removeSelections(true);
// 		},
// 		onBatchValueHelpRequest: function (oEvent) {
// 			var that = this;		
//             Batchfinalindex = oEvent.getSource().getParent().getParent().indexOfItem(oEvent.getSource().getParent());			
// 			var SelPlant = that.getView().getModel("CreateModel").getProperty("/Plant")
		
// 			var FilterArray = [];
// 			var Filter1 = new Filter("Werks", FilterOperator.EQ, SelPlant);
// 			FilterArray.push(Filter1);
//             var Filter2 = new Filter("Charg", FilterOperator.EQ, "");	
// 			FilterArray.push(Filter2);
// 			that.onBatchServicecall(FilterArray, "VH");
		
// 		},
// 		onBatchServicecall: function (Filter, ValueHelp) {
// 			var that = this;
// 			var oBusyDialog = new sap.m.BusyDialog({});
// 			oBusyDialog.open();

// 			that.getOwnerComponent().getModel("BOLModel").read("/BatchOverviewListSet", {
// 				filters: Filter,
// 				success: function (oData, oResponse) {

// 					if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {
// 						oBusyDialog.close();					

// 						var oBatchModel = new sap.ui.model.json.JSONModel(oData);
// 						oBatchModel.setSizeLimit(oData.results.length);
// 						that.getView().setModel(oBatchModel, "BatchModel");

//                         if(ValueHelp === "VH"){
//                         that._getBatchDialog().open();
//                         sap.ui.getCore().byId("BatchSearchId").setValue();
//                         }						
					
// 					}

// 				},
// 				error: function (oError) {
// 					oBusyDialog.close();
// 					var oMessage;
// 					if (oMessage === undefined) {
// 						oMessage = JSON.parse(oError.responseText).error.message.value;
// 					}
// 					sap.m.MessageBox.show(
// 						oMessage, {
// 							icon: sap.m.MessageBox.Icon.ERROR,
// 							title: "Error"
// 						});

// 				}
// 			});

// 		},
// 		onBatchChange: function (oEvent) {
// 			var that = this;
// 			that._getBatchDialog().close();
// 			var oTable = sap.ui.getCore().byId("BatchTableID").getSelectedItems();
// 			if (oTable.length !== 0) {
// 				var item1 = oTable[0];
// 				var cells = item1.getCells();
// 				var Batch = cells[0].getText();
// 			}
			
// 			var SelModel = that.getView().getModel("CreateModel");
// 			var SelData = SelModel.getData();
// 			SelData.Items[Batchfinalindex].NewBatch = Batch;
// 			SelModel.setData(SelData);
// 			SelModel.updateBindings(true);
// 			SelModel.refresh(true);
// 		},
// 		onBatchSearch: function (oEvent) {
// 			var that = this;
// 			var sValue = oEvent.getSource().getProperty("value").toUpperCase();
// 			var Plant = that.getView().getModel("CreateModel").getProperty("/Plant");
// 			var FilterArray = [];
//             var Filter1 = new Filter("Werks", FilterOperator.EQ, Plant);	
// 			FilterArray.push(Filter1);
// 			var Filter2 = new Filter("Charg", FilterOperator.EQ, sValue);	
// 			FilterArray.push(Filter2);

// 			that.onBatchServicecall(FilterArray, "");
// 		},

//         // Material Value Help
// 		_getMaterialDialog: function () {
// 			var that = this;
// 			var oView = that.getView();
// 			if (!that.dialog2) {
// 				that.dialog2 = sap.ui.xmlfragment("com.bol.zespbol.fragments.Material", that);
// 			}
// 			oView.addDependent(that.dialog2);
// 			return that.dialog2;
// 		},
// 		onMaterialCancel: function () {
// 			var that = this;
// 			that._getMaterialDialog().close();
// 		},
// 		onMaterialUpdateFinished: function () {
// 			sap.ui.getCore().byId("MaterialTableID").removeSelections(true);
// 		},
// 		onMaterialValueHelpRequest: function (oEvent) {
// 			var that = this;		
//             Materialfinalindex = oEvent.getSource().getParent().getParent().indexOfItem(oEvent.getSource().getParent());	
// 			var SelModel = that.getView().getModel("CreateModel");
// 			var SelData = SelModel.getData();
// 			var SelPlant = that.getView().getModel("CreateModel").getProperty("/Plant");
//             var SelBatch = SelData.Items[Materialfinalindex].NewBatch;     
		
// 			var FilterArray = [];
// 			var Filter1 = new Filter("Werks", FilterOperator.EQ, SelPlant);
// 			FilterArray.push(Filter1);
//             var Filter2 = new Filter("Charg", FilterOperator.EQ, SelBatch);
// 			FilterArray.push(Filter2);
//             var Filter3 = new Filter("Matnr", FilterOperator.EQ, "");
// 			FilterArray.push(Filter3);
// 			that.onMaterialServicecall(FilterArray, "VH");         
		
// 		},
// 		onMaterialServicecall: function (Filter, ValueHelp) {
// 			var that = this;
// 			var oBusyDialog = new sap.m.BusyDialog({});
// 			oBusyDialog.open();

// 			that.getOwnerComponent().getModel("BOLModel").read("/MaterialOverviewListSet", {
// 				filters: Filter,
// 				success: function (oData, oResponse) {

// 					if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {
// 						oBusyDialog.close();					

// 						var oMaterialModel = new sap.ui.model.json.JSONModel(oData);
// 						oMaterialModel.setSizeLimit(oData.results.length);
// 						that.getView().setModel(oMaterialModel, "MaterialModel");
						
//                         if(ValueHelp === "VH"){
//                         that._getMaterialDialog().open();
//                         sap.ui.getCore().byId("MaterialSearchId").setValue();
//                         }
					
// 					}

// 				},
// 				error: function (oError) {
// 					oBusyDialog.close();
// 					var oMessage;
// 					if (oMessage === undefined) {
// 						oMessage = JSON.parse(oError.responseText).error.message.value;
// 					}
// 					sap.m.MessageBox.show(
// 						oMessage, {
// 							icon: sap.m.MessageBox.Icon.ERROR,
// 							title: "Error"
// 						});

// 				}
// 			});

// 		},
// 		onMaterialChange: function (oEvent) {
// 			var that = this;
// 			that._getMaterialDialog().close();
// 			var oTable = sap.ui.getCore().byId("MaterialTableID").getSelectedItems();
// 			if (oTable.length !== 0) {
// 				var item1 = oTable[0];
// 				var cells = item1.getCells();
// 				var Material = cells[0].getText();
// 			}
			
// 			var SelModel = that.getView().getModel("CreateModel");
// 			var SelData = SelModel.getData();
// 			SelData.Items[Materialfinalindex].NewMaterial = Material;
// 			SelModel.setData(SelData);
// 			SelModel.updateBindings(true);
// 			SelModel.refresh(true);
// 		},
// 		onMaterialSearch: function (oEvent) {
// 			var that = this;
// 			var sValue = oEvent.getSource().getProperty("value").toUpperCase();
// 			var Plant = that.getView().getModel("CreateModel").getProperty("/Plant");       
//             var SelModel = that.getView().getModel("CreateModel");
// 			var SelData = SelModel.getData();		
//             var SelBatch = SelData.Items[Materialfinalindex].NewBatch;

// 			var FilterArray = [];
//             var Filter1 = new Filter("Werks", FilterOperator.EQ, Plant);	
// 			FilterArray.push(Filter1);
// 			var Filter2 = new Filter("Charg", FilterOperator.EQ, SelBatch);	
// 			FilterArray.push(Filter2);
//             var Filter3 = new Filter("Matnr", FilterOperator.EQ, sValue);	
// 			FilterArray.push(Filter3);

// 			that.onMaterialServicecall(FilterArray, "");
// 		},


//     // Plant Value Help
// 		getPlantDialog: function () {
// 			var that = this;
// 			var oView = that.getView();
// 			if (!that.dialog3) {
// 				that.dialog3 = sap.ui.xmlfragment("com.bol.zespbol.fragments.Plant", that);
// 			}
// 			oView.addDependent(that.dialog3);
// 			return that.dialog3;
// 		},
// 		onPlantValueHelpRequest: function (oEvent) {
// 			var that = this;
//             var UserName = jQuery.sap.storage(jQuery.sap.storage.Type.local).get("UserName");
//             var oFilter = [];
//             var Filter1 = new sap.ui.model.Filter("User", sap.ui.model.FilterOperator.EQ, UserName);
//             oFilter.push(Filter1);
// 			var Filter2 = new Filter("Werks", FilterOperator.EQ, "");
//             oFilter.push(Filter2);
// 			that.onPlantServicecall([oFilter], "VH");
// 		},
// 		onPlantServicecall: function (Filter, ValueHelp) {
// 			var that = this;
// 			var oBusyDialog = new sap.m.BusyDialog({});
// 			oBusyDialog.open();

// 			that.getOwnerComponent().getModel("BOLModel").read("/PlantSet", {
// 				filters: Filter,
// 				success: function (oData, oResponse) {

// 					if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {
// 						oBusyDialog.close();

// 						var oPlantModel = new sap.ui.model.json.JSONModel(oData);
// 						oPlantModel.setSizeLimit(oData.results.length);
// 						that.getView().setModel(oPlantModel, "PlantModel");
// 						if (ValueHelp === "VH") {
// 							that.getPlantDialog().open();
// 						}
// 					}

// 				},
// 				error: function (oError) {
// 					oBusyDialog.close();
// 					var oMessage;
// 					if (oMessage === undefined) {
// 						oMessage = JSON.parse(oError.responseText).error.message.value;
// 					}
// 					sap.m.MessageBox.show(
// 						oMessage, {
// 							icon: sap.m.MessageBox.Icon.ERROR,
// 							title: "Error"
// 						});

// 				}
// 			});

// 		},
// 		onPlantSearch: function (oEvent) {
// 			var that = this;
// 			var sValue = oEvent.getParameters("query").query.toUpperCase();		
//             var UserName = jQuery.sap.storage(jQuery.sap.storage.Type.local).get("UserName");
//             var oFilter = [];
//             var Filter1 = new sap.ui.model.Filter("User", sap.ui.model.FilterOperator.EQ, UserName);
//             oFilter.push(Filter1);
// 			var Filter2 = new Filter("Werks", FilterOperator.EQ, sValue);
//             oFilter.push(Filter2);
// 			that.onPlantServicecall(oFilter, "");
// 		},
// 		onPlantCancel: function () {
// 			var that = this;
// 			that.getPlantDialog().close();
// 		},
// 		// onPlantSuggest: function (oEvent) {
// 		// 	var that = this;
// 		// 	var sValue = oEvent.getParameter("suggestValue").toUpperCase();
//         //     var UserName = jQuery.sap.storage(jQuery.sap.storage.Type.local).get("UserName");
//         //     var oFilter = [];
//         //     var Filter1 = new sap.ui.model.Filter("User", sap.ui.model.FilterOperator.EQ, UserName);
//         //     oFilter.push(Filter1);
// 		// 	var Filter2 = new Filter("Werks", FilterOperator.EQ, sValue);
//         //     oFilter.push(Filter2);			
// 		// 	that.getOwnerComponent().getModel("BOLModel").read("/PlantSet", {
// 		// 		filters: oFilter,
// 		// 		success: function (oData, oResponse) {

// 		// 			if (oResponse.statusCode === 200 || oResponse.statusCode === "200") {

// 		// 				var oPlantSuggestModel = new sap.ui.model.json.JSONModel(oData);
// 		// 				oPlantSuggestModel.setSizeLimit(oData.results.length);
// 		// 				that.getView().setModel(oPlantSuggestModel, "PlantSuggestModel");
// 		// 			}

// 		// 		},
// 		// 		error: function (oError) {
// 		// 			var oMessage;
// 		// 			if (oMessage === undefined) {
// 		// 				oMessage = JSON.parse(oError.responseText).error.message.value;
// 		// 			}
// 		// 			sap.m.MessageBox.show(
// 		// 				oMessage, {
// 		// 					icon: sap.m.MessageBox.Icon.ERROR,
// 		// 					title: "Error"
// 		// 				});

// 		// 		}
// 		// 	});
// 		// },
// 		onPlantClose: function () {
// 			var that = this;
// 			that.dialog3.destroy();
// 			that.dialog3 = null;
// 		},
// 		// onPlantSuggestSelected: function (oEvent) {
// 		// 	var that = this;
// 		// 	var SelPlant = oEvent.getParameter("selectedItem").getProperty("text").toUpperCase();
// 		// 	that.getView().getModel("CreateModel").setProperty("/Plant", SelPlant);
// 		// },
// 		onPlantSelChange: function (oEvent) {
// 			var that = this;
// 			that.getPlantDialog().close();
// 			var SelPlant = oEvent.getSource().getSelectedItem().getBindingContext("PlantModel").getObject().Werks.toUpperCase();
// 			that.getView().getModel("CreateModel").setProperty("/Plant", SelPlant);

//             var Plant = SelPlant;
//             jQuery.sap.storage(jQuery.sap.storage.Type.local).put("AssignedPlant",Plant);
//             var Shift = that.getView().getModel("CreateModel").getProperty("/Shift");
//             var Actdat = that.onChangeDateFormat(that.getView().getModel("CreateModel").getProperty("/ActDate"));
//             var Reason = that.getView().getModel("CreateModel").getProperty("/Reason");
//             var BOL = that.getView().getModel("CreateModel").getProperty("/BOL");

//             if(Plant !== "" && Shift !== "" && Actdat !== "" && Reason !== "" && BOL !== ""){
//                 that.BOLServiceCall(Shift,Plant,Actdat,Reason,BOL);
//             }  

// 		}
        
 

//     });

// });
